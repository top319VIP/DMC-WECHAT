/**
 *试驾预约列表
 */

import React from 'react';
import Layout from '../../components/Layout';
import Http from '../../utils/http'
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import DLDSheet from './style/drive.detail.scss';
const title = '试驾预约详情';

const apis = [
  {"id":"driverInfo","url":"dealer/api/v1/driverInfo"},
];

Http.setDomainUrl("/wx/ent/api/");

Http.setMutiApi(apis);


class DriveDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailInfo:{

      }
    };
  }

  componentDidMount() {
  
  }


  btnAction(_name){
    console.log(_name);
    window.location.href = `./drive/${_name}`;
  }

 
  render() {
    const that = this;
    function getData(){
      Http.get('driverInfo',function(data){
        that.state['detailInfo'] = Object.assign({},data);
      })
    }
   
    return (
      <div className={DLDSheet.wrap}>
            <div className={DLDSheet['form']}>
            <div className={DLDSheet['header']}>
              <span>{this.state.detailInfo['applyTime']}</span>
              <span className={DLDSheet['status']}>{this.state.detailInfo['statusName']}</span>
            
            </div>
          <div className={DLDSheet['content']}>

            <div className={DLDSheet['row']}>
              <div className={DLDSheet['rt']}>NO：</div>
              <div className={DLDSheet['rc']}>{this.state.detailInfo['driveId']}</div>
            </div>

            <div className={DLDSheet['row']}>
              <div className={DLDSheet['rt']}>试驾车型：</div>
              <div className={DLDSheet['rc']}>{this.state.detailInfo['carCode']}</div>
            </div>

            <div className={DLDSheet['row']}>
              <div className={DLDSheet['rt']}>试驾地址：</div>
              <div className={DLDSheet['rc']}>{this.state.detailInfo['address']}</div>
            </div>

            <div className={DLDSheet['row']}>
              <div className={DLDSheet['rt']}>预约人：</div>
              <div className={DLDSheet['rc']}>{this.state.detailInfo['userName']}</div>
            </div>

            <div className={DLDSheet['row']}>
              <div className={DLDSheet['rt']}>联系电话：</div>
              <div className={DLDSheet['rc']}>{this.state.detailInfo['userPhone']}</div>
              <div className={DLDSheet['toolbox']}>
                <button type="button" className={DLDSheet['btn-primary']} onClick={this.btnAction.bind(this,'detail')}>详情</button>
              </div>
            </div>

          </div>
        </div>
      </div>

    );
  }
 
}

const DriveDetailComp = withStyles(DLDSheet)(DriveDetail);

function action(params) {
  return {
    chunks: ['drive.detail'],
    title,
    component: (
      <Layout  hide={true}>
        <DriveDetailComp />
      </Layout>
    ),
  };
}

export default action;
