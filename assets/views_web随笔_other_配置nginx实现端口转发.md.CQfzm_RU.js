import{_ as n,c as a,a2 as p,o as e}from"./chunks/framework.CjNeJe2C.js";const h=JSON.parse('{"title":"配置nginx实现端口转发","description":"","frontmatter":{"title":"配置nginx实现端口转发","date":"2020-04-08T00:00:00.000Z","tags":["nginx","ngrok"],"categories":["nginx"]},"headers":[],"relativePath":"views/web随笔/other/配置nginx实现端口转发.md","filePath":"views/web随笔/other/配置nginx实现端口转发.md"}'),l={name:"views/web随笔/other/配置nginx实现端口转发.md"};function i(t,s,o,c,r,d){return e(),a("div",null,s[0]||(s[0]=[p(`<h2 id="_1-为什么要配置nginx" tabindex="-1">1. 为什么要配置nginx <a class="header-anchor" href="#_1-为什么要配置nginx" aria-label="Permalink to &quot;1. 为什么要配置nginx&quot;">​</a></h2><p>当我们在服务器上搭建多个应用的时候，我们会发现一个端口只能被一个程序使用，这时候如何该怎么办呢？</p><p>一个常用的方法就是用 Nginx 进行端口转发</p><h2 id="_2-linux安装nginx" tabindex="-1">2. linux安装nginx <a class="header-anchor" href="#_2-linux安装nginx" aria-label="Permalink to &quot;2. linux安装nginx&quot;">​</a></h2><ol><li>安装依赖</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel</span></span></code></pre></div><ol start="2"><li>下载nginx的tar包</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd /usr/local</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//创建文件夹</span></span>
<span class="line"><span>mkdir nginx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd nginx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//下载tar包</span></span>
<span class="line"><span>wget http://nginx.org/download/nginx-1.13.7.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tar -xvf nginx-1.13.7.tar.g</span></span></code></pre></div><ol start="3"><li>安装nginx</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd /usr/local/nginx</span></span>
<span class="line"><span>./configure</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>make</span></span>
<span class="line"><span></span></span>
<span class="line"><span>make install</span></span></code></pre></div><ol start="4"><li>启动、停止nginx</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd /usr/local/nginx/sbin/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>./nginx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>./nginx -s stop //Stop 是快速关闭，不管有没有正在处理的请求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>./nginx -s quit //Quit 是一个优雅的关闭方式，Nginx在退出前完成已经接受的连接请求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>./nginx -s reload</span></span></code></pre></div><p>如果80端被占用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)</span></span></code></pre></div><h2 id="_3-简单配置nginx" tabindex="-1">3. 简单配置nginx <a class="header-anchor" href="#_3-简单配置nginx" aria-label="Permalink to &quot;3. 简单配置nginx&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd /usr/local/nginx/conf/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//编辑nginx.conf</span></span>
<span class="line"><span>vi nginx.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//引入自定义文件 </span></span>
<span class="line"><span>//下面配置的test.conf 在http {} 内引入</span></span>
<span class="line"><span>include vhost/*.conf</span></span></code></pre></div><p><img src="https://raw.githubusercontent.com/mail-img/picBed/master/blog/img/picgo/20200408204641.png" alt="20200408204641.png"></p><p>在/usr/local/nginx/conf目录新建vhost文件夹</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir vhost</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//创建每个域名的配置</span></span>
<span class="line"><span>sudo vim test.conf</span></span></code></pre></div><p>test.conf文件里配置负载均衡池</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#Demo1负载均衡池</span></span>
<span class="line"><span>upstream test1_pool{</span></span>
<span class="line"><span>    server 127.0.0.1:8001;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>#Demo2负载均衡池</span></span>
<span class="line"><span>upstream test2_pool{</span></span>
<span class="line"><span>    server 127.0.0.1:8002;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#Demo1端口转发</span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name  test1.abc.com;</span></span>
<span class="line"><span>    access_log logs/test1.log;</span></span>
<span class="line"><span>    error_log logs/test1.error;</span></span>
<span class="line"><span>    #将所有请求转发给test1_pool池的应用处理</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_pass http://test1_pool;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>#Demo2端口转发</span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen  80;</span></span>
<span class="line"><span>    server_name  test2.abc.com;</span></span>
<span class="line"><span>    access_log logs/test2.log;</span></span>
<span class="line"><span>    error_log logs/test2.error;</span></span>
<span class="line"><span>    #将所有请求转发给test2_pool池的应用处理</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_pass http://test2_pool;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>为ngrok配置端口转发, -httpAddr=&quot;:8888&quot;，参考：<a href="./ngrok.html">服务器上搭建自己的ngrok服务</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name *.ngrok.abc.com ngrok.abc.com;</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_set_header Host  $http_host:8888;</span></span>
<span class="line"><span>        proxy_set_header X-Nginx-Proxy true;</span></span>
<span class="line"><span>        proxy_set_header Connection &quot;&quot;;</span></span>
<span class="line"><span>        proxy_pass http://127.0.0.1:8888;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>配置好test.conf就可以重启nginx了</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd /usr/local/nginx/sbin/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>./nginx -s reload</span></span></code></pre></div><p>此时，当用户访问地址 test1.abc.com 时， 将会自动将其请求转发给端口号为 8001 的应用处理</p><p>当用户访问地址 test2.abc.com 时， 将会自动将其请求转发给端口号为 8002 的应用处理</p><p>参考资料：</p><ul><li><a href="https://www.cnblogs.com/jimisun/p/8057156.html" target="_blank" rel="noreferrer">linux安装nginx</a></li><li><a href="https://www.cnblogs.com/zhaoyingjie/p/7248678.html" target="_blank" rel="noreferrer">Nginx 实现端口转发</a></li></ul>`,30)]))}const u=n(l,[["render",i]]);export{h as __pageData,u as default};
