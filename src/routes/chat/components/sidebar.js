import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Http from './../../../utils/http';
import s from '../style/sidebar.scss';
import { debug } from 'util';
import { PullToRefresh } from 'antd-mobile';
import DiDi from '../images/didi.mp3';
import { expression } from '../../../components/common/comn';



const apis = [
    // 查询聊天记录列表
    { "id": "wx_getChatUserList", "url": "wx_getChatUserList", "format": false },
];

Http.setDomainUrl("http://carowner.yonyouauto.com/qy/chat/wx/");
// Http.setDomainUrl("http://40.125.204.129/qy/chat/wx/");
// Http.setDomainUrl("http://47.96.175.206:8080/chat/wx/");
// Http.setDomainUrl("http://localhost:9019/showroom/api/v1/");
// Http.setDomainUrl("/wx/pc/api/");

// Http.setDebugger(true);
Http.setMutiApi(apis);

var needRefresh;
var CountdownTimeout = null;

class sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            spin: true,
            ownerCode: 0,   // 当前聊天对象
            params: [],
            getChatUserList: [],
            listMap: [],
            searchValue: '',
            Countdown: 10800000,
        }
    }
    componentWillMount() {
        const userId = this.props.user.userId;
        console.log(this.props.user, '+++++++++++++++')
        Http.get('wx_getChatUserList', { userId }, (result) => {
            if (result) {
                this.setState({
                    getChatUserList: result,
                    listMap: result
                })
            }
        });
        this.setState({
            spin: false,
        })

    }

    timing() {
        clearTimeout(CountdownTimeout);
        CountdownTimeout = setTimeout(() => {
            alert('请重新接入在线客服！');
            history.go(0);
        }, this.state.Countdown)
    }
    async componentDidMount() {
        needRefresh = sessionStorage.getItem("need-refresh");
        if (needRefresh) {
            sessionStorage.removeItem("need-refresh");
            location.reload();
        };
        const _this = this;
        window.obj = {};
        await Http.get('wx_im_sdk', (result) => {
            obj = result.data;
        })
        const time = setInterval(() => {
            console.log(window.JMessage);
            window.JIM = new JMessage({ debug: true });
            window.JIM.init(obj).onSuccess(function (data) {
                console.log(data, 'wx_im_sdk成功')
                window.JIM.login({
                    'username': _this.props.user.wxJmessageCode,
                    'password': '123456',
                }).onSuccess(function (data) {
                    window.clearInterval(time);
                    console.log(data, '登录成功');
                    JIM.onMsgReceive((data) => {
                        debugger;
                        let list = Object.assign([], _this.state.list);
                        let isNewsUser = true;
                        const obj = JSON.parse(data.messages[0].content.msg_body.text);
                        const newsUser = {
                            name: obj.fromUser.nickname,
                            picUrl: obj.fromUser.headImgurl,
                            phone: obj.fromUser.registerPhone,
                            userId: obj.fromUser.potentialUserId,
                            wxCode: obj.fromUser.headImgurl,
                            lastContent: {
                                content: obj.content,
                            },
                            lastContentType: obj.type,
                            news: obj.messageSource != 'h5' ? true : false,
                        }
                        console.log(newsUser);
                        if (data) {
                            let list = Object.assign([], _this.state['getChatUserList']);
                            let getChatUserList = [];
                            if (!list.length) {
                                getChatUserList.push(newsUser);
                            } else {
                                list.forEach((item, index) => {
                                    if (obj.fromUser.potentialUserId == item.userId) {
                                        item.news = obj.messageSource != 'h5' ? true : false;
                                        item.lastContent = {
                                            content: obj.type === 'text' ? obj.content : '',
                                        };
                                        item.lastContentType = obj.type;
                                        item.lastTime = (new Date()).getTime();
                                        getChatUserList.unshift(Object.assign({}, item));
                                        isNewsUser = false;
                                    } else {
                                        getChatUserList.push(Object.assign({}, item));
                                    }
                                })
                                if (isNewsUser) {
                                    getChatUserList.unshift(newsUser);
                                }
                            }

                            _this.setState({ getChatUserList });
                        }
                    })
                }).onFail(function (data) {
                    console.log(data, '登录失败')
                    // 同上
                });
            }).onFail(function (data) {
                console.log(data, 'wx_im_sdk失败')
                // 同上
            });
        }, 1000, obj);

        this.timing();
    }
    render() {
        const info = this.props.user;
        const UserList = this.state['getChatUserList'].map((item, index) => {
            return (
                <li key={index} onClick={this.chatObj.bind(this, item, index)}>
                    <i className={s.iconfont} onClick={this.endChat.bind(this, item, index)} alt='叉叉'>&#xe633;</i>
                    <p className={s.avatar}>
                        <img src={item.picUrl ? item.picUrl : "https://ps.ssl.qhimg.com/t01531c2d8bd3dbe644.jpg"} />
                    </p>
                    <div className={s.name}>
                        <p>
                            <span>{item.name ? item.name : '小丑'}</span>
                            {/* <span>{` ${item.phone && item.phone != 'null' ? ' - ' + item.phone : ''}`}</span> */}
                        </p>
                        <p>
                            <span>{item.lastContentType === 'text'
                                ? <span style={{ display: 'inline-block' }} dangerouslySetInnerHTML={{ __html: expression(item['lastContent']['content']) }}></span>
                                : (item.lastContentType === 'image'
                                    ? '[图片]'
                                    : (item.lastContentType === 'news' || item.lastContentType === 'mpnews'
                                        ? '[图文]'
                                        : '[视频]'))}</span>
                        </p>
                    </div>
                    <span className={item.news ? s.point : ''}></span>
                </li>
            )
        })
        return (
            <section className={s.sidebar}>
                <div className={s.card}>
                    <header className={s.user}>
                        <img className={s.avatar} src={info.iconsPhoto ? info.iconsPhoto : require("../images/Bin.jpg")} />
                        <p className={s.name}>{this.props.user.weixinName ? this.props.user.weixinName : 'haply'}</p>
                    </header>
                    <footer>
                        <input className={s.search} onChange={this.search.bind(this)} placeholder="search user..." />
                    </footer>
                </div>

                <div className={s.list}>
                    <ul>
                        {UserList}
                    </ul>
                </div>

                <div>{/*声音提示*/}
                    <video id='video' style={{ width: 0, height: 0 }}>
                        <source src={DiDi} type="video/ogg" />
                    </video>
                </div>
            </section>
        );
    }
    chatObj(obj, index) {
        const info = this.props.user;
        const getChatUserList = Object.assign([], this.state['getChatUserList']);
        getChatUserList[index].news = false;
        this.setState({ getChatUserList });
        window.location.href = './chat/talk?userId=' + info.userId + '&userName=' + info.weixinName + '&myPicUrl=' + info.iconsPhoto + '&ownerCode=' + obj.userId + '&ownerPicUrl=' + obj.picUrl + '&ownerName=' + obj.name;
    }
    endChat(item, index) {
        let user = this.state.user;
        user.splice(index, 1);
        this.setState({ user });
    }
    search(e) {
        console.log(e.target.value)
        this.setState({ searchValue: e.target.value });
        let arr = [];
        const reg = e.target.value;
        const list = Object.assign([], this.state.listMap);
        list.map((item, index) => {
            if (item.name.toLowerCase().indexOf(reg.toLowerCase()) != -1) {
                arr.push(item);
            }
        })
        this.setState({ getChatUserList: arr });
    }
}




export default withStyles(s)(sidebar);
