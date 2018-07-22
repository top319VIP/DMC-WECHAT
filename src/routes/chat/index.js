import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './style/index.scss';
import Header from './components/Header';
import Sidebar from './components/sidebar';
import Messages from './components/messages';
import Layout from '../../components/Layout';
import Http from './../../utils/http';

const title = "聊天列表";

const apis = [
  // 获取客服信息
  { "id": "wx_getChatInfo", "url": "wx_getChatInfo", "format": false },
  // 获取常见对白
  { "id": "getWxChatContent", "url": "getWxChatContent", "format": false },
  // 获取常见内容
  { "id": "getWxChatDialogue", "url": "getWxChatDialogue", "format": false },
];


// Http.setDomainUrl("http://localhost:9019/showroom/api/v1/");
// Http.setDomainUrl("http://40.125.206.30:8080/chat/wx/");
Http.setDomainUrl("http://carowner.yonyouauto.com/qy/chat/wx/");
// Http.setDomainUrl("http://40.125.204.129/qy/chat/wx/");
// Http.setDomainUrl("http://192.168.137.153:8080/chat/wx/");
// Http.setDomainUrl("/wx/ent/api/");

// Http.setDebugger(true);
Http.setMutiApi(apis);

class chatIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterVal: "",
      getChatInfo: {},
      target: {}
    }
  }
  componentDidMount() {
    this.created();
    console.log(this.props.user)
  }
  // componentWillReceiveProps(nextProps, nextState) {
  //     Logger.info(nextProps,'+++++++')
  // }
  filterSearch(value) {
    this.setState({ filterVal: value });
  }
  selectChatObj(obj) {
    this.setState({ target: obj });
  }
  render() {
    return (
      <div className={s.index}>
        <Sidebar user={this.props.user} />
      </div>
    )
  }

  created() {
    // this.createdTag('link', 'https://unpkg.com/antd@3.0.1/dist/antd.min.css');
    // this.createdTag('script', 'https://unpkg.com/antd@3.0.1/dist/antd.min.js');
    this.createdTag('script', 'http://carowner.yonyouauto.com/pc/assets/jmessage-sdk-web.2.5.0.min.js');

    // const script = document.createElement('script');
    // script.setAttribute('src', 'https://unpkg.com/antd@3.0.1/dist/antd.min.js');
    // document.head.appendChild(script);
  }
  createdTag(tagName, href) {
    let tag;
    if (tagName === 'link') {
      tag = document.createElement('link');
      tag.setAttribute('rel', 'stylesheet');
      tag.setAttribute('type', 'text/css');
      tag.setAttribute('href', href);
    } else if (tagName === 'script') {
      tag = document.createElement('script');
      tag.setAttribute('src', href);
    }
    document.head.appendChild(tag);
  }
}

const Index = withStyles(s)(chatIndex);

async function action({ path, query, hash }) {
  // console.log("path---",path, "query----",query, "hash-----", hash)
  const userId = query['id'] || query['userid'] || "";
  const phone = query['mobile'] || "";
  let obj = {
  };

  await Http.post('wx_getChatInfo', { phone }, (result) => {
    if (result && result.length) {
      // obj.getChatInfo = result;
      result.map((item, index) => {
        if (item['phone'] == phone) {
          Object.assign(obj, item);
        }
      })
    }
  })
  console.log(obj, '======obj==========')
  return {
    chunks: ['chat'],
    title,
    component: (
      <Layout hide={true}>
        <Index user={obj} />
      </Layout>
    ),
  };
}

export default action;