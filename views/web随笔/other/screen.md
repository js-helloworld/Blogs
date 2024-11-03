---
title: Linux中的screen
date: 2020-04-03
tags:
 - screen
 - linux
categories:
 - linux
author:
 - 游城走不动
---
 screen是linux下的一种多重视窗管理程序。在使用telnet或SSH远程登录linux时，如果连接非正常中断，重新连接时，系统将开一个新的session，无法恢复原来的session.screen命令可以解决这个问题。

 官网：[http://www.gnu.org/software/screen/](http://www.gnu.org/software/screen/)

 安装：
 ```
 yum install screen
 ```

 ### 常用screen参数
 ```
screen -S yourname -> 新建一个叫yourname的session
screen -ls         -> 列出当前所有的session
screen -r yourname -> 回到yourname这个session

screen -X -S nameKey quit -> kill掉一个screen
eg:
3777.test2
screen -X -S 3777 quit

<!-- 保持会话退出,这样退出的话，以后还可以通过,screen -r yourname 再次进入 -->
快捷键命令：先同时按Ctrl+A+D键
```

语法：
```
screen [-AmRvx -ls -wipe][-d <作业名称>][-h <行数>][-r <作业名称>][-s <shell>][-S <作业名称>]
```
参数说明：
```
-A 　将所有的视窗都调整为目前终端机的大小。
-d<作业名称> 　将指定的screen作业离线。
-h<行数> 　指定视窗的缓冲区行数。
-m 　即使目前已在作业中的screen作业，仍强制建立新的screen作业。
-r<作业名称> 　恢复离线的screen作业。
-R 　先试图恢复离线的作业。若找不到离线的作业，即建立新的screen作业。
-s<shell> 　指定建立新视窗时，所要执行的shell。
-S<作业名称> 　指定screen作业的名称。
-v 　显示版本信息。
-x 　恢复之前离线的screen作业。
-ls或--list 　显示目前所有的screen作业。
-wipe 　检查目前所有的screen作业，并删除已经无法使用的screen作业。
```