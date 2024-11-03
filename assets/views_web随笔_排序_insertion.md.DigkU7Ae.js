import{_ as s,c as n,a2 as e,o as p}from"./chunks/framework.CjNeJe2C.js";const f=JSON.parse('{"title":"插入排序","description":"","frontmatter":{"title":"插入排序","date":"2019-11-04T00:00:00.000Z","tags":["sort"],"categories":["算法"]},"headers":[],"relativePath":"views/web随笔/排序/insertion.md","filePath":"views/web随笔/排序/insertion.md"}'),l={name:"views/web随笔/排序/insertion.md"};function i(t,a,r,o,c,d){return p(),n("div",null,a[0]||(a[0]=[e(`<h2 id="insertion-sort" tabindex="-1">Insertion Sort <a class="header-anchor" href="#insertion-sort" aria-label="Permalink to &quot;Insertion Sort&quot;">​</a></h2><p>插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴，但是它的原理却是最好理解的，它的工作原理是通过构建有序序列，对未排序的数据，在已排序的序列中从后向前扫描，找到相应的位置并插入</p><h3 id="_1-初级版—从后往前插" tabindex="-1">1. 初级版—从后往前插 <a class="header-anchor" href="#_1-初级版—从后往前插" aria-label="Permalink to &quot;1. 初级版—从后往前插&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function insertionSort(array) {</span></span>
<span class="line"><span>    for (let i = 1; i &lt; array.length; i++) {</span></span>
<span class="line"><span>        let key = array[i];</span></span>
<span class="line"><span>        let j = i - 1;</span></span>
<span class="line"><span>        while (j &gt;= 0 &amp;&amp; array[j] &gt; key) {</span></span>
<span class="line"><span>            array[j + 1] = array[j];</span></span>
<span class="line"><span>            j--;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        array[j + 1] = key;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return array;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-升级版—基于二分法" tabindex="-1">2. 升级版—基于二分法 <a class="header-anchor" href="#_2-升级版—基于二分法" aria-label="Permalink to &quot;2. 升级版—基于二分法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function insertionSort(array) {</span></span>
<span class="line"><span>    for (let i = 1; i &lt; array.length; i++) {</span></span>
<span class="line"><span>        let key = array[i], left = 0, right = i - 1;</span></span>
<span class="line"><span>        while (left &lt;= right) {</span></span>
<span class="line"><span>            let middle = parseInt((left + right) / 2);</span></span>
<span class="line"><span>            if (key &lt; array[middle]) {</span></span>
<span class="line"><span>                right = middle - 1;</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                left = middle + 1;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        for (let j = i - 1; j &gt;= left; j--) {</span></span>
<span class="line"><span>            array[j + 1] = array[j];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        array[left] = key;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return array;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>参考文章:<a href="https://www.jianshu.com/p/96f5c19e13df" target="_blank" rel="noreferrer">十大经典排序算法的JS版</a></p>`,7)]))}const u=s(l,[["render",i]]);export{f as __pageData,u as default};
