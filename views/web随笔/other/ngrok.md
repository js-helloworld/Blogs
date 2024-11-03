---
title: 服务器上搭建自己的ngrok服务
date: 2020-04-03
tags:
 - ngrok
categories:
 - ngrok
author:
 - 游城走不动
# sticky: 1
---
## 1. 什么是ngrok
- ngrok 是一个反向代理，通过在公共的端点和本地运行的 Web 服务器之间建立一个安全的通道。ngrok 可捕获和分析所有通道上的流量，便于后期分析和重放。
- 反向代理在计算机网络中是代理服务器的一种。服务器根据客户端的请求，从其关系的一组或多组后端服务器（如Web服务器）上获取资源，然后再将这些资源返回给客户端，客户端只会得知反向代理的IP地址，而不知道在代理服务器后面的服务器集群的存在。

ngrok是一个内网穿透的解决方案,允许您将本地计算机上运行的Web服务器公开到互联网

ngrok服务端会建立http和https服务，以及供客户端连接的服务，默认端口4443


## 2.如何部署ngrok

 ### 1.准备工作：
 - 一台公网服务器
 - 一个域名

 关于域名：
 ps:假设你的域名是 abc.com (全文皆使用此假设)

 我们可以使用顶级域名，如：abc.com，也可以使用二级域名，如：ngrok.abc.com，这取决你的需要

 本文使用二级域名（ngrok.abc.com）

 使用二级域名，需要先将二级域名(ngrok.abc.com)通过A记录解析到服务器域名。然后将三级域名（比如 test.ngrok）通过CNAME的方式解析到 ngrok.abc.com，如此ngrok.abc.com便成为了本地与服务端的连接域名，test.ngrok.abc.com则是映射域名

 我们映射本地服务的时候，访问的地址便是 test.ngrok.abc.com，解析配置参考如下：
![20200404184046](https://raw.githubusercontent.com/mail-img/picBed/master/blog/img/picgo/20200404184046.png)

 ### 2.开发配置ngrok

 1. 安装git 和Golang
 ```
 yum install build-essential golang mercurial git
 ```
 2. 进入存放代码位置，下载源码
 ```
 git clone https://github.com/inconshreveable/ngrok.git
 ```

 3. 我们先声明ngrok域名变量
 ```
export NGROK_DOMAIN="ngrok.abc.com"
 ```
 4. 生成证书（默认的证书是 ngrok.com，我们需要改成 ngrok.abc.com）
 ```
 cd ngrok

openssl genrsa -out rootCA.key 2048

openssl req -x509 -new -nodes -key rootCA.key -subj "/CN=$NGROK_DOMAIN" -days 5000 -out rootCA.pem

openssl genrsa -out device.key 2048

openssl req -new -key device.key -subj "/CN=$NGROK_DOMAIN" -out device.csr

openssl x509 -req -in device.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out device.crt -days 5000
 ```
 执行完上述命令，正常情况下，该目录会多出device.crt、device.csr、device.key、rootCA.key、rootCA.pem、rootCA.srl六个文件，用它们来替换默认的证书文件即可。默认的证书文件在“./assets/client/tls”和“./assets/server/tls/”目录中
 ```
 cp rootCA.pem assets/client/tls/ngrokroot.crt

 cp device.crt assets/server/tls/snakeoil.crt

 cp device.key assets/server/tls/snakeoil.key
 ```

 5. 开始编译双端的ngrok文件
- 编译ngrokd（服务器端）（此过程等待时间略长）
```
<!--linux服务端-->
 make release-server
```

编译完服务可以在./bin/目录中找到文件ngrokd

运行以下命令进行测试：
```
 ./bin/ngrokd -domain="$NGROK_DOMAIN" -httpAddr=":8888"
```
如果显示下面的内容则表示编译成功：
```
[17:27:36 CST 2020/04/03] [INFO] (ngrok/log.(*PrefixLogger).Info:83) [registry] [tun] No affinity cache specified
[17:27:36 CST 2020/04/03] [INFO] (ngrok/log.(*PrefixLogger).Info:83) [metrics] Reporting every 30 seconds
[17:27:36 CST 2020/04/03] [INFO] (ngrok/log.Info:112) Listening for public http connections on [::]:8888
[17:27:36 CST 2020/04/03] [INFO] (ngrok/log.Info:112) Listening for public https connections on [::]:443
[17:27:36 CST 2020/04/03] [INFO] (ngrok/log.Info:112) Listening for control and proxy connections on [::]:4443
[17:28:06 CST 2020/04/03] [INFO] (ngrok/log.(*PrefixLogger).Info:83) [metrics] Reporting: {"bytesIn.count":0,"bytesOut.count":0,"connMeter.count":0,"connMeter.m1":0,"httpTunnelMeter.count":0,"linux":0,"osx":0,"other":0,"tcpTunnelMeter.count":0,"tunnelMeter.count":0,"tunnelMeter.m1":0,"windows":0}
```
- Ctrl+C退出ngrokd，编译客户端
```
<!--Mac OS客户端-->
GOOS=darwin GOARCH=386 make release-client
GOOS=darwin GOARCH=amd64 make release-client

<!--windows客户端-->
GOOS=windows GOARCH=386 make release-client
GOOS=windows GOARCH=amd64 make release-client

```

编译完客户端，我们可以在./bin目录下看到相应的文件夹，下载对应系统的客户端到本地

6. 双端部署运行
- 启动服务端的ngrokd
```
./bin/ngrokd -domain="$NGROK_DOMAIN" -httpAddr=":8888" -httpsAddr=":443"
```
这里的8888指的是服务器启用8888端口,穿透后的域名为http://***.ngrok.abc.com:8888
ps:请注意8888端口是否开放

- 编写客户端配置文件
新建配置文件ngrok.cfg
```
server_addr: "ngrok.abc.com:4443"
trust_host_root_certs: false
```
运行客户端
```
ngrok -config=ngrok.cfg -subdomain=test 3000
```
这里的test是配置的子域名，3000为映射本地服务的端口，可以更改

注意：如果不加参数-subdomain=test，将会随机自动分配子域名。

访问地址为：test.ngrok.abc.com:8888

本地被映射地址：127.0.0.1:3000

客户端ngrok正常执行显示的内容
```
ngrok                                                  (Ctrl+C to quit)
Tunnel Status     online
Version           1.7/1.7
Forwarding        http://test.ngrok.abc.com:8888 -> 127.0.0.1:3000
Forwarding        https://test.ngrok.abc.com:8888 -> 127.0.0.1:3000
Web Interface     127.0.0.1:4040
# Conn            0
Avg Conn Time     0.00ms
```
运行成功，ngrok服务搭建完成

参考文档：
- [知乎：在服务器上搭建自己的ngrok服务](https://zhuanlan.zhihu.com/p/49192702)
- [简书：最接地气的Ngrok服务器搭建教程](https://www.jianshu.com/p/f5c2a55e77bd)