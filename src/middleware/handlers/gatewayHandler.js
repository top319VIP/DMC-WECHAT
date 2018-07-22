//代理转发请求
import BaseRoute from '../baseRoute';
import {ROUTE_BASE_PATH,SERVER_BASE_PATH} from '../config';
import fetch from 'node-fetch';

// Http.setDomainUrl('http://40.125.204.129/wx/');
class Gateway extends BaseRoute {
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

     

    async doFetch(_url,_method,_params,_callBack){
        console.log(_url,'====url');
        let options = {
            method: _method,
            Accept:'application/json',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'accept': 'application/json'
            },
            body: _method == 'GET'?null:JSON.stringify(_params)
        } 

        console.log('options=====',options);
        console.log('_method=====',_method);
        const response = await fetch(_url,options);
         _callBack(response);

    }

    handle(){

        try{

      
        
        let method = this.req.method;
        // let serverUrl = 'http://40.125.204.129/wx/';
        let serverUrl = SERVER_BASE_PATH+'/';
        let url = serverUrl+this.req.url.replace(/\/wx\/ent\/api\//g,'');
        let params;

        if(method === 'GET'){
            url += this.transGetParams(params);
            params = this.req.query;
        }else{
            params = this.req.body;
            
        }

        const that = this;
        that.doFetch(url,method,params,async (response)=>{
            if(response.status === 200){
                let json = await response.json();
                that.res.json(json);
            }else{
                const error = new Error(response.statusText)
                error.response = response;
                that.next(error);
            }
            
        });


        }catch(e){
            console.log(e);
        }

    }
}

const routeHandle = (router) => {

        router.all(ROUTE_BASE_PATH+'/*', Gateway.makeRouteHandle());
    
    };

export default routeHandle;