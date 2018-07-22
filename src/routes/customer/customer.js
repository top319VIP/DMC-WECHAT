/**
 * 更多使用方式参考网址
 * https://mobile.ant.design/docs/react/introduce-cn
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import sc from './customer.scss';
import customerList from './images/customer.list.png';

class Customer extends React.Component {
  
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
    <div className={sc.wrap}>
            
            <img src={customerList} width={'100%'} /> 
                 
    </div>

    );
  }
}

export default withStyles(sc)(Customer);
