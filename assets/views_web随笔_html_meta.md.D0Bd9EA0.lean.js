import{_ as n,c as t,a2 as s,o as e}from"./chunks/framework.CjNeJe2C.js";const r=JSON.parse('{"title":"meta标签属性","description":"","frontmatter":{"title":"meta标签属性","date":"2020-04-21T00:00:00.000Z","tags":["meta"],"categories":["html"]},"headers":[],"relativePath":"views/web随笔/html/meta.md","filePath":"views/web随笔/html/meta.md"}'),p={name:"views/web随笔/html/meta.md"};function l(i,a,o,c,u,m){return e(),t("div",null,a[0]||(a[0]=[s(`<h2 id="meta定义和用法" tabindex="-1">meta定义和用法 <a class="header-anchor" href="#meta定义和用法" aria-label="Permalink to &quot;meta定义和用法&quot;">​</a></h2><ul><li><meta> 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。 </li><li><meta> 标签位于文档的头部，不包含任何内容。<meta> 标签的属性定义了与文档相关联的名称/值对。 </li></ul><h3 id="charset属性" tabindex="-1">charset属性 <a class="header-anchor" href="#charset属性" aria-label="Permalink to &quot;charset属性&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- 定义网页文档的字符集 --&gt;</span></span>
<span class="line"><span>&lt;meta charset=&quot;utf-8&quot; /&gt;</span></span></code></pre></div><h3 id="name-content属性" tabindex="-1">name + content属性 <a class="header-anchor" href="#name-content属性" aria-label="Permalink to &quot;name + content属性&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- 网页作者 --&gt;</span></span>
<span class="line"><span>&lt;meta name=&quot;author&quot; content=&quot;开源技术团队&quot;/&gt;</span></span>
<span class="line"><span>&lt;!-- 网页地址 --&gt;</span></span>
<span class="line"><span>&lt;meta name=&quot;website&quot; content=&quot;https://sanyuan0704.github.io/frontend_daily_question/&quot;/&gt;</span></span>
<span class="line"><span>&lt;!-- 网页版权信息 --&gt;</span></span>
<span class="line"><span> &lt;meta name=&quot;copyright&quot; content=&quot;2018-2019 demo.com&quot;/&gt;</span></span>
<span class="line"><span>&lt;!-- 网页关键字, 用于SEO --&gt;</span></span>
<span class="line"><span>&lt;meta name=&quot;keywords&quot; content=&quot;meta,html&quot;/&gt;</span></span>
<span class="line"><span>&lt;!-- 网页描述 --&gt;</span></span>
<span class="line"><span>&lt;meta name=&quot;description&quot; content=&quot;网页描述&quot;/&gt;</span></span>
<span class="line"><span>&lt;!-- 搜索引擎索引方式，一般为all，不用深究 --&gt;</span></span>
<span class="line"><span>&lt;meta name=&quot;robots&quot; content=&quot;all&quot; /&gt;</span></span>
<span class="line"><span>&lt;!-- 移动端常用视口设置 --&gt;</span></span>
<span class="line"><span>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=no&quot;/&gt;</span></span>
<span class="line"><span>&lt;!-- </span></span>
<span class="line"><span>  viewport参数详解：</span></span>
<span class="line"><span>  width：宽度（数值 / device-width）（默认为980 像素）</span></span>
<span class="line"><span>  height：高度（数值 / device-height）</span></span>
<span class="line"><span>  initial-scale：初始的缩放比例 （范围从&gt;0 到10）</span></span>
<span class="line"><span>  minimum-scale：允许用户缩放到的最小比例</span></span>
<span class="line"><span>  maximum-scale：允许用户缩放到的最大比例</span></span>
<span class="line"><span>  user-scalable：用户是否可以手动缩 (no,yes)</span></span>
<span class="line"><span> --&gt;</span></span></code></pre></div><h3 id="http-equiv属性" tabindex="-1">http-equiv属性 <a class="header-anchor" href="#http-equiv属性" aria-label="Permalink to &quot;http-equiv属性&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- expires指定网页的过期时间。一旦网页过期，必须从服务器上下载。 --&gt;</span></span>
<span class="line"><span>&lt;meta http-equiv=&quot;expires&quot; content=&quot;Fri, 12 Jan 2020 18:18:18 GMT&quot;/&gt;</span></span>
<span class="line"><span>&lt;!-- 等待一定的时间刷新或跳转到其他url。下面1表示1秒 --&gt;</span></span>
<span class="line"><span>&lt;meta http-equiv=&quot;refresh&quot; content=&quot;1; url=https://www.baidu.com&quot;/&gt;</span></span>
<span class="line"><span>&lt;!-- 禁止浏览器从本地缓存中读取网页，即浏览器一旦离开网页在无法连接网络的情况下就无法访问到页面。 --&gt;</span></span>
<span class="line"><span>&lt;meta http-equiv=&quot;pragma&quot; content=&quot;no-cache&quot;/&gt;</span></span>
<span class="line"><span>&lt;!-- 也是设置cookie的一种方式，并且可以指定过期时间 --&gt;</span></span>
<span class="line"><span>&lt;meta http-equiv=&quot;set-cookie&quot; content=&quot;name=value expires=Fri, 12 Jan 2001 18:18:18 GMT,path=/&quot;/&gt;</span></span>
<span class="line"><span>&lt;!-- 使用浏览器版本 --&gt;</span></span>
<span class="line"><span>&lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge,chrome=1&quot; /&gt;</span></span>
<span class="line"><span>&lt;!-- 针对WebApp全屏模式，隐藏状态栏/设置状态栏颜色，content的值为default | black | black-translucent --&gt;</span></span>
<span class="line"><span>&lt;meta name=&quot;apple-mobile-web-app-status-bar-style&quot; content=&quot;black-translucent&quot; /&gt;</span></span></code></pre></div>`,8)]))}const q=n(p,[["render",l]]);export{r as __pageData,q as default};
