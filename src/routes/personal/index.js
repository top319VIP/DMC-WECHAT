/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Personal from './Personal';
import Http from '../../utils/http';
const title = '个人中心';
const isRegister = true;
const apis = [
  // {"id":"userInfo","url":"bsd/ads","mock":"bsd/ads","format":false},

  {"id":"checkCar","url":"checkCar"},
];

// Http.setDomainUrl("http://localhost:8081/yyauto-web/api/");
//Http.setDomainUrl("http://40.125.204.129/wx/violationInquiry/api/v1/");
Http.setDomainUrl("/wx/ent/api/");

Http.setMutiApi(apis);

// const headers = {"access-token":"balabala"};

function action({path, query, hash}) {
  
  // if (!isRegister) {
  //   return { redirect: '/register' };
  // }
  return {
    chunks: ['personal'],
    title,
    component: (
      <Layout>
        <Personal title={title} query={query} />
      </Layout>
    ),
  };
}

export default action;
