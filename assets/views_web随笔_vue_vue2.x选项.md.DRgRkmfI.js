import{_ as e,c as i,a2 as n,j as a,t,a as l,o as c}from"./chunks/framework.CjNeJe2C.js";const m=JSON.parse('{"title":"vue2.x选项","description":"","frontmatter":{"title":"vue2.x选项","date":"2020-06-15T00:00:00.000Z","tags":["vue"],"categories":["vue"],"author":["游城走不动"]},"headers":[],"relativePath":"views/web随笔/vue/vue2.x选项.md","filePath":"views/web随笔/vue/vue2.x选项.md"}'),o={name:"views/web随笔/vue/vue2.x选项.md"};function d(p,s,u,h,r,g){return c(),i("div",null,[s[4]||(s[4]=n(`<h2 id="_1-propsdata-option-全局扩展的数据传递" tabindex="-1">1.propsData Option 全局扩展的数据传递 <a class="header-anchor" href="#_1-propsdata-option-全局扩展的数据传递" aria-label="Permalink to &quot;1.propsData Option 全局扩展的数据传递&quot;">​</a></h2><p>propsData 不是和属性有关，他用在全局扩展时进行传递数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot; src=&quot;../assets/js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;title&gt;PropsData Option Demo&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;PropsData Option Demo&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;hr&gt;</span></span>
<span class="line"><span>    &lt;header&gt;&lt;/header&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>       var  header_a = Vue.extend({</span></span>
<span class="line"><span>           template:\`&lt;p&gt;{{message}}&lt;/p&gt;\`,</span></span>
<span class="line"><span>           data:function(){</span></span>
<span class="line"><span>               return {</span></span>
<span class="line"><span>                   message:&#39;Hello,I am Header&#39;</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span>       }); </span></span>
<span class="line"><span>       new header_a().$mount(&#39;header&#39;);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div>`,3)),a("p",null,"扩展标签已经做好了，这时我们要在挂载时传递一个数字过去，我们就用到了propsData。 我们用propsData三步解决传值： 1.在全局扩展里加入props进行接收。propsData:{a:1} 2.传递时用propsData进行传递。props:[‘a’] 3.用插值的形式写入模板。"+t(p.a)+" 完整代码：",1),s[5]||(s[5]=n(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var  header_a = Vue.extend({</span></span>
<span class="line"><span>    template:\`&lt;p&gt;{{message}}-{{a}}&lt;/p&gt;\`,</span></span>
<span class="line"><span>    data:function(){</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            message:&#39;Hello,I am Header&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    props:[&#39;a&#39;]</span></span>
<span class="line"><span>}); </span></span>
<span class="line"><span>new header_a({propsData:{a:1}}).$mount(&#39;header&#39;);</span></span></code></pre></div><h2 id="_2-computed-option-计算选项" tabindex="-1">2.computed Option 计算选项 <a class="header-anchor" href="#_2-computed-option-计算选项" aria-label="Permalink to &quot;2.computed Option 计算选项&quot;">​</a></h2><p>computed 的作用主要是对原数据进行改造输出。改造输出：包括格式的编辑，大小写转换，顺序重排，添加符号……。</p><h3 id="一、格式化输出结果" tabindex="-1">一、格式化输出结果： <a class="header-anchor" href="#一、格式化输出结果" aria-label="Permalink to &quot;一、格式化输出结果：&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot; src=&quot;../assets/js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Computed Option 计算选项&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Computed Option 计算选项&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;hr&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>        {{newPrice}}</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>        var app=new Vue({</span></span>
<span class="line"><span>            el:&#39;#app&#39;,</span></span>
<span class="line"><span>            data:{</span></span>
<span class="line"><span>                price:100</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            computed:{</span></span>
<span class="line"><span>                newPrice:function(){</span></span>
<span class="line"><span>                    return this.price=&#39;￥&#39; + this.price + &#39;元&#39;;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>输出结果：￥100元。</p><h3 id="二、用计算属性反转数组" tabindex="-1">二、用计算属性反转数组 <a class="header-anchor" href="#二、用计算属性反转数组" aria-label="Permalink to &quot;二、用计算属性反转数组&quot;">​</a></h3><p>例如：我们得到了一个新闻列表的数组，它的顺序是安装新闻时间的顺序正序排列的，也就是早反生的新闻排在前面。这是反人类的，我们需要给他反转。这时我们就可以用到我们的计算属性了。</p><p>没有排序的新闻列表，是安装日期正序排列的。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var newsList=[</span></span>
<span class="line"><span>    {title:&#39;香港或就“装甲车被扣”事件追责 起诉涉事运输公司&#39;,date:&#39;2017/3/10&#39;},</span></span>
<span class="line"><span>    {title:&#39;日本第二大准航母服役 外媒：针对中国潜艇&#39;,date:&#39;2017/3/12&#39;},</span></span>
<span class="line"><span>    {title:&#39;中国北方将有明显雨雪降温天气 南方阴雨持续&#39;,date:&#39;2017/3/13&#39;},</span></span>
<span class="line"><span>    {title:&#39;起底“最短命副市长”：不到40天落马，全家被查&#39;,date:&#39;2017/3/23&#39;},</span></span>
<span class="line"><span>];</span></span></code></pre></div><p>我们希望输出反转的结果</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>computed:{</span></span>
<span class="line"><span>    reverseNews:function(){</span></span>
<span class="line"><span>        return this.newsList.reverse();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_3-methods-option-方法选项" tabindex="-1">3.Methods Option 方法选项 <a class="header-anchor" href="#_3-methods-option-方法选项" aria-label="Permalink to &quot;3.Methods Option 方法选项&quot;">​</a></h2><h3 id="一、methods中参数的传递" tabindex="-1">一、methods中参数的传递 <a class="header-anchor" href="#一、methods中参数的传递" aria-label="Permalink to &quot;一、methods中参数的传递&quot;">​</a></h3><p>使用方法和正常的javascript传递参数的方法一样，分为两部：</p>`,15)),a("ul",null,[s[3]||(s[3]=a("li",null,"在methods的方法中进行声明，比如我们给add方法加上一个num参数，就要写出add:function(num){}.",-1)),a("li",null,[s[1]||(s[1]=l("调用方法时直接传递，比如我们要传递2这个参数，我们在button上就直接可以写。")),a("button",{onClick:s[0]||(s[0]=b=>p.add(2))}),s[2]||(s[2]=l("."))])]),s[6]||(s[6]=n(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot; src=&quot;../assets/js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;title&gt;methods Option&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;methods Option&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;hr&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>        {{ a }}</span></span>
<span class="line"><span>        &lt;p&gt;&lt;button @click=&quot;add(2)&quot;&gt;add&lt;/button&gt;&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>        var app=new Vue({</span></span>
<span class="line"><span>            el:&#39;#app&#39;,</span></span>
<span class="line"><span>            data:{</span></span>
<span class="line"><span>                a:1</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            methods:{</span></span>
<span class="line"><span>                add:function(num){</span></span>
<span class="line"><span>                    if(num!=&#39;&#39;){this.a+=num}</span></span>
<span class="line"><span>                    else{this.a++}</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h3 id="二、methods中的-event参数" tabindex="-1">二、methods中的$event参数 <a class="header-anchor" href="#二、methods中的-event参数" aria-label="Permalink to &quot;二、methods中的$event参数&quot;">​</a></h3><p>传递的$event参数都是关于你点击鼠标的一些事件和属性。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;button @click=”add(2,$event)”&gt;add&lt;/button&gt; 。</span></span></code></pre></div><h3 id="三、native-给组件绑定构造器里的原生事件" tabindex="-1">三、native 给组件绑定构造器里的原生事件 <a class="header-anchor" href="#三、native-给组件绑定构造器里的原生事件" aria-label="Permalink to &quot;三、native 给组件绑定构造器里的原生事件&quot;">​</a></h3><p>在实际开发中经常需要把某个按钮封装成组件，然后反复使用，如何让组件调用构造器里的方法，而不是组件里的方法。就需要用到我们的.native修饰器了。</p><p>声明btn对象：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var btn={</span></span>
<span class="line"><span>    template:\`&lt;button&gt;组件Add&lt;/button&gt;\`     </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在构造器里声明：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>components:{</span></span>
<span class="line"><span>    &quot;btn&quot;:btn</span></span>
<span class="line"><span> }</span></span></code></pre></div><p>用.native修饰器来调用构造器里的add方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;p&gt;&lt;btn @click.native=&quot;add(3)&quot;&gt;&lt;/btn&gt;&lt;/p&gt;</span></span></code></pre></div><h3 id="四、作用域外部调用构造器里的方法" tabindex="-1">四、作用域外部调用构造器里的方法 <a class="header-anchor" href="#四、作用域外部调用构造器里的方法" aria-label="Permalink to &quot;四、作用域外部调用构造器里的方法&quot;">​</a></h3><p>这种不经常使用，如果你出现了这种情况，说明你的代码组织不够好。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;button onclick=&quot;app.add(4)&quot; &gt;外部调用构造器里的方法&lt;/button&gt;</span></span></code></pre></div><h2 id="_4-watch-选项-监控数据" tabindex="-1">4.Watch 选项 监控数据 <a class="header-anchor" href="#_4-watch-选项-监控数据" aria-label="Permalink to &quot;4.Watch 选项 监控数据&quot;">​</a></h2><h4 id="用实例属性写watch监控" tabindex="-1">用实例属性写watch监控 <a class="header-anchor" href="#用实例属性写watch监控" aria-label="Permalink to &quot;用实例属性写watch监控&quot;">​</a></h4><p>有些时候我们会用实例属性的形式来写watch监控。也就是把我们watch卸载构造器的外部，这样的好处就是降低我们程序的耦合度，使程序变的灵活。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>app.$watch(&#39;xxx&#39;,function(){})</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>app.$watch(&#39;temperature&#39;,function(newVal,oldVal){</span></span>
<span class="line"><span>    if(newVal&gt;=26){</span></span>
<span class="line"><span>        this.suggestion=suggestion[0];</span></span>
<span class="line"><span>    }else if(newVal&lt;26 &amp;&amp; newVal &gt;=0)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        this.suggestion=suggestion[1];</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        this.suggestion=suggestion[2];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var vm = new Vue({</span></span>
<span class="line"><span>  data: {</span></span>
<span class="line"><span>    a: 1,</span></span>
<span class="line"><span>    b: 2,</span></span>
<span class="line"><span>    c: 3,</span></span>
<span class="line"><span>    d: 4,</span></span>
<span class="line"><span>    e: {</span></span>
<span class="line"><span>      f: {</span></span>
<span class="line"><span>        g: 5</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  watch: {</span></span>
<span class="line"><span>    a: function (val, oldVal) {</span></span>
<span class="line"><span>      console.log(&#39;new: %s, old: %s&#39;, val, oldVal)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 方法名</span></span>
<span class="line"><span>    b: &#39;someMethod&#39;,</span></span>
<span class="line"><span>    // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深</span></span>
<span class="line"><span>    c: {</span></span>
<span class="line"><span>      handler: function (val, oldVal) { /* ... */ },</span></span>
<span class="line"><span>      deep: true</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 该回调将会在侦听开始之后被立即调用</span></span>
<span class="line"><span>    d: {</span></span>
<span class="line"><span>      handler: &#39;someMethod&#39;,</span></span>
<span class="line"><span>      immediate: true</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 你可以传入回调数组，它们会被逐一调用</span></span>
<span class="line"><span>    e: [</span></span>
<span class="line"><span>      &#39;handle1&#39;,</span></span>
<span class="line"><span>      function handle2 (val, oldVal) { /* ... */ },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        handler: function handle3 (val, oldVal) { /* ... */ },</span></span>
<span class="line"><span>        /* ... */</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    // watch vm.e.f&#39;s value: {g: 5}</span></span>
<span class="line"><span>    &#39;e.f&#39;: function (val, oldVal) { /* ... */ }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>vm.a = 2 // =&gt; new: 2, old: 1</span></span></code></pre></div><h2 id="_5-mixins-混入选项操作" tabindex="-1">5.Mixins 混入选项操作 <a class="header-anchor" href="#_5-mixins-混入选项操作" aria-label="Permalink to &quot;5.Mixins 混入选项操作&quot;">​</a></h2><p>Mixins一般有两种用途：</p><ol><li>在你已经写好了构造器后，需要增加方法或者临时的活动时使用的方法，这时用混入会减少源代码的污染。</li><li>很多地方都会用到的公用方法，用混入的方法可以减少代码量，实现代码重用。</li></ol><h3 id="一、mixins的基本用法" tabindex="-1">一、Mixins的基本用法 <a class="header-anchor" href="#一、mixins的基本用法" aria-label="Permalink to &quot;一、Mixins的基本用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot; src=&quot;../assets/js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Mixins Option Demo&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Mixins Option Demo&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;hr&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>        &lt;p&gt;num:{{ num }}&lt;/p&gt;</span></span>
<span class="line"><span>        &lt;P&gt;&lt;button @click=&quot;add&quot;&gt;增加数量&lt;/button&gt;&lt;/P&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>        //额外临时加入时，用于显示日志</span></span>
<span class="line"><span>        var addLog={</span></span>
<span class="line"><span>            updated:function(){</span></span>
<span class="line"><span>                console.log(&quot;数据放生变化,变化成&quot;+this.num+&quot;.&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        var app=new Vue({</span></span>
<span class="line"><span>            el:&#39;#app&#39;,</span></span>
<span class="line"><span>            data:{</span></span>
<span class="line"><span>                num:1</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            methods:{</span></span>
<span class="line"><span>                add:function(){</span></span>
<span class="line"><span>                    this.num++;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            mixins:[addLog]//混入</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h3 id="二、mixins的调用顺序" tabindex="-1">二、Mixins的调用顺序 <a class="header-anchor" href="#二、mixins的调用顺序" aria-label="Permalink to &quot;二、Mixins的调用顺序&quot;">​</a></h3><p>从执行的先后顺序来说，都是混入的先执行，然后构造器里的再执行，需要注意的是，这并不是方法的覆盖，而是被执行了两边。</p><p>在上边的代码的构造器里我们也加入了updated的钩子函数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>updated:function(){</span></span>
<span class="line"><span>      console.log(&quot;构造器里的updated方法。&quot;)</span></span>
<span class="line"><span>},</span></span></code></pre></div><p>这时控制台输出的顺序是:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mixins数据放生变化,变化成2.</span></span>
<span class="line"><span>构造器里的updated方法。</span></span></code></pre></div><p>PS：当混入方法和构造器的方法重名时，混入的方法无法展现，也就是不起作用。</p><h3 id="三、全局api混入方式" tabindex="-1">三、全局API混入方式 <a class="header-anchor" href="#三、全局api混入方式" aria-label="Permalink to &quot;三、全局API混入方式&quot;">​</a></h3><p>我们也可以定义全局的混入，这样在需要这段代码的地方直接引入js，就可以拥有这个功能了。我们来看一下全局混入的方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Vue.mixin({</span></span>
<span class="line"><span>    updated:function(){</span></span>
<span class="line"><span>        console.log(&#39;我是全局被混入的&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>PS：全局混入的执行顺序要前于混入和构造器里的方法。</p><h2 id="_6-extends-option-扩展选项" tabindex="-1">6.Extends Option 扩展选项 <a class="header-anchor" href="#_6-extends-option-扩展选项" aria-label="Permalink to &quot;6.Extends Option 扩展选项&quot;">​</a></h2><h3 id="一、extends我们来看一个扩展的实例。" tabindex="-1">一、extends我们来看一个扩展的实例。 <a class="header-anchor" href="#一、extends我们来看一个扩展的实例。" aria-label="Permalink to &quot;一、extends我们来看一个扩展的实例。&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot; src=&quot;../assets/js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Extends Optin Demo&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Extends Optin Demo&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;hr&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>        {{message}}</span></span>
<span class="line"><span>        &lt;p&gt;&lt;button @click=&quot;add&quot;&gt;add&lt;/button&gt;&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>        var bbb={</span></span>
<span class="line"><span>            created:function(){</span></span>
<span class="line"><span>                console.log(&quot;我是被扩展出来的&quot;);</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            methods:{</span></span>
<span class="line"><span>                add:function(){</span></span>
<span class="line"><span>                    console.log(&#39;我是被扩展出来的方法！&#39;);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        var app=new Vue({</span></span>
<span class="line"><span>            el:&#39;#app&#39;,</span></span>
<span class="line"><span>            data:{</span></span>
<span class="line"><span>                message:&#39;hello Vue!&#39;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            methods:{</span></span>
<span class="line"><span>                add:function(){</span></span>
<span class="line"><span>                    console.log(&#39;我是原生方法&#39;);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            extends:bbb</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h3 id="二、delimiters-选项" tabindex="-1">二、delimiters 选项 <a class="header-anchor" href="#二、delimiters-选项" aria-label="Permalink to &quot;二、delimiters 选项&quot;">​</a></h3>`,41)),a("p",null,"delimiters的作用是改变我们插值的符号。Vue默认的插值是双大括号"+t()+"。但有时我们会有需求更改这个插值的形式。",1),s[7]||(s[7]=n('<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>delimiters:[&#39;${&#39;,&#39;}&#39;]</span></span></code></pre></div><p>现在我们的插值形式就变成了${}</p><p>学习资料:<a href="https://jspang.com/detailed?id=57" target="_blank" rel="noreferrer">Vue2.x学习路线-按次路线学习顺畅无比</a></p>',3))])}const q=e(o,[["render",d]]);export{m as __pageData,q as default};
