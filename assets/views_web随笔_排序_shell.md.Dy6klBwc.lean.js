import{_ as s,c as n,a2 as p,o as e}from"./chunks/framework.CjNeJe2C.js";const d=JSON.parse('{"title":"希尔排序","description":"","frontmatter":{"title":"希尔排序","date":"2019-11-05T00:00:00.000Z","tags":["sort"],"categories":["算法"]},"headers":[],"relativePath":"views/web随笔/排序/shell.md","filePath":"views/web随笔/排序/shell.md"}'),l={name:"views/web随笔/排序/shell.md"};function t(r,a,i,c,o,h){return e(),n("div",null,a[0]||(a[0]=[p(`<h2 id="shell-sort" tabindex="-1">Shell Sort <a class="header-anchor" href="#shell-sort" aria-label="Permalink to &quot;Shell Sort&quot;">​</a></h2><p>希尔排序的核心在于间隔序列的设定。既可以提前设定好间隔序列，也可以动态定义间隔序列。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function shellSort(array) {</span></span>
<span class="line"><span>    let gap = 1;</span></span>
<span class="line"><span>    while (gap &lt; array.length / 5) {</span></span>
<span class="line"><span>        gap = gap * 5 + 1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    for (gap; gap &gt; 0; parseInt(gap / 5)) {</span></span>
<span class="line"><span>        for (let i = gap; i &lt; array.length; i++) {</span></span>
<span class="line"><span>            const temp = array[i];</span></span>
<span class="line"><span>            for (let j = i - gap; j &gt;= 0 &amp;&amp; array[j] &gt; temp; j -= gap) {</span></span>
<span class="line"><span>                array[j + gap] = array[j];</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            array[j + gap] = temp;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return array;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>参考文章:<a href="https://www.jianshu.com/p/96f5c19e13df" target="_blank" rel="noreferrer">十大经典排序算法的JS版</a></p>`,4)]))}const m=s(l,[["render",t]]);export{d as __pageData,m as default};
