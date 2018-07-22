/**
 * 更多使用方式参考网址
 * https://mobile.ant.design/docs/react/introduce-cn
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import sc from './compt.scss';

class Compt extends React.Component {
  
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  state = {
    date: now,
    time: now,
    utcDate: utcNow,
    dpValue: null,
    customChildValue: null,
    visible: false,
  }

  render() {
    return (
    <div className={sc.wrap}>
            <h5>投诉处理</h5>
                 
          </div>

    );
  }
}

export default withStyles(sc)(Compt);
