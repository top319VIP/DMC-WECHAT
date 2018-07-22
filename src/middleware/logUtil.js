import redisUtil from './redisUtil';
import moment from 'moment';



class LogUtil {

    constructor(){

    }

    /**
     * 
     * @param {String} key 关键字
     * @param {String} content 日志内容
     * @param {int} expire 过期时间
     */
    write(key, content, expire){
        const currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
        const keyStr = `log-${key}-${currentTime}`;
        redisUtil.set(keyStr,content,expire);
    }

    getLogs(key){

    }

    

}

export default new LogUtil;