import{_ as n,c as a,a2 as e,o as p}from"./chunks/framework.CjNeJe2C.js";const h=JSON.parse('{"title":"Linux中的screen","description":"","frontmatter":{"title":"Linux中的screen","date":"2020-04-03T00:00:00.000Z","tags":["screen","linux"],"categories":["linux"],"author":["游城走不动"]},"headers":[],"relativePath":"views/web随笔/other/screen.md","filePath":"views/web随笔/other/screen.md"}'),t={name:"views/web随笔/other/screen.md"};function l(i,s,c,r,o,d){return p(),a("div",null,s[0]||(s[0]=[e(`<p>screen是linux下的一种多重视窗管理程序。在使用telnet或SSH远程登录linux时，如果连接非正常中断，重新连接时，系统将开一个新的session，无法恢复原来的session.screen命令可以解决这个问题。</p><p>官网：<a href="http://www.gnu.org/software/screen/" target="_blank" rel="noreferrer">http://www.gnu.org/software/screen/</a></p><p>安装：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum install screen</span></span></code></pre></div><h3 id="常用screen参数" tabindex="-1">常用screen参数 <a class="header-anchor" href="#常用screen参数" aria-label="Permalink to &quot;常用screen参数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>screen -S yourname -&gt; 新建一个叫yourname的session</span></span>
<span class="line"><span>screen -ls         -&gt; 列出当前所有的session</span></span>
<span class="line"><span>screen -r yourname -&gt; 回到yourname这个session</span></span>
<span class="line"><span></span></span>
<span class="line"><span>screen -X -S nameKey quit -&gt; kill掉一个screen</span></span>
<span class="line"><span>eg:</span></span>
<span class="line"><span>3777.test2</span></span>
<span class="line"><span>screen -X -S 3777 quit</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 保持会话退出,这样退出的话，以后还可以通过,screen -r yourname 再次进入 --&gt;</span></span>
<span class="line"><span>快捷键命令：先同时按Ctrl+A+D键</span></span></code></pre></div><p>语法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>screen [-AmRvx -ls -wipe][-d &lt;作业名称&gt;][-h &lt;行数&gt;][-r &lt;作业名称&gt;][-s &lt;shell&gt;][-S &lt;作业名称&gt;]</span></span></code></pre></div><p>参数说明：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>-A 　将所有的视窗都调整为目前终端机的大小。</span></span>
<span class="line"><span>-d&lt;作业名称&gt; 　将指定的screen作业离线。</span></span>
<span class="line"><span>-h&lt;行数&gt; 　指定视窗的缓冲区行数。</span></span>
<span class="line"><span>-m 　即使目前已在作业中的screen作业，仍强制建立新的screen作业。</span></span>
<span class="line"><span>-r&lt;作业名称&gt; 　恢复离线的screen作业。</span></span>
<span class="line"><span>-R 　先试图恢复离线的作业。若找不到离线的作业，即建立新的screen作业。</span></span>
<span class="line"><span>-s&lt;shell&gt; 　指定建立新视窗时，所要执行的shell。</span></span>
<span class="line"><span>-S&lt;作业名称&gt; 　指定screen作业的名称。</span></span>
<span class="line"><span>-v 　显示版本信息。</span></span>
<span class="line"><span>-x 　恢复之前离线的screen作业。</span></span>
<span class="line"><span>-ls或--list 　显示目前所有的screen作业。</span></span>
<span class="line"><span>-wipe 　检查目前所有的screen作业，并删除已经无法使用的screen作业。</span></span></code></pre></div>`,10)]))}const u=n(t,[["render",l]]);export{h as __pageData,u as default};
