/**
 * 更多使用方式参考网址
 * https://mobile.ant.design/docs/react/introduce-cn
 *取送车
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import sp from './pick.scss';
import driveList from './images/pick.list.png';


class Pick extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
    <div className={sp.wrap}>
       <div className={sp.head}>
          <div className={sp.headNext}>
               <div className={sp.search}>
                 <div className={sp.searched}>
                   <input  type="text"  placeholder="请输入手机号或车牌号"/>
                 </div>
                   <i className={sp.lit+' '+sp.iconfont}>&#xe629;</i>
                   <i className={sp.rit+' '+sp.iconfont}>&#xe606;</i>
               </div>
          </div>
          <div className={sp.choice}>
              <ul>
                 <li>
                     全部
                 </li>
                 <li>
                     未完成
                 </li>
                 <li>
                     今日取送
                 </li>
              </ul>
          </div>
       </div>
       <div className={sp.content}>
          <div className={sp.let}>
             <img src={driveList} />
          </div>
          <div className={sp.right}>
              <div className={sp.one}>
                 <span>
                       程畅
                 </span>
                <span>
                       取车
                 </span>
              </div>
              <p>取车地址:</p>
              <p>预约时间:</p>
              <p>车牌:aa</p>
              <p>下单成功</p>
          </div>
       </div>


    </div>

    );
  }
}

export default withStyles(sp)(Pick);
