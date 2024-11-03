import{_ as s,c as n,a2 as p,o as e}from"./chunks/framework.CjNeJe2C.js";const d=JSON.parse('{"title":"冒泡排序","description":"","frontmatter":{"title":"冒泡排序","date":"2019-11-01T00:00:00.000Z","tags":["sort"],"categories":["算法"]},"headers":[],"relativePath":"views/web随笔/排序/bubble.md","filePath":"views/web随笔/排序/bubble.md"}'),l={name:"views/web随笔/排序/bubble.md"};function t(i,a,r,c,o,h){return e(),n("div",null,a[0]||(a[0]=[p(`<h2 id="bubble-sort" tabindex="-1">Bubble Sort <a class="header-anchor" href="#bubble-sort" aria-label="Permalink to &quot;Bubble Sort&quot;">​</a></h2><p>冒泡排序是一种简单的排序算法，它重复的走访要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来，走访数列的工作是重复的进行直到没有再需要交换，也就是说数列已经排序完成，这个算法的名字的由来是因为越小的元素会精油交换慢慢浮到数列的顶端。</p><h3 id="_1-初级版" tabindex="-1">1. 初级版 <a class="header-anchor" href="#_1-初级版" aria-label="Permalink to &quot;1. 初级版&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function bubbleSort(array) {</span></span>
<span class="line"><span>    const length = array.length;</span></span>
<span class="line"><span>    for (let i = 0; i &lt; length; i++) {</span></span>
<span class="line"><span>        for (let j = 0; j &lt; length - 1 - i; j++) {</span></span>
<span class="line"><span>            if (array[j] &gt; array[j + 1]) {      </span></span>
<span class="line"><span>           let temp = array[j + 1];</span></span>
<span class="line"><span>                array[j + 1] = array[j];</span></span>
<span class="line"><span>                array[j] = temp;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return array;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-改进版" tabindex="-1">2. 改进版 <a class="header-anchor" href="#_2-改进版" aria-label="Permalink to &quot;2. 改进版&quot;">​</a></h3><p>设置一个标志性变量pos，用于记录每趟排序中最后一次进行交换的位置，由于pos位置之后的记录均已交换到位，故在进行下一趟排序是只要扫描到pos位置即可</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function bubbleSort(array) {</span></span>
<span class="line"><span>    let i = array.length - 1;</span></span>
<span class="line"><span>    while (i &gt; 0) {</span></span>
<span class="line"><span>        let pos = 0;</span></span>
<span class="line"><span>        for (let j = 0; j &lt; i; j++) {</span></span>
<span class="line"><span>            if (array[j] &gt; array[j + 1]) {</span></span>
<span class="line"><span>                pos = j;</span></span>
<span class="line"><span>                let temp = array[j];</span></span>
<span class="line"><span>                array[j] = array[j + 1];</span></span>
<span class="line"><span>                array[j + 1] = temp;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        i = pos;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return array;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_3-加强版" tabindex="-1">3. 加强版 <a class="header-anchor" href="#_3-加强版" aria-label="Permalink to &quot;3. 加强版&quot;">​</a></h3><p>传统冒泡排序中的每一趟排序操作只能找到一个最大值或者最小值，我们考虑利用在每趟排序中进行正向和反向两遍冒泡的方法一可以得到里那个个最终值（最大及最小），从而使排序趟数至少减少一半</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function bubbleSort(array) {</span></span>
<span class="line"><span>    let low = 0;</span></span>
<span class="line"><span>    let high = array.length - 1;</span></span>
<span class="line"><span>    while (low &lt; high) {</span></span>
<span class="line"><span>        for (let j = low; j &lt; high; j++) {</span></span>
<span class="line"><span>            if (array[j] &gt; array[j + 1]) {</span></span>
<span class="line"><span>                const temp = array[j];</span></span>
<span class="line"><span>                array[j] = array[j + 1];</span></span>
<span class="line"><span>                array[j + 1] = temp;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        --high;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return array;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>参考文章:<a href="https://www.jianshu.com/p/96f5c19e13df" target="_blank" rel="noreferrer">十大经典排序算法的JS版</a></p>`,11)]))}const u=s(l,[["render",t]]);export{d as __pageData,u as default};
