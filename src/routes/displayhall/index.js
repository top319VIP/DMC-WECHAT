/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import NewCar from './newCar';
import Layout from '../../components/Layout';

const title="新车展厅"

function action({path, query, hash}) {
  // console.log("path---",path, "query----",query, "hash-----", hash)
  return {
    chunks: ['displayhall'],
    title,
    component: (
      <Layout>
        <NewCar query={query}/>
      </Layout>
    ),
  };
}

export default action;