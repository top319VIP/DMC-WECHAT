/**
 * 将微信获取的用户数据同步至后端微服务
 * @todo 该过程为异步，支持异常重发，可临时通过userId做为key在redis备份
 * 
 * @相关资源
 * node-fetch使用参考 https://github.com/bitinn/node-fetch
 * swagger Url: http://121.196.193.149:9020/swagger-ui.html#!/dealer-controller/usersUsingPOST
 * 同步接口：http://121.196.193.149:9020/dealer/api/v1/users
 */

import fetch from 'node-fetch';
import redisUtil from './redisUtil'; 
import {GATEWAY_SERVER_API} from './config';
import qs from 'querystring';


class SyncUserInfo {
    constructor(){
        this.requestUrl = GATEWAY_SERVER_API['dealerUsersUrl'];
    }

    transGetParams(_params){
        //OBEJCT格式处理成get方式所需要的数据格式，统一传递的参数都为JSON对象
        let _resultParams = "";
        let _count = 0;
        for(let _key in _params){
          _resultParams += (_count===0?'?':'&')+_key+'='+_params[_key];
          ++_count;
        }
        return _resultParams;
      }

    /**
     * 备份发送失败的数据
     * @param {Object} item 
     */
    backRecord(item){
        //todo
    }

    /**
     * 异常重发
     * @param {Int} time 隔多久重试，单位秒
     * @param {Int} maxNum 最多重试几次
     */
    retry(time = 10,maxNum = 10){
        //todo
    }

    /**
     * 单条微信用户详情发送
     * @param {Object} info 
     */
    async post(info){
        //todo
        try {
            console.log(info);
            const params = {
                userId:info['userid'],
                phone:info['mobile'],
                name:info['name'],
                avatar:info['avatar'],
            };
            
            let url = this.requestUrl+'?'+qs.stringify(params);

            const response = await fetch(url);
            console.log('response=====',response);  
            const json = await response.json(); 
            return json;       
            
        } catch (error) {
            console.log('同步人员异常=====',error);
        }



    }

}

export default new SyncUserInfo;