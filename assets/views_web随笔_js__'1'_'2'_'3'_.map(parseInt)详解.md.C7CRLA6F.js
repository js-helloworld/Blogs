import{_ as t,c as s,a2 as e,o as n}from"./chunks/framework.CjNeJe2C.js";const h=JSON.parse(`{"title":"map(parseInt)详解","description":"","frontmatter":{"title":"map(parseInt)详解","date":"2020-06-22T00:00:00.000Z","tags":["map"],"categories":["js"]},"headers":[],"relativePath":"views/web随笔/js/['1','2','3'].map(parseInt)详解.md","filePath":"views/web随笔/js/['1','2','3'].map(parseInt)详解.md"}`),p={name:"views/web随笔/js/['1','2','3'].map(parseInt)详解.md"};function i(l,a,o,r,d,c){return n(),s("div",null,a[0]||(a[0]=[e(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[&quot;1&quot;,&quot;2&quot;,&quot;3&quot;].map(parseInt) //返回[1,NaN,NaN] ???</span></span></code></pre></div><p>首先看一下parseInt：</p><h4 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>parseInt(string, radix)</span></span></code></pre></div><table tabindex="0"><thead><tr><th>参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td>string</td><td style="text-align:left;">必需。要被解析的字符串。</td></tr><tr><td>radix</td><td style="text-align:left;">可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。</td></tr></tbody></table><p>radix：解析字符串的基数，基数规则如下：</p><ol><li>区间范围介于2~36之间；</li><li>如省略该参数或其值为0，则数字将以10为基础来解析</li><li>该参数小于2或者大于36，则返回NaN</li></ol><p>题目中map回调函数的参数index(索引值)做了parseInt的基数radix</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>parseInt(&quot;1&quot;, 0) //符合上述第二条，返回1。</span></span>
<span class="line"><span>parseInt(&quot;2&quot;, 1) //符合上述第三条，返回NaN</span></span>
<span class="line"><span>parseInt(&quot;3&quot;, 2) //符合上述第一条，但是却返回了NaN，这是因为2进制中没有3，只有0和1所以返回NaN。</span></span>
<span class="line"><span>parseInt(&quot;100&quot;,2 )  // 4</span></span></code></pre></div>`,9)]))}const g=t(p,[["render",i]]);export{h as __pageData,g as default};
