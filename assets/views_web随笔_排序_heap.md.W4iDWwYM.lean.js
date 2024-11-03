import{_ as s,c as n,a2 as p,o as e}from"./chunks/framework.CjNeJe2C.js";const d=JSON.parse('{"title":"堆排序","description":"","frontmatter":{"title":"堆排序","date":"2019-11-10T00:00:00.000Z","tags":["sort"],"categories":["算法"]},"headers":[],"relativePath":"views/web随笔/排序/heap.md","filePath":"views/web随笔/排序/heap.md"}'),l={name:"views/web随笔/排序/heap.md"};function r(t,a,i,c,o,h){return e(),n("div",null,a[0]||(a[0]=[p(`<h2 id="heap-sort" tabindex="-1">Heap Sort <a class="header-anchor" href="#heap-sort" aria-label="Permalink to &quot;Heap Sort&quot;">​</a></h2><p>是指利用堆这种数据结构所涉及的一种排序算法，堆积是一个近似完全二叉树的结构，并满足堆积的性质：即子节点的键值或索引总是小于（或大于）它的父节点</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function heapSort(array) {</span></span>
<span class="line"><span>    let length = array.length;</span></span>
<span class="line"><span>    for (let i = parseInt(array.length / 2) - 1; i &gt;= 0; i--) {</span></span>
<span class="line"><span>        heap(array, i, length);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    for (let j = length - 1; j &gt;= 1; j--) {</span></span>
<span class="line"><span>        const temp = array[0];</span></span>
<span class="line"><span>        array[0] = array[j];</span></span>
<span class="line"><span>        array[j] = temp;</span></span>
<span class="line"><span>        heap(array, 0, --length);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return array;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function heap(array, x, length) {</span></span>
<span class="line"><span>    let l = 2 * x + 1, r = 2 * x + 2, largest = x;</span></span>
<span class="line"><span>    if (l &lt; length &amp;&amp; array[l] &gt; array[largest]) {</span></span>
<span class="line"><span>        largest = l;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (r &lt; length &amp;&amp; array[r] &gt; array[largest]) {</span></span>
<span class="line"><span>        largest = r;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (largest != x) {</span></span>
<span class="line"><span>        const temp = array[x];</span></span>
<span class="line"><span>        array[x] = array[largest];</span></span>
<span class="line"><span>        array[largest] = temp;</span></span>
<span class="line"><span>        heap(array, largest, length);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>参考文章:<a href="https://www.jianshu.com/p/96f5c19e13df" target="_blank" rel="noreferrer">十大经典排序算法的JS版</a></p>`,4)]))}const y=s(l,[["render",r]]);export{d as __pageData,y as default};
