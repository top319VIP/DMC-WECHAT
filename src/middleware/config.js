export const ROUTE_BASE_PATH = '/wx/ent/api';


export const WECHAT_SERVER_CONF = {
    corpid: 'wx74d1cc6f423aeb6e',
    expire: 7150,
    home: {
        agentId: '1000002',
        corpsecret: 'Qix9H7G-4jC-d33Z6OQYpiZn5b8kl0VvDRoIz02-6n4',
        tokenRedisKey: 'ENT-WECHAT-HOME-ACCESSTOKEN',
        redirctUrl: '/wx/ent/home'
    },
    drive: {
        agentId: '1000003',
        corpsecret: 'h5RDoBU29ViaNLTeYQlJ39SJz_mzLnYxtG9bJryHrc4',
        tokenRedisKey: 'ENT-WECHAT-DRIVE-ACCESSTOKEN',
        redirctUrl: '/wx/ent/drive'
    },
    pick: {
        agentId: '1000004',
        corpsecret: 'Rkq0OqILMah5tzxEO2fJsQKlByH7dhTf4xftfeM24WE',
        tokenRedisKey: 'ENT-WECHAT-PICK-ACCESSTOKEN',
        redirctUrl: '/wx/ent/pick'
    },
    sos: {
        agentId: '1000005',
        corpsecret: 'Qd3eExO0FPzQLFWZizF-TmKFIToeYKK8iXQuZ-afyzI',
        tokenRedisKey: 'ENT-WECHAT-SOS-ACCESSTOKEN',
        redirctUrl: '/wx/ent/sos'
    },
    repair: {
        agentId: '1000006',
        corpsecret: 'eTZIXyxn0zIFoFQALgp8Ey2SwnkmZtLpisY0nypBjDY',
        tokenRedisKey: 'ENT-WECHAT-REPAIR-ACCESSTOKEN',
        redirctUrl: '/wx/ent/repair'
    },
    chat: {
        agentId: '1000007',
        corpsecret: 'vP0AQWVPbAto82T8obqJtnG9qU8845aARgr-A5YCddw',
        tokenRedisKey: 'ENT-WECHAT-CHAT-ACCESSTOKEN',
        redirctUrl: '/wx/ent/chat'
    },
    chatLincoln: {
        agentId: '1000009',
        corpsecret: 'jgu97yegUPUpi6iSgalojMQ5pAxwfmTa2pe13ZuqLv4',
        tokenRedisKey: 'ENT-WECHAT-CHATLINCOLN-ACCESSTOKEN',
        redirctUrl: '/wx/entedu/chat'
    }
}

export const REDIS_CONF = {
    host: '116.62.188.71',
    port: 6379,
    password: 'dmcfed321',
    connect_timeout: 3600000,
}

// redirectUrl:'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx74d1cc6f423aeb6e&redirect_uri=http%3A%2F%2Fcarowner.yonyouauto.com%2Fwx%2Fent%2Fapi%2Fauthorize&response_type=code&scope=snsapi_userinfo&agentid=1000002&state=566c045b-cfb4-4f22-a171-53051b2c9094#wechat_redirect',

//本地模拟测试
 //export const WECHAT_BASE_PATH = 'http://localhost:9100/wx/ent/api/mock/wechat';
 //export const SERVER_BASE_PATH = 'http://localhost:9100/wx/ent/api/mock';

//生产环境要放开
export const WECHAT_BASE_PATH = 'https://qyapi.weixin.qq.com/cgi-bin';
export const SERVER_BASE_PATH = 'http://carowner.yonyouauto.com/qy';

//直接连微服务
//export const SERVER_BASE_PATH = 'http://localhost:9020';
export const WECHAT_SERVER_API = {

    accesstokenUrl: `${WECHAT_BASE_PATH}/gettoken`,
    ticketUrl: `${WECHAT_BASE_PATH}/user/getuserinfo`,
    userDetailUrl: `${WECHAT_BASE_PATH}/user/getuserdetail`,
    userGet: `${WECHAT_BASE_PATH}/user/get`,
    upload: `${WECHAT_BASE_PATH}/media/upload`,
    download: `${WECHAT_BASE_PATH}/media/get`,
    jsapitTicket: `${WECHAT_BASE_PATH}/get_jsapi_ticket`,
}

export const GATEWAY_SERVER_API = {
    dealerUsersUrl: `${SERVER_BASE_PATH}/dealer/api/v1/userInfo`,
}

// 定时器时间间隔初始值
export const SCHEDULE_TIME = {
    once: 1,
    many: [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56]
};  