import{_ as n,c as a,a2 as p,o as e}from"./chunks/framework.CjNeJe2C.js";const g=JSON.parse('{"title":"ES5环境下实现let、const","description":"","frontmatter":{"title":"ES5环境下实现let、const","date":"2020-04-08T00:00:00.000Z","tags":["js","手写"],"categories":["js"],"author":["游城走不动"]},"headers":[],"relativePath":"views/web随笔/js/在ES5环境下实现let、const.md","filePath":"views/web随笔/js/在ES5环境下实现let、const.md"}'),l={name:"views/web随笔/js/在ES5环境下实现let、const.md"};function t(i,s,c,o,r,d){return e(),a("div",null,s[0]||(s[0]=[p(`<ol><li>可以通过模拟块级作用域来实现let</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(function(){</span></span>
<span class="line"><span>  for(var i = 0; i &lt; 5; i ++){</span></span>
<span class="line"><span>    console.log(i)  // 0 1 2 3 4</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(i) //Uncaught ReferenceError: i is not defined</span></span></code></pre></div><p>babel转换前后的结果:</p><p><img src="https://raw.githubusercontent.com/mail-img/picBed/master/blog/img/picgo/20200408140716.png" alt="20200408140716"></p><ol start="2"><li>实现const的关键在于Object.defineProperty()这个API</li></ol><p>由于ES5环境没有block的概念，所以是无法百分百实现const，只能是挂载到某个对象下，要么是全局的window，要么就是自定义一个object来当容器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var __const = function __const (data, value) {</span></span>
<span class="line"><span>        window.data = value // 把要定义的data挂载到window下，并赋值value</span></span>
<span class="line"><span>        Object.defineProperty(window, data, { // 利用Object.defineProperty的能力劫持当前对象，并修改其属性描述符</span></span>
<span class="line"><span>          enumerable: false,</span></span>
<span class="line"><span>          configurable: false,</span></span>
<span class="line"><span>          get: function () {</span></span>
<span class="line"><span>            return value</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          set: function (data) {</span></span>
<span class="line"><span>            if (data !== value) { // 当要对当前属性进行赋值时，则抛出错误！</span></span>
<span class="line"><span>              throw new TypeError(&#39;Assignment to constant variable.&#39;)</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>              return value</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      __const(&#39;a&#39;, 10)</span></span>
<span class="line"><span>      console.log(a)</span></span>
<span class="line"><span>      delete a</span></span>
<span class="line"><span>      console.log(a)</span></span>
<span class="line"><span>      for (let item in window) { // 因为const定义的属性在global下也是不存在的，所以用到了enumerable: false来模拟这一功能</span></span>
<span class="line"><span>        if (item === &#39;a&#39;) { // 因为不可枚举，所以不执行</span></span>
<span class="line"><span>          console.log(window[item])</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      a = 20 // 报错</span></span></code></pre></div><p>参考资料：<a href="https://juejin.im/post/5ce3b2d451882533287a767f" target="_blank" rel="noreferrer">如何在 ES5 环境下实现一个const ？</a></p>`,8)]))}const b=n(l,[["render",t]]);export{g as __pageData,b as default};
