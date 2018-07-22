/**
 * 更多使用方式参考网址
 * https://mobile.ant.design/docs/react/introduce-cn
 * 养修预约
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import sr from './repair.scss';
import repairList from './images/repair.list.png';


class Repair extends React.Component {
  
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
    <div className={sr.wrap}>
            
            
            <img src={repairList} width={'100%'} /> 
      
          </div>

    );
  }
}

export default withStyles(sr)(Repair);
