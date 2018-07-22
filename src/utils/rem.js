/**
 * Created by dongooo on 2017/4/14.
 * 移动端使用rem适配
 */

(function(doc, win) {
  let docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      let clientWidth = docEl.clientWidth;
      let clientHeight = docEl.clientHeight;
      let rootSize = clientWidth>clientHeight?clientHeight:clientWidth; 
      if (!rootSize) return;
      docEl.style.fontSize = 20 * (rootSize / 320) + 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
