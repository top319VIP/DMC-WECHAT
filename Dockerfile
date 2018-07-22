FROM node:8.1.4

# 指定制作我们的镜像的联系人信息（镜像创建者）
MAINTAINER DMCFED

# Set a working directory
WORKDIR /usr/src/app

COPY ./build/package.json .
COPY ./build/yarn.lock .

# Install Node.js dependencies
RUN yarn install --production --no-progress

# Copy application files
COPY ./build .

# 配置环境变量
 ENV HOST 0.0.0.0
 ENV PORT 9100
 
 # 容器对外暴露的端口号
 EXPOSE 9100

# Run the container under "node" user by default
#USER node

CMD [ "node", "server.js" ]
