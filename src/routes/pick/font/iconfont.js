(function(window){var svgSprite='<svg><symbol id="icon-fangdajing" viewBox="0 0 1024 1024"><path d="M968.312188 899.781884 699.172425 630.643144c24.303522-28.03552 43.899836-59.483766 58.405201-93.780897 18.467607-43.657312 27.830859-90.020246 27.828812-137.797389 0-47.777143-9.361205-94.139054-27.828812-137.798413-17.830087-42.156122-43.349297-80.011288-75.852572-112.51354-32.500205-32.501228-70.356394-58.022485-112.51354-75.852572-43.658336-18.46556-90.0182-27.828812-137.795343-27.828812-47.778166 0-94.139054 9.362228-137.798413 27.828812-42.157145 17.830087-80.011288 43.35032-112.51354 75.852572-32.502251 32.502251-58.022485 70.357418-75.852572 112.51354-18.466584 43.658336-27.829835 90.02127-27.828812 137.798413-0.001023 47.777143 9.362228 94.140077 27.827789 137.799436 17.831111 42.155099 43.351344 80.010265 75.853595 112.511493s70.357418 58.024531 112.51354 75.854619c43.658336 18.46556 90.02127 27.828812 137.799436 27.828812 47.777143 0 94.140077-9.363252 137.796366-27.828812 34.295084-14.507412 65.742307-34.103726 93.777827-58.407248l269.14181 269.136693c4.994758 4.995781 11.542894 7.492648 18.09103 7.492648 6.54609 0 13.095249-2.496867 18.090007-7.492648C978.30375 925.970336 978.301703 909.771399 968.312188 899.781884zM431.414125 701.894931c-80.887238 0-156.934239-31.500435-214.131939-88.698135-57.196677-57.198723-88.696088-133.242653-88.696088-214.131939 0.001023-80.888262 31.500435-156.935262 88.697111-214.131939 57.196677-57.195653 133.243677-88.696088 214.131939-88.696088 80.888262 0.001023 156.933215 31.500435 214.131939 88.697111 57.1977 57.196677 88.696088 133.243677 88.696088 214.131939 0 80.889285-31.501458 156.933215-88.698135 214.130915C588.348364 670.394497 512.301364 701.894931 431.414125 701.894931z"  ></path></symbol><symbol id="icon-loudou" viewBox="0 0 1024 1024"><path d="M491.392 952.896l-105.557333 0-1.813333-336.832L30.741333 270.229333l909.290667 0-351.573333 342.272 0 278.677333L491.392 952.896 491.392 952.896zM407.061333 931.562667l78.122667 0 81.92-52.074667L567.104 603.498667l320.426667-311.957333L83.029333 291.541333l322.282667 315.52L407.061333 931.562667 407.061333 931.562667z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)