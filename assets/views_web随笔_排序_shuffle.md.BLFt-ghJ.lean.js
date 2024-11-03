import{_ as e,c as s,a2 as n,o as t}from"./chunks/framework.CjNeJe2C.js";const f=JSON.parse('{"title":"洗牌算法","description":"","frontmatter":{"title":"洗牌算法","date":"2019-12-04T00:00:00.000Z","tags":["洗牌"],"categories":["算法"]},"headers":[],"relativePath":"views/web随笔/排序/shuffle.md","filePath":"views/web随笔/排序/shuffle.md"}'),i={name:"views/web随笔/排序/shuffle.md"};function p(r,a,l,o,c,d){return t(),s("div",null,a[0]||(a[0]=[n(`<h2 id="洗牌" tabindex="-1">洗牌 <a class="header-anchor" href="#洗牌" aria-label="Permalink to &quot;洗牌&quot;">​</a></h2><p>洗牌算法其实就是随机打乱数组，实现思路是：遍历数组元素，将当前元素和前面未有序序列中任意一个数进行交换，保证每个元素和其他元素交换的概率是等大的。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let arr = [0, 1, 2, 3, 4];</span></span>
<span class="line"><span>for(let i=arr.length-1; i&gt;0; i--) {</span></span>
<span class="line"><span>  let index = parseInt(Math.random() * (i + 1));</span></span>
<span class="line"><span>  [arr[i], arr[index]] = [arr[index], arr[i]];</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,3)]))}const u=e(i,[["render",p]]);export{f as __pageData,u as default};
