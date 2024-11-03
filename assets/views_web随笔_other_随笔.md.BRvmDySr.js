import{_ as a,c as n,a2 as i,o as p}from"./chunks/framework.CjNeJe2C.js";const o=JSON.parse('{"title":"面试随笔","description":"","frontmatter":{"title":"面试随笔","date":"2024-10-13T00:00:00.000Z","tags":["面试"],"categories":["面试"]},"headers":[],"relativePath":"views/web随笔/other/随笔.md","filePath":"views/web随笔/other/随笔.md"}'),l={name:"views/web随笔/other/随笔.md"};function t(e,s,h,k,r,c){return p(),n("div",null,s[0]||(s[0]=[i(`<h2 id="_1-面试题-new操作符具体做了什么" tabindex="-1">1. 面试题：new操作符具体做了什么 <a class="header-anchor" href="#_1-面试题-new操作符具体做了什么" aria-label="Permalink to &quot;1. 面试题：new操作符具体做了什么&quot;">​</a></h2><details open><summary>new操作符具体做了什么</summary><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> , </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //1. 创建了一个空的对象</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//var obj = Object.create({})</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //2. 将空对象的原型，指向于构造函数的原型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setPrototypeOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //3. 将空对象作为构造函数的上下文（改变this指向）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fn.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj,args);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //4. 对构造函数有返回值的处理判断</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Object</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span></code></pre></div></details><h2 id="_2-有听过函数防抖和函数节流吗" tabindex="-1">2. 有听过函数防抖和函数节流吗？ <a class="header-anchor" href="#_2-有听过函数防抖和函数节流吗" aria-label="Permalink to &quot;2. 有听过函数防抖和函数节流吗？&quot;">​</a></h2><details open><summary>函数防抖（debounce）</summary><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 防抖的中心思想在于：我会等你到底。在某段时间内，不管你触发了多少次回调，我都只认最后一次。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> debounce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">duration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> timer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> context</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (timer) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            clearTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(timer)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          timer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            fn.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(context, args)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          }, duration)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span></code></pre></div></details><details open><summary>函数节流（throttle）</summary><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // throttle 的中心思想在于：在某段时间内，不管你触发了多少次回调，我都只认第一次，并在计时结束时给予响应。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> throttle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">duration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // last为上一次触发回调的时间</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> last </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> context</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> now</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Date.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (now </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> last </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> duration) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            last </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> now</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            fn.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(context, args)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span></code></pre></div></details><h2 id="_3-请描述event-loop的机制-什么是宏任务和微任务-两者有什么区别" tabindex="-1">3. 请描述event-loop的机制, 什么是宏任务和微任务，两者有什么区别？ <a class="header-anchor" href="#_3-请描述event-loop的机制-什么是宏任务和微任务-两者有什么区别" aria-label="Permalink to &quot;3. 请描述event-loop的机制, 什么是宏任务和微任务，两者有什么区别？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>在Job queue中的队列分为两种类型：macro-task和microTask。我们举例来看执行顺序的规定，我们设</span></span>
<span class="line"><span></span></span>
<span class="line"><span>macro-task队列包含任务: a1, a2 , a3</span></span>
<span class="line"><span>micro-task队列包含任务: b1, b2 , b3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>执行顺序为，首先执行marco-task队列开头的任务，也就是 a1 任务，执行完毕后，在执行micro-task队列里的所有任务，也就是依次执行b1, b2 , b3，执行完后清空micro-task中的任务，接着执行marco-task中的第二个任务，依次循环。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>了解完了macro-task和micro-task两种队列的执行顺序之后，我们接着来看，真实场景下这两种类型的队列里真正包含的任务（我们以node V8引擎为例），在node V8中，这两种类型的真实任务顺序如下所示：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>macro-task队列真实包含任务：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>script(主程序代码),setTimeout, setInterval, setImmediate, I/O, UI rendering</span></span>
<span class="line"><span></span></span>
<span class="line"><span>micro-task队列真实包含任务：</span></span>
<span class="line"><span>process.nextTick, Promises, Object.observe, MutationObserver</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由此我们得到的执行顺序应该为：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>script(主程序代码)—&gt;process.nextTick—&gt;Promises...——&gt;setTimeout——&gt;setInterval——&gt;setImmediate——&gt; I/O——&gt;UI rendering</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在ES6中macro-task队列又称为ScriptJobs，而micro-task又称PromiseJobs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 什么宏任务和微任务，两者有什么区别？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>宏任务：setTimeout、setInterval、Ajax、DOM时间</span></span>
<span class="line"><span>微任务：Promise async/await</span></span>
<span class="line"><span>微任务是ES6语法规定的</span></span>
<span class="line"><span>宏任务是浏览器规定的</span></span>
<span class="line"><span>微任务执行时机比宏任务早（微任务在DOM渲染前执行，宏任务在DOM渲染后执行）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setTimeout(function(){console.log(1)},0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>new Promise(function(resolve,reject){</span></span>
<span class="line"><span>   console.log(2);</span></span>
<span class="line"><span>   resolve();</span></span>
<span class="line"><span>}).then(function(){console.log(3)</span></span>
<span class="line"><span>}).then(function(){console.log(4)});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>process.nextTick(function(){console.log(5)});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(6);</span></span>
<span class="line"><span>//输出2,6,5,3,4,1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setTimeout(function(){console.log(1)},0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>new Promise(function(resolve,reject){</span></span>
<span class="line"><span>   console.log(2);</span></span>
<span class="line"><span>   setTimeout(function(){resolve()},0)</span></span>
<span class="line"><span>}).then(function(){console.log(3)</span></span>
<span class="line"><span>}).then(function(){console.log(4)});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>process.nextTick(function(){console.log(5)});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(6);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//输出的是  2 6 5 1 3 4</span></span></code></pre></div><p>参考文章： <a href="https://github.com/forthealllight/blog/issues/5" target="_blank" rel="noreferrer">从promise、process.nextTick、setTimeout出发，谈谈Event Loop中的Job queue</a></p>`,8)]))}const d=a(l,[["render",t]]);export{o as __pageData,d as default};
