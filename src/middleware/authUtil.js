/**
 * 认证通用工具,token只允许使用一次
 * 参考资源：https://github.com/auth0/node-jsonwebtoken
 */
import uuid from 'uuid';
import JWT from 'jsonwebtoken';
import RedisUtil from './redisUtil';
class AuthUtil {

    constructor(){
        //临时使用，后面会读取磁盘上的私钥
        this.cert = '566c045b-cfb4-4f22-a171-53051b2c9094';
        this.secretOrPrivateKey = '566c045b-cfb4-4f22-a171-53051b2c9094';
        this.secretOrPublicKey = '566c045b-cfb4-4f22-a171-53051b2c9094';
        this.options = { algorithm: 'HS256',
                         keyid: '1', 
                         noTimestamp: false,
                        };
    }
    sign(payload, signOptions){
        const jwtSignOptions = Object.assign({}, signOptions, this.options);
        return JWT.sign(payload, this.secretOrPrivateKey, jwtSignOptions);
    }

    refresh(token, refreshOptions){
        const payload = JWT.verify(token, this.secretOrPublicKey, refreshOptions.verify);
        delete payload.iat;
        delete payload.exp;
        delete payload.nbf;
        delete payload.jti;
        const jwtSignOptions = Object.assign({ }, this.options, { jwtid: refreshOptions.jwtid });
        return JWT.sign(payload, this.secretOrPrivateKey, jwtSignOptions);
    }

     updateTokenToRedis(redisKey, token,expires){
        RedisUtil.set(redisKey,token,expires);
    }

    /**
     * 从redis中获取token
     * @param {String} uniqueId 
     */
    async getTokenFromRedis(uniqueId){
        const token = await RedisUtil.get(uniqueId);
        return token;
    }

    

    /**
     * 用签名算法HS256和私钥key生成token
     * @param {*} uniqueId 用户非敏感信息
     * @param {*} expires 过期时间
     * @param {*} cert 私钥
     */
    createToken(uniqueId, expires, cert){
         let authKey = 'authtoken_'+uniqueId;
        // let jwtStr = uniqueId+'_'+uuid.v4();
        
        // this.updateTokenToRedis(authKey,jwtStr,expires);
        //let jwtStr = JWT.sign({data:uniqueId},this.cert);
        let jwtid = uuid.v4();
        let jwtStr = this.sign({ data: uniqueId }, { audience: 'entapp', issuer: 'dmcfed', jwtid: jwtid, subject: 'entuser' });
        
        this.updateTokenToRedis(authKey,jwtStr,expires);
        
        return jwtStr;
    }


    getSubAuthKey(token, prefix){
        
        let prefixStr = prefix||'authtoken'; 
        let payload = this.decodeToken(token)['payload'];
        let authKey = `${prefixStr}_`+payload['data'];
        return authKey;
    }

    /**
     * 验证token是否有效
     * @param {*} token 
     * @param {*} cert 
     */
    async checkVaild(token, cert){
        let _cert = cert||this.cert; 
        if(!token) return !1;
        let uniqueId = getSubAuthKey;
        let existedInRedis =  await this.getTokenFromRedis(uniqueId);
        
        if(existedInRedis !== null&&existedInRedis === token){
            return !0;
        }
        return !1;
    }

    /**
     * 解密token中负载的信息
     * @param {String} token 
     */
    decodeToken(token){
        let payload = JWT.decode(token,{complete: true});
        return payload;
    }

    verifyToken(token,cert){
        // let isVerify = false;
        //  JWT.verify(token, cert||this.cert, function (err, payload) {
        //     // if token alg != RS256,  err == invalid signature
            
        //     if(err){
        //         isVerify = false;
        //         console.log('token-erroro-----',err);
        //     }else{
        //         isVerify = !isVerify;
        //     }
            
        //   });
        //   return isVerify;
        //todo
    }

    /**
     * 刷新token
     * @param {String} token 
     */
    updateToken(token){
        let jwtid = uuid.v4();
        let resfreshedToken = this.refresh(token, { verify: { audience: 'entapp', issuer: 'dmcfed', subject: 'entuser'}, jwtid: jwtid });
        let uniqueId = this.getSubAuthKey(token);
        this.updateTokenToRedis(uniqueId,resfreshedToken);
        return this.refresh(token, { verify: { audience: 'entapp', issuer: 'dmcfed', subject: 'entuser'}, jwtid: jwtid });
    }


}

export default new AuthUtil;