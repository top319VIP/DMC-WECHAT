//微信相关controller
import moment from 'moment';
import BaseRoute from '../baseRoute';
import { ROUTE_BASE_PATH, WECHAT_SERVER_CONF } from '../config';
import WechatUtil from '../wechatUtil';
import SyncUserInfo from '../syncUserInfo';
import AuthUtil from '../authUtil';

class AccessToken extends BaseRoute {
    async handle() {
        const cookie = this.req.cookie;
        const params = this.req.params;
        const queryKey = params['key'];

        //const isUpdateToken = params.hasOwnProperty('force')&&params['force']=='force';
        const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
        const key = ~~(Math.random() * 10000000);
        const currentTokenModel = {
            server_time: serverTime,
            expires_in: 7200
        }

        const entApps = WECHAT_SERVER_CONF;

        for (let app in entApps) {
            let currentVal = entApps[app]
            if (typeof entApps[app] === 'object') {
                let redisKey = currentVal['tokenRedisKey'];
                let searchKey = queryKey !== undefined ? queryKey : redisKey;
                currentTokenModel[searchKey] = await WechatUtil.getAccessToken(searchKey);

            }
        }

        console.log('currentTokenModel=====', currentTokenModel);

        this.res.json(currentTokenModel)

    }
}

/**
 * 微信静默授权,获取code与userid存入redis，并跳转至目标页面
 * @return code
 */
class WechatAuthorize extends BaseRoute {
    async handle() {
        try {

            const corpid = WECHAT_SERVER_CONF['corpid'];

            const redirectParams = this.req.query;
            const targetApp = redirectParams['state'] || 'home';
            const corpsecret = WECHAT_SERVER_CONF[targetApp]['corpsecret'];

            const targetAppTokenKey = WECHAT_SERVER_CONF[targetApp]['tokenRedisKey'];
            const accessToken = await WechatUtil.getAccessToken(targetAppTokenKey, corpid, corpsecret);
            const userTicket = await WechatUtil.getUserTicket(redirectParams['code'], accessToken);

            const currentUserDetailInfo = await WechatUtil.getUserDetail(userTicket, accessToken);

            const userId = currentUserDetailInfo['userid'];

            const currentUser = await WechatUtil.getUser(userId, accessToken);

            const authToken = await AuthUtil.createToken(userId, 7200);

            this.res.cookie('entAuthCookie', authToken, { expires: new Date(Date.now() + 900000) });
            // this.res.json(currentUser);

            const serverCall = await SyncUserInfo.post(currentUser);
            const redirctUrl = WECHAT_SERVER_CONF[targetApp]['redirctUrl'] + `?userid=${currentUser['userid']}&mobile=${currentUser['mobile']}`;
            console.log('更新人员状态信息-----', serverCall);
            console.log('跳转路径-----', redirctUrl);
            if (serverCall['success']) {
                this.res.redirect(redirctUrl);
            } else {
                this.res.json(serverCall);
            }


        } catch (ex) {
            this.res.json({ 'error': ex.message });
            console.log('exception----WechatAuthorize----', ex);
        }
    }
}


/**
 * 微信素材上传
 * @return mediaId
 */
class WechatUpload extends BaseRoute {
    async handle() {
        const accessToken = await WechatUtil.getAccessToken();
        const redirectParams = this.req.query;
        const mediaId = await WechatUtil.upload(accessToken, redirectParams);
        this.res.json(mediaId);
    }
}


/**
 * 微信素材下载
 * 
 */
class WechatDownload extends BaseRoute {
    async handle() {
        const redirectParams = this.req.query;
        const download = await WechatUtil.download(redirectParams);
        this.res.json(download);
    }
}



/**
 * 获取jsapi_ticket
 * 
 */
class WechatTicket extends BaseRoute {
    async handle() {
        const cookie = this.req.cookie;
        const params = this.req.params;
        const queryKey = params['key'] || 'ENT-WECHAT-DRIVE-ACCESSTOKEN';
        const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
        const key = ~~(Math.random() * 10000000);
        const currentTokenModel = {
            server_time: serverTime,
            expires_in: 7200
        }
        const entApps = WECHAT_SERVER_CONF;
        for (let app in entApps) {
            let currentVal = entApps[app]
            if (typeof entApps[app] === 'object') {
                let redisKey = currentVal['tokenRedisKey'];
                let searchKey = queryKey !== undefined ? queryKey : redisKey;
                currentTokenModel[searchKey] = await WechatUtil.getAccessToken(searchKey);
            }
        }
        const jsapiTicket = await WechatUtil.getTicket(currentTokenModel['ENT-WECHAT-DRIVE-ACCESSTOKEN'])
        currentTokenModel['JSAPI_TICKET'] = jsapiTicket['ticket'];
        console.log('currentTokenModel=====', currentTokenModel);
        this.res.json(currentTokenModel)

    }
}





const routeHandle = (router) => {
    router.get(`${ROUTE_BASE_PATH}/accessToken/:key`, AccessToken.makeRouteHandle());
    router.get(`${ROUTE_BASE_PATH}/accessToken`, AccessToken.makeRouteHandle());
    router.get(`${ROUTE_BASE_PATH}/getTicket`, WechatTicket.makeRouteHandle());
    router.get(`${ROUTE_BASE_PATH}/user`, WechatAuthorize.makeRouteHandle());
    router.get(`${ROUTE_BASE_PATH}/authorize`, WechatAuthorize.makeRouteHandle());
    router.post(`${ROUTE_BASE_PATH}/upload`, WechatUpload.makeRouteHandle());
    router.get(`${ROUTE_BASE_PATH}/download`, WechatDownload.makeRouteHandle());
};

export default routeHandle;