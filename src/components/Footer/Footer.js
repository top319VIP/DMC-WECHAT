/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import hs from './Footer.scss';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div className={hs.footer}>
        <ul> 
          <li>
            <a className={hs.active} href="/wx/ent/home">
              <i className={`${hs['ficon']} ${hs['ficon-home']}`}></i>
              <h6>首页</h6>
            </a>
          </li>
          <li>
            <a href="/wx/ent/customer">
              <i className={`${hs['ficon']} ${hs['ficon-kh']}`}></i>
              <h6>客户</h6>
            </a>
          </li>
          <li>
            <a href="/wx/ent/ocs">
              <i className={`${hs['ficon']} ${hs['ficon-kf']}`}></i>
              <h6>在线客服</h6>
            </a>
          </li>
          <li>
            <a href="/wx/ent/personal">
              <i className={`${hs['ficon']} ${hs['ficon-my']}`}></i>
              <h6>我的</h6>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default withStyles(hs)(Footer);
