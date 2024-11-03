import{_ as s,c as n,a2 as p,o as e}from"./chunks/framework.CjNeJe2C.js";const d=JSON.parse('{"title":"快速排序","description":"","frontmatter":{"title":"快速排序","date":"2019-11-07T00:00:00.000Z","tags":["sort"],"categories":["算法"]},"headers":[],"relativePath":"views/web随笔/排序/quick.md","filePath":"views/web随笔/排序/quick.md"}'),t={name:"views/web随笔/排序/quick.md"};function i(l,a,r,c,o,h){return e(),n("div",null,a[0]||(a[0]=[p(`<h2 id="quick-sort" tabindex="-1">Quick Sort <a class="header-anchor" href="#quick-sort" aria-label="Permalink to &quot;Quick Sort&quot;">​</a></h2><p>快速排序的基本思想是：通过一趟排序将待排记录分割成独立的两部分，其中一部分记录关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序</p><h3 id="_1-方法一" tabindex="-1">1. 方法一 <a class="header-anchor" href="#_1-方法一" aria-label="Permalink to &quot;1. 方法一&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const quickSort = function (array) {</span></span>
<span class="line"><span>    if (array.length &lt;= 1) {</span></span>
<span class="line"><span>        return array;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    const pivotIndex = parseInt(array.length / 2);</span></span>
<span class="line"><span>    const pivot = Number(array.splice(pivotIndex, 1));</span></span>
<span class="line"><span>    const left = [];    const right = [];</span></span>
<span class="line"><span>    for (let i = 0; i &lt; array.length; i++) {</span></span>
<span class="line"><span>        if (array[i] &lt; pivot) {</span></span>
<span class="line"><span>            left.push(array[i]);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            right.push(array[i]);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return quickSort(left).concat([pivot], quickSort(right));</span></span>
<span class="line"><span>};</span></span></code></pre></div><h3 id="_2-方法二" tabindex="-1">2. 方法二 <a class="header-anchor" href="#_2-方法二" aria-label="Permalink to &quot;2. 方法二&quot;">​</a></h3><p>其中 left = 0; right = array.length-1</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function quickSort(array, left, right) {</span></span>
<span class="line"><span>    if (left &lt; right) {</span></span>
<span class="line"><span>        let x = array[right], i = left - 1;</span></span>
<span class="line"><span>        for (let j = left; j &lt;= right; j++) {</span></span>
<span class="line"><span>            if (array[j] &lt;= x) {</span></span>
<span class="line"><span>                i++;</span></span>
<span class="line"><span>                const temp = array[i];</span></span>
<span class="line"><span>                array[i] = array[j];</span></span>
<span class="line"><span>                array[j] = temp;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        quickSort(array, left, i - 1);</span></span>
<span class="line"><span>        quickSort(array, i + 1, right);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return array;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>参考文章:<a href="https://www.jianshu.com/p/96f5c19e13df" target="_blank" rel="noreferrer">十大经典排序算法的JS版</a></p>`,8)]))}const f=s(t,[["render",i]]);export{d as __pageData,f as default};
