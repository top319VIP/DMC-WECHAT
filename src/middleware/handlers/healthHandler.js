//微信相关controller
import moment from 'moment';
import BaseRoute from '../baseRoute';
import {ROUTE_BASE_PATH} from '../config';
import WechatUtil from '../wechatUtil';
import SyncUserInfo from '../syncUserInfo';
import AuthUtil from '../authUtil';

/**
 * sideCar 健康度检查
 */
class Health extends BaseRoute {
     handle(){

         this.res.json({
             "status":"UP"
         })

    }
}
 

const routeHandle = (router) => {

        router.get(`${ROUTE_BASE_PATH}/health`, Health.makeRouteHandle());
        
    
    };

export default routeHandle;