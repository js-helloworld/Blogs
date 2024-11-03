import{_ as n,c as a,a2 as p,o as e}from"./chunks/framework.CjNeJe2C.js";const m=JSON.parse('{"title":"质数判断和筛选","description":"","frontmatter":{"title":"质数判断和筛选","date":"2020-05-18T00:00:00.000Z","tags":["质数"],"categories":["算法"]},"headers":[],"relativePath":"views/web随笔/质数判断和筛选.md","filePath":"views/web随笔/质数判断和筛选.md"}'),l={name:"views/web随笔/质数判断和筛选.md"};function i(t,s,c,r,o,d){return e(),a("div",null,s[0]||(s[0]=[p(`<p>普通的质数判断方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function judge(n) {</span></span>
<span class="line"><span>  for(let i=2, len=Math.sqrt(n); i&lt;=len; i++) {</span></span>
<span class="line"><span>    if(n % i === 0)  return false;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return true;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>厄拉多塞筛法，时间复杂度O(n * loglog n)：从 2 开始遍历，把 2 的倍数都标记为 false（表示不是素数），再从 2 的下一位素数 3 开始也同样标记其倍数。以此类推，最后仍为 true 的则为素数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function choosePrimes(n = 10000) {</span></span>
<span class="line"><span>  // 标记是否为素数</span></span>
<span class="line"><span>  let mark = Array(n).fill(true);</span></span>
<span class="line"><span>  // 存放素数</span></span>
<span class="line"><span>  let primes = [];</span></span>
<span class="line"><span>  let index = 0;</span></span>
<span class="line"><span>  for(let i=2; i&lt;=n; i++) {</span></span>
<span class="line"><span>    // 如果i是质数则放入primes数组，并标记i的倍数</span></span>
<span class="line"><span>    if(mark[i] === true) {</span></span>
<span class="line"><span>      primes[index++] = i;</span></span>
<span class="line"><span>      for(let j=i+i; j&lt;=n; j+=i) {</span></span>
<span class="line"><span>        mark[j] = false;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,4)]))}const f=n(l,[["render",i]]);export{m as __pageData,f as default};
