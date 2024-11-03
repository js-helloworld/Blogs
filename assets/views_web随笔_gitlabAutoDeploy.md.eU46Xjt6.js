import{_ as s,c as n,a2 as e,o as p}from"./chunks/framework.CjNeJe2C.js";const d=JSON.parse('{"title":"gitlab-ci自动部署","description":"","frontmatter":{"title":"gitlab-ci自动部署","date":"2019-12-04T00:00:00.000Z","tags":["git","gitlab"],"categories":["git"],"author":["游城走不动"],"sticky":1},"headers":[],"relativePath":"views/web随笔/gitlabAutoDeploy.md","filePath":"views/web随笔/gitlabAutoDeploy.md"}'),l={name:"views/web随笔/gitlabAutoDeploy.md"};function t(i,a,o,c,r,u){return p(),n("div",null,a[0]||(a[0]=[e(`<h2 id="gitlab进行持续集成" tabindex="-1">gitlab进行持续集成 <a class="header-anchor" href="#gitlab进行持续集成" aria-label="Permalink to &quot;gitlab进行持续集成&quot;">​</a></h2><h3 id="_1-概念" tabindex="-1">1. 概念 <a class="header-anchor" href="#_1-概念" aria-label="Permalink to &quot;1. 概念&quot;">​</a></h3><ul><li>GitLab：</li></ul><p>GitLab 是一个用于仓库管理系统的开源项目，使用Git作为代码管理工具，并在此基础上搭建起来的web服务；它拥有与GitHub类似的功能，能够浏览源代码，管理缺陷和注释，可通过Web界面进行访问公开的或者私人项目。</p><ul><li>gitlab-ci:</li></ul><p>从Gitlab的8.0版本开始，gitlab就全面集成了Gitlab-CI,并且对所有项目默认开启。</p><p>只要在项目仓库的根目录添加.gitlab-ci.yml文件，并且配置了Runner（运行器），那么每一次合并请求（MR）或者push都会触发CIpipeline。</p><ul><li>gitlab-runner:</li></ul><p>GitLab-Runner是配合GitLab-CI进行使用的（.gitlab-ci.yml脚本的运行器）。一般地，GitLab里面的每一个工程都会定义一个属于这个工程的软件集成脚本，用来自动化地完成一些软件集成工作。当这个工程的仓库代码发生变动时，比如有人push了代码，GitLab就会将这个变动通知GitLab-CI。这时GitLab-CI会找出与这个工程相关联的Runner，并通知这些Runner把代码更新到本地并执行预定义好的执行脚本</p><h3 id="_2-持续集成" tabindex="-1">2. 持续集成 <a class="header-anchor" href="#_2-持续集成" aria-label="Permalink to &quot;2. 持续集成&quot;">​</a></h3><p>持续集成是一种软件开发实践，即团队开发成员经常集成他们的工作，通常每个成员每天至少集成一次，也就意味着每天可能会发生多次集成。每次集成都通过自动化的构建（包括编译，发布，自动化测试)来验证，从而尽快地发现集成错误。许多团队发现这个过程可以大大减少集成的问题，让团队能够更快的开发内聚的软件。</p><h3 id="_3-如何部署gitlab持续集成" tabindex="-1">3. 如何部署gitlab持续集成 <a class="header-anchor" href="#_3-如何部署gitlab持续集成" aria-label="Permalink to &quot;3. 如何部署gitlab持续集成&quot;">​</a></h3><ul><li>安装gitlab-ci</li></ul><p>这个不用安装了，GitLab就自带了</p><ul><li>安装GitLab-Runner</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh | sudo bash $ sudo apt-get install gitlab-runner</span></span></code></pre></div><ul><li>gitlab-CI注册runner(触发事件时调用)</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gitlab-ci-multi-runner register</span></span></code></pre></div><ol><li>输入gitlab的url,eg:<a href="http://gitlab.example.com/" target="_blank" rel="noreferrer">http://gitlab.example.com/</a></li><li>输入gitlab项目的token,获取token：project =&gt; setting =&gt; ci/cd =&gt; runners settings =&gt; expand</li><li>输入描述</li><li>是否运行未标记的builds [true/false]</li><li>是否将运行程序锁定到当前项目 [true/false]</li><li>输入tag (项目可能有多个runner，是根据tag来区别runner的，输入若干个就好了，比如web,hook,deploy)</li><li>输入executor(用什么方式来执行脚本，图方便输入shell)</li></ol><p>注册好了，在gitlab中相应的位置就可以看到你注册好的runner信息。（project =&gt; setting =&gt; ci/cd =&gt; runners settings =&gt; expand）</p><p>这时候的runner是已经运行的，可以使用命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gitlab-ci-multi-runner status #查看状态</span></span></code></pre></div><ul><li>编写.gitlab-ci.yml</li></ul><p>在项目根目录下编写.gitlab-ci.yml这样在push之后，gitlab-ci就会自动识别来解析了</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>stages:</span></span>
<span class="line"><span>   - deploy</span></span>
<span class="line"><span>deploy:</span></span>
<span class="line"><span>  stage: deploy</span></span>
<span class="line"><span>  script:</span></span>
<span class="line"><span>    - deploy Example_Group Example_Project</span></span>
<span class="line"><span>  only:</span></span>
<span class="line"><span>    - master</span></span>
<span class="line"><span>  tags:</span></span>
<span class="line"><span>    - deploy</span></span></code></pre></div><p>这里我们只有一个stage是deploy。only指定了只有在master分支push的时候才会被执行。</p><p>tags这里要填写deploy，对应了刚才注册runner的时候的tags，否则会报错（This build is stuck, because you don&#39;t have any active runners online with any of these tags assigned to them: dev），若是忘记tag是什么，可以到gitlab上查看详细Runner。</p><p>deploy Example_Group Example_Project，Example_Group deploy是在服务器上编写的一个脚本，传入参数是 <strong>Example_Group Example_Project</strong> 分别是 <strong>项目组名和项目名</strong></p><ul><li>编写deploy脚本</li></ul><p>在gitlab-runner的~/.local/bin/目录下新建deploy文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>su gitlab-runner # 切换账户</span></span>
<span class="line"><span>mkdir ~/.local/bin</span></span>
<span class="line"><span>cd ~/.local/bin </span></span>
<span class="line"><span>touch deploy</span></span></code></pre></div><p>deploy内容如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>if [ $# -ne 2 ]</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>      echo &quot;arguments error!&quot;</span></span>
<span class="line"><span>      exit 1</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>      deploy_path=&quot;/home/wwwroot/$1/$2&quot;</span></span>
<span class="line"><span>      if [ ! -d &quot;$deploy_path&quot; ]</span></span>
<span class="line"><span>      then</span></span>
<span class="line"><span>              project_path=&quot;git@gitlab.example.com&quot;   ##项目的地址</span></span>
<span class="line"><span>              git clone $project_path $deploy_path</span></span>
<span class="line"><span>      else</span></span>
<span class="line"><span>              cd $deploy_path</span></span>
<span class="line"><span>              git checkout dev</span></span>
<span class="line"><span>              git stash</span></span>
<span class="line"><span>              git pull</span></span>
<span class="line"><span>              git stash apply</span></span>
<span class="line"><span>              composer install</span></span>
<span class="line"><span>      fi</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>这个脚本的大意就是，如果目录不存在，那么就git clone一个，如果存在了就git pull一个到指定目录下。这样就达到了自动部署的目的。记得修改里面的<a href="http://gitlab.example.xn--com-lq6eycw41v" target="_blank" rel="noreferrer">http://gitlab.example.com的地址</a>，修改为你项目的 <strong>ssh</strong> 地址。</p><p>加上执行权限，然后把这个脚本放在gitlab-runner的~/.local/bin下就可以生效了（为了不用写难看的./deploy）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>chmod +x ~/.local/bin/deploy</span></span></code></pre></div><p>并且把/.local/bin加到$PATH路径中（用户执行命令时候能够查找到这个目录），只要在/etc/profile末尾加入这一句话</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PATH=&quot;$HOME/.local/bin:$PATH&quot;</span></span></code></pre></div><p>注意：$HOME需要是我们上方切换账户（gitlab-runner）的$HOME，而不是root账户的</p><p>ps:修改环境变量可能需要在root账户中操作，所以可以在gitlab-runner账户中输入$HOME得到路径,然后切换root账户去需改，替换 PATH=&quot;$HOME/.local/bin:$PATH&quot; 的$HOME</p><p>运行source /etc/profile让配置生效</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>source /etc/profile</span></span></code></pre></div><p>操作完成后，可以输入deploy查看是否存在该命令，存在则提示 “arguments error!”</p><ul><li>配置ssh登录</li></ul><p>上面的deploy脚本是用ssh方式来和gitlab联系的。所以要给gitlab-runner这个用户配置一个gitlab上能ssh的用户。首先在gitlab-runner下生成一个密钥对</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir ~/.ssh</span></span>
<span class="line"><span>cd ~/.ssh</span></span>
<span class="line"><span>ssh-keygen</span></span></code></pre></div><p>提示输入一直按回车默认就可以了</p><p>cat id_rsa.pub 用cat查看公钥，然后复制这一串公钥。在这个账号的user_profile里面，把公钥粘贴进去就好了（即添加可信性的ssh公钥）。总之就是把这个账号配置成能用ssh登录的。(user setting =&gt; ssh keys)</p><p>如果提示脚本没有权限或者没有权限新建文件夹，可能是gitlab-runner没有权限，执行下面的命令，赋予权限即可解决：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>su root</span></span>
<span class="line"><span>chown -hR gitlab-runner:gitlab-runner /var/www</span></span></code></pre></div><p>备注：可以在服务器上手动运行下deploy脚本，看是否有问题，好排查</p><p>可以push下代码到gitlab上，验证下服务器中是否已经自动git最新代码， 也可以在 project =&gt; ci/cd =&gt;pipelines 中查看记录</p><p>参考文档：<a href="https://zhuanlan.zhihu.com/p/57548241" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/57548241</a></p>`,53)]))}const h=s(l,[["render",t]]);export{d as __pageData,h as default};
