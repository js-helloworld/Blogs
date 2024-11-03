---
title: gitlab-ci自动部署
date: 2019-12-04
tags:
 - git
 - gitlab
categories:
 - git
author:
 - 游城走不动
sticky: 1
---
## gitlab进行持续集成

### 1. 概念

- GitLab：

GitLab 是一个用于仓库管理系统的开源项目，使用Git作为代码管理工具，并在此基础上搭建起来的web服务；它拥有与GitHub类似的功能，能够浏览源代码，管理缺陷和注释，可通过Web界面进行访问公开的或者私人项目。

- gitlab-ci:

从Gitlab的8.0版本开始，gitlab就全面集成了Gitlab-CI,并且对所有项目默认开启。

只要在项目仓库的根目录添加.gitlab-ci.yml文件，并且配置了Runner（运行器），那么每一次合并请求（MR）或者push都会触发CIpipeline。

- gitlab-runner:

GitLab-Runner是配合GitLab-CI进行使用的（.gitlab-ci.yml脚本的运行器）。一般地，GitLab里面的每一个工程都会定义一个属于这个工程的软件集成脚本，用来自动化地完成一些软件集成工作。当这个工程的仓库代码发生变动时，比如有人push了代码，GitLab就会将这个变动通知GitLab-CI。这时GitLab-CI会找出与这个工程相关联的Runner，并通知这些Runner把代码更新到本地并执行预定义好的执行脚本

### 2. 持续集成

持续集成是一种软件开发实践，即团队开发成员经常集成他们的工作，通常每个成员每天至少集成一次，也就意味着每天可能会发生多次集成。每次集成都通过自动化的构建（包括编译，发布，自动化测试)来验证，从而尽快地发现集成错误。许多团队发现这个过程可以大大减少集成的问题，让团队能够更快的开发内聚的软件。

### 3. 如何部署gitlab持续集成

- 安装gitlab-ci

这个不用安装了，GitLab就自带了

- 安装GitLab-Runner
```
curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh | sudo bash $ sudo apt-get install gitlab-runner
```

- gitlab-CI注册runner(触发事件时调用)
```
gitlab-ci-multi-runner register
```
1. 输入gitlab的url,eg:http://gitlab.example.com/
2. 输入gitlab项目的token,获取token：project => setting => ci/cd => runners settings => expand
3. 输入描述
4. 是否运行未标记的builds [true/false]
5. 是否将运行程序锁定到当前项目 [true/false]
6. 输入tag (项目可能有多个runner，是根据tag来区别runner的，输入若干个就好了，比如web,hook,deploy)
7. 输入executor(用什么方式来执行脚本，图方便输入shell)

注册好了，在gitlab中相应的位置就可以看到你注册好的runner信息。（project => setting => ci/cd => runners settings => expand）

这时候的runner是已经运行的，可以使用命令：
```
gitlab-ci-multi-runner status #查看状态
```

- 编写.gitlab-ci.yml

在项目根目录下编写.gitlab-ci.yml这样在push之后，gitlab-ci就会自动识别来解析了

```
stages:
   - deploy
deploy:
  stage: deploy
  script:
    - deploy Example_Group Example_Project
  only:
    - master
  tags:
    - deploy
```
这里我们只有一个stage是deploy。only指定了只有在master分支push的时候才会被执行。

tags这里要填写deploy，对应了刚才注册runner的时候的tags，否则会报错（This build is stuck, because you don't have any active runners online with any of these tags assigned to them: dev），若是忘记tag是什么，可以到gitlab上查看详细Runner。

deploy Example_Group Example_Project，Example_Group deploy是在服务器上编写的一个脚本，传入参数是 __Example_Group Example_Project__ 分别是 __项目组名和项目名__

- 编写deploy脚本

在gitlab-runner的~/.local/bin/目录下新建deploy文件

```
su gitlab-runner # 切换账户
mkdir ~/.local/bin
cd ~/.local/bin 
touch deploy

```
deploy内容如下：
```
#!/bin/bash
if [ $# -ne 2 ]
then
      echo "arguments error!"
      exit 1
else
      deploy_path="/home/wwwroot/$1/$2"
      if [ ! -d "$deploy_path" ]
      then
              project_path="git@gitlab.example.com"   ##项目的地址
              git clone $project_path $deploy_path
      else
              cd $deploy_path
              git checkout dev
              git stash
              git pull
              git stash apply
              composer install
      fi
fi

```
这个脚本的大意就是，如果目录不存在，那么就git clone一个，如果存在了就git pull一个到指定目录下。这样就达到了自动部署的目的。记得修改里面的http://gitlab.example.com的地址，修改为你项目的 __ssh__ 地址。

加上执行权限，然后把这个脚本放在gitlab-runner的~/.local/bin下就可以生效了（为了不用写难看的./deploy）
```
chmod +x ~/.local/bin/deploy
```

并且把/.local/bin加到$PATH路径中（用户执行命令时候能够查找到这个目录），只要在/etc/profile末尾加入这一句话
```
PATH="$HOME/.local/bin:$PATH"
```
注意：$HOME需要是我们上方切换账户（gitlab-runner）的$HOME，而不是root账户的

ps:修改环境变量可能需要在root账户中操作，所以可以在gitlab-runner账户中输入$HOME得到路径,然后切换root账户去需改，替换 PATH="$HOME/.local/bin:$PATH" 的$HOME

运行source /etc/profile让配置生效

```
source /etc/profile
```
操作完成后，可以输入deploy查看是否存在该命令，存在则提示 “arguments error!”

- 配置ssh登录

上面的deploy脚本是用ssh方式来和gitlab联系的。所以要给gitlab-runner这个用户配置一个gitlab上能ssh的用户。首先在gitlab-runner下生成一个密钥对
```
mkdir ~/.ssh
cd ~/.ssh
ssh-keygen
```
提示输入一直按回车默认就可以了

cat id_rsa.pub 用cat查看公钥，然后复制这一串公钥。在这个账号的user_profile里面，把公钥粘贴进去就好了（即添加可信性的ssh公钥）。总之就是把这个账号配置成能用ssh登录的。(user setting => ssh keys)

如果提示脚本没有权限或者没有权限新建文件夹，可能是gitlab-runner没有权限，执行下面的命令，赋予权限即可解决：

```
su root
chown -hR gitlab-runner:gitlab-runner /var/www
```

备注：可以在服务器上手动运行下deploy脚本，看是否有问题，好排查

可以push下代码到gitlab上，验证下服务器中是否已经自动git最新代码，
也可以在 project => ci/cd =>pipelines 中查看记录

参考文档：[https://zhuanlan.zhihu.com/p/57548241](https://zhuanlan.zhihu.com/p/57548241)