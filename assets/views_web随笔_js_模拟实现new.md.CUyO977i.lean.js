import{_ as s,c as a,a2 as e,o as p}from"./chunks/framework.CjNeJe2C.js";const d=JSON.parse('{"title":"模拟实现new","description":"","frontmatter":{"title":"模拟实现new","date":"2020-04-26T00:00:00.000Z","tags":["js","new"],"categories":["js"],"author":["游城走不动"]},"headers":[],"relativePath":"views/web随笔/js/模拟实现new.md","filePath":"views/web随笔/js/模拟实现new.md"}'),t={name:"views/web随笔/js/模拟实现new.md"};function o(l,n,i,c,r,w){return p(),a("div",null,n[0]||(n[0]=[e(`<p>new被调用后做了三件事情:</p><ol><li>创建一个新对象，并继承其构造函数的prototype，这一步是为了继承构造函数原型上的属性和方法</li><li>执行构造函数，方法内的this被指定为该新实例，这一步是为了执行构造函数内的赋值操作</li><li>返回新实例（规范规定，如果构造方法返回了一个对象，那么返回该对象，否则返回第一步创建的新对象）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// new是关键字,这里我们用函数来模拟,new Foo(args) &lt;=&gt; myNew(Foo, args)</span></span>
<span class="line"><span>function myNew(foo, ...args) {</span></span>
<span class="line"><span>  // 创建新对象,并继承构造方法的prototype属性, 这一步是为了把obj挂原型链上, 相当于obj.__proto__ = Foo.prototype</span></span>
<span class="line"><span>  let obj = Object.create(foo.prototype)  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 执行构造方法, 并为其绑定新this, 这一步是为了让构造方法能进行this.name = name之类的操作, args是构造方法的入参, 因为这里用myNew模拟, 所以入参从myNew传入</span></span>
<span class="line"><span>  let result = foo.apply(obj, args)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 如果构造方法已经return了一个对象，那么就返回该对象，否则返回myNew创建的新对象（一般情况下，构造方法不会返回新实例，但使用者可以选择返回新实例来覆盖new创建的对象）</span></span>
<span class="line"><span>  return Object.prototype.toString.call(result) === &#39;[object Object]&#39; ? result : obj</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 测试：</span></span>
<span class="line"><span>function Foo(name) {</span></span>
<span class="line"><span>  this.name = name</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const newObj = myNew(Foo, &#39;zhangsan&#39;)</span></span>
<span class="line"><span>console.log(newObj)                 // Foo {name: &quot;zhangsan&quot;}</span></span>
<span class="line"><span>console.log(newObj instanceof Foo)  // true</span></span></code></pre></div>`,3)]))}const u=s(t,[["render",o]]);export{d as __pageData,u as default};
