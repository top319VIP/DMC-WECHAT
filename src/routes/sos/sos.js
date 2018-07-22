/**
 * 更多使用方式参考网址
 * https://mobile.ant.design/docs/react/introduce-cn
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ss from './sos.scss';
import sosList from './images/sos.list.png';


class SOS extends React.Component {
  
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
    <div className={ss.wrap}>
           
            <img src={sosList} width={'100%'} /> 
                 
          </div>

    );
  }
}

export default withStyles(ss)(SOS);
