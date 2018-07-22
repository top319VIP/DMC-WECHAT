//日志相关controller
import moment from 'moment';
import BaseRoute from '../baseRoute';
import {ROUTE_BASE_PATH} from '../config';
import WechatUtil from '../wechatUtil';

class PM extends BaseRoute {
    async handle(){
        const params = this.req.params;
       
         this.res.json(params)

    }
} 

const routeHandle = (router) => {

        router.get(`${ROUTE_BASE_PATH}/mock/console/:key`, PM.makeRouteHandle());
        router.get(`${ROUTE_BASE_PATH}/mock/console`, PM.makeRouteHandle());
        
    
    };

export default routeHandle;