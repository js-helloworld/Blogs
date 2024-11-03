import{_ as n,c as a,a2 as p,o as l}from"./chunks/framework.CjNeJe2C.js";const r=JSON.parse('{"title":"this指向小结","description":"","frontmatter":{"title":"this指向小结","date":"2019-12-11T00:00:00.000Z","tags":["js"],"categories":["js"]},"headers":[],"relativePath":"views/web随笔/js/this.md","filePath":"views/web随笔/js/this.md"}'),e={name:"views/web随笔/js/this.md"};function i(t,s,c,o,h,d){return l(),a("div",null,s[0]||(s[0]=[p(`<h3 id="this是-javascript-语言的一个关键字。它是函数运行时-在函数体内部自动生成的一个对象-只能在函数体内部使用。" tabindex="-1">this是 JavaScript 语言的一个关键字。它是函数运行时，在函数体内部自动生成的一个对象，只能在函数体内部使用。 <a class="header-anchor" href="#this是-javascript-语言的一个关键字。它是函数运行时-在函数体内部自动生成的一个对象-只能在函数体内部使用。" aria-label="Permalink to &quot;this是 JavaScript 语言的一个关键字。它是函数运行时，在函数体内部自动生成的一个对象，只能在函数体内部使用。&quot;">​</a></h3><p>下面几种情况，总结this的用法。</p><ol><li>纯粹的函数调用</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var x = 1;</span></span>
<span class="line"><span>function test() {</span></span>
<span class="line"><span>   console.log(this.x);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>test();  // 1</span></span></code></pre></div><ol start="2"><li>作为对象方法的调用</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>var x = 1;</span></span>
<span class="line"><span>function test() {</span></span>
<span class="line"><span>  console.log(this.x);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var obj = {</span></span>
<span class="line"><span>  x:2,</span></span>
<span class="line"><span>  test:test</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>test(); //1</span></span>
<span class="line"><span>obj.test();   // 2</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var A = {</span></span>
<span class="line"><span>    name: &#39;张三&#39;,</span></span>
<span class="line"><span>    f: function () {</span></span>
<span class="line"><span>        console.log(&#39;姓名：&#39; + this.name);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>var B = {</span></span>
<span class="line"><span>    name: &#39;李四&#39;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>B.f = A.f;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>B.f()   // 姓名：李四</span></span>
<span class="line"><span>A.f()   // 姓名：张三</span></span></code></pre></div><ol start="3"><li>作为构造函数调用</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function test() {</span></span>
<span class="line"><span>　this.x = 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var obj = new test();</span></span>
<span class="line"><span>obj.x // 1</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var obj = {</span></span>
<span class="line"><span>    fun:function(){</span></span>
<span class="line"><span>        console.log(this) ;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>setInterval(obj.fun,1000);      // this指向window对象</span></span>
<span class="line"><span>setInterval(&#39;obj.fun()&#39;,1000);  // this指向obj对象</span></span></code></pre></div><ol start="4"><li>事件绑定中的this</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;input type=&quot;button&quot; id=&quot;btn&quot; value=&quot;按钮&quot; onclick=&quot;clickFun()&quot;&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> function clickFun(){</span></span>
<span class="line"><span>      console.log(this) // 此函数的运行环境在全局window对象下，因此this指向window;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>&lt;input type=&quot;button&quot; value=&quot;按钮&quot; onclick=&quot;this&quot;&gt;</span></span>
<span class="line"><span>&lt;!-- 运行环境在节点对象中，因此this指向本节点对象 --&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> var btn = document.getElementById(&#39;btn&#39;);</span></span>
<span class="line"><span> btn.onclick = function(){</span></span>
<span class="line"><span>       console.log(this) // this指向本节点对象</span></span>
<span class="line"><span> }</span></span></code></pre></div><ol start="5"><li>apply 调用</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var x = 0;</span></span>
<span class="line"><span>function test() {</span></span>
<span class="line"><span>　console.log(this.x);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var obj = {</span></span>
<span class="line"><span>  x:1,</span></span>
<span class="line"><span>  m:test</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>obj.m.apply() // 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>obj.m.apply(obj); //1</span></span></code></pre></div><ol start="6"><li>箭头函数调用</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>var obj={</span></span>
<span class="line"><span>    a:222,</span></span>
<span class="line"><span>    fn:function(){</span></span>
<span class="line"><span>        console.log(this) //obj</span></span>
<span class="line"><span>        setTimeout(function(){console.log(this.a)})</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    fn2:function(){</span></span>
<span class="line"><span>        setTimeout(()=&gt;{console.log(this.a)});</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    fn3:()=&gt;{</span></span>
<span class="line"><span>        console.log(this) //Window</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>obj.fn();//undefined</span></span>
<span class="line"><span>obj.fn2();//222</span></span></code></pre></div><ul><li>fn()里面的this是指向obj，但是传给 setTimeout 的是普通函数，this指向是window，window下面没有a，所以这里输出 undefined。</li><li>箭头函数里面没有 this ，所以要向上层作用域查找</li></ul><p>参考文章：</p><ul><li><a href="http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html" target="_blank" rel="noreferrer">Javascript 的 this 用法</a></li><li><a href="https://zhuanlan.zhihu.com/p/42145138" target="_blank" rel="noreferrer">彻底搞懂JavaScript中的this指向问题</a></li></ul>`,21)]))}const g=n(e,[["render",i]]);export{r as __pageData,g as default};
