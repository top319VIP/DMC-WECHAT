/**
 *试驾预约列表
 */

import React from 'react';
import Layout from '../../components/Layout';
import { ListView } from 'antd-mobile';
import Http from '../../utils/http';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import DLSheet from './style/drive.list.scss';
import { setTimeout } from 'timers';
const title = '试驾预约列表';

const apis = [
  { "id": "managerList", "url": "dealer/api/v1/list" },
];

// Http.setDomainUrl("http://121.196.193.149:9020/");
Http.setDomainUrl("/wx/ent/api/");

Http.setMutiApi(apis);
let data = [];

function MyBody(props) {
  return (
    <div className="am-list-body my-body">
      <span style={{ display: 'none' }}>todo1</span>
      {props.children}
    </div>
  );
}



let NUM_ROWS = 1;
let pageIndex = 0;
let pageNum = 1;
let isLastPage = false;
let isScroll = false;
function genData(pIndex = 0) {
  // debugger;
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * 10) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }

  return dataBlob;
}


class DriveList extends React.Component {
  constructor(props) {
    super(props);
    console.log('props====', props['user']);
    const userInfo = Object.assign({}, props['user']);
    console.log('userInfo====', userInfo);
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      height: '100%',
      params: {
        pageNum: pageNum,
        pageSize: 10,
        userId: '',
        phone: ''
      }
    };

    this.state['params']['userId'] = userInfo['userid'];
    this.state['params']['phone'] = userInfo['mobile'];
    console.log('params====', this.state['params']);

  }

  componentDidMount() {

    const that = this;

    console.log('试驾列表传递参数=====', that.state['params']);
    Http.get('managerList', that.state['params'], function (_data) {
      NUM_ROWS = _data['list'].length;
      data = _data['list'];
      isLastPage = _data['isLastPage'];
      that.rData = genData();
      that.setState({
        dataSource: that.state.dataSource.cloneWithRows(that.rData),
        isLoading: false,
        hasMore: !isLastPage,
        params: Object.assign(that.state.params, { pageNum: ++pageNum })
      });
    })

  }

  onEndReached = (event) => {
    const that = this;
    if (isScroll && isLastPage) {
      isScroll = false;
      clearTimeout(ttmout);
      return !1;
    }
    
    that.setState({ isLoading: true });
    const ttmout = setTimeout(() => {
      console.log('试驾列表滚动时传递参数=====', that.state['params']);
      Http.get('managerList', that.state['params'], function (_data) {
        console.log(_data['list']);
        isLastPage = _data['isLastPage'];
        data = _data['list'];
        NUM_ROWS = _data['list'].length;
        ++pageIndex;
        that.rData = { ...that.rData, ...genData(pageIndex) };
        that.setState({
          dataSource: that.state.dataSource.cloneWithRows(that.rData),
          isLoading: false,
          hasMore: !isLastPage,
          params: Object.assign(that.state.params, { pageNum: ++pageNum })
        }, () => { isScroll = true });
      })
    }, 500)



  }

  btnAction(currentItem) {
    const fullUrls = {
      10131001: 'dispatch',
      10131002: 'receipt',
      10131003: 'confirm',
      10131004: 'todo',
      10131005: 'startoff',
      10131006: 'doing',
      10131007: 'done',
      10131008: 'cancel',
      10131009: 'feedback',
      20000000: 'resources',
    }
    let code = currentItem['status'];
    const requireInfo = {
      userId: this.state['params']['userId'],
      mobile: this.state['params']['phone'],
      driveId: currentItem['driveId'],
      carCode: currentItem['carCode']
    }
    console.log('跳转不同详情====', requireInfo);
    window.location.href = `/wx/ent/drive/${fullUrls[code]}${Http.transGetParams(requireInfo)}`;
  }



  render() {
    const separator = (sectionID, rowID) => (
      <div className={DLSheet['separator']} key={`${sectionID}-${rowID}`} />
    );
    let index = 0, ind = 0;

    const row = (rowData, sectionID, rowID) => {
      const obj = data[ind];
      if (index == data.length - 1) {
        index = data.length - 1;
      } else {
        ind = ++index;
      }

      return (
        <div className={DLSheet['form']} key={rowID}>
          <div className={DLSheet['header']}>
            <span>{obj['applyTime']}</span>
            <span className={DLSheet['status']}>{obj['statusName']}</span>

          </div>
          <div className={DLSheet['content']}>

            <div className={DLSheet['row']}>
              <div className={DLSheet['rt']}>NO：</div>
              <div className={DLSheet['rc']}>{obj['driveId']}</div>
            </div>

            <div className={DLSheet['row']}>
              <div className={DLSheet['rt']}>预约时间：</div>
              <div className={DLSheet['rc']}>{obj['applyTimeName'] ? obj['applyTimeName'] : ''}{obj['applyTimeName'] && obj['applyTime'] ? ' , ' : ''}{obj['applyTime'] ? obj['applyTime'] : ''}</div>
            </div>

            <div className={DLSheet['row']}>
              <div className={DLSheet['rt']}>试驾车型：</div>
              <div className={DLSheet['rc']}>{obj['carTypeName'] ? obj['carTypeName'] : ''}{obj['carTypeName'] && obj['carName'] ? ' , ' : ''}{obj['carName'] ? obj['carName'] : ''}</div>
            </div>

            <div className={DLSheet['row']}>
              <div className={DLSheet['rt']}>试驾地址：</div>
              <div className={DLSheet['rc']}>{(obj['proviceName']?obj['proviceName']:'')+(obj['regionName']?obj['regionName']:'')+(obj['address']?obj['address']:'')}</div>
            </div>

            <div className={DLSheet['row']}>
              <div className={DLSheet['rt']}>预约人：</div>
              <div className={DLSheet['rc']}>{obj['userName'] + ` , ${obj['appellation'] ? obj['appellation'] : '女士'}`}</div>
            </div>

            <div className={DLSheet['row']}>
              <div className={DLSheet['rt']}>联系电话：</div>
              <div className={DLSheet['rc']}>{obj['userPhone']}</div>
              <div className={DLSheet['toolbox']}>
                <button type="button" className={DLSheet['btn-primary']} onClick={this.btnAction.bind(this, obj)}>详情</button>
              </div>
            </div>

          </div>
        </div>
      );
    };
    return (
      <div className={DLSheet.wrap}>
        <ListView
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
          renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
            {this.state.isLoading ? '拼命加载中...' : ''}
          </div>)}
          renderBodyComponent={() => <MyBody />}
          renderRow={row}
          renderSeparator={separator}
          style={{
            height: this.state.height,
            overflow: 'auto',
          }}
          pageSize={10}
          onScroll={() => { console.log('scroll'); }}
          scrollRenderAheadDistance={500}
          onEndReached={this.onEndReached}
          scrollEventThrottle={1000}
          onEndReachedThreshold={10}
        />
      </div>

    );
  }

}

const DriveListComp = withStyles(DLSheet)(DriveList);

function action({ path, query, hash }) {
  const userInfo = query;
  console.log('auth传入参数====', userInfo);
  return {
    chunks: ['drive.list'],
    title,
    component: (
      <Layout hide={true}>
        <DriveListComp user={userInfo} />
      </Layout>
    ),
  };
}

export default action;
