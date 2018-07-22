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
import ps from './Personal.scss';
import snapshot from './images/xh_logo@2x.png';
import Http from '../../utils/http';
import { debug } from 'util';

const apis = [

  
];

// Http.setDomainUrl("http://localhost:8081/yyauto-web/api/");
Http.setDomainUrl("/wx/ent/api/");
//Http.setDomainUrl("http://40.125.204.129/wx/");

Http.setMutiApi(apis);


class Personal extends React.Component {
  
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  getInitalState(){
    const headers = { 'WECHAT_USER_OPENID': this.props.query.openId}
    Http.setRequestHeader(headers)    
  }
  componentWillMount(){
    this.setState({
      getBindCarInfos:{},
      memberInfo:{},
      messageCount: "",
      queryEvaluationNum: "",
      Countpoint:"",
      repairs:""

    }); 
  }
  componentDidMount(){
    
  }

  render() {
    const item = this.state;
    return (
        <div id={ps['wrap']}>
          <div className={ps['top-header']}>
            <div className={ps['tHead']}>
              <span>{item['getBindCarInfos']['registNo'] ? item['getBindCarInfos']['registNo'] : ""}</span>
              <span>{item['getBindCarInfos']['seriesName'] ? item['getBindCarInfos']['seriesName'] : ""}</span>
              <span>{item['repairs'] ? item['repairs'] : ""}</span>
              {item['repairs'] ? <i className={ps['iconfont']}>&#xe604;</i> : ""}
            </div>
            <div className={ps['inner']}>
              <div className={ps['snapshot']}>
                <img src={item['memberInfo']['headImgurl']?item['memberInfo']['headImgurl']:snapshot} />
              </div>
              <div className={ps['info']}>
                <p>
                  {item['memberInfo']['nickName']?item['memberInfo']['nickName']:""}
                  {item['memberInfo']['sex'] == '男'?<i className={ps['iconfont']}>&#xe61c;</i>:<i className={ps['iconfont']}>&#xe614;</i>}
                </p>
                <p>{item['memberInfo']['phone']?item['memberInfo']['phone']:""}</p>
              </div>
              
            </div>
          </div>

          <div className={ps['content']}>
            <div className={ps['ctHead']}>
              <div onClick={this.goPage.bind(this,'modules/message.html')}>
                <p>{item['messageCount']?item['messageCount']:""}</p>
                <p>我的消息</p>
              </div>
              <div  onClick={this.goPage.bind(this,'modules/integration.html')}>
                <p>{item['Countpoint']?item['Countpoint']:""}</p>
                <p>我的积分</p>
              </div>
              <div  onClick={this.goPage.bind(this,'modules/coupon.html')}>
                <p>{item['queryEvaluationNum']?item['queryEvaluationNum']:""}</p>
                <p>我的卡券</p>
              </div>
            </div>
            <div className={ps['row']}  onClick={this.goPage.bind(this,'isu.html')}>
              <div className={`${ps['icon']} ${ps['ico-mecar']}`}></div>
              <div className={ps['title']}>我的爱车</div>
              <div className={`${ps['arrow']} ${ps['ico-arrow']}`}></div>
            </div>
            <div className={ps['row']}  onClick={this.goPage.bind(this,'rh.html')}>
              <div className={`${ps['icon']} ${ps['ico-file']}`}></div>
              <div className={ps['title']}>我的维修履历</div>
              <div className={`${ps['arrow']} ${ps['ico-arrow']}`}></div>
            </div>
            <div className={ps['row']}  onClick={this.goPage.bind(this,'modules/take.html/#/allOrder')}>
              <div className={`${ps['icon']} ${ps['ico-qsc']}`}></div>
              <div className={ps['title']}>我的取送车</div>
              <div className={`${ps['arrow']} ${ps['ico-arrow']}`}></div>
            </div>
            <div className={ps['group']}>
              <div className={ps['row']} onClick={this.goPage.bind(this,'modules/maintenance.html')}>
                <div className={`${ps['icon']} ${ps['ico-wxyy']}`}></div>
                <div className={ps['title']}>维修预约</div>
                <div className={`${ps['arrow']} ${ps['ico-arrow']}`}></div>
              </div>      
              <div className={ps['row']}  onClick={this.goPage.bind(this,'sy.html')}>
                <div className={`${ps['icon']} ${ps['ico-wjdc']}`}></div>
                <div className={ps['title']}>问卷调查</div>
                <div className={`${ps['arrow']} ${ps['ico-arrow']}`}></div>
              </div>      
              <div className={ps['row']} onClick={this.goPage.bind(this,'modules/setting.html')}>
                <div className={`${ps['icon']} ${ps['ico-sz']}`}></div>
                <div className={ps['title']}>设置</div>
                <div className={`${ps['arrow']} ${ps['ico-arrow']}`}></div>
              </div>     
            </div>


          </div>
                       
        </div>

    );
  }

  goPage(path){
    const toPath = "http://40.125.204.129/wx/views/"+path+"?t="+new Date().getTime();
    location.href = toPath;
  }
}

export default withStyles(ps)(Personal);
