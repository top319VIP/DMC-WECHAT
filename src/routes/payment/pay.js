import React, { Component } from 'react';
import $ from 'jquery';
import Layout from '../../components/Layout';
import Http from '../../utils/http';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './style/detailed.scss';
import b from './images/a@2x.png';


const title = "支付";

const apis = [
  { "id": "payType", "url": "online/payType","format":false},
  { "id": "H5pay", "url": "online/H5pay" }
];

// Http.setDomainUrl("http://localhost:9019/showroom/api/v1/");
Http.setDomainUrl("http://47.96.175.206:9030/")

Http.setMutiApi(apis);

// const headers = {"access-token":"balabala"};

// Http.setRequestHeader(headers).get("userInfo",{"name":"wangdogfen"},(callback)=>{
//   console.log('userInfo--get----callback---->',callback);
// })

// Http.post("carInfo",{"test":"postman"},(callback)=>{
//   console.log('carInfo--post----callback---->',callback);
// })


class PAY extends Component {
  constructor(props) {
    super(props);
    this.state={
      payType:[]
    }
  }
  componentWillMount() {
    let _this = this;
    

   
  }
  componentDidMount() {
    let orderId=this.getCookie('orderId');
    let money=this.getCookie('money');
    let payee=this.getCookie('payee');
    this.setState({
      orderId:orderId
    })
    document.querySelector('#serial').innerHTML=orderId;
    document.querySelector('#receive').innerHTML=money;
    document.querySelector('#coin').innerHTML=payee;

    let str="";
    Http.get('payType',(result) => {
       if(result.data){
         this.setState({
          payType:result.data
         })
        //  result.data.forEach(function(item,index){
        //      str+="<li>"
        //        +"<div>"
        //          +"<span className='{s.mation}'>"
        //             + "<img src="+item.IMAGE_URL+">"
        //          + "</span>"
        //          + "<span>"
        //              + item.PAY_NAME
        //          + "</span>"
        //         + "</div>"
        //         + "<div>"
        //             + "<input type='radio' name='lname' value="+item.PAY_CODE+">"
        //      +"</div>"
        //     +"</li>"
        // });
     }
     //document.getElementById('cultures').innerHTML=str;
    })
  }
  getCookie=(cookieName)=>{
    var strCookie = document.cookie;
    var arrCookie = strCookie.split(";");
    for(var i = 0; i < arrCookie.length; i++){
        var arr = arrCookie[i].split("=");
        if(cookieName == arr[0]){
            return arr[1];
        }
    }
    return "";
  }
  mation(e){
    this.setState({
      paycode:Number(e)
    })
  }
  promptly(){
    const code={
      orderId:this.state.orderId,
      payType:this.state.paycode
    }
    Http.get('H5pay',code,(result) => {
        console.log(result)
   })
  }
  render() {
    console.log(this.state.payType)
    return (
      <div className={s.test}>
            <div className={s.culture}>
              <ul>
               {
                  this.state.payType.map((item,index)=>{
                    return(
                      <li key={index}>
                         <div>
                            <span className={s.mation}>
                                <img src={item.IMAGE_URL}/>
                            </span>
                            <span>
                                  {item.PAY_NAME}
                            </span>
                         </div>
                        <div>
                            <input type='radio' name='lname' value={item.PAY_CODE} onChange={this.mation.bind(this,item.PAY_CODE)}/>
                        </div>
                      </li>
                    )
                  })
               }
                
              </ul>
          </div>
          <div className={s.call}>
              <ul>
                  <li>
                      <span>订单编号</span>
                      <span className={s.serial} id="serial"></span>
                  </li>
                  <li>
                        <span>收款方</span>
                        <span className={s.receive} id="receive"></span>
                    </li>
                    <li>
                        <span>订单金额</span>
                        <span className={s.coin} id="coin"></span>
                    </li>
              </ul>
          </div>
          <div className={s.promptly} onClick={this.promptly.bind(this)}>立即支付</div>
      </div>
    );
  }
  checkShow(e) {
  }
  componentWillReceiveProps() { }

}

const PAYMENT = withStyles(s)(PAY);

function action({path,query,hash}) {
  return {
    chunks: ['PAYMENT'],
    title,
    component: (
      <Layout hide={true}>
        <PAYMENT query={query}/>
      </Layout>
    ),
  };
}
export default action;