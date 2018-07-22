// 代理路由转发
import express from 'express';
import path from 'path';
import {ROUTE_BASE_PATH} from './config';
import wechatHandler from './handlers/wechatHandler';
import mockHandler from './handlers/mockHandler';
import mockChat from './handlers/mock.chat';
import pmHandler from './handlers/pmHandler';
import healthHandler from './handlers/healthHandler';
import gatewayHandler from './handlers/gatewayHandler';
const options = {'caseSensitive': true, 'strict': true};
const proxyDispatcher = express.Router(options);


mockChat(proxyDispatcher);
mockHandler(proxyDispatcher);
pmHandler(proxyDispatcher);
wechatHandler(proxyDispatcher);
healthHandler(proxyDispatcher);

gatewayHandler(proxyDispatcher);

proxyDispatcher.use(`${ROUTE_BASE_PATH}/*`,proxyDispatcher,(err, req, res, next) => {

    if (err instanceof URIError) {
        return next();
    }

    throw err;
});

export default proxyDispatcher;

