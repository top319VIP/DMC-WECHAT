/*
* 定时器功能
*    
*/

import schedule from 'node-schedule';
import {SCHEDULE_TIME} from './config'

class SetSchedule {
    constructor(){
        this.ExecuteOnce = `${SCHEDULE_TIME['once']}`;
        this.ExecuteMany = `${SCHEDULE_TIME['many']}`;
    }

    frequency(num, time, cllback){
        if(time && Object.prototype.toString.call(cllback) === '[object Function]'){
            this.many(num, time, cllback)
        }else{
            this.once(num, time)
        }
    }

    once(num, cllback){
        const qrery = num || this.ExecuteOnce;
        original({minute:qrery}, cllback);
    }

    many(num, time, cllback){
        const step = Number(time) / Number(num);
        const arr = [];
        if(!isNaN(step)){
            for(let i = 1; i <= num; i++){
                arr.push(i*step);
            }
        }else{
            arr = this.ExecuteMany;
        }
        original({second:arr}, cllback);
    }
    
    original(obj, cllback){
        const rule = new schedule.RecurrenceRule();
        rule.second = obj['second'] || 0;
        rule.minute = obj['minute'] || 0;
        rule.hour = obj['hour'] || 0;
        rule.date = obj['date'] || 0;
        rule.month = obj['month'] || 0;
        rule.year = obj['year'] || 0;
        rule.dayOfWeek = obj['dayOfWeek'] || 0;

        schedule.scheduleJob(rule, function(){
            cllback || cllback()
        })        
    }

    remove(obj){
        obj.cancel();
    }
}

export default new SetSchedule;