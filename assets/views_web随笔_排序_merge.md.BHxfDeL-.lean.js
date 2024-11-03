import{_ as n,c as a,a2 as e,o as p}from"./chunks/framework.CjNeJe2C.js";const d=JSON.parse('{"title":"归并排序","description":"","frontmatter":{"title":"归并排序","date":"2019-11-06T00:00:00.000Z","tags":["sort"],"categories":["算法"]},"headers":[],"relativePath":"views/web随笔/排序/merge.md","filePath":"views/web随笔/排序/merge.md"}'),t={name:"views/web随笔/排序/merge.md"};function l(r,s,i,c,o,h){return p(),a("div",null,s[0]||(s[0]=[e(`<h2 id="merge-sort" tabindex="-1">Merge Sort <a class="header-anchor" href="#merge-sort" aria-label="Permalink to &quot;Merge Sort&quot;">​</a></h2><p>归并排序是建立在归并操作的一种有效的排序算法，该算法是采用分治法的一个非常典型的应用。归并排序是一种稳定的排序算法，将已有序的子序列合并，等到一个完全有序的序列，即先使每个子序列有序，再使子序列段有序，若将两个有序表合并成一个有序表，称作2路合并</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function mergeSort(array) {</span></span>
<span class="line"><span>    if (array.length &lt; 2) {</span></span>
<span class="line"><span>        return array;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    const middle = parseInt(array.length / 2);</span></span>
<span class="line"><span>    const left = array.slice(0, middle);</span></span>
<span class="line"><span>    const right = array.slice(middle);</span></span>
<span class="line"><span>    return merge(test_run(left), test_run(right));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function merge(left, right) {</span></span>
<span class="line"><span>    const newArray = [];</span></span>
<span class="line"><span>    while (left.length &amp;&amp; right.length) {</span></span>
<span class="line"><span>        if (left[0] &lt;= right[0]) {</span></span>
<span class="line"><span>            newArray.push(left.shift());</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            newArray.push(right.shift());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    while (left.length) {</span></span>
<span class="line"><span>        newArray.push(left.shift());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    while (right.length) {</span></span>
<span class="line"><span>        newArray.push(right.shift());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return newArray;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>参考文章:<a href="https://www.jianshu.com/p/96f5c19e13df" target="_blank" rel="noreferrer">十大经典排序算法的JS版</a></p>`,4)]))}const f=n(t,[["render",l]]);export{d as __pageData,f as default};
