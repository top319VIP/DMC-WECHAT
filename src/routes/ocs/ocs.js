/**
 * 更多使用方式参考网址
 * https://mobile.ant.design/docs/react/introduce-cn
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import so from './ocs.scss';
import ocsList from './images/ocs.list.png';

class OCS extends React.Component {
  
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
    <div className={so.wrap}>
            
            <img src={ocsList} width={'100%'}/> 
                
          </div>

    );
  }
}

export default withStyles(so)(OCS);
