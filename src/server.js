/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import React from 'react';
import ReactDOM from 'react-dom/server';
import PrettyError from 'pretty-error';
import App from './components/App';
import Html from './components/Html';
import { ErrorPageWithoutStyle } from './routes/error/ErrorPage';
import errorPageStyle from './routes/error/ErrorPage.css';
import createFetch from './createFetch';
// import passport from './passport';
import router from './router';
// import models from './data/models';
// import schema from './data/schema';
import assets from './assets.json'; // eslint-disable-line import/no-unresolved
import configureStore from './store/configureStore';
import { setRuntimeVariable } from './actions/runtime';
import config from './config';
import { debug } from 'util';
import proxyDispatcher from './middleware/proxy';
import http from 'http';
import io from 'socket.io';
import { setTimeout } from 'timers';
import Eureka from 'eureka-js-client';


//import socket from './middleware/socket';
// import schedule from './middleware/schedule';

const app = express();
// var httpServer = http.createServer(app).listen('9010');

// io(httpServer).on('connection', function (socket) {
//   socket.on('searchMsg', function (data) {
//     //触发推送日志pushMsg
//     // todo 'searchMsg'   
//   });

//   //推送日志
//   socket.on('pushMsg',function(data){
//     console.log('--------pushMsg------',data);
//   })

//   setInterval(function(){
//     socket.broadcast.emit('pushMsg', {
//       username: 123,
//       message: 'isok'
//     });
//   },5000)

// });

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// 加入定时器
// app.use(schedule);
//
// Eureka注册
// -----------------------------------------------------------------------------
// const eurekaClient =  new Eureka({
//   instance: {
//     app: 'DMC-WECHAT-ENTAPP',
//     hostName: 'DMC-WECHAT-ENTAPP',
//     ipAddr: '127.0.0.1',
//     port: {
//         '$': 9,
//         '@enabled': 'true',
//     },
//     vipAddress: 'DMC-WECHAT-ENTAPP',
//     dataCenterInfo: {
//         '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
//         name: 'MyOwn',
//     }
//   },
//   eureka: {
//       // host: '47.96.177.74',
//       host: '10.180.8.212',
//       port: 8761,
//       servicePath: '/eureka/apps/'
//   }
// })
// eurekaClient.start(function(error){
//   console.log(error || 'complete');
// });
// cors
app.use((err, req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
});

if (__DEV__) {
  app.enable('trust proxy');
}

// 拦截所有的请求
app.use(proxyDispatcher);

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async (req, res, next) => {
  try {

    const css = new Set();

    const initialState = {
      user: req.user || null,
    };

    const store = configureStore(initialState, {
      fetch,
      // I should not use `history` on server.. but how I do redirection? follow universal-router
    });

    // store.dispatch(
    //   setRuntimeVariable({
    //     name: 'initialNow',
    //     value: Date.now(),
    //   }),
    // );

    // Global (context) variables that can be easily accessed from any React component
    // https://facebook.github.io/react/docs/context.html
    const context = {
      // Enables critical path CSS rendering
      // https://github.com/kriasoft/isomorphic-style-loader
      insertCss: (...styles) => {
        // eslint-disable-next-line no-underscore-dangle
        styles.forEach(style => css.add(style._getCss()));
      },
      // Universal HTTP client
      fetch: createFetch(fetch, {
        baseUrl: config.api.serverUrl,
        cookie: req.headers.cookie,
      }),
    };

    const route = await router.resolve({
      ...context,
      pathname: req.path,
      query: req.query,
    });

    if (route.redirect) {
      res.redirect(route.status || 302, route.redirect);
      return;
    }

    const data = { ...route };
    data.children = ReactDOM.renderToString(
      <App context={context}>{route.component}</App>,
    );
    data.styles = [{ id: 'css', cssText: [...css].join('') }];
    data.scripts = [assets.vendor.js];
    if (route.chunks) {
      data.scripts.push(...route.chunks.map(chunk => assets[chunk].js));
    }
    data.scripts.push(assets.client.js);
    data.app = {
      apiUrl: config.api.clientUrl,
    };

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    res.status(route.status || 200);
    res.send(`<!doctype html>${html}`);
  } catch (err) {
    next(err);
  }
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {

  res.header('Access-Control-Allow-Origin', '*');

  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={err.message}
      styles={[{ id: 'css', cssText: errorPageStyle._getCss() }]} // eslint-disable-line no-underscore-dangle
    >
      {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err} />)}
    </Html>,
  );
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
if (!module.hot) {

  app.listen(config.port, () => {
    console.info(`The server is running at http://localhost:${config.port}/`);
  });

}

//
// Hot Module Replacement
// -----------------------------------------------------------------------------
if (module.hot) {
  app.hot = module.hot;
  module.hot.accept('./router');
}

export default app;
