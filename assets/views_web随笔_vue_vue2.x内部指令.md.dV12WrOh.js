import{_ as a,c as n,a2 as p,o as t}from"./chunks/framework.CjNeJe2C.js";const g=JSON.parse('{"title":"vue2.x内部指令","description":"","frontmatter":{"title":"vue2.x内部指令","date":"2020-06-11T00:00:00.000Z","tags":["vue"],"categories":["vue"],"author":["游城走不动"]},"headers":[],"relativePath":"views/web随笔/vue/vue2.x内部指令.md","filePath":"views/web随笔/vue/vue2.x内部指令.md"}'),l={name:"views/web随笔/vue/vue2.x内部指令.md"};function e(i,s,o,c,d,u){return t(),n("div",null,s[0]||(s[0]=[p(`<h2 id="_1-编写helloworld" tabindex="-1">1.编写helloworld <a class="header-anchor" href="#_1-编写helloworld" aria-label="Permalink to &quot;1.编写helloworld&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot; src=&quot;../assets/js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Helloworld&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Hello World&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;hr&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>        {{message}}</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>        var app=new Vue({</span></span>
<span class="line"><span>            el:&#39;#app&#39;,</span></span>
<span class="line"><span>            data:{</span></span>
<span class="line"><span>                message:&#39;hello world!&#39;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h2 id="_2-件渲染" tabindex="-1">2.件渲染 <a class="header-anchor" href="#_2-件渲染" aria-label="Permalink to &quot;2.件渲染&quot;">​</a></h2><ul><li>v-if</li><li>v-else</li><li>v-else-if</li><li>v-show</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;h1 v-if=&quot;awesome&quot;&gt;Vue is awesome!&lt;/h1&gt;</span></span>
<span class="line"><span>&lt;div v-else-if=&quot;awesome === &#39;B&#39;&quot;&gt;</span></span>
<span class="line"><span>  B</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;h1 v-else&gt;Oh no 😢&lt;/h1&gt;</span></span>
<span class="line"><span>&lt;h1 v-show=&quot;ok&quot;&gt;Hello!&lt;/h1&gt;</span></span></code></pre></div><ul><li>v-if： 判断是否加载，可以减轻服务器的压力，在需要时加载。</li><li>v-show：调整css dispaly属性，可以使客户端操作更加流畅。</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>不推荐同时使用 v-if 和 v-for。请查阅风格指南以获取更多信息。</p></div><h2 id="_3-列表渲染" tabindex="-1">3.列表渲染 <a class="header-anchor" href="#_3-列表渲染" aria-label="Permalink to &quot;3.列表渲染&quot;">​</a></h2><h3 id="v-for指令-解决模板循环问题" tabindex="-1">v-for指令：解决模板循环问题 <a class="header-anchor" href="#v-for指令-解决模板循环问题" aria-label="Permalink to &quot;v-for指令：解决模板循环问题&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot; src=&quot;../assets/js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;title&gt;V-for 案例&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;v-for指令用法&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;hr&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>        &lt;ul id=&quot;example-1&quot;&gt;</span></span>
<span class="line"><span>            &lt;li v-for=&quot;item in items&quot; :key=&quot;item.message&quot;&gt;</span></span>
<span class="line"><span>                {{ item.message }}</span></span>
<span class="line"><span>            &lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>        var app=new Vue({</span></span>
<span class="line"><span>            el:&#39;#app&#39;,</span></span>
<span class="line"><span>            data:{</span></span>
<span class="line"><span>                items: [</span></span>
<span class="line"><span>                    { message: &#39;Foo&#39; },</span></span>
<span class="line"><span>                    { message: &#39;Bar&#39; }</span></span>
<span class="line"><span>                ]</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h2 id="_4-v-text-v-html" tabindex="-1">4.v-text &amp;&amp; v-html <a class="header-anchor" href="#_4-v-text-v-html" aria-label="Permalink to &quot;4.v-text &amp;&amp; v-html&quot;">​</a></h2><p>双大括号会将数据解释为纯文本，而非HTML。为了输出真正的HTML，你就需要使用v-html 指令。 需要注意的是：在生产环境中动态渲染HTML是非常危险的，因为容易导致XSS攻击。所以只能在可信的内容上使用v-html，永远不要在用户提交和可操作的网页上使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;span&gt;{{ message }}&lt;/span&gt;</span></span>
<span class="line"><span>等价于</span></span>
<span class="line"><span>&lt;span v-text=&quot;message&quot;&gt;&lt;/span&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;span v-html=&quot;msgHtml&quot;&gt;&lt;/span&gt;</span></span></code></pre></div><h2 id="_5-v-on-指令监听-dom-事件" tabindex="-1">5.v-on 指令监听 DOM 事件 <a class="header-anchor" href="#_5-v-on-指令监听-dom-事件" aria-label="Permalink to &quot;5.v-on 指令监听 DOM 事件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot; src=&quot;../assets/js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;title&gt;v-on事件监听器&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;v-on 事件监听器&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;hr&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;example-1&quot;&gt;</span></span>
<span class="line"><span>        &lt;button v-on:click=&quot;counter += 1&quot;&gt;Add 1&lt;/button&gt;</span></span>
<span class="line"><span>        &lt;p&gt;The button above has been clicked {{ counter }} times.&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>        var app=new Vue({</span></span>
<span class="line"><span>            el: &#39;#example-1&#39;,</span></span>
<span class="line"><span>            data: {</span></span>
<span class="line"><span>                counter: 0</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>v-on 还有一种简单的写法，就是用@代替。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;button @click=&quot;counter += 1&quot;&gt;Add 1&lt;/button&gt;</span></span></code></pre></div><h2 id="_6-v-model指令" tabindex="-1">6.v-model指令 <a class="header-anchor" href="#_6-v-model指令" aria-label="Permalink to &quot;6.v-model指令&quot;">​</a></h2><p>你可以用 v-model 指令在表单 input、textarea 及 select 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;p&gt;原始文本信息：{{message}}&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;h3&gt;文本框&lt;/h3&gt;</span></span>
<span class="line"><span>    &lt;p&gt;v-model:&lt;input type=&quot;text&quot; v-model=&quot;message&quot;&gt;&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var app=new Vue({</span></span>
<span class="line"><span>  el:&#39;#app&#39;,</span></span>
<span class="line"><span>  data:{</span></span>
<span class="line"><span>       message:&#39;hello Vue!&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> })</span></span></code></pre></div><p>修饰符</p><ul><li>.lazy：取代 input 监听 change 事件。</li><li>.number：输入字符串转为数字。</li><li>.trim：输入去掉首尾空格。</li></ul><h2 id="_7-v-bind指令" tabindex="-1">7.v-bind指令 <a class="header-anchor" href="#_7-v-bind指令" aria-label="Permalink to &quot;7.v-bind指令&quot;">​</a></h2><p>v-bind是处理HTML中的标签属性的</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;img v-bind:src=&quot;imgSrc&quot;  width=&quot;200px&quot;&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>v-bind 缩写</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- 完整语法 --&gt;</span></span>
<span class="line"><span>&lt;a v-bind:href=&quot;url&quot;&gt;&lt;/a&gt;</span></span>
<span class="line"><span>&lt;!-- 缩写 --&gt;</span></span>
<span class="line"><span>&lt;a :href=&quot;url&quot;&gt;&lt;/a&gt;</span></span></code></pre></div><h2 id="_8-其他内部指令-v-pre-v-cloak-v-once" tabindex="-1">8.其他内部指令(v-pre &amp; v-cloak &amp; v-once) <a class="header-anchor" href="#_8-其他内部指令-v-pre-v-cloak-v-once" aria-label="Permalink to &quot;8.其他内部指令(v-pre &amp; v-cloak &amp; v-once)&quot;">​</a></h2><h3 id="v-pre" tabindex="-1">v-pre <a class="header-anchor" href="#v-pre" aria-label="Permalink to &quot;v-pre&quot;">​</a></h3><p>在模板中跳过vue的编译，直接输出原始值。就是在标签中加入v-pre就不会输出vue中的data值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div v-pre&gt;{{message}}&lt;/div&gt;</span></span></code></pre></div><h3 id="v-cloak" tabindex="-1">v-cloak <a class="header-anchor" href="#v-cloak" aria-label="Permalink to &quot;v-cloak&quot;">​</a></h3><p>在vue渲染完指定的整个DOM后才进行显示。它必须和CSS样式一起使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[v-cloak] {</span></span>
<span class="line"><span>  display: none;</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div v-cloak&gt;</span></span>
<span class="line"><span>  {{ message }}</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><h3 id="v-once" tabindex="-1">v-once <a class="header-anchor" href="#v-once" aria-label="Permalink to &quot;v-once&quot;">​</a></h3><p>在第一次DOM时进行渲染，渲染完成后视为静态内容，跳出以后的渲染过程</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div v-once&gt;第一次绑定的值：{{message}}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div&gt;&lt;input type=&quot;text&quot; v-model=&quot;message&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><p>学习资料:<a href="https://jspang.com/detailed?id=57" target="_blank" rel="noreferrer">Vue2.x学习路线-按次路线学习顺畅无比</a></p>`,41)]))}const v=a(l,[["render",e]]);export{g as __pageData,v as default};
