import{_ as n,c as s,a2 as p,o as e}from"./chunks/framework.CjNeJe2C.js";const m=JSON.parse('{"title":"计数排序","description":"","frontmatter":{"title":"计数排序","date":"2019-11-11T00:00:00.000Z","tags":["sort"],"categories":["算法"]},"headers":[],"relativePath":"views/web随笔/排序/count.md","filePath":"views/web随笔/排序/count.md"}'),l={name:"views/web随笔/排序/count.md"};function i(r,a,t,c,o,d){return e(),s("div",null,a[0]||(a[0]=[p(`<h2 id="counting-sort" tabindex="-1">Counting Sort <a class="header-anchor" href="#counting-sort" aria-label="Permalink to &quot;Counting Sort&quot;">​</a></h2><p>计数排序的核心在于输入的数据值转换为键存储在额外开辟的数组空间中，作为一种限行时间非要咋地的排序，计数排序要求输入的数据必须是由确定范围的整数。</p><p>计数排序是一种很稳定的排序算法，需要用到一个额外的数组C，其中第i个元素是待排序数组A中值等于i的元素的个数，然后根据数字C将A中的元素排到正确的位置上个，它只能对数组进行排序</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function countSort(array) {</span></span>
<span class="line"><span>    const newArray = [], C = [];</span></span>
<span class="line"><span>    let min = array[0];</span></span>
<span class="line"><span>    let max = array[0];</span></span>
<span class="line"><span>    for (let i = 0; i &lt; array.length; i++) {</span></span>
<span class="line"><span>        if (min &gt;= array[i]) {</span></span>
<span class="line"><span>            min = array[i];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (max &lt;= array[i]) {</span></span>
<span class="line"><span>            max = array[i];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (C[array[i]] = C[array[i]]) {</span></span>
<span class="line"><span>            C[array[i]]++;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            C[array[i]] = 1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    for (let j = min; j &lt; max; j++) {</span></span>
<span class="line"><span>        C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    for (let k = array.length - 1; k &gt;= 0; k--) {</span></span>
<span class="line"><span>        newArray[C[array[k]] - 1] = array[k];</span></span>
<span class="line"><span>        C[array[k]]--;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return newArray;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>参考文章:<a href="https://www.jianshu.com/p/96f5c19e13df" target="_blank" rel="noreferrer">十大经典排序算法的JS版</a></p>`,5)]))}const y=n(l,[["render",i]]);export{m as __pageData,y as default};
