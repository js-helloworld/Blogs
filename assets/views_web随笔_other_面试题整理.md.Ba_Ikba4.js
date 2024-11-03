import{_ as a,c as n,a2 as i,o as p}from"./chunks/framework.CjNeJe2C.js";const r=JSON.parse('{"title":"面试整理","description":"","frontmatter":{"title":"面试整理","date":"2024-10-14T00:00:00.000Z","tags":["面试"],"categories":["面试"]},"headers":[],"relativePath":"views/web随笔/other/面试题整理.md","filePath":"views/web随笔/other/面试题整理.md"}'),e={name:"views/web随笔/other/面试题整理.md"};function l(t,s,h,k,d,o){return p(),n("div",null,s[0]||(s[0]=[i(`<h2 id="_1-有阅读过vue源码么" tabindex="-1">1.有阅读过vue源码么? <a class="header-anchor" href="#_1-有阅读过vue源码么" aria-label="Permalink to &quot;1.有阅读过vue源码么?&quot;">​</a></h2><p><a href="https://github.com/answershuto/learnVue?tab=readme-ov-file" target="_blank" rel="noreferrer">https://github.com/answershuto/learnVue?tab=readme-ov-file</a></p><p>有阅读过一些解析vue源码的文章，比如 vue的响应式原理， 依赖收集， dom与diff， keep-alive组件使用以及实现</p><p>之前看过snabbdom，vue2的内部使用的虚拟DOM就是参考snabbdom，</p><p>snabbdom大概200行左右，</p><ol><li><p>init()设置模块，创建patch()函数</p></li><li><p>h函数用来产生虚拟节点,返回vnode，h函数 函数重载，本质上通过if else 判断参数类型</p></li><li><p>patch()比较新旧两个Vnode,把变化的内容更新到真实的DOM树</p></li></ol><details open><summary>vnode函数 将参数返回vnode对象</summary><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> vnode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">      sel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">      data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">      children</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VNode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">      text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">      elm</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Element</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DocumentFragment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data.key;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { sel, data, children, text, elm, key };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div></details><p>比如这样调用h函数:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>h(&#39;a&#39;,{ props:{ href:&#39;http://www.baidu.com&#39;}}，&#39;文本&#39;);</span></span></code></pre></div><p>将得到这样的虚拟节点:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;sel&quot;:a, data: {props:{href:&#39;http://www.baidu.com&#39;}}, text: 文本</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>它表示的真正的DOM节点:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;a href=&quot;http://www.baidu.com&quot;&gt;文本&lt;/a&gt;</span></span></code></pre></div><p>patch 函数将虚拟节点绑定到dom节点上</p><ul><li>只有是同一个虚拟节点，才进行精细化比较</li><li>只进行同层比较，不会进行跨层比较</li></ul><details><summary>sameVnode</summary><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      /*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        判断两个VNode节点是否是同一个节点，需要满足以下条件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        key相同</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        tag（当前节点的标签名）相同</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        isComment（是否为注释节点）相同</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        是否data（当前节点对应的对象，包含了具体的一些数据信息，是一个VNodeData类型，可以参考VNodeData类型中的数据信息）都有定义</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        当标签是&lt;input&gt;的时候，type必须相同</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sameVnode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          a.key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b.key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          a.tag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b.tag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          a.isComment </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b.isComment </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          isDef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a.data) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isDef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(b.data) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          sameInputType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a, b)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // Some browsers do not support dynamically changing type for &lt;input&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // so they need to be treated as different nodes</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      /*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        判断当标签是&lt;input&gt;的时候，type是否相同</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        某些浏览器不支持动态修改&lt;input&gt;类型，所以他们被视为不同节点</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sameInputType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (a.tag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;input&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> typeA</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isDef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a.data) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isDef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i.attrs) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i.type</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> typeB</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isDef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b.data) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isDef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i.attrs) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i.type</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> typeA </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> typeB</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span></code></pre></div></details><h2 id="_2-讲一讲vue3和vue2的区别" tabindex="-1">2.讲一讲vue3和vue2的区别 <a class="header-anchor" href="#_2-讲一讲vue3和vue2的区别" aria-label="Permalink to &quot;2.讲一讲vue3和vue2的区别&quot;">​</a></h2><p>一、用组合式api替换选项式api，方便逻辑更加的聚合</p><p>二、一些细节改变</p><p>具体细节：</p><ol><li><p>因为改成组合式api所以没有this</p></li><li><p>生命周期没有creat，setup等同于create，卸载改成unmount</p></li><li><p>vue3中v-if高于v-for的优先级</p></li><li><p>根实例的创建从new app变成了createApp方法</p></li><li><p>一些全局注册，比如mixin，注册全局组件，use改成了用app实例调用，而不是vue类调用</p></li><li><p>新增了传送门teleport组件</p></li><li><p>template模板可以不包在一个根div里</p></li></ol><p>三、响应式原理改成了用proxy，解决了数组无法通过下标修改，无法监听到对象属性的新增和删除的问题。也提升了响应式的效率</p><p>深入回答：<strong>vue3并不是完全抛弃了defineProperty，通过reactive定义的响应式数据使用proxy包装出来，而ref还是用的defineProperty去给一个空对象，定义了一个value属性来做的响应式</strong></p><p>四、支持按需引入，可以更好tree-shaking</p><p>五、性能优化，增加了静态节点标记。会标记静态节点，不对静态节点进行比对。从而增加效率 _createVNode()函数中，设计了静态标记，不进行比对</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>  &lt;p&gt;Xmo&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;{{kkl}}&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;Xmo&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;1234&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;img :src=&quot;img&quot;&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function render(ctx，cache,$props,$setup,$data,$options){</span></span>
<span class="line"><span>  return(openBlock()，createBlock(&quot;div&quot;,null，[</span></span>
<span class="line"><span>    createVNode(&quot;p&quot;,nul1,&quot;Xmo&quot;),</span></span>
<span class="line"><span>    nu11,toDisplaystring( ctx.kkl),1/*TEXT */),createvNode(&quot;p&quot;，</span></span>
<span class="line"><span>    createVNode(&quot;p&quot;,nul1.&quot;Xmo&quot; )</span></span>
<span class="line"><span>    createVNode(&quot;p&quot;,null.&quot;1234&quot;)</span></span>
<span class="line"><span>    createVNode(&quot;img&quot;,{ src: ctx.img },null,8 /* PROPS */,[&quot;src&quot;])</span></span>
<span class="line"><span>  ]))</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>深入回答：<strong>文本内容为变量会标记为1，属性为动态CLASS会标记为2，如果静态则不标记跳过比对</strong></p><details><summary>patchFlags 是什么</summary><pre><code>\`\`\`
  export const enum PatchFlags {
     // 动态文字内容
    TEXT = 1,

    // 动态 class
    CLASS = 1 &lt;&lt; 1,

    // 动态样式
    STYLE = 1 &lt;&lt; 2,

    // 动态 props
    PROPS = 1 &lt;&lt; 3,

    // 有动态的key，也就是说props对象的key不是确定的
    FULL_PROPS = 1 &lt;&lt; 4,

    // 合并事件
    HYDRATE_EVENTS = 1 &lt;&lt; 5,

    // children 顺序确定的 fragment
    STABLE_FRAGMENT = 1 &lt;&lt; 6,

    // children中有带有key的节点的fragment
    KEYED_FRAGMENT = 1 &lt;&lt; 7,

    // 没有key的children的fragment
    UNKEYED_FRAGMENT = 1 &lt;&lt; 8,

    // 只有非props需要patch的，比如\`ref\`
    NEED_PATCH = 1 &lt;&lt; 9,

    // 动态的插槽
    DYNAMIC_SLOTS = 1 &lt;&lt; 10,

    // SPECIAL FLAGS -------------------------------------------------------------

    // 以下是特殊的flag，不会在优化中被用到，是内置的特殊flag

    // 表示他是静态节点，他的内容永远不会改变，对于hydrate的过程中，不会需要再对其子节点进行diff
    HOISTED = -1,

    // 用来表示一个节点的diff应该结束
    BAIL = -2,
  }
 \`\`\`
</code></pre></details><p>进阶回答点：</p><ol><li><p>vue3不推荐使用mixin进行复用逻辑提取，而是推荐写成hook</p></li><li><p>v-model应用于组件时，监听的事件和传递的值改变</p></li></ol><p>组件标签上的<code>v-model</code>的本质：<code>:moldeValue</code> ＋ <code>update:modelValue</code>事件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- 组件标签上使用v-model指令 --&gt;</span></span>
<span class="line"><span>&lt;AtguiguInput v-model=&quot;userName&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 组件标签上v-model的本质 --&gt;</span></span>
<span class="line"><span>&lt;AtguiguInput :modelValue=&quot;userName&quot; @update:model-value=&quot;userName = $event&quot;/&gt;</span></span></code></pre></div><p>AtguiguInput\`组件中：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span>    &lt;!--将接收的value值赋给input元素的value属性，目的是：为了呈现数据 --&gt;</span></span>
<span class="line"><span>		&lt;!--给input元素绑定原生input事件，触发input事件时，进而触发update:model-value事件--&gt;</span></span>
<span class="line"><span>    &lt;input</span></span>
<span class="line"><span>       type=&quot;text&quot;</span></span>
<span class="line"><span>       :value=&quot;modelValue&quot;</span></span>
<span class="line"><span>       @input=&quot;emit(&#39;update:model-value&#39;,$event.target.value)&quot;</span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot; name=&quot;AtguiguInput&quot;&gt;</span></span>
<span class="line"><span>  // 接收props</span></span>
<span class="line"><span>  defineProps([&#39;modelValue&#39;])</span></span>
<span class="line"><span>  // 声明事件</span></span>
<span class="line"><span>  const emit = defineEmits([&#39;update:model-value&#39;])</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>也可以更换<code>value</code>，例如改成<code>abc</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;AtguiguInput v-model:abc=&quot;userName&quot;/&gt;​&lt;!-- 上面代码的本质如下 --&gt;&lt;AtguiguInput :abc=&quot;userName&quot; @update:abc=&quot;userName = $event&quot;/&gt;</span></span></code></pre></div><p>AtguiguInput\`组件中：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span>    &lt;input</span></span>
<span class="line"><span>       type=&quot;text&quot;</span></span>
<span class="line"><span>       :value=&quot;abc&quot;</span></span>
<span class="line"><span>       @input=&quot;emit(&#39;update:abc&#39;,$event.target.value)&quot;</span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot; name=&quot;AtguiguInput&quot;&gt;</span></span>
<span class="line"><span>  // 接收props</span></span>
<span class="line"><span>  defineProps([&#39;abc&#39;])</span></span>
<span class="line"><span>  // 声明事件</span></span>
<span class="line"><span>  const emit = defineEmits([&#39;update:abc&#39;])</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><ol start="3"><li>ts更好地配合</li></ol><h2 id="_3-深拷贝和浅拷贝的区别是什么" tabindex="-1">3.深拷贝和浅拷贝的区别是什么? <a class="header-anchor" href="#_3-深拷贝和浅拷贝的区别是什么" aria-label="Permalink to &quot;3.深拷贝和浅拷贝的区别是什么?&quot;">​</a></h2><p>浅拷贝（Shallow Copy） 基本数据类型：赋值，赋值之后两个变量互不影响</p><p>引用数据类型：赋址，两个变量具有相同的引用，指向同一个对象，互相影响 JSON.parse(JSON.stringify(object))</p><ul><li>会忽略 undefined</li><li>会忽略symbole</li><li>不能序列化函数</li><li>不能解决循环引用的对象</li><li>不能正确处理new Date()</li><li>不能处理正则 undefined、symbole和函数这三种情况会直接被忽略。</li></ul><p>lodash这个库了，lodash提供了cloneDeep()方法，允许我们对引用类型的值进行深拷贝</p><p>简单实现</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function deepCopy（obj） {</span></span>
<span class="line"><span>  if （typeof obj !== &#39;object&#39; || obj === null） {</span></span>
<span class="line"><span>    return obj；</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if （Object.prototype.toString.call（obj） === &#39;[object Date]&#39;） {</span></span>
<span class="line"><span>    return new Date（obj.getTime（））；</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if （obj instanceof RegExp） {</span></span>
<span class="line"><span>    return new RegExp（obj）；</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  let copy；</span></span>
<span class="line"><span>  if （obj instanceof Array） {</span></span>
<span class="line"><span>    copy = []；</span></span>
<span class="line"><span>    for （let i = 0； i &lt; obj.length； i++） {</span></span>
<span class="line"><span>      copy[i] = deepCopy（obj[i]）；</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    copy = Object.assign（{}, obj）；</span></span>
<span class="line"><span>    for （let key in obj） {</span></span>
<span class="line"><span>      if （Object.prototype.hasOwnProperty.call（obj, key）） {</span></span>
<span class="line"><span>        copy[key] = deepCopy（obj[key]）；</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return copy；</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_4-如果需要全局监听一个按钮的操作-实现类似日志功能" tabindex="-1">4.如果需要全局监听一个按钮的操作，实现类似日志功能? <a class="header-anchor" href="#_4-如果需要全局监听一个按钮的操作-实现类似日志功能" aria-label="Permalink to &quot;4.如果需要全局监听一个按钮的操作，实现类似日志功能?&quot;">​</a></h2><p>首先要先写一个上报函数 按钮点击的时候去调用</p><ul><li>window.addEventListener click 判断点击的元素是否是需要监听的，选择性上报</li><li>可以使用vue的eventBus 事件总线</li><li>pubsub mitt等第三方库</li><li>Vuex</li></ul><h2 id="_5-实现过-vue指令么-工作原理是什么" tabindex="-1">5.实现过 vue指令么?工作原理是什么? <a class="header-anchor" href="#_5-实现过-vue指令么-工作原理是什么" aria-label="Permalink to &quot;5.实现过 vue指令么?工作原理是什么?&quot;">​</a></h2><ul><li>注册全局指令的方式，通过 Vue.directive( id, [definition] ) 方式注册全局指令。然后在入口文件中进行 Vue.use() 调用(会执行里面的install函数)</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const app = createApp({})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使 v-focus 在所有组件中都可用</span></span>
<span class="line"><span>app.directive(&#39;focus&#39;, (el, binding) =&gt; {</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export default {</span></span>
<span class="line"><span>  setup() {</span></span>
<span class="line"><span>    /*...*/</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  directives: {</span></span>
<span class="line"><span>    // 在模板中启用 v-focus</span></span>
<span class="line"><span>    focus: {</span></span>
<span class="line"><span>      /* ... */</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>钩子函数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  // 在绑定元素的 attribute 前或事件监听器应用前调用</span></span>
<span class="line"><span>  created(el, binding, vnode) {},</span></span>
<span class="line"><span>  // 在元素被插入到 DOM 前调用</span></span>
<span class="line"><span>  beforeMount(el, binding, vnode) {},</span></span>
<span class="line"><span>  // 在绑定元素的父组件及他自己的所有子节点都挂载完成后调用</span></span>
<span class="line"><span>  mounted(el, binding, vnode) {},</span></span>
<span class="line"><span>  // 绑定元素的父组件更新前调用</span></span>
<span class="line"><span>  beforeUpdate(el, binding, vnode, prevVnode) {},</span></span>
<span class="line"><span>  // 在绑定元素的父组件及他自己的所有子节点都更新后调用</span></span>
<span class="line"><span>  updated(el, binding, vnode, prevVnode) {},</span></span>
<span class="line"><span>  // 绑定元素的父组件卸载前调用</span></span>
<span class="line"><span>  beforeUnmount(el, binding, vnode) {},</span></span>
<span class="line"><span>  // 绑定元素的父组件卸载后调用</span></span>
<span class="line"><span>  unmounted(el, binding, vnode) {}</span></span></code></pre></div><p>自定义指令有五个生命周期（也叫钩子函数），分别是 bind,inserted,update,componentUpdated,unbind</p><p>钩子函数参数相关</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bind: 只调用一次，指令第一次绑定到元素时调用，可以定义一个在绑定时执行一次的初始化动作。</span></span>
<span class="line"><span>inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。</span></span>
<span class="line"><span>update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值。</span></span>
<span class="line"><span>componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。</span></span>
<span class="line"><span>unbind: 只调用一次， 指令与元素解绑时调用。</span></span></code></pre></div><p>常用指令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- 复制粘贴指令 v-copy</span></span>
<span class="line"><span>- 长按指令 v-longpress</span></span>
<span class="line"><span>- 输入框防抖指令 v-debounce</span></span>
<span class="line"><span>- 图片懒加载 v-LazyLoad</span></span>
<span class="line"><span>- 权限校验指令 v-premission</span></span>
<span class="line"><span>- 实现页面水印 v-waterMarker</span></span>
<span class="line"><span>- 拖拽指令 v-draggable</span></span></code></pre></div><p><a href="https://juejin.cn/post/7410336132666703923?searchId=202410160925199F1580B38628B3893589" target="_blank" rel="noreferrer">https://juejin.cn/post/7410336132666703923?searchId=202410160925199F1580B38628B3893589</a></p><h2 id="_6-2000个vue文件-里面有个列表是一样的-如何复用" tabindex="-1">6.2000个vue文件，里面有个列表是一样的，如何复用? <a class="header-anchor" href="#_6-2000个vue文件-里面有个列表是一样的-如何复用" aria-label="Permalink to &quot;6.2000个vue文件，里面有个列表是一样的，如何复用?&quot;">​</a></h2><p>可以配置参数，生成vnode，通过props或者函数调用传入， 在render函数去构建节点，调用render参数h函数返回</p><p>方法相关词：mixin hook</p><h2 id="_9-讲一讲微前端的理解" tabindex="-1">9.讲一讲微前端的理解 <a class="header-anchor" href="#_9-讲一讲微前端的理解" aria-label="Permalink to &quot;9.讲一讲微前端的理解&quot;">​</a></h2><p>搭建主应用基座，然后接入不同技术栈的微应用</p><ol><li>创建微应用容器 - 用于承载微应用，渲染显示微应用；</li></ol><p>2 .注册微应用 - 设置微应用激活条件，微应用地址等等；</p><ol start="3"><li>启动 qiankun</li></ol><h4 id="actions-通信" tabindex="-1">Actions 通信 <a class="header-anchor" href="#actions-通信" aria-label="Permalink to &quot;Actions 通信&quot;">​</a></h4><p>qiankun 内部提供了 initGlobalState 方法用于注册 MicroAppStateActions 实例用于通信，</p><p>类似发布订阅</p><p>MicroAppStateActions 是一个全局状态管理对象，它提供了如下 API：</p><ul><li>setGlobalState(state: object, callback?: Function) - 设置全局状态，返回值是一个函数，用于取消设置；</li><li>onGlobalStateChange(callback: (state: object, prev: object) =&gt; void, fireImmediately?: boolean) - 注册全局状态变更监听器，返回值是一个函数，用于取消监听；</li><li>offGlobalStateChange(callback: (state: object, prev: object) =&gt; void) - 取消全局状态变更监听器；</li><li>getGlobalState(callback: (state: object) =&gt; void) - 获取当前全局状态；</li></ul><h4 id="shared-通信" tabindex="-1">Shared 通信 <a class="header-anchor" href="#shared-通信" aria-label="Permalink to &quot;Shared 通信&quot;">​</a></h4><p>官方提供的 Actions 通信方案是通过全局状态池和观察者函数进行应用间通信，该通信方式适合大部分的场景。</p><p>Shared 通信方案的原理就是，主应用基于 redux 维护一个状态池，通过 shared 实例暴露一些方法给子应用使用。同时，子应用需要单独维护一份 shared 实例，在独立运行时使用自身的 shared 实例，在嵌入主应用时使用主应用的 shared 实例，这样就可以保证在使用和表现上的一致性。</p><p>通过路由的props: { shared }传递</p><p>Actions 通信方案也存在一些优缺点，优点如下：</p><ul><li>使用简单；</li><li>官方支持性高；</li><li>适合通信较少的业务场景；</li></ul><p>缺点如下：</p><ul><li>子应用独立运行时，需要额外配置无 Actions 时的逻辑；</li><li>子应用需要先了解状态池的细节，再进行通信；</li><li>由于状态池无法跟踪，通信场景较多时，容易出现状态混乱、维护困难等问题；</li></ul><p>获取子应用资源 - import-html-entry</p><h2 id="_10-vue有个数据是嵌套对象-如果实现深层监听" tabindex="-1">10.vue有个数据是嵌套对象，如果实现深层监听 <a class="header-anchor" href="#_10-vue有个数据是嵌套对象-如果实现深层监听" aria-label="Permalink to &quot;10.vue有个数据是嵌套对象，如果实现深层监听&quot;">​</a></h2><p>我们知道ref函数和reactive函数用于将一个普通数据变成一个响应式的数据。当数据发生改变时，界面也会立即更新。 其实还有一个规律，就是是深度监听数据的每一层，我们称之为递归监听</p><p>deep: true</p><p>shallowRef shallowReactive</p><h2 id="_11-为什么vue3不推荐用vuex了-讲讲pinia" tabindex="-1">11.为什么vue3不推荐用vuex了，讲讲pinia <a class="header-anchor" href="#_11-为什么vue3不推荐用vuex了-讲讲pinia" aria-label="Permalink to &quot;11.为什么vue3不推荐用vuex了，讲讲pinia&quot;">​</a></h2><p>Pinia 被设计为 Vuex 的现代替代品，它提供了更简洁直观的 API，更好的 TypeScript 支持，以及更高的灵活性和性能2。Vuex 则是一个更为成熟和广泛使用的状态管理库，特别是对于需要复杂状态管理和调试功能的项目3。</p>`,89)]))}const u=a(e,[["render",l]]);export{r as __pageData,u as default};
