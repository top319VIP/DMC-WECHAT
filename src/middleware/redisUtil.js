/**
 * 封装redis常用方法
 */
import redis from 'redis';
import {REDIS_CONF} from './config';
const redisClient = redis.createClient(REDIS_CONF);



class redisUtil {
    constructor(){

    }

    /**
     * 添加string类型的数据
     * @param {*} key 键
     * @param {*} value 值 
     * @param {*} expire 过期时间
     */
    set(key, value, expire){
        return new Promise(function(resolve,reject){
            redisClient.set(key, value, function(error, result){
                if(error){
                    console.log('redis存值异常------>',error);
                    reject(error);
                    return;
                }

                if(!isNaN(expire) && expire > 0){
                    redisClient.expire(key, parseInt(expire));
                }
                resolve(result);

            })
        })
    }

    get(key){

        return new Promise(function(resolve,reject){
            redisClient.get(key,function(error,result){
                if(error){
                    console.log('redis取值异常------>',error);
                    reject(error);
                    return;
                }
                resolve(result);

            })
        })

    }
}


export default new redisUtil;