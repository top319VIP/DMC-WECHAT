import authUtil from './authUtil';
class BaseRoute {

    constructor(req,res,next){
        
        Object.assign(this,{req,res,next});
    }


    static makeRouteHandle(){
        return async (req,res,next) => {
            req.header('Access-Control-Allow-Headers','authorization')
            const isEnterPoint = req.url.indexOf('authorize') > -1;
            const isMock = req.url.indexOf('mock') > -1;
            // if(!isMock){
            //     if(!isEnterPoint){

            //         let isTokenVaild = await authUtil.checkVaild(req.headers['authorization']);

            //         if(!isTokenVaild){
            //             res.status(401);
            //             res.json({errcode:401,errmsg:'Unauthorized'});
            //         } 
            //     }
            // }
           
            new this(req,res,next).handle();
            
        }
    }

    handle() {
        throw new Error(`Please implement instance method \`${this.constructor.name}::handle\`.`);
    }

}

export default BaseRoute;