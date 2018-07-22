# DMC-ENTAPP
基于flow／reactjs／的微信企业号经销商平台

# 拉代码
cd /home/DMC-ENTAPP/
git checkout master
git pull
git pull https://gitee.com/dongooo/DMC-ENTAPP.git


1.切换至项目根目录  
项目打包：yarn run build -- --release --docker 
构建：docker build -t dmc-entapp:deploy2018.01.030 .  
打TAG：docker tag dmc-entapp:deploy2018.01.030 registry.cn-hangzhou.aliyuncs.com/dmcfed/dmc-entapp:deploy2018.01.030 
登录：docker login --username=szyx@yonyou.com registry.cn-hangzhou.aliyuncs.com  
username:szyx@yonyou.com  
password:qwe123qwe  
上传：docker push registry.cn-hangzhou.aliyuncs.com/dmcfed/dmc-entapp:deploy2018.01.030  
下载：sudo docker pull registry.cn-hangzhou.aliyuncs.com/dmcfed/dmc-entapp:deploy2018.01.030  

2.运行容器  
sudo docker run --name dmc-entapp-deploy2018.01.030 -d -p 9200:9100 registry.cn-hangzhou.aliyuncs.com/dmcfed/dmc-entapp:deploy2018.01.030  
-d表示后台运行  
-p 9200:9100表示指定本地的9200端口隐射到容器内的9100端口  
 dmc-entapp:2018.01.030为我们要运行的镜像  


3.查看docker进程  
docker ps -a

4.查看容器内应用进程的日志  
docker logs <container id>


5.查看本地的docker镜像  
docker images

6.启动容器运行  
docker start <container id>

7.重启容器运行  
docker restart <container id>

8.停止容器运行  
docker stop <container id>

9.删除运行中的容器  
docker rm <container id> -f  

10.删除本地镜像  
docker rmi <image id> -f  
  
11.查看容器重启次数  
docker inspect -f "{{ .RestartCount }}" dmc-entapp-deploy2018.01.030  
  
12.查看容器最后一次启动时间  
docker inspect -f "{{ .State.StartedAt }}" dmc-entapp-deploy2018.01.030
  
13.查看容器内应用进程的实时日志  
sudo docker logs -f -t --since="2017-12-21" --tail=50 dmc-entapp-deploy2018.01.030


# redis 相关  
1.下载redis镜像  
docker pull redis  

2.运行redis 
docker run --name ent-redis -d --restart=always -p 6379:6379 redis redis-server --appendonly yes  --requirepass dmcfed321  

  
