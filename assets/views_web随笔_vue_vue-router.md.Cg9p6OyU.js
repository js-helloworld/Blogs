import{_ as s,c as n,a2 as p,o as e}from"./chunks/framework.CjNeJe2C.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"views/web随笔/vue/vue-router.md","filePath":"views/web随笔/vue/vue-router.md"}'),l={name:"views/web随笔/vue/vue-router.md"};function t(i,a,o,c,r,u){return e(),n("div",null,a[0]||(a[0]=[p(`<hr><p>title: vue-router date: 2020-06-17 tags:</p><ul><li>vue</li><li>route categories:</li><li>vue author:</li><li>游城走不动</li></ul><hr><h2 id="_1-vue-router入门" tabindex="-1">1.Vue-router入门 <a class="header-anchor" href="#_1-vue-router入门" aria-label="Permalink to &quot;1.Vue-router入门&quot;">​</a></h2><h3 id="一、安装vue-router" tabindex="-1">一、安装vue-router <a class="header-anchor" href="#一、安装vue-router" aria-label="Permalink to &quot;一、安装vue-router&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install vue-router --save-dev</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import Vue from &#39;vue&#39;   //引入Vue</span></span>
<span class="line"><span>import Router from &#39;vue-router&#39;  //引入vue-router</span></span>
<span class="line"><span>import Hello from &#39;@/components/Hello&#39;  //引入根目录下的Hello.vue组件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vue.use(Router)  //Vue全局使用Router</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default new Router({</span></span>
<span class="line"><span>  routes: [              //配置路由，这里是个数组</span></span>
<span class="line"><span>    {                    //每一个链接都是一个对象</span></span>
<span class="line"><span>      path: &#39;/&#39;,         //链接路径</span></span>
<span class="line"><span>      name: &#39;Hello&#39;,     //路由名称，</span></span>
<span class="line"><span>      component: Hello   //对应的组件模板</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="二、router-link制作导航" tabindex="-1">二、router-link制作导航 <a class="header-anchor" href="#二、router-link制作导航" aria-label="Permalink to &quot;二、router-link制作导航&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;p&gt;导航 ：</span></span>
<span class="line"><span>   &lt;router-link to=&quot;/&quot;&gt;首页&lt;/router-link&gt;</span></span>
<span class="line"><span>   &lt;router-link to=&quot;/hi&quot;&gt;Hi页面&lt;/router-link&gt;</span></span>
<span class="line"><span>&lt;/p&gt;</span></span></code></pre></div><h2 id="_2-vue-router配置子路由" tabindex="-1">2.vue-router配置子路由 <a class="header-anchor" href="#_2-vue-router配置子路由" aria-label="Permalink to &quot;2.vue-router配置子路由&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span>import Router from &#39;vue-router&#39;</span></span>
<span class="line"><span>import Hello from &#39;@/components/Hello&#39;</span></span>
<span class="line"><span>import Hi from &#39;@/components/Hi&#39;</span></span>
<span class="line"><span>import Hi1 from &#39;@/components/Hi1&#39;</span></span>
<span class="line"><span>import Hi2 from &#39;@/components/Hi2&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vue.use(Router)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default new Router({</span></span>
<span class="line"><span>  routes: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      path: &#39;/&#39;,</span></span>
<span class="line"><span>      name: &#39;Hello&#39;,</span></span>
<span class="line"><span>      component: Hello</span></span>
<span class="line"><span>    },{</span></span>
<span class="line"><span>      path:&#39;/hi&#39;,</span></span>
<span class="line"><span>      component:Hi,</span></span>
<span class="line"><span>      children:[</span></span>
<span class="line"><span>        {path:&#39;/&#39;,component:Hi},</span></span>
<span class="line"><span>        {path:&#39;hi1&#39;,component:Hi1},</span></span>
<span class="line"><span>        {path:&#39;hi2&#39;,component:Hi2},</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="_3-vue-router如何参数传递" tabindex="-1">3.vue-router如何参数传递 <a class="header-anchor" href="#_3-vue-router如何参数传递" aria-label="Permalink to &quot;3.vue-router如何参数传递&quot;">​</a></h2><h3 id="一、用name传递参数" tabindex="-1">一、用name传递参数 <a class="header-anchor" href="#一、用name传递参数" aria-label="Permalink to &quot;一、用name传递参数&quot;">​</a></h3><ol><li>在路由文件src/router/index.js里配置name属性</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>routes: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>    path: &#39;/&#39;,</span></span>
<span class="line"><span>    name: &#39;Hello&#39;,</span></span>
<span class="line"><span>    component: Hello</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span></code></pre></div><ol start="2"><li>模板里(src/App.vue)用$route.name的形势接收，比如直接在模板中显示：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;p&gt;{{ $route.name}}&lt;/p&gt;</span></span></code></pre></div><h3 id="二、通过router-link标签中的to传参" tabindex="-1">二、通过router-link标签中的to传参 <a class="header-anchor" href="#二、通过router-link标签中的to传参" aria-label="Permalink to &quot;二、通过router-link标签中的to传参&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;router-link :to=&quot;{name:xxx,params:{key:value}}&quot;&gt;valueString&lt;/router-link&gt;</span></span></code></pre></div><p>在模板里用$route.params.username进行接收.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{{$route.params.key}}</span></span></code></pre></div><h2 id="_4-单页面多路由区域操作" tabindex="-1">4.单页面多路由区域操作 <a class="header-anchor" href="#_4-单页面多路由区域操作" aria-label="Permalink to &quot;4.单页面多路由区域操作&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;router-view &gt;&lt;/router-view&gt;</span></span>
<span class="line"><span>&lt;router-view name=&quot;left&quot; style=&quot;float:left;width:50%;background-color:#ccc;height:300px;&quot;&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span>&lt;router-view name=&quot;right&quot; style=&quot;float:right;width:50%;background-color:#c0c;height:300px;&quot;&gt;&lt;/router-view&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mport Vue from &#39;vue&#39;</span></span>
<span class="line"><span>import Router from &#39;vue-router&#39;</span></span>
<span class="line"><span>import Hello from &#39;@/components/Hello&#39;</span></span>
<span class="line"><span>import Hi1 from &#39;@/components/Hi1&#39;</span></span>
<span class="line"><span>import Hi2 from &#39;@/components/Hi2&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vue.use(Router)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default new Router({</span></span>
<span class="line"><span>  routes: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      path: &#39;/&#39;,</span></span>
<span class="line"><span>      components: {</span></span>
<span class="line"><span>        default:Hello,</span></span>
<span class="line"><span>        left:Hi1,</span></span>
<span class="line"><span>        right:Hi2</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },{</span></span>
<span class="line"><span>      path: &#39;/Hi&#39;,</span></span>
<span class="line"><span>      components: {</span></span>
<span class="line"><span>        default:Hello,</span></span>
<span class="line"><span>        left:Hi2,</span></span>
<span class="line"><span>        right:Hi1</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="_5-vue-router-利用url传递参数" tabindex="-1">5.vue-router 利用url传递参数 <a class="header-anchor" href="#_5-vue-router-利用url传递参数" aria-label="Permalink to &quot;5.vue-router 利用url传递参数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    path:&#39;/params/:newsId/:newsTitle&#39;,</span></span>
<span class="line"><span>     component:Params</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;h2&gt;{{ msg }}&lt;/h2&gt;</span></span>
<span class="line"><span>        &lt;p&gt;新闻ID：{{ $route.params.newsId}}&lt;/p&gt;</span></span>
<span class="line"><span>        &lt;p&gt;新闻标题：{{ $route.params.newsTitle}}&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;router-link to=&quot;/params/198/123&quot;&gt;params&lt;/router-link&gt; |</span></span></code></pre></div><p>正则表达式在URL传值中的应用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>path:&#39;/params/:newsId(\\\\d+)/:newsTitle&#39;,</span></span></code></pre></div><h2 id="_6-vue-router-的重定向-redirect" tabindex="-1">6.vue-router 的重定向-redirect <a class="header-anchor" href="#_6-vue-router-的重定向-redirect" aria-label="Permalink to &quot;6.vue-router 的重定向-redirect&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export default new Router({</span></span>
<span class="line"><span>  routes: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      path: &#39;/&#39;,</span></span>
<span class="line"><span>      component: Hello</span></span>
<span class="line"><span>    },{</span></span>
<span class="line"><span>      path:&#39;/params/:newsId(\\\\d+)/:newsTitle&#39;,</span></span>
<span class="line"><span>      component:Params</span></span>
<span class="line"><span>    },{</span></span>
<span class="line"><span>      path:&#39;/goback&#39;,</span></span>
<span class="line"><span>      redirect:&#39;/&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>重定向时传递参数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  path:&#39;/params/:newsId(\\\\d+)/:newsTitle&#39;,</span></span>
<span class="line"><span>  component:Params</span></span>
<span class="line"><span>},{</span></span>
<span class="line"><span>  path:&#39;/goParams/:newsId(\\\\d+)/:newsTitle&#39;,</span></span>
<span class="line"><span>  redirect:&#39;/params/:newsId(\\\\d+)/:newsTitle&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_7-alias别名的使用" tabindex="-1">7.alias别名的使用 <a class="header-anchor" href="#_7-alias别名的使用" aria-label="Permalink to &quot;7.alias别名的使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    path: &#39;/hi1&#39;,</span></span>
<span class="line"><span>    component: Hi1,</span></span>
<span class="line"><span>    alias:&#39;/别名&#39;</span></span>
<span class="line"><span> }</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;router-link  to=&quot;/别名&quot;&gt;jspang&lt;/router-link&gt;</span></span></code></pre></div><h4 id="redirect和alias的区别" tabindex="-1">redirect和alias的区别 <a class="header-anchor" href="#redirect和alias的区别" aria-label="Permalink to &quot;redirect和alias的区别&quot;">​</a></h4><ul><li>redirect：仔细观察URL，redirect是直接改变了url的值，把url变成了真实的path路径。</li><li>alias：URL路径没有别改变，这种情况更友好，让用户知道自己访问的路径，只是改变了router-view中的内容。</li></ul><p>ps:别名请不要用在path为’/’中，如下代码的别名是不起作用的。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  path: &#39;/&#39;,</span></span>
<span class="line"><span>  component: Hello,</span></span>
<span class="line"><span>  alias:&#39;/home&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_8-路由的过渡动画" tabindex="-1">8.路由的过渡动画 <a class="header-anchor" href="#_8-路由的过渡动画" aria-label="Permalink to &quot;8.路由的过渡动画&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;transition name=&quot;fade&quot;&gt;</span></span>
<span class="line"><span>  &lt;router-view &gt;&lt;/router-view&gt;</span></span>
<span class="line"><span>&lt;/transition&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.fade-enter {</span></span>
<span class="line"><span>  opacity:0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.fade-leave{</span></span>
<span class="line"><span>  opacity:1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.fade-enter-active{</span></span>
<span class="line"><span>  transition:opacity .5s;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.fade-leave-active{</span></span>
<span class="line"><span>  opacity:0;</span></span>
<span class="line"><span>  transition:opacity .5s;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我们在/src/App.vue文件里添加了transition标签，并给标签起了一个名字叫fade。</p><p>css过渡类名：组件过渡过程中，会有四个CSS类名进行切换，这四个类名与transition的name属性有关，比如name=”fade”,会有如下四个CSS类名：</p><ul><li>fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。</li><li>fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。</li><li>fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。</li><li>fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。</li></ul><p>过渡模式mode：</p><ul><li>in-out:新元素先进入过渡，完成之后当前元素过渡离开。</li><li>out-in:当前元素先进行过渡离开，离开完成后新元素过渡进入。</li></ul><h2 id="_9-mode的设置和404页面的处理" tabindex="-1">9.mode的设置和404页面的处理 <a class="header-anchor" href="#_9-mode的设置和404页面的处理" aria-label="Permalink to &quot;9.mode的设置和404页面的处理&quot;">​</a></h2><p>mode的两个值</p><ol><li>histroy:当你使用 history 模式时，URL 就像正常的 url</li><li>hash:默认’hash’值，但是hash看起来就像无意义的字符排列</li></ol><h4 id="_404页面的设置" tabindex="-1">404页面的设置 <a class="header-anchor" href="#_404页面的设置" aria-label="Permalink to &quot;404页面的设置&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>   path:&#39;*&#39;,</span></span>
<span class="line"><span>   component:Error</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_10-路由中的钩子" tabindex="-1">10.路由中的钩子 <a class="header-anchor" href="#_10-路由中的钩子" aria-label="Permalink to &quot;10.路由中的钩子&quot;">​</a></h2><h3 id="一、路由配置文件中写钩子函数" tabindex="-1">一、路由配置文件中写钩子函数 <a class="header-anchor" href="#一、路由配置文件中写钩子函数" aria-label="Permalink to &quot;一、路由配置文件中写钩子函数&quot;">​</a></h3><p>在路由文件中我们只能写一个beforeEnter,就是在进入此路由配置时</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>      path:&#39;/params/:newsId(\\\\d+)/:newsTitle&#39;,</span></span>
<span class="line"><span>      component:Params,</span></span>
<span class="line"><span>      beforeEnter:(to,from,next)=&gt;{</span></span>
<span class="line"><span>        console.log(&#39;我进入了params模板&#39;);</span></span>
<span class="line"><span>        console.log(to);</span></span>
<span class="line"><span>        console.log(from);</span></span>
<span class="line"><span>        next();</span></span>
<span class="line"><span>},</span></span></code></pre></div><p>三个参数：</p><ul><li>to:路由将要跳转的路径信息，信息是包含在对像里边的。</li><li>from:路径跳转前的路径信息，也是一个对象的形式。</li><li>next:路由的控制参数，常用的有next(true)和next(false)。</li></ul><h3 id="二、模板中的钩子函数" tabindex="-1">二、模板中的钩子函数 <a class="header-anchor" href="#二、模板中的钩子函数" aria-label="Permalink to &quot;二、模板中的钩子函数&quot;">​</a></h3><p>有两个钩子函数可以使用：</p><ul><li>beforeRouteEnter：在路由进入前的钩子函数。</li><li>beforeRouteLeave：在路由离开前的钩子函数。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &#39;params&#39;,</span></span>
<span class="line"><span>  data () {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      msg: &#39;params page&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  beforeRouteEnter:(to,from,next)=&gt;{</span></span>
<span class="line"><span>    console.log(&quot;准备进入路由模板&quot;);</span></span>
<span class="line"><span>    next();</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  beforeRouteLeave: (to, from, next) =&gt; {</span></span>
<span class="line"><span>    console.log(&quot;准备离开路由模板&quot;);</span></span>
<span class="line"><span>    next();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="_11-编程式导航" tabindex="-1">11.编程式导航 <a class="header-anchor" href="#_11-编程式导航" aria-label="Permalink to &quot;11.编程式导航&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>this.$router.go(-1);</span></span>
<span class="line"><span>this.$router.push(&#39;/&#39;);</span></span></code></pre></div><p>学习资料:<a href="https://jspang.com/detailed?id=57" target="_blank" rel="noreferrer">Vue2.x学习路线-按次路线学习顺畅无比</a></p>`,68)]))}const g=s(l,[["render",t]]);export{h as __pageData,g as default};
