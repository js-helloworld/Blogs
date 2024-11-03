import{_ as n,c as s,a2 as e,o as p}from"./chunks/framework.CjNeJe2C.js";const m=JSON.parse('{"title":"选择排序","description":"","frontmatter":{"title":"选择排序","date":"2019-11-02T00:00:00.000Z","tags":["sort"],"categories":["算法"]},"headers":[],"relativePath":"views/web随笔/排序/selection.md","filePath":"views/web随笔/排序/selection.md"}'),t={name:"views/web随笔/排序/selection.md"};function l(i,a,r,c,o,d){return p(),s("div",null,a[0]||(a[0]=[e(`<h2 id="selection-sort" tabindex="-1">Selection Sort <a class="header-anchor" href="#selection-sort" aria-label="Permalink to &quot;Selection Sort&quot;">​</a></h2><p>表现最稳定的排序算法之一，因为无论什么数据进去都是O(n2)的时间复杂度......所以用它的时候数据规模越小越好，唯一的好处就是不占用额外的内存空间，理论上讲，选择排序可能也是平时排序一般人想到的最多的排序方法之一</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function selectionSort(array) {</span></span>
<span class="line"><span>    let length = array.length;</span></span>
<span class="line"><span>    for (let i = 0; i &lt; length - 1; i++) {</span></span>
<span class="line"><span>        let minIndex = i;</span></span>
<span class="line"><span>        for (let j = i + 1; j &lt; length; j++) {</span></span>
<span class="line"><span>            if (array[j] &lt; array[minIndex]) {</span></span>
<span class="line"><span>                minIndex = j;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        let temp = array[i];</span></span>
<span class="line"><span>        array[i] = array[minIndex];</span></span>
<span class="line"><span>        array[minIndex] = temp;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return array;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>参考文章:<a href="https://www.jianshu.com/p/96f5c19e13df" target="_blank" rel="noreferrer">十大经典排序算法的JS版</a></p>`,4)]))}const f=n(t,[["render",l]]);export{m as __pageData,f as default};
