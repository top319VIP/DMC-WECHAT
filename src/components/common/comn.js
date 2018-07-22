
/**
 * 表情包转换
 * @param {String} str 
 */
export const expression = str => {
    const imgUrl = 'http://lincoln-mp.yonyouauto.com/pc/assets/images/';
    const repArr = [/\/::\)/g, '微笑.png', /\/::~/g, '伤心.png', /\/::B/g, '美女.png', /\/::\|/g, '发呆.png', /\/:8-\)/g, '墨镜.png', /\/::</g, '大哭.png', /\/::\$/g, '羞.png', /\/::X/g, '闭嘴.png', /\/::Z/g, '睡.png', /\/::'\(/g, '哭.png', /\/::-\|/g, '尴尬.png', /\/::@/g, '怒.png', /\/::P/g, '调皮.png', /\/::D/g, '龇牙.png', /\/::O/g, '惊讶.png', /\/::\(/g, '难过.png', /\/::\+/g, '酷.png', /\/:–b/g, '囧.png', /\[囧\]/g, '囧.png', /\/::Q/g, '抓狂.png', /\/::T/g, '吐.png', /\/:,@P/g, '偷笑.png', /\/:,@-D/g, '愉快.png', /\/::d/g, '白眼.png', /\/:,@o/g, '傲慢.png', /\/::g/g, '饥饿.png', /\/:\|-\)/g, '困.png', /\/::!/g, '吓.png', /\/::L/g, '汗.png', /\/::\>/g, '高兴.png', /\/::,@/g, '闲.png', /\/:,@f/g, '奋斗.png', /\/::-S/g, '咒骂.png', /\/:\?/g, '疑问.png', /\/:,@x/g, '虚.png', /\/:,@@/g, '晕.png', /\/:,@!/g, '哀.png', /\/:!!!/g, '鬼.png', /\/:xx/g, '打击.png', /\/:bye/g, '拜拜.png', /\/:wipe/g, '汗.png', /\/:dig/g, '抠鼻.png', /\/:handclap/g, '鼓掌.png', /\/:&-\(/g, '糗.png', /\/:B-\)/g, '坏笑.png', /\/:\<@/g, '左亨.png', /\/:@>/g, '右哼.png', /\/::-O/g, '困.png', /\/:\>\-\|/g, '看.png', /\/:P-\(/g, '委屈.png', /\/::'\|/g, '想哭.png', /\/:X-\)/g, '阴险.png', /\/::\*/g, '亲亲.png', /\/:@x/g, '吓.png', /\/:8\*/g, '可怜.png', /\/:pd/g, '刀.png', /\/:<W>/g, '西瓜.png', /\/:beer/g, '啤酒.png', /\/:basketb/g, '篮球.png', /\/:oo/g, '拼乓.png', /\/:coffee/g, '咖啡.png', /\/:eat/g, '吃饭.png', /\/:pig/g, '猪头.png', /\/:rose/g, '鲜花.png', /\/:fade/g, '枯萎.png', /\/:showlove/g, '唇.png', /\/:heart/g, '爱.png', /\/:break/g, '心碎.png', /\/:cake/g, '生日.png', /\/:li/g, '闪电.png', /\/:bome/g, '炸弹.png', /\/:kn/g, '小刀.png', /\/:ladybug/g, '虫.png', /\/:footb/g, '足球.png', /\/:shit/g, '臭.png', /\/:moon/g, '月亮.png', /\/:sun/g, '太阳.png', /\/:gift/g, '礼物.png', /\/:hug/g, '伙伴.png', /\/:strong/g, '赞.png', /\/:weak/g, '差.png', /\/:share/g, '握手.png', /\/:v/g, '优.png', /\/:@\)/g, '恭.png', /\/:jj/g, '勾.png', /\/:@@/g, '顶.png', /\/:bad/g, '坏.png', /\/:lvu/g, 'lvu.png', /\/:no/g, 'no.png', /\/:ok/g, '好的.png', /\/:love/g, 'love.png', /\/:\<L\>/g, 'l吻.png', /\/:jump/g, '跳.png', /\/:shake/g, '怕.png', /\/:\<O\>/g, '尖叫.png', /\/:circle/g, '圈.png', /\/:kotow/g, '拜.png', /\/:turn/g, '天使.png', /\/:skip/g, '跳跳.png', /\[挥手\]/g, '天使.png', /\/:\#-0/g, '激动.png', /\[街舞\]/g, '舞.png', /\/:kiss/g, 'kiss.png', /\/:\<&/g, '瑜伽.png', /\/:&\>/g, '太极.png'];
    if (typeof str !== 'string') return !1;
    repArr.forEach((e, i) => {
        if (i % 2 === 0) {
            str = str.replace(e, `<img src="${imgUrl}${repArr[i + 1]}" />`);
        }
    })
    return str;
}

// 解决IOS微信页面后退无法刷新
export const pushHistory = () => {
    if (window.__wxjs_is_wkwebview) {
        window.addEventListener("popstate", function (e) {
            //这里监听到了后退事件
            self.location.reload();
        }, false);
        var state = {
            title: "",
            url: "#"
        };
        window.history.replaceState(state, "", "#");
    }
}

/**
 * 消息提示层
 * @param {String} message 
 */
export const Toast = message => {
    let Toast = document.createElement('div');
    let ToastSpan = document.createElement('span');
    Toast.style.position = 'absolute';
    Toast.style.zIndex = 99;
    Toast.style.top = 0;
    Toast.style.left = 0;
    Toast.style.right = 0;
    Toast.style.bottom = 0;
    ToastSpan.style.position = 'absolute';
    ToastSpan.style.color = 'white';
    ToastSpan.style.backgroundColor = 'rgba(0,0,0,.4)';
    ToastSpan.style.top = '50%';
    ToastSpan.style.left = '50%';
    ToastSpan.style.transform = 'translate(-50%,-50%)';
    ToastSpan.style.borderRadius = '5px';
    ToastSpan.style.padding = '.2rem .5rem';
    ToastSpan.innerHTML = message;
    Toast.appendChild(ToastSpan);
    document.body.appendChild(Toast);
    setTimeout(() => {
        document.body.removeChild(Toast)
    }, 1500);
}