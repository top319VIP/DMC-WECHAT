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
import ms from './Monit.scss';
import io from 'socket.io-client';



class Monit extends React.Component {
  componentDidMount(){
    const socket = io.connect('http://localhost:9010');
    socket.on('connect', function(){
      console.info('hi,socket connect successfull')
    });

    socket.on('pushMsg', function(data){
      console.log('-------CONSOLE_MSG----',data);
    });

    socket.on('disconnect', function(){

    });

  }
  render() {
    return (
      <div className={ms.wrap}>
      <div className={ms.panel}>
        <div className={ms.header}>
          <h5>Console</h5>
          <input className={ms.search} type="text" placeholder="搜一下..." />
        </div>
        <div className={ms.content}>

          <div className={`${ms.row} ${ms.warn}`}>
              <div className={ms.title}>
                2017-12-17 14:28:20
              </div>
              <div className={ms.message}>
                sdjsjdhshhdhhhd
              </div>
          </div>
          
          <div className={`${ms.row} ${ms.error}`}>
              <div className={ms.title}>
                2017-12-18 17:13:20
              </div>
              <div className={ms.message}>
                sdjsjdhshhdhhhd
              </div>
          </div>

          <div className={`${ms.row} ${ms.info}`}>
              <div className={ms.title}>
                2017-12-20 21:00:20
              </div>
              <div className={ms.message}>
              All the components of Recharts are clearly separated. The lineChart is composed of x axis, 
              tooltip, grid, and line items, and each of them is an independent React Component. 
              The clear separation and composition of components is one of the principle Recharts follows
              </div>
          </div>

         



          
        </div>
      </div>
            
          
      </div>
    );
  }
}

export default withStyles(ms)(Monit);
