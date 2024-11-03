import{_ as s,c as a,a2 as p,o as l}from"./chunks/framework.CjNeJe2C.js";const h=JSON.parse('{"title":"手写call、apply、bind","description":"","frontmatter":{"title":"手写call、apply、bind","date":"2020-04-13T00:00:00.000Z","tags":["js","手写"],"categories":["js"],"author":["游城走不动"]},"headers":[],"relativePath":"views/web随笔/js/手写call、apply、bind.md","filePath":"views/web随笔/js/手写call、apply、bind.md"}'),e={name:"views/web随笔/js/手写call、apply、bind.md"};function t(i,n,c,o,d,r){return l(),a("div",null,n[0]||(n[0]=[p(`<h2 id="_1-call" tabindex="-1">1. call <a class="header-anchor" href="#_1-call" aria-label="Permalink to &quot;1. call&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。</p><p>call()方法的作用和 apply() 方法类似，区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组。</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Function.prototype.MyCall = function (context, ...args) {</span></span>
<span class="line"><span>    const fn = Symbol(&#39;fn&#39;) // 声明一个独有的Symbol属性, 防止fn覆盖已有属性</span></span>
<span class="line"><span>    context = context || window // 如果没有传或传的值为空对象 context指向window</span></span>
<span class="line"><span>    context[fn] = this // this指向调用call的对象,即我们要改变this指向的函数</span></span>
<span class="line"><span>    const result = context[fn](...args) // 执行当前函数</span></span>
<span class="line"><span>    delete context[fn] // 删除我们声明的fn属性</span></span>
<span class="line"><span>    return result // 返回函数执行结果</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//测试</span></span>
<span class="line"><span>let Person = {</span></span>
<span class="line"><span>    name: &#39;Tom&#39;,</span></span>
<span class="line"><span>    say(age) {</span></span>
<span class="line"><span>        console.log(this)</span></span>
<span class="line"><span>        console.log(\`我叫\${this.name}我今年\${age}\`)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Person1 = {</span></span>
<span class="line"><span>    name: &#39;Tom1&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Person.say.call(Person1, 18) //我叫Tom1我今年18</span></span>
<span class="line"><span>Person.say.MyCall(Person1, 18) //我叫Tom1我今年18</span></span></code></pre></div><h2 id="_2-apply" tabindex="-1">2.apply <a class="header-anchor" href="#_2-apply" aria-label="Permalink to &quot;2.apply&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Function.prototype.MyApply = function (context,args) {</span></span>
<span class="line"><span>    const fn = Symbol(&#39;fn&#39;) // 声明一个独有的Symbol属性, 防止fn覆盖已有属性</span></span>
<span class="line"><span>    context = context || window // 如果没有传或传的值为空对象 context指向window</span></span>
<span class="line"><span>    context[fn] = this // this指向调用call的对象,即我们要改变this指向的函数</span></span>
<span class="line"><span>    const result = context[fn](...args) // 执行当前函数</span></span>
<span class="line"><span>    delete context[fn] // 删除我们声明的fn属性</span></span>
<span class="line"><span>    return result // 返回函数执行结果</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_3-bind" tabindex="-1">3.bind <a class="header-anchor" href="#_3-bind" aria-label="Permalink to &quot;3.bind&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。</p><p>bind() 的另一个最简单的用法是使一个函数拥有预设的初始参数。只要将这些参数（如果有的话）作为 bind() 的参数写在 this 后面。当绑定函数被调用时，这些参数会被插入到目标函数的参数列表的开始位置，传递给绑定函数的参数会跟在它们后面。</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Function.prototype.MyBind = function (context, ...args) {</span></span>
<span class="line"><span>    var self = this</span></span>
<span class="line"><span>    // new优先级</span></span>
<span class="line"><span>    var fbound = function () {</span></span>
<span class="line"><span>        self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)))</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 继承原型上的属性和方法</span></span>
<span class="line"><span>    fbound.prototype = Object.create(self.prototype);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return fbound;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//测试</span></span>
<span class="line"><span>const obj = { name: &#39;Tom1&#39; }</span></span>
<span class="line"><span>function foo() {</span></span>
<span class="line"><span>    console.log(this.name)</span></span>
<span class="line"><span>    console.log(arguments)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>foo.MyBind(obj, &#39;a&#39;, &#39;b&#39;, &#39;c&#39;)()</span></span></code></pre></div>`,9)]))}const u=s(e,[["render",t]]);export{h as __pageData,u as default};
