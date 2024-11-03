---
title: 配置nginx实现端口转发
date: 2020-04-08
tags:
 - nginx
 - ngrok
categories:
 - nginx
---

## 1. 为什么要配置nginx

当我们在服务器上搭建多个应用的时候，我们会发现一个端口只能被一个程序使用，这时候如何该怎么办呢？

一个常用的方法就是用 Nginx 进行端口转发

## 2. linux安装nginx
1. 安装依赖
```
yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel
```
2. 下载nginx的tar包
```
cd /usr/local

//创建文件夹
mkdir nginx

cd nginx

//下载tar包
wget http://nginx.org/download/nginx-1.13.7.tar.gz

tar -xvf nginx-1.13.7.tar.g
```
3. 安装nginx
```
cd /usr/local/nginx
./configure
```
```
make

make install
```
4. 启动、停止nginx
```
cd /usr/local/nginx/sbin/

./nginx

./nginx -s stop //Stop 是快速关闭，不管有没有正在处理的请求

./nginx -s quit //Quit 是一个优雅的关闭方式，Nginx在退出前完成已经接受的连接请求

./nginx -s reload
```
如果80端被占用
```
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
```

## 3. 简单配置nginx
```
cd /usr/local/nginx/conf/

//编辑nginx.conf
vi nginx.conf

//引入自定义文件 
//下面配置的test.conf 在http {} 内引入
include vhost/*.conf
```
![20200408204641.png](https://raw.githubusercontent.com/mail-img/picBed/master/blog/img/picgo/20200408204641.png)

在/usr/local/nginx/conf目录新建vhost文件夹
```
mkdir vhost

//创建每个域名的配置
sudo vim test.conf
```
test.conf文件里配置负载均衡池
```
#Demo1负载均衡池
upstream test1_pool{
    server 127.0.0.1:8001;
}
#Demo2负载均衡池
upstream test2_pool{
    server 127.0.0.1:8002;
}

#Demo1端口转发
server {
    listen 80;
    server_name  test1.abc.com;
    access_log logs/test1.log;
    error_log logs/test1.error;
    #将所有请求转发给test1_pool池的应用处理
    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://test1_pool;
    }
}
#Demo2端口转发
server {
    listen  80;
    server_name  test2.abc.com;
    access_log logs/test2.log;
    error_log logs/test2.error;
    #将所有请求转发给test2_pool池的应用处理
    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://test2_pool;
    }
}
```
为ngrok配置端口转发, -httpAddr=":8888"，参考：[服务器上搭建自己的ngrok服务](./ngrok.md)
```
server {
    listen 80;
    server_name *.ngrok.abc.com ngrok.abc.com;
    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host  $http_host:8888;
        proxy_set_header X-Nginx-Proxy true;
        proxy_set_header Connection "";
        proxy_pass http://127.0.0.1:8888;
    }
}
```
配置好test.conf就可以重启nginx了
```
cd /usr/local/nginx/sbin/

./nginx -s reload
```
此时，当用户访问地址 test1.abc.com 时， 将会自动将其请求转发给端口号为 8001 的应用处理

当用户访问地址 test2.abc.com 时， 将会自动将其请求转发给端口号为 8002 的应用处理

参考资料：
- [linux安装nginx](https://www.cnblogs.com/jimisun/p/8057156.html)
- [Nginx 实现端口转发](https://www.cnblogs.com/zhaoyingjie/p/7248678.html)