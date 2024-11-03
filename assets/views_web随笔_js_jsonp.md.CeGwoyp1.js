import{_ as a,c as n,a2 as p,o as t}from"./chunks/framework.CjNeJe2C.js";const u=JSON.parse('{"title":"jsonp的原理","description":"","frontmatter":{"title":"jsonp的原理","date":"2020-06-22T00:00:00.000Z","tags":["jsonp"],"categories":["js","ajax"]},"headers":[],"relativePath":"views/web随笔/js/jsonp.md","filePath":"views/web随笔/js/jsonp.md"}'),e={name:"views/web随笔/js/jsonp.md"};function l(i,s,o,c,r,d){return t(),n("div",null,s[0]||(s[0]=[p(`<h2 id="_1-jsonp-跨域原理" tabindex="-1">1.jsonp 跨域原理 <a class="header-anchor" href="#_1-jsonp-跨域原理" aria-label="Permalink to &quot;1.jsonp 跨域原理&quot;">​</a></h2><p>浏览器的同源策略把跨域请求都禁止了，但是页面中的 script、img、iframe标签是例外，不受同源策略限制。</p><p>Jsonp 就是利用 script 标签跨域特性进行跨域数据访问。</p><p>JSONP 的理念就是，与服务端约定好一个回调函数名，服务端接收到请求后，将返回一段 Javascript，在这段 Javascript 代码中调用了约定好的回调函数，并且将数据作为参数进行传递。当网页接收到这段 Javascript 代码后，就会执行这个回调函数，这时数据已经成功传输到客户端了。</p><p>JSONP 的缺点是：它只支持 GET 请求，而不支持 POST 请求等其他类型的 HTTP 请求。</p><h3 id="jsonp的粗糙实现" tabindex="-1">JSONP的粗糙实现 <a class="header-anchor" href="#jsonp的粗糙实现" aria-label="Permalink to &quot;JSONP的粗糙实现&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Title&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div&gt;jsonp&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    function getremotedata(data) {</span></span>
<span class="line"><span>        console.log(data);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    var div = document.getElementsByTagName(&#39;div&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    div[0].onclick = function(){</span></span>
<span class="line"><span>        var url = &quot;./getdata.js&quot;;</span></span>
<span class="line"><span>        var script = document.createElement(&#39;script&#39;);</span></span>
<span class="line"><span>        script.setAttribute(&#39;src&#39;, url);</span></span>
<span class="line"><span>        document.getElementsByTagName(&#39;head&#39;)[0].appendChild(script);</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>远程的getdata.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>getremotedata({</span></span>
<span class="line"><span>    code:0,</span></span>
<span class="line"><span>    result:&#39;success&#39;</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="_2-jsonp为什么不是ajax" tabindex="-1">2.jsonp为什么不是ajax <a class="header-anchor" href="#_2-jsonp为什么不是ajax" aria-label="Permalink to &quot;2.jsonp为什么不是ajax&quot;">​</a></h2><p>ajax和jsonp其实本质上是不同的东西。ajax的核心是通过XmlHttpRequest获取非本页内容，而jsonp的核心则是动态添加script标签来调用服务器提供的js脚本。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>ajax和jsonp这两种技术在调用方式上&quot;看起来&quot;很像，目的也一样，都是请求一个url，然后把服务器返回的数据进行处理，因此jquery和ext等框架都把jsonp作为ajax的一种形式进行了封装</li><li>ajax与jsonp的区别不在于是否跨域，ajax通过服务端代理一样可以实现跨域，jsonp本身也不排斥同域的数据的获取</li><li>jsonp是一种方式或者说非强制协议，如同ajax一样，它也不一定非要json格式来传递数据，如果你愿意，字符换也行，只不过这样不利于jsonp提供公开服务。</li></ul></div>`,12)]))}const g=a(e,[["render",l]]);export{u as __pageData,g as default};
