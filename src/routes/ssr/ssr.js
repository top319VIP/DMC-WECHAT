/**
 * 更多使用方式参考网址
 * https://mobile.ant.design/docs/react/introduce-cn
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ssr from './ssr.scss';
import qsc from './images/me_qsc@2x.png';
import {Button,DatePicker} from 'antd-mobile';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
if (minDate.getDate() !== maxDate.getDate()) {
  minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

function formatDate(date) {
  const pad = n => n < 10 ? `0${n}` : n;
  const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  return `${dateStr} ${timeStr}`;
}

class SSR extends React.Component {
  
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
    <div className={ssr.wrap}>
            <i className={ssr.iconfont}>&#xe606;</i>
            <i className={ssr.iconfont}>&#xe671;</i>
            
            <img src={qsc} /> 
            <Button type="primary" onClick={()=>this.setState({'visible':'true'})}>datePicker</Button>   
            <DatePicker visible={this.state.visible}
              mode="date"
              title="Select Date"
              extra="Optional"
              value={this.state.date}
              onOk={date => this.setState({ dpValue: date, visible: false })}
              onDismiss={() => this.setState({ visible: false })}
              onChange={date => this.setState({ date })}
            >
            </DatePicker>        
          </div>

    );
  }
}

export default withStyles(ssr)(SSR);
