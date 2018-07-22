/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 */

import React from 'react';
import Layout from '../../components/Layout';
import OCS from './ocs';
import Http from '../../utils/http'
const title = '在线客服';

const apis = [
  {"id":"userInfo","url":"bsd/ads","mock":"bsd/ads","format":false},

  {"id":"carInfo","url":"bsd/post", "mock":"user/post","format":false},
];

Http.setDomainUrl("http://localhost:8081/yyauto-web/api/")

Http.setMutiApi(apis);

const headers = {"access-token":"balabala"};

// Http.setRequestHeader(headers).get("userInfo",{"name":"wangdogfen"},(callback)=>{
//   console.log('userInfo--get----callback---->',callback);
// })

// Http.post("carInfo",{"test":"postman"},(callback)=>{
//   console.log('carInfo--post----callback---->',callback);
// })
console.log(Http)


function action() {

  return {
    chunks: ['ocs'],
    title,
    component: (
      <Layout>
        <OCS title={title} />
      </Layout>
    ),
  };
}

export default action;
