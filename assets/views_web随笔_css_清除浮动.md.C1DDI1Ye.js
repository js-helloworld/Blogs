import{_ as a,c as n,a2 as p,o as e}from"./chunks/framework.CjNeJe2C.js";const u=JSON.parse('{"title":"清除浮动","description":"","frontmatter":{"title":"清除浮动","date":"2020-05-23T00:00:00.000Z","tags":["float"],"categories":["css"]},"headers":[],"relativePath":"views/web随笔/css/清除浮动.md","filePath":"views/web随笔/css/清除浮动.md"}'),t={name:"views/web随笔/css/清除浮动.md"};function l(i,s,c,o,d,r){return e(),n("div",null,s[0]||(s[0]=[p(`<h1 id="css清除浮动的方式" tabindex="-1">css清除浮动的方式 <a class="header-anchor" href="#css清除浮动的方式" aria-label="Permalink to &quot;css清除浮动的方式&quot;">​</a></h1><ol><li>浮动元素同级添加子元素clear:both</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div class=&quot;wrapper&quot;&gt;</span></span>
<span class="line"><span>    //添加额外元素并且添加clear属性</span></span>
<span class="line"><span>    &lt;div style=&quot;clear:both&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><ol start="2"><li>父级添加overflow属性，或者设置高度</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>&lt;div class=&quot;wrapper&quot; style=&quot;overflow:hidden&quot;&gt;</span></span>
<span class="line"><span>    //将父元素的overflow设置为hidden</span></span>
<span class="line"><span>    &lt;div class=&quot;item&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><ol start="3"><li>建立伪类选择器清除浮动（推荐）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//在css中添加:after伪元素</span></span>
<span class="line"><span>.wrapper:after{</span></span>
<span class="line"><span>      /* 设置添加子元素的内容是空 */</span></span>
<span class="line"><span>      content: &#39;&#39;;  </span></span>
<span class="line"><span>      /* 设置添加子元素为块级元素 */</span></span>
<span class="line"><span>      display: block;</span></span>
<span class="line"><span>      /* 设置添加的子元素的高度0 */</span></span>
<span class="line"><span>      height: 0;</span></span>
<span class="line"><span>      /* 设置添加子元素看不见 */</span></span>
<span class="line"><span>      visibility: hidden;</span></span>
<span class="line"><span>      /* 设置clear：both */</span></span>
<span class="line"><span>      clear: both;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;div class=&quot;wrapper&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;item&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div>`,7)]))}const v=a(t,[["render",l]]);export{u as __pageData,v as default};
