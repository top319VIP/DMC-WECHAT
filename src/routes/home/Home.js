/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import hs from './Home.scss';

class Home extends React.Component {
  linkAction(_name){
    window.location.href = `./${_name}`;
  }
  render() {
    return (
      <div className={hs.wrap}>

            <div className={hs['theader']}>
                  <div className={hs['inner']}>
                    
                  </div>

            </div>

            <div className={hs['content']}>
                  <div className={hs['thumbs']}>
                    <div className={hs['thumb-nail']}>
                      <div onClick={this.linkAction.bind(this,'repair')} className={`${hs['nail']} ${hs['bg-col-1']}`}>
                        <h6 align={'center'}>养修预约</h6>
                      </div>
                    </div>
                    <div className={hs['thumb-nail']}>
                    <div onClick={this.linkAction.bind(this,'drive')} className={`${hs['nail']} ${hs['bg-col-2']}`}>
                      <h6 align={'center'}>试驾预约</h6>
                    </div>
                    </div>
                  </div>

                  <div className={hs['thumbs']}>
                    <div className={hs['thumb-nail']}>
                      <div onClick={this.linkAction.bind(this,'sos')} className={`${hs['nail']} ${hs['bg-col-3']}`}>
                        <h6 align={'center'}>道路救援</h6>
                      </div>
                    </div>
                    <div className={hs['thumb-nail']}>
                    <div onClick={this.linkAction.bind(this,'pick')} className={`${hs['nail']} ${hs['bg-col-4']}`}>
                      <h6 align={'center'}>上门取送车</h6>
                    </div>
                    </div>
                  </div>

                  <div className={hs['thumbs']}>
                    <div className={hs['thumb-nail']}>
                      <div onClick={this.linkAction.bind(this,'report')} className={`${hs['nail']} ${hs['bg-col-5']}`}>
                        <h6 align={'center'}>报表</h6>
                      </div>
                    </div>
                    <div className={hs['thumb-nail']}>
                    <div onClick={this.linkAction.bind(this,'ocs')} className={`${hs['nail']} ${hs['bg-col-6']}`}>
                      <h6 align={'center'}>投诉处理</h6>
                    </div>
                    </div>
                  </div>

            </div>
          
      </div>
    );
  }
}

export default withStyles(hs)(Home);
