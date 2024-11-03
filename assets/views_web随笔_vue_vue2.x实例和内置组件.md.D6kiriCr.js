import{_ as a,c as n,a2 as p,o as t}from"./chunks/framework.CjNeJe2C.js";const g=JSON.parse('{"title":"vue2.x实例和内置组件","description":"","frontmatter":{"title":"vue2.x实例和内置组件","date":"2020-06-16T00:00:00.000Z","tags":["vue"],"categories":["vue"],"author":["游城走不动"]},"headers":[],"relativePath":"views/web随笔/vue/vue2.x实例和内置组件.md","filePath":"views/web随笔/vue/vue2.x实例和内置组件.md"}'),e={name:"views/web随笔/vue/vue2.x实例和内置组件.md"};function l(i,s,c,o,d,u){return t(),n("div",null,s[0]||(s[0]=[p(`<h2 id="_1-实例属性" tabindex="-1">1.实例属性 <a class="header-anchor" href="#_1-实例属性" aria-label="Permalink to &quot;1.实例属性&quot;">​</a></h2><h3 id="一、vue和jquery-js一起使用" tabindex="-1">一、Vue和Jquery.js一起使用 <a class="header-anchor" href="#一、vue和jquery-js一起使用" aria-label="Permalink to &quot;一、Vue和Jquery.js一起使用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot; src=&quot;../assets/js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot; src=&quot;../assets/js/jquery-3.1.1.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Early Examples Demo&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Early Examples Demo&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;hr&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>        {{message}}</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>        var app=new Vue({</span></span>
<span class="line"><span>            el:&#39;#app&#39;,</span></span>
<span class="line"><span>            data:{</span></span>
<span class="line"><span>                message:&#39;hello Vue!&#39;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            //在Vue中使用jQuery</span></span>
<span class="line"><span>            mounted:function(){</span></span>
<span class="line"><span>                $(&#39;#app&#39;).html(&#39;我是jQuery!&#39;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h3 id="二、实例调用自定义方法" tabindex="-1">二、实例调用自定义方法 <a class="header-anchor" href="#二、实例调用自定义方法" aria-label="Permalink to &quot;二、实例调用自定义方法&quot;">​</a></h3><p>构造器里的add方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>methods:{</span></span>
<span class="line"><span>    add:function(){</span></span>
<span class="line"><span>        console.log(&quot;调用了Add方法&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>实例调用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>app.add();</span></span></code></pre></div><h2 id="_2-实例方法" tabindex="-1">2.实例方法 <a class="header-anchor" href="#_2-实例方法" aria-label="Permalink to &quot;2.实例方法&quot;">​</a></h2><h3 id="一、-mount方法" tabindex="-1">一、$mount方法 <a class="header-anchor" href="#一、-mount方法" aria-label="Permalink to &quot;一、$mount方法&quot;">​</a></h3><p>$mount方法是用来挂载我们的扩展</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot; src=&quot;../assets/js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Examples Method Demo&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Examples Method Demo&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;hr&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>        {{message}}</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>      var ext = Vue.extend({</span></span>
<span class="line"><span>          template:\`&lt;p&gt;{{message}}&lt;/p&gt;\`,</span></span>
<span class="line"><span>          data:function(){</span></span>
<span class="line"><span>              return {</span></span>
<span class="line"><span>                  message:&#39;Hello ,I am vue&#39;</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>      var vm = new ext().$mount(&quot;#app&quot;)</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h3 id="二、-destroy-卸载方法" tabindex="-1">二、$destroy() 卸载方法 <a class="header-anchor" href="#二、-destroy-卸载方法" aria-label="Permalink to &quot;二、$destroy() 卸载方法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;p&gt;&lt;button onclick=&quot;destroy()&quot;&gt;卸载&lt;/button&gt;&lt;/p&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function destroy(){</span></span>
<span class="line"><span>   vm.$destroy();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>PS:$destroy()后边必须要有括号，没有括号是无用的。</p><h3 id="三、-forceupdate-更新方法" tabindex="-1">三、$forceUpdate() 更新方法 <a class="header-anchor" href="#三、-forceupdate-更新方法" aria-label="Permalink to &quot;三、$forceUpdate() 更新方法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vm.$forceUpdate()</span></span></code></pre></div><h3 id="四、-nexttick-数据修改方法" tabindex="-1">四、$nextTick() 数据修改方法 <a class="header-anchor" href="#四、-nexttick-数据修改方法" aria-label="Permalink to &quot;四、$nextTick() 数据修改方法&quot;">​</a></h3><p>当Vue构造器里的data值被修改完成后会调用这个方法，也相当于一个钩子函数吧，和构造器里的updated生命周期很像。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function tick(){</span></span>
<span class="line"><span>    vm.message=&quot;update message info &quot;;</span></span>
<span class="line"><span>    vm.$nextTick(function(){</span></span>
<span class="line"><span>        console.log(&#39;message更新完后我被调用了&#39;);</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_3-实例事件" tabindex="-1">3.实例事件 <a class="header-anchor" href="#_3-实例事件" aria-label="Permalink to &quot;3.实例事件&quot;">​</a></h2><p>实例事件就是在构造器外部写一个调用构造器内部的方法。这样写的好处是可以通过这种写法在构造器外部调用构造器内部的数据。</p><h3 id="一、-on-在构造器外部添加事件。" tabindex="-1">一、$on 在构造器外部添加事件。 <a class="header-anchor" href="#一、-on-在构造器外部添加事件。" aria-label="Permalink to &quot;一、$on 在构造器外部添加事件。&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>app.$on(&#39;reduce&#39;,function(){</span></span>
<span class="line"><span>    console.log(&#39;执行了reduce()&#39;);</span></span>
<span class="line"><span>    this.num--;</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>$on接收两个参数，第一个参数是调用时的事件名称，第二个参数是一个匿名方法。</p><p>如果按钮在作用域外部，可以利用$emit来执行。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//外部调用内部事件</span></span>
<span class="line"><span>function reduce(){</span></span>
<span class="line"><span>    app.$emit(&#39;reduce&#39;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="二、-once执行一次的事件" tabindex="-1">二、$once执行一次的事件 <a class="header-anchor" href="#二、-once执行一次的事件" aria-label="Permalink to &quot;二、$once执行一次的事件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>app.$once(&#39;reduceOnce&#39;,function(){</span></span>
<span class="line"><span>    console.log(&#39;只执行一次的方法&#39;);</span></span>
<span class="line"><span>    this.num--;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>});</span></span></code></pre></div><h3 id="三、-off关闭事件" tabindex="-1">三、$off关闭事件 <a class="header-anchor" href="#三、-off关闭事件" aria-label="Permalink to &quot;三、$off关闭事件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//关闭事件</span></span>
<span class="line"><span>function off(){</span></span>
<span class="line"><span>   app.$off(&#39;reduce&#39;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_4-内置组件-slot讲解" tabindex="-1">4.内置组件 -slot讲解 <a class="header-anchor" href="#_4-内置组件-slot讲解" aria-label="Permalink to &quot;4.内置组件 -slot讲解&quot;">​</a></h2><p>slot是标签的内容扩展，也就是说你用slot就可以在自定义组件时传递给组件内容，组件接收内容并输出。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot; src=&quot;../assets/js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Slot content extend Demo&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Slot content extend Demo&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;hr&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;jspang&gt;</span></span>
<span class="line"><span>        &lt;span slot=&quot;bolgUrl&quot;&gt;{{jspangData.bolgUrl}}&lt;/span&gt;</span></span>
<span class="line"><span>        &lt;span slot=&quot;netName&quot;&gt;{{jspangData.netName}}&lt;/span&gt;</span></span>
<span class="line"><span>        &lt;span slot=&quot;skill&quot;&gt;{{jspangData.skill}}&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;/jspang&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template id=&quot;tmp&quot;&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;p&gt;博客地址：&lt;slot name=&quot;bolgUrl&quot;&gt;&lt;/slot&gt;&lt;/p&gt;</span></span>
<span class="line"><span>        &lt;p&gt;网名：&lt;slot name=&quot;netName&quot;&gt;&lt;/slot&gt;&lt;/p&gt;</span></span>
<span class="line"><span>        &lt;p&gt;技术类型：&lt;slot name=&quot;skill&quot;&gt;&lt;/slot&gt;&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>        var jspang={</span></span>
<span class="line"><span>            template:&#39;#tmp&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        var app=new Vue({</span></span>
<span class="line"><span>            el:&#39;#app&#39;,</span></span>
<span class="line"><span>            data:{</span></span>
<span class="line"><span>               jspangData:{</span></span>
<span class="line"><span>                   bolgUrl:&#39;http://jspang.com&#39;,</span></span>
<span class="line"><span>                   netName:&#39;技术胖&#39;,</span></span>
<span class="line"><span>                   skill:&#39;Web前端&#39;</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            components:{</span></span>
<span class="line"><span>                &quot;jspang&quot;:jspang</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>学习资料:<a href="https://jspang.com/detailed?id=57" target="_blank" rel="noreferrer">Vue2.x学习路线-按次路线学习顺畅无比</a></p>`,36)]))}const h=a(e,[["render",l]]);export{g as __pageData,h as default};
