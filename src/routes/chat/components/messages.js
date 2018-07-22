import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Http from './../../../utils/http';
import s from '../style/messages.scss';
import Often from './oftenText';
import Emoji from './Emoji';
import { debug } from 'util';
import { WECHAT_SERVER_CONF } from '../../../middleware/config';
import $ from 'jquery';
import { fail } from 'assert';
import { PullToRefresh } from 'antd-mobile';
import DiDi from '../images/didi.mp3';
import { expression,pushHistory,Toast } from '../../../components/common/comn';


const apis = [
    { "id": "wx_chat_talk", "url": "wx_chat_talk", "format": false },
    { "id": "wx_sendimage", "url": "wx_sendimage", "format": false },
    { "id": "wx_sendMessage", "url": "wx_sendMessage", "format": false },
    { "id": "wx_im_sdk", "url": "wx_im_sdk", "format": false },
    { "id": "wx_sendMediaMessage", "url": "wx_sendMediaMessage", "format": false },
];


// Http.setDomainUrl("http://localhost:9019/showroom/api/v1/");
// Http.setDomainUrl("http://40.125.204.129/qy/chat/wx/");
// Http.setDomainUrl("http://40.125.206.30:8080/chat/wx/");
Http.setDomainUrl("http://carowner.yonyouauto.com/qy/chat/wx/");
// Http.setDomainUrl("http://47.96.175.206:8080/chat/wx/");
// Http.setDomainUrl("/wx/pc/api/");

// Http.setDebugger(true);
Http.setMutiApi(apis);

var formData, curUrl, curInputType = 'text', isSend = false, CountdownTimeout = null;;

class messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            list: [],
            lastTime: 0,
            content: '',
            params: {
                pageCurrent: 1,
                pageSize: 5,
                ownerCode: this.props.user.ownerCode,
                userId: this.props.user.userId,
            },
            showEmoji: false,
            textarea: '',
            textareaCursor: 0,
            showOften: false,
            infoCode: "",
            spin: false,
            wxAuth: false,
            ofentObj: {},
            refreshing: false,
            height: 500,
            confirmImgShow: false,
            imgPath: "",
            Countdown: 10800000,
        }
    }
    timing() {
        clearTimeout(CountdownTimeout);
        CountdownTimeout = setTimeout(() => {
            alert('请重新接入在线客服！');
            history.go(0);
        }, this.state.Countdown)
    }

    componentWillMount() {
        this.chatTalk();
    }
    chatTalk() {
        const _this = this;
        Http.post('wx_chat_talk', this.state.params, (result) => {
            console.log(result, '====wx_chat_talk')
            if (result && result['data']) {
                const data = Object.assign([], result.data);
                const len = result['data'].length;
                let list = this.state.list;
                if (list.length) {
                    data.reverse();
                    data.map((item, index) => {
                        // if (item.contentType === 'text') {
                        //     item.content.content = expression(item.content.content);
                        // }
                        list.unshift(item);
                    })
                } else {
                    // data.find((v, i) => {
                    //     v.content.content = expression(v.content.content);
                    // })
                    list = data;
                    const height = document.body.offsetHeight - document.querySelector('#msgBox').offsetHeight;
                    _this.setState({ height }, () => {
                        setTimeout(() => {
                            document.getElementById('message').firstElementChild.scrollTop = 9999999;
                            document.querySelector('section').style.height = height + 'px';
                        }, 500)
                    })

                }
                list.forEach((item, i) => {
                    if (item.contentType === 'text') {
                        item.content.content = expression(item.content.content);
                    }
                })

                this.setState({ list, lastTime: result['data'][len - 1]['lastTime'] }, () => {

                    // document.getElementById('message').firstElementChild.scrollTop = 9999999;
                })
            }
        })
    }
    async componentDidMount() {
        const _this = this;
        window.obj = {};
        await Http.get('wx_im_sdk', (result) => {
            obj = result.data;
        })

        const time = setInterval(() => {
            // _this.weixin();
            console.log(window.JMessage);
            window.JIM = new JMessage({ debug: true });
            window.JIM.init(obj).onSuccess(function (data) {
                console.log(data, 'wx_im_sdk成功')
                window.JIM.login({
                    'username': _this.props.user.Info.wxJmessageCode,
                    'password': '123456',
                }).onSuccess(function (data) {
                    window.clearInterval(time);
                    console.log(data, '登录成功');
                    JIM.onMsgReceive((data) => {
                        let list = Object.assign([], _this.state.list);
                        const obj = JSON.parse(data.messages[0].content.msg_body.text);
                        obj.content = expression(obj.content);
                        if (data) {
                            console.log(obj, '+++++++++');
                            let item = {
                                contentType: obj['type'],
                                content: {
                                    content: obj['type'] === 'text' ? obj.content : '',
                                    title: obj['title'] ? obj['title'] : '',
                                    url: obj['type'] != 'text' ? obj.url : obj.content,
                                },
                                ownerCode: obj.fromUser.potentialUserId,
                                dateShow: "",
                                lastTime: (new Date()).getTime(),
                                direction: obj.messageSource === 'h5' ? 0 : 1,  // 客户
                            }
                            list.push(item);
                            let myVideo = document.getElementById('video');
                            myVideo.play();
                            if (obj.fromUser.potentialUserId == _this.props.user.ownerCode) {
                                _this.setState({ list }, () => {
                                    document.getElementById('message').firstElementChild.scrollTop = 9999999;
                                });
                            }

                        }
                    })
                }).onFail(function (data) {
                    console.log(data, '登录失败')
                });
            }).onFail(function (data) {
                console.log(data, 'wx_im_sdk失败')
            });
        }, 2000, obj);
        sessionStorage.setItem("need-refresh", true);
        pushHistory();

        this.timing();
    }
    render() {
        const listItem = <ul id='messageU'>
            {this.state.list.map((item, i) => {
                return (
                    <li key={i}>
                        {item['time']
                            ? (
                                <p className={s.time}>
                                    <span>{item['time']}</span>
                                </p>)
                            : (
                                <div className={item.direction ? "" : s.main}>
                                    {item.direction
                                        ? <img className={s.avatar} src={this.state.user.ownerPicUrl ? this.state.user.ownerPicUrl : require("../images/Bin.jpg")} />
                                        : <img className={s.avatar} src={this.state.user.myPicUrl ? this.state.user.myPicUrl : require("../images/Bin.jpg")} />}
                                    {item.contentType === 'text'
                                        // ? <div className={s.text} dangerouslySetInnerHTML={item['content']['content']}></div>
                                        ? <div className={s.text} dangerouslySetInnerHTML={{ __html: item['content']['content'] }}></div>
                                        : ""}

                                    {item.contentType === 'image'
                                        ? <div><img src={item['content']['url']} /><div>{item['content']['title']}</div></div>
                                        : ""}

                                    {item.contentType === 'video'
                                        ? <div><video src={item['content']['url']} controls width="180px" height="140px"></video><p>{item['content']['title']}</p></div>
                                        : ""}

                                    {item.contentType === 'mpnews'
                                        ? (item.description
                                            ? <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                                            : <div className={s.text}><a href={item['content']['url']} target="_blank">{item['content']['title']}</a></div>)
                                        : ''}

                                    {item.contentType === 'news'
                                        ? (item.localUrl
                                            ? <div className={s.text}><a href={item['content']['url']} target="_blank">{item['content']['title']}</a></div>
                                            : <div dangerouslySetInnerHTML={{ __html: item.description }}></div>)
                                        : ""}

                                    {item.contentType === 'voice'
                                        ? <div style={{ overflow: 'hidden' }}><video src={item['content']['url']} controls width="160px" height="50px"></video><p>{item['content']['title']}</p></div>
                                        : ""}
                                </div>
                            )}
                    </li>
                );
            })}
        </ul>
        return (
            <div className={s.chatMain} id='chatMain'>
                {/* 消息列表 */}
                <section className={`${s.messageW}`}>
                    <div id='message' className={s.message}>
                        <PullToRefresh
                            ref={el => this.ptr = el}
                            style={{
                                height: this.state.height,
                                overflow: 'auto',
                            }}
                            refreshing={this.state.refreshing}
                            onRefresh={this.refresh.bind(this)}
                        >
                            {listItem}
                        </PullToRefresh>

                    </div>
                </section>
                {/* 聊天框 */}

                <div className={s.send} id='msgBox'>
                    <div>
                        <textarea type="text" placeholder="" name="content" id='textarea'
                            onBlur={this.keyBlur.bind(this)}
                            onChange={this.textareaChange.bind(this)}
                            onClick={this.textareaClick.bind(this)}
                            value={this.state.textarea}></textarea>
                        <div className={s.sendTit}>
                            <span className={s.iconfont} alt='表情包' onClick={this.openEmoji.bind(this)}>&#xe6a1;</span>
                            <span className={s.iconfont} alt='常见对白/内容' onClick={this.oftenClick.bind(this)}>&#xe619;</span>
                            <span className={`${s.iconfont} ${this.state.textarea.length ? s.hide : s.lShow}`} alt='图片上传'>&#xe610;</span>
                            {!this.state.confirmImgShow 
                                ? <input className={this.state.textarea.length ? s.hide : s.lShow} id='media' type="file" accept="image/jpeg, image/png" onChange={this.imgChange.bind(this)} />
                                : ''}
                            
                            <button className={`${s.fr} ${this.state.textarea.length ? s.lShow : s.hide}`} onClick={(e) => this.sends(e, "enter")}>发送</button>
                        </div>
                    </div>
                    <div className={this.state.showEmoji ? s.hshwo : s.hhide}>
                        {/* <div> */}
                        <Emoji show={this.state.showEmoji} check={this.checkEmoji.bind(this)} />
                    </div>
                    <div className={s.often}>
                        <Often
                            show={this.state.showOften}
                            dealerCode={this.props.user.Info.dealerCode}
                            data={this.state.user.comText}
                            search={this.state.textarea}
                            check={this.checkOften.bind(this)} />
                    </div>
                </div>

                {/* 选取图片发送确认 */}
                <div className={`${s.confirmSend} ${this.state.confirmImgShow ? s.show : s.hide}`}>
                    <div>
                        <p>确认发送当前图片？</p>
                        <img src={this.state.imgPath} />
                        <p>
                            <span onClick={() => { this.setState({ confirmImgShow: false }) }}>取消</span>
                            <span onClick={() => { this.setState({ confirmImgShow: false }); this.sendImage() }}>确定</span>
                        </p>
                    </div>
                </div>

                <div>{/*消息声音提示*/}
                    <video id='video'  style={{ width: 0, height: 0 }}>
                        <source src={DiDi} type="video/ogg" />
                    </video>
                </div>
            </div>
        );
    }

    search(e) { }
    // componentWillReceiveProps() { }
    link(str) {
        // var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/ig
        // return str.replace(reg, '<a className={s.link" target="_bank" href="$1$2">$1$2</a>')
    }
    time(date, prevDate) {
        // console.log(date,prevDate)
        let Interval = 2 * 60 * 1000;//区间
        let _date = new Date(date);
        let _prevDate = new Date(prevDate);
        let ret = _date.getTime() - _prevDate.getTime();
        if (ret >= Interval) {
            return _date.getFullYear() + "-" + (_date.getMonth() + 1) + "-" + _date.getDate();
        };
        return "";
    }
    validate() {
        const str = this.state.textarea;
        if (str.trim().length <= 0) {
            return false;
        } else {
            return true;
        }
    }
    save() {
        if (isSend) {
            return !1;
        }
        isSend = true;
        const _this = this;
        const query = {
            jmessageCode: this.props.user.Info.wxJmessageCode,
            toUserName: this.props.user.ownerCode,
            fromUserName: String(this.props.user.userId),
            dateShow: "0",
            msgType: "text",
            content: this.state.textarea,
        }
        const appMsg = Object.assign({}, {
            contentType: curInputType,
            content: {
                url: curUrl,
                content: this.state.textarea,
                title: this.state.textarea,
            },
            crtTime: "",
            dateShow: "",
            lastTime: (new Date()).getTime(),
            direction: 0,  // 自己
        })
        let list = Object.assign([], this.state.list) || [];
        const lastTime = (new Date()).getTime();
        if ((lastTime - this.state.lastTime) > 300000) {
            const time = this.getNowFormatDate();
            // list.push({ lastTime: time })
        }

        const parmas = {
            jmessageCode: this.props.user.Info.wxJmessageCode,
            mediaId: this.state.ofentObj.mediaId,
            fromUserName: Number(this.props.user.userId),
            toUserName: this.props.user.ownerCode,
            msgType: this.state.ofentObj.contentType,
            url: this.state.ofentObj.url,
            title: this.state.ofentObj.content,
        }
        this.state.ofentObj.contentType === 'text' ? parmas['content'] = this.state.textarea : !1;
        if (!this.props.user.ownerCode) {
            return alert('请选择聊天对象！');
        }

        Http.post('wx_sendMessage', this.state.ofentObj.media ? parmas : query, (result) => {  // 发送消息接口
            if (result.returnFlag === 200) {
                list.push(appMsg);
                this.timing();
                this.setState({ list, lastTime, textarea: "", ofentObj: { media: false } }, () => {
                    setTimeout(() => {
                        const height = document.body.offsetHeight - document.querySelector('#msgBox').offsetHeight;
                        document.getElementById('message').firstElementChild.scrollTop = 9999999;
                        document.querySelector('section').style.height = height + 'px';
                        _this.setState({ height })
                    }, 500);

                });
            } else if (result.returnFlag === 0) {
                Toast(result.errorMsg);
            }
            isSend = false;
        });
        this.keyBlur();
    }
    enter(e) {
        let { ACTIONS, _user, _currentId } = this.props;
        let { name, value } = e.target;
        let { content } = this.state;
        if (e.keyCode === 13 && !this.validate()) {
            return false;
        } else if (e.ctrlKey && e.keyCode === 13) {
            value = value + "\n";
            e.target.value = value;
            this.setState({
                [`${name}`]: value
            });
            return false;
        };
        if ((content.trim().length && e.keyCode === 13)) {
            this.save();
            return false;
        };
        this.setState({
            [`${name}`]: value
        });
    }
    sends(e) {
        this.save();
    }
    // 打开表情包 组件触发
    openEmoji() {
        this.setState({ showOften: false, showEmoji: !this.state.showEmoji }, () => {
            const height = document.body.offsetHeight - document.querySelector('#msgBox').offsetHeight;
            document.getElementById('message').firstElementChild.scrollTop = 9999999;
            document.querySelector('section').style.height = height + 'px';
            this.setState({ height })
        })
    }
    // 选中表情 组件cllabakc
    checkEmoji(v) {
        let currentTextarea = this.state.textarea;
        let len = currentTextarea.length;
        currentTextarea = currentTextarea.slice(0, this.state.textareaCursor) + v + currentTextarea.slice(this.state.textareaCursor, len);
        this.setState({ showEmoji: false });
        this.setState({ textarea: currentTextarea })
    }
    // 选中常见对白/内容 组件cllabakc
    checkOften(val) {
        // const type = Object.prototype.toString.call(val.content);
        // if(type === '[object Object]'){
        //     this.setState({ textarea: val.content.content})
        // }else{
        //     // this.setState({ textarea: val.content || '', ofentObj: val });
        // }
        this.setState({ textarea: val.content || '', ofentObj: val });
        curInputType = val['contentType'] || 'text';
        if (val['contentType'] != "text") {
            curUrl = val['url'];
        } else {
            curUrl = val['content'];
        }
        console.log(val)
    }
    // 输入框值发生变化
    textareaChange(event) {
        const input = event.target;
        event.target.style.height = event.target.scrollHeight + 'px';
        this.setState({ textarea: event.target.value }, () => {
        });
        curInputType = 'text';
        curUrl = input;
        this.getPosition(event);
    }
    keyBlur(event) {
        const height = document.body.offsetHeight - document.querySelector('#msgBox').offsetHeight;
        document.querySelector('section').style.height = height + 'px';
        document.body.scrollTop = height;
        document.getElementById('chatMain').scrollTop = height;
        this.setState({ height });
    }
    // 输入框 click
    textareaClick(event) {
        this.getPosition(event);
    }
    // 获取光标位置
    getPosition(e) {
        this.state.textareaCursor = e.target.selectionStart;
        console.log(this.state.textareaCursor)
    }
    oftenClick() {
        const _this = this;
        this.setState({ showEmoji: false, showOften: !this.state.showOften }, () => {
            setTimeout(() => {
                const height = document.body.offsetHeight - document.querySelector('#msgBox').offsetHeight;
                document.getElementById('message').firstElementChild.scrollTop = 9999999;
                document.querySelector('section').style.height = height + 'px';
                _this.setState({ height })
            }, 500)

        });
    }
    refresh() {
        const params = Object.assign({}, this.state.params);
        ++params.pageCurrent;
        this.setState({ refreshing: true, params }, () => {
            this.chatTalk();
        });
        setTimeout(() => {
            this.setState({ refreshing: false });
        }, 1000);
    }
    manyClick() { }
    destroy() { }
    getNowFormatDate() {
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        let time = hours + ':' + (minutes >= 9 ? minutes : '0' + minutes)
        return time;
    }
    // 选择图片上传
    fileChange(e) {
        const _this = this;
        if (this.state.wxAuth) {
            wx.checkJsApi({
                jsApiList: ['chooseImage', 'uploadImage', 'previewImage', 'getLocalImgData'],// 需要检测的JS接口列表，所有JS接口列表见附录2,
                success: function (res) {
                    // 以键值对的形式返回，可用的api值true，不可用为false
                    // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
                    var check = res.checkResult.chooseImage;
                    if (check) {
                        wx.chooseImage({
                            count: 1, // 默认9
                            sizeType: ['original', 'compressed'],  // 可以指定是原图还是压缩图，默认二者都有
                            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                            success: function (res) {
                                var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                                wx.uploadImage({
                                    localId: localIds[0],
                                    isShowProgressTips: 1,
                                    success: function (res) {
                                        _this.sendImage(res.serverId);
                                        if (window.__wxjs_is_wkwebview) {
                                            wx.getLocalImgData({
                                                localId: localIds[0], // 图片的localID
                                                success: (res) => { },
                                                fail: (res) => { },
                                                compvare: (res) => { },

                                            })
                                        }
                                    },
                                    fail: function (res) {
                                        alert("发送图片失败");
                                    }
                                });
                            },
                            fail: function (res) {
                                alert("该版本不支持发送图片");
                            }
                        });

                    } else {
                        alert("该版本不支持发送图片");
                    }
                }
            });
        } else {
            alert("该版本不支持发送图片");
        }

    }

    weixin() {
        const _this = this;
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            beta: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: WECHAT_SERVER_CONF.corpid, // 必填，企业号的唯一标识，此处填写企业号corpid
            timestamp: 1414587457, // 必填，生成签名的时间戳
            nonceStr: "Wm3WZYTPz0wzccnW", // 必填，生成签名的随机串
            signature: '0f9de62fce790f9a083d5c99e95740ceb90c27ed',// 必填，签名，见附录1
            jsApiList: ['chooseImage', 'uploadImage', 'getLocalImgData'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        wx.error(function (res) {
            console.log("wx:error" + JSON.stringify(res));
            _this.setState({ wxAuth: false });
        });
        wx.ready(function () {
            wx.hideOptionMenu();
            _this.setState({ wxAuth: true });
        });
    }

    imgChange(e) {
        formData = new FormData();
        const userId = this.props.user.userId;
        const ownerCode = this.props.user.ownerCode;
        const imgPath = this.getObjectURL(e.target.files[0]);
        this.setState({ showOften: false, showEmoji: false, confirmImgShow: true, imgPath });
        formData.append('jmessageCode', this.props.user.Info.wxJmessageCode);
        formData.append('ownerCode', ownerCode);
        formData.append('userId', userId);
        formData.append('file', e.target.files[0]);
    }
    sendImage(e) {
        if (isSend) {
            return !1;
        }
        isSend = true;
        const _this = this;
        const appMsg = Object.assign({}, {
            contentType: 'image',
            content: {
                content: '',
                title: '',
                url: this.state.imgPath,
            },
            crtTime: "",
            dateShow: "",
            lastTime: (new Date()).getTime(),
            direction: 0,  // 自己
        })
        let list = Object.assign([], this.state.list) || [];
        list.push(appMsg);
        const senImgUrl = Http.getApi('wx_sendimage');
        $.ajax({
            url: senImgUrl,
            type: 'POST',
            cache: false,
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {
                if (res.returnFlag === 200) {
                    _this.timing();
                    _this.setState({ list, lastTime: (new Date()).getTime() }, () => {
                        setTimeout(() => {
                            const height = document.body.offsetHeight - document.querySelector('#msgBox').offsetHeight;
                            document.getElementById('message').firstElementChild.scrollTop = 9999999;
                            document.querySelector('section').style.height = height + 'px';
                            _this.setState({ height })
                        }, 500);
                    });
                } else {
                    Toast(res.errorMsg);
                }
                isSend = false;
            }
        });
    }
    getObjectURL(file) {
        var url = null;
        if (window.createObjectURL != undefined) { // basic
            url = window.createObjectURL(file);
        } else if (window.URL != undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(file);
        }
        return url;
    }
    weixin() {
        const _this = this;
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            beta: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: WECHAT_SERVER_CONF.corpid, // 必填，企业号的唯一标识，此处填写企业号corpid
            timestamp: 1414587457, // 必填，生成签名的时间戳
            nonceStr: "Wm3WZYTPz0wzccnW", // 必填，生成签名的随机串
            signature: '0f9de62fce790f9a083d5c99e95740ceb90c27ed',// 必填，签名，见附录1
            jsApiList: ['chooseImage', 'uploadImage', 'getLocalImgData'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        wx.error(function (res) {
            console.log("wx:error" + JSON.stringify(res));
            _this.setState({ wxAuth: false });
        });
        wx.ready(function () {
            wx.hideOptionMenu();
            _this.setState({ wxAuth: true });
        });
    }

    

}




export default withStyles(s)(messages);
