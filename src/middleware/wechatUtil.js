import redisUtil from './redisUtil';
import { WECHAT_SERVER_CONF, WECHAT_SERVER_API } from './config';
import fetch from 'node-fetch';

class WechatUtil {
    constructor() {
        this.accesstokenUrl = `${WECHAT_SERVER_API['accesstokenUrl']}`;
        this.ticketUrl = `${WECHAT_SERVER_API['ticketUrl']}`;
        this.userDetailUrl = `${WECHAT_SERVER_API['userDetailUrl']}`;
        this.userGet = `${WECHAT_SERVER_API['userGet']}`;
        this.tokenKey = `${WECHAT_SERVER_CONF['tokenRedisKey']}`;
        this.tokenExpire = `${WECHAT_SERVER_CONF['expire']}`;
        this.upload = `${WECHAT_SERVER_API['upload']}`;
        this.download = `${WECHAT_SERVER_API['download']}`;
        this.jsapitTicket = `${WECHAT_SERVER_API['jsapitTicket']}`;
    }

    /**
     * 调用企业号获取accessToken接口
     */
    async requestAccessToken(corpid,corpsecret) {
        const accesstokenUrl = `${WECHAT_SERVER_API['accesstokenUrl']}?corpid=${corpid}&corpsecret=${corpsecret}`;
        const response = await fetch(accesstokenUrl);
        const json = await response.json();
        return json;
    }

    /**
     * 获取微信企业号token
     * @param {*} _isRemote 是否强制远程获取
     * @todo 增加文件存储，防止redis挂了或当前服务挂了
     */
    async getAccessToken(_key,_corpid,_corpsecret,_isRemote = false) {
        let accessToken = null;
        let isVaild = await this.checkTokenValid(_key);
        let isQuery = _corpid == undefined||_corpsecret == undefined;
        if (isQuery || isVaild && !_isRemote) {
            console.log(_key,'_key=======')
            accessToken = await redisUtil.get(_key);
            console.log('--accessToken存在未过期从redis取--', accessToken);
            return accessToken;
        } else {
            const response = await this.requestAccessToken(_corpid,_corpsecret);
            accessToken = response['access_token'];
            this.updateAccessToken(_key,accessToken);
            console.log('--accessToken不存在或过期重新调微信接口刷新redis--', accessToken);
        }

        return accessToken;

    }

    /**
     * 将accessToken写入redis
     * @param {*} accessToken 
     */
    updateAccessToken(_key,accessToken) {
        redisUtil.set(_key, accessToken, this.tokenExpire||7150);
    }


    /**
     * 将JsapiTicket写入redis
     * @param {*} ticket 
     */
    updateJsapiTicket(_key,ticket) {
        redisUtil.set(_key, ticket, this.tokenExpire||7150);
    }




    /**
     * 验证accessToken是否有效
     */
    async checkTokenValid(_key) {
        //检查AccessToken在redis是否存在或过期，过期会自动移除
        const isHasToken = await redisUtil.get(_key);

        console.log('isHasToken-----', isHasToken !== null);
        return isHasToken !== null;
    }

    /**
     * 远程获取用户ticket
     * @param {String} code 
     * @param {String} token 
     */
    async requestUserTicket(code, token) {
        let url = `${this.ticketUrl}?access_token=${token}&code=${code}`;
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }

    /**
     * 远程获取企业号用户详细信息
     */
    async requestUserDetail(ticket, token) {
        let currentUrl = `${this.userDetailUrl}?access_token=${token}`;
        console.log('----requestUserDetail-----', currentUrl);
        let postBody = {
            user_ticket: ticket
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(postBody),
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'accept': 'application/json'
            },
        }
        console.info('--option-user-detail--', options);
        const response = await fetch(currentUrl, options);
        const json = await response.json();
        return json;
    }

    /**
     * 获取更多用户详细信息
     * @param {*} userid 
     * @param {*} token 
     */

    async requestUser(userid, token) {
        let url = `${this.userGet}?access_token=${token}&userid=${userid}`;
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }

    /**
     * 上传临时素材
     * @param {String} token 
     * @param {image/voice/video/file} type 
     * @param {multipart/form-data} formData
     */
    async requestUload(token, type, formData){
        let url = `${this.upload}?access_token=${token}&type=${type}`;
        const options = {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'multipart/form-data;'
            },
            qs: { access_token: token }
        }
        const response = await fetch(url, options);
        console.log(response,'***********');
        const json = await response.json();
        return json;
    }


    /**
     * 获取临时素材
     * @param {String} token 
     * @param {String} mediaId 
     */
    async requestDownload(token, mediaId){
        let url = `${this.download}?access_token=${token}&media_id=${mediaId}`;
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }


    /**
     * 获取jsapi_ticket
     * @param {String} token 
     */
    async requestTicket(token){
        let url = `${this.jsapitTicket}?access_token=${token}`;
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }


    /**
     * 获取当前用户ticket(票据)信息，若不传accessToken，本体内自取
     * 每次成员授权带上的code将不一样
     * code只能使用一次，5分钟未被使用自动过期
     * @param {String} accessToken 
     * @param {String} code 
     */
    async getUserTicket(code, accessToken) {
        const response = await this.requestUserTicket(code, accessToken);

        console.log('--userTicket--', response);
        return response;
    }

    /**
     * 根据用户ticket与accessToken获取用户详情，若不传accessToken，本体内自取
     * @param {Object} oticket 
     * @param {String} accessToken 
     */
    async getUserDetail(oticket, accessToken) {
        console.log('oticket------', oticket);
        const response = await this.requestUserDetail(oticket['user_ticket'], accessToken);
        console.log('--UserDetail--', response);
        return response;

    }


    /**
    * 获取更多用户详细信息
    * @param {*} userid 
    * @param {*} accessToken 
    */
    async getUser(userid, accessToken) {
        console.log('userid------', userid);
        const response = await this.requestUser(userid, accessToken);
        console.log('--UserDetail--', response);
        return response;
    }

    /**
     * 上传临时素材
     * @param {multipart/form-data } formData 
     */
    async upload(formData){
        const token = await this.getAccessToken('ENT-WECHAT-DRIVE-ACCESSTOKEN');
        const response = await this.requestUload(token, 'image', formData);
        return response;
    }

    /**
     * 素材下载
     * @param {String} mediaId 
     */
    async download(mediaId){
        const token = await this.getAccessToken('ENT-WECHAT-DRIVE-ACCESSTOKEN');
        const response = await this.requestDownload(token, mediaId);
        return response;
    }


    /**
     * 获取jsapi_ticket
     */
    async getTicket(token){
    // async getTicket(token,_key,_corpid,_corpsecret,_isRemote = false){
    //     let ticket = null;
    //     let isVaild = await this.checkTokenValid(_key);
    //     let isQuery = _corpid == undefined||_corpsecret == undefined;
    //     if (isQuery || isVaild && !_isRemote) {
    //         console.log(_key,'_key=======')
    //         ticket = await redisUtil.get(_key);
    //         console.log('--JsapiTicket存在未过期从redis取--', ticket);
    //         return ticket;
    //     } else {
    //         const response = await this.requestTicket(token);
    //         ticket = response['access_token'];
    //         this.updateJsapiTicket(_key,ticket);
    //         console.log('--JsapiTicket不存在或过期重新调微信接口刷新redis--', ticket);
    //     }

    //     return ticket;

        const response = await this.requestTicket(token);
        return response;        
    }
}


export default new WechatUtil;



