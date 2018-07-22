#!/bin/bash
command git pull origin master
echo '【1/5】代码拉取成功================================================================='
command yarn run build -- --release --docker
echo '【2/5】项目打包完成================================================================='
command docker build -t dmc-entapp:deploy2018.01.030 .
echo '【3/5】项目构建完成================================================================='
command docker tag dmc-entapp:deploy2018.01.030 registry.cn-hangzhou.aliyuncs.com/dmcfed/dmc-entapp:deploy2018.01.030 
echo '【4/5】打TAG完成================================================================='
command docker push registry.cn-hangzhou.aliyuncs.com/dmcfed/dmc-entapp:deploy2018.01.030  
echo '【5/5】镜像上传完成================================================================='