/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '/',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    {
      path: '/home',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    {
      path: '/ocs',
      load: () => import(/* webpackChunkName: 'ocs' */ './ocs'),
    },
    {
      path: '/drive',
      load: () => import(/* webpackChunkName: 'drive.list' */ './drive/drive.list'),
    },
    {
      path: '/drive/add',
      load: () => import(/* webpackChunkName: 'drive.add' */ './drive/drive.add'),
    },
    // {
    //   path: '/drive/resources',
    //   load: () => import(/* webpackChunkName: 'drive.resources' */ './drive/drive.resources'),
    // },
    {
      path: '/drive/dispatch',
      load: () => import(/* webpackChunkName: 'drive.dispatch' */ './drive/drive.dispatch'),
    },
    {
      path: '/drive/detail',
      load: () => import(/* webpackChunkName: 'drive.detail' */ './drive/drive.detail'),
    },
    {
      path: '/drive/receipt',
      load: () => import(/* webpackChunkName: 'drive.receipt' */ './drive/drive.receipt'),
    },
    {
      path: '/drive/confirm',
      load: () => import(/* webpackChunkName: 'drive.confirm' */ './drive/drive.confirm'),
    },
    {
      path: '/drive/startoff',
      load: () => import(/* webpackChunkName: 'drive.startoff' */ './drive/drive.startoff'),
    },
    {
      path: '/drive/todo',
      load: () => import(/* webpackChunkName: 'drive.todo' */ './drive/drive.todo'),
    },
    {
      path: '/drive/doing',
      load: () => import(/* webpackChunkName: 'drive.doing' */ './drive/drive.doing'),
    },
    {
      path: '/drive/done',
      load: () => import(/* webpackChunkName: 'drive.done' */ './drive/drive.done'),
    },
    {
      path: '/drive/feedback',
      load: () => import(/* webpackChunkName: 'drive.feedback' */ './drive/drive.feedback'),
    },
    {
      path: '/drive/cancel',
      load: () => import(/* webpackChunkName: 'drive.cancel' */ './drive/drive.cancel'),
    },
    {
      path: '/drive/order',
      load: () => import(/* webpackChunkName: 'driveOrder' */ './drive/order'),
    },
    {
      path: '/drive/orderDetail',
      load: () => import(/* webpackChunkName: 'driveOrderdetail' */ './drive/orderDetail'),
    },
    {
      path: '/drive/adviser',
      load: () => import(/* webpackChunkName: 'driveAdviser' */ './drive/adviser'),
    },
    {
      path: '/drive/complete',
      load: () => import(/* webpackChunkName: 'driveComplete' */ './drive/complete'),
    },
    {
      path: '/drive/testdrive',
      load: () => import(/* webpackChunkName: 'driveTest' */ './drive/testdrive'),
    },
    {
      path: '/drive/listDetail',
      load: () => import(/* webpackChunkName: 'driveListDetail' */ './drive/listDetail'),
    },
    {
      path: '/drive/resource',
      load: () => import(/* webpackChunkName: 'driveResource' */ './drive/resource'),
    },
    {
      path: '/register',
      load: () => import(/* webpackChunkName: 'register' */ './register'),
    },
    {
      path: '/customer',
      load: () => import(/* webpackChunkName: 'customer' */ './customer'),
    },
    {
      path: '/repair',
      load: () => import(/* webpackChunkName: 'repair' */ './repair'),
    },
    {
      path: '/personal',
      load: () => import(/* webpackChunkName: 'personal' */ './personal'),
    },
    {
      path: '/displayhall',
      load: () => import(/* webpackChunkName: 'displayhall' */ './displayhall'),
    },
    {
      path: '/displayhall/sub',
      load: () => import(/* webpackChunkName: 'displayhallSubClass' */ './displayhall/subClass'),
    },
    {
      path: '/displayhall/detailed',
      load: () => import(/* webpackChunkName: 'displayhallDetailed' */ './displayhall/detailed'),
    },
    {
      path: '/chat',
      load: () => import(/* webpackChunkName: 'chat' */ './chat'),
    },
    {
      path: '/chat/talk',
      load: () => import(/* webpackChunkName: 'chat.talk' */ './chat/chat.talk'),
    },
    {
      path: '/chat/antd',
      load: () => import(/* webpackChunkName: 'chat.antdTest' */ './chat/antdTest'),
    },
    {
      path: '/ssr',
      load: () => import(/* webpackChunkName: 'ssr' */ './ssr'),
    },
    {
      path: '/sos',
      load: () => import(/* webpackChunkName: 'sos' */ './sos'),
    },
    {
      path: '/pick',
      load: () => import(/* webpackChunkName: 'pick' */ './pick'),
    },
    {
      path: '/monit',
      load: () => import(/* webpackChunkName: 'monit' */ './monit'),
    },
    {
      path: '/pay',
      load: () => import(/* webpackChunkName: 'PAYMENT' */ './payment/pay'),
    },
    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'} | 经销商企业号`;
    route.description = route.description || '';

    
    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
