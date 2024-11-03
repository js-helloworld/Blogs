import{_ as e,c as i,a2 as n,j as a,a as p,G as o,t as c,B as d,o as u}from"./chunks/framework.CjNeJe2C.js";const y=JSON.parse('{"title":"vue2.x全局API","description":"","frontmatter":{"title":"vue2.x全局API","date":"2020-06-13T00:00:00.000Z","tags":["vue"],"categories":["vue"],"author":["游城走不动"]},"headers":[],"relativePath":"views/web随笔/vue/vue2.x全局API.md","filePath":"views/web随笔/vue/vue2.x全局API.md"}'),r={name:"views/web随笔/vue/vue2.x全局API.md"};function h(t,s,g,m,v,b){const l=d("author");return u(),i("div",null,[s[2]||(s[2]=n(`<h2 id="_1-vue-directive-自定义指令" tabindex="-1">1.Vue.directive 自定义指令 <a class="header-anchor" href="#_1-vue-directive-自定义指令" aria-label="Permalink to &quot;1.Vue.directive 自定义指令&quot;">​</a></h2><p>定义一些属于自己的指令，比如我们要定义一个v-diy的指令，作用就是让文字变成绿色。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;div v-diy=&quot;color&quot; id=&quot;demo&quot;&gt;</span></span>
<span class="line"><span>        {{num}}</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;button @click=&quot;add&quot;&gt;Add&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    Vue.directive(&#39;diy&#39;,function(el,binding,vnode){</span></span>
<span class="line"><span>        el.style=&#39;color:&#39;+binding.value;</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    var app=new Vue({</span></span>
<span class="line"><span>        el:&#39;#app&#39;,</span></span>
<span class="line"><span>        data:{</span></span>
<span class="line"><span>            num:10,</span></span>
<span class="line"><span>            color:&#39;green&#39;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        methods:{</span></span>
<span class="line"><span>            add:function(){</span></span>
<span class="line"><span>                this.num++;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    })</span></span></code></pre></div><h3 id="自定义指令中传递的三个参数" tabindex="-1">自定义指令中传递的三个参数 <a class="header-anchor" href="#自定义指令中传递的三个参数" aria-label="Permalink to &quot;自定义指令中传递的三个参数&quot;">​</a></h3><ul><li>el: 指令所绑定的元素，可以用来直接操作DOM。</li><li>binding: 一个对象，包含指令的很多信息。</li><li>vnode: Vue编译生成的虚拟节点。</li></ul><h3 id="自定义指令的生命周期" tabindex="-1">自定义指令的生命周期 <a class="header-anchor" href="#自定义指令的生命周期" aria-label="Permalink to &quot;自定义指令的生命周期&quot;">​</a></h3><p>自定义指令有五个生命周期（也叫钩子函数），分别是 bind,inserted,update,componentUpdated,unbind</p><ol><li><p>bind:只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定 义一个绑定时执行一次的初始化动作。</p></li><li><p>inserted:被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于document中）。</p></li><li><p>update:被绑定于元素所在的模板更新时调用，而无论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。</p></li><li><p>componentUpdated:被绑定元素所在模板完成一次更新周期时调用。</p></li><li><p>unbind:只调用一次，指令与元素解绑时调用。</p></li></ol><h2 id="_2-vue-extend构造器的延伸" tabindex="-1">2.Vue.extend构造器的延伸 <a class="header-anchor" href="#_2-vue-extend构造器的延伸" aria-label="Permalink to &quot;2.Vue.extend构造器的延伸&quot;">​</a></h2><h3 id="一、什么是vue-extend" tabindex="-1">一、什么是Vue.extend <a class="header-anchor" href="#一、什么是vue-extend" aria-label="Permalink to &quot;一、什么是Vue.extend&quot;">​</a></h3><p>Vue.extend 返回的是一个“扩展实例构造器”,也就是预设了部分选项的Vue实例构造器。经常服务于Vue.component用来生成组件，可以简单理解为当在模板中遇到该组件名称作为标签的自定义元素时，会自动调用“扩展实例构造器”来生产组件实例，并挂载到自定义元素上。</p><h3 id="二、自定义无参数标签" tabindex="-1">二、自定义无参数标签 <a class="header-anchor" href="#二、自定义无参数标签" aria-label="Permalink to &quot;二、自定义无参数标签&quot;">​</a></h3>`,13)),a("p",null,[s[0]||(s[0]=p("我们想象一个需求，需求是这样的，要在博客页面多处显示作者的网名，并在网名上直接有链接地址。我们希望在html中只需要写")),o(l),s[1]||(s[1]=p("，这和自定义组件很像，但是他没有传递任何参数，只是个静态标签。"))]),s[3]||(s[3]=n(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot; src=&quot;../assets/js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;title&gt;vue.extend-扩展实例构造器&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;vue.extend-扩展实例构造器&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;hr&gt;</span></span>
<span class="line"><span>    &lt;author&gt;&lt;/author&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>       var authorExtend = Vue.extend({</span></span>
<span class="line"><span>           template:&quot;&lt;p&gt;&lt;a :href=&#39;authorUrl&#39;&gt;{{authorName}}&lt;/a&gt;&lt;/p&gt;&quot;,</span></span>
<span class="line"><span>           data:function(){</span></span>
<span class="line"><span>               return{</span></span>
<span class="line"><span>                   authorName:&#39;JSPang&#39;,</span></span>
<span class="line"><span>                   authorUrl:&#39;http://www.jspang.com&#39;</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span>       });</span></span>
<span class="line"><span>       new authorExtend().$mount(&#39;author&#39;);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>还可以通过HTML标签上的id或者class来生成扩展实例构造器，Vue.extend里的代码是一样的，只是在挂载的时候，我们用类似jquery的选择器的方法，来进行挂载就可以了。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>new authorExtend().$mount(&#39;#author&#39;);</span></span></code></pre></div><h2 id="_3-vue-set全局操作" tabindex="-1">3.Vue.set全局操作 <a class="header-anchor" href="#_3-vue-set全局操作" aria-label="Permalink to &quot;3.Vue.set全局操作&quot;">​</a></h2><p>Vue.set 的作用就是在构造器外部操作构造器内部的数据、属性或者方法。比如在vue构造器内部定义了一个count为1的数据，我们在构造器外部定义了一个方法，要每次点击按钮给值加1.就需要用到Vue.set。</p><h3 id="一、引用构造器外部数据" tabindex="-1">一、引用构造器外部数据： <a class="header-anchor" href="#一、引用构造器外部数据" aria-label="Permalink to &quot;一、引用构造器外部数据：&quot;">​</a></h3><p>什么是外部数据，就是不在Vue构造器里里的data处声明，而是在构造器外部声明，然后在data处引用就可以了。外部数据的加入让程序更加灵活，我们可以在外部获取任何想要的数据形式，然后让data引用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//在构造器外部声明数据</span></span>
<span class="line"><span> var outData={</span></span>
<span class="line"><span>    count:1,</span></span>
<span class="line"><span>    goodName:&#39;car&#39;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>var app=new Vue({</span></span>
<span class="line"><span>    el:&#39;#app&#39;,</span></span>
<span class="line"><span>    //引用外部数据</span></span>
<span class="line"><span>    data:outData</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="二、在外部改变数据的三种方法" tabindex="-1">二、在外部改变数据的三种方法： <a class="header-anchor" href="#二、在外部改变数据的三种方法" aria-label="Permalink to &quot;二、在外部改变数据的三种方法：&quot;">​</a></h3><ol><li>用Vue.set改变</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function add(){</span></span>
<span class="line"><span>       Vue.set(outData,&#39;count&#39;,4);</span></span>
<span class="line"><span> }</span></span></code></pre></div><ol start="2"><li>用Vue对象的方法添加</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>app.count++;</span></span></code></pre></div><ol start="3"><li>直接操作外部数据</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>outData.count++;</span></span></code></pre></div><h3 id="三、为什么要有vue-set的存在" tabindex="-1">三、为什么要有Vue.set的存在? <a class="header-anchor" href="#三、为什么要有vue-set的存在" aria-label="Permalink to &quot;三、为什么要有Vue.set的存在?&quot;">​</a></h3><p>由于Javascript的限制，Vue不能自动检测以下变动的数组。</p><ul><li>当你利用索引直接设置一个项时，vue不会为我们自动更新。</li><li>当你修改数组的长度时，vue不会为我们自动更新。</li></ul><h2 id="_4-vue的生命周期-钩子函数" tabindex="-1">4.Vue的生命周期（钩子函数） <a class="header-anchor" href="#_4-vue的生命周期-钩子函数" aria-label="Permalink to &quot;4.Vue的生命周期（钩子函数）&quot;">​</a></h2><p>Vue一共有10个生命周期函数，我们可以利用这些函数在vue的每个阶段都进行操作数据或者改变内容。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot; src=&quot;../assets/js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;title&gt;构造器的声明周期&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;构造器的声明周期&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;hr&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>        {{message}}</span></span>
<span class="line"><span>        &lt;p&gt;&lt;button @click=&quot;jia&quot;&gt;加分&lt;/button&gt;&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;button onclick=&quot;app.$destroy()&quot;&gt;销毁&lt;/button&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>        var app=new Vue({</span></span>
<span class="line"><span>            el:&#39;#app&#39;,</span></span>
<span class="line"><span>            data:{</span></span>
<span class="line"><span>                message:1</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            methods:{</span></span>
<span class="line"><span>                jia:function(){</span></span>
<span class="line"><span>                    this.message ++;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            beforeCreate:function(){</span></span>
<span class="line"><span>                console.log(&#39;1-beforeCreate 初始化之后&#39;);</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            created:function(){</span></span>
<span class="line"><span>                console.log(&#39;2-created 创建完成&#39;);</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            beforeMount:function(){</span></span>
<span class="line"><span>                console.log(&#39;3-beforeMount 挂载之前&#39;);</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            mounted:function(){</span></span>
<span class="line"><span>                console.log(&#39;4-mounted 被创建&#39;);</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            beforeUpdate:function(){</span></span>
<span class="line"><span>                console.log(&#39;5-beforeUpdate 数据更新前&#39;);</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            updated:function(){</span></span>
<span class="line"><span>                console.log(&#39;6-updated 被更新后&#39;);</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            activated:function(){</span></span>
<span class="line"><span>                console.log(&#39;7-activated&#39;);</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            deactivated:function(){</span></span>
<span class="line"><span>                console.log(&#39;8-deactivated&#39;);</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            beforeDestroy:function(){</span></span>
<span class="line"><span>                console.log(&#39;9-beforeDestroy 销毁之前&#39;);</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            destroyed:function(){</span></span>
<span class="line"><span>                console.log(&#39;10-destroyed 销毁之后&#39;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h2 id="_5-template-制作模版" tabindex="-1">5.Template 制作模版 <a class="header-anchor" href="#_5-template-制作模版" aria-label="Permalink to &quot;5.Template 制作模版&quot;">​</a></h2><h3 id="一、直接写在选项里的模板" tabindex="-1">一、直接写在选项里的模板 <a class="header-anchor" href="#一、直接写在选项里的模板" aria-label="Permalink to &quot;一、直接写在选项里的模板&quot;">​</a></h3><p>直接在构造器里的template选项后边编写。这种写法比较直观，但是如果模板html代码太多，不建议这么写。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var app=new Vue({</span></span>
<span class="line"><span>     el:&#39;#app&#39;,</span></span>
<span class="line"><span>     data:{</span></span>
<span class="line"><span>         message:&#39;hello Vue!&#39;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>     template:\`</span></span>
<span class="line"><span>        &lt;h1 style=&quot;color:red&quot;&gt;我是选项模板&lt;/h1&gt;</span></span>
<span class="line"><span>     \`</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="二、写在template标签里的模板" tabindex="-1">二、写在template标签里的模板 <a class="header-anchor" href="#二、写在template标签里的模板" aria-label="Permalink to &quot;二、写在template标签里的模板&quot;">​</a></h3><p>这种写法更像是在写HTML代码，就算不会写Vue的人，也可以制作页面。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template id=&quot;demo2&quot;&gt;</span></span>
<span class="line"><span>    &lt;h2 style=&quot;color:red&quot;&gt;我是template标签模板&lt;/h2&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>    var app=new Vue({</span></span>
<span class="line"><span>        el:&#39;#app&#39;,</span></span>
<span class="line"><span>        data:{</span></span>
<span class="line"><span>            message:&#39;hello Vue!&#39;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        template:&#39;#demo2&#39;</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="三、写在script标签里的模板" tabindex="-1">三、写在script标签里的模板 <a class="header-anchor" href="#三、写在script标签里的模板" aria-label="Permalink to &quot;三、写在script标签里的模板&quot;">​</a></h3><p>这种写模板的方法，可以让模板文件从外部引入。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script type=&quot;x-template&quot; id=&quot;demo3&quot;&gt;</span></span>
<span class="line"><span>    &lt;h2 style=&quot;color:red&quot;&gt;我是script标签模板&lt;/h2&gt;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>    var app=new Vue({</span></span>
<span class="line"><span>        el:&#39;#app&#39;,</span></span>
<span class="line"><span>        data:{</span></span>
<span class="line"><span>            message:&#39;hello Vue!&#39;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        template:&#39;#demo3&#39;</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="_6-component-初识组件" tabindex="-1">6.Component 初识组件 <a class="header-anchor" href="#_6-component-初识组件" aria-label="Permalink to &quot;6.Component 初识组件&quot;">​</a></h2><h3 id="一、全局化注册组件" tabindex="-1">一、全局化注册组件 <a class="header-anchor" href="#一、全局化注册组件" aria-label="Permalink to &quot;一、全局化注册组件&quot;">​</a></h3><p>全局化就是在构造器的外部用Vue.component来注册</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot; src=&quot;../assets/js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;title&gt;component-1&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;component-1&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;hr&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>        &lt;diycpt&gt;&lt;/diycpt&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>        //注册全局组件</span></span>
<span class="line"><span>        Vue.component(&#39;diycpt&#39;,{</span></span>
<span class="line"><span>            template:\`&lt;div style=&quot;color:red;&quot;&gt;全局化注册的jspang标签&lt;/div&gt;\`</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        var app=new Vue({</span></span>
<span class="line"><span>            el:&#39;#app&#39;,</span></span>
<span class="line"><span>            data:{</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h3 id="二、局部注册组件局部" tabindex="-1">二、局部注册组件局部 <a class="header-anchor" href="#二、局部注册组件局部" aria-label="Permalink to &quot;二、局部注册组件局部&quot;">​</a></h3><p>局部注册组件局部注册组件和全局注册组件是向对应的，局部注册的组件只能在组件注册的作用域里进行使用，其他作用域使用无效。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot; src=&quot;../assets/js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;title&gt;component-1&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;component-1&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;hr&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>      &lt;panda&gt;&lt;/panda&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>        var app=new Vue({</span></span>
<span class="line"><span>            el:&#39;#app&#39;,</span></span>
<span class="line"><span>            components:{</span></span>
<span class="line"><span>                &quot;panda&quot;:{</span></span>
<span class="line"><span>                    template:\`&lt;div style=&quot;color:red;&quot;&gt;局部注册的panda标签&lt;/div&gt;\`</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>构造器里的components 是加s的，而全局注册是不加s</p></div><h3 id="三、组件和指令的区别" tabindex="-1">三、组件和指令的区别 <a class="header-anchor" href="#三、组件和指令的区别" aria-label="Permalink to &quot;三、组件和指令的区别&quot;">​</a></h3><p>组件注册的是一个标签，而指令注册的是已有标签里的一个属性</p><h2 id="_7-component-组件props-属性设置" tabindex="-1">7.Component 组件props 属性设置 <a class="header-anchor" href="#_7-component-组件props-属性设置" aria-label="Permalink to &quot;7.Component 组件props 属性设置&quot;">​</a></h2><p>props选项就是设置和获取标签上的属性值的</p><h3 id="一、定义属性并获取属性值" tabindex="-1">一、定义属性并获取属性值 <a class="header-anchor" href="#一、定义属性并获取属性值" aria-label="Permalink to &quot;一、定义属性并获取属性值&quot;">​</a></h3>`,44)),a("p",null,"定义属性我们需要用props选项，加上数组形式的属性名称，例如：props:[‘here’]。在组件的模板里读出属性值只需要用插值的形式，例如"+c(t.here)+".",1),s[4]||(s[4]=n(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot; src=&quot;../assets/js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;title&gt;component-2&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;component-2&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;hr&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>      &lt;panda here=&quot;China&quot;&gt;&lt;/panda&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>        var app=new Vue({</span></span>
<span class="line"><span>            el:&#39;#app&#39;,</span></span>
<span class="line"><span>            components:{</span></span>
<span class="line"><span>                &quot;panda&quot;:{</span></span>
<span class="line"><span>                    template:\`&lt;div style=&quot;color:red;&quot;&gt;Panda from {{ here }}.&lt;/div&gt;\`,</span></span>
<span class="line"><span>                    props:[&#39;here&#39;]</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h3 id="二、属性中带-的处理方式" tabindex="-1">二、属性中带’-‘的处理方式 <a class="header-anchor" href="#二、属性中带-的处理方式" aria-label="Permalink to &quot;二、属性中带’-‘的处理方式&quot;">​</a></h3><p>我们在写属性时经常会加入’-‘来进行分词，比如：，那这时我们在props里如果写成props:[‘form-here’]是错误的，我们必须用小驼峰式写法props:[‘formHere’]。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;panda from-here=&quot;China&quot;&gt;&lt;/panda&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> var app=new Vue({</span></span>
<span class="line"><span>    el:&#39;#app&#39;,</span></span>
<span class="line"><span>    components:{</span></span>
<span class="line"><span>        &quot;panda&quot;:{</span></span>
<span class="line"><span>            template:\`&lt;div style=&quot;color:red;&quot;&gt;Panda from {{ here }}.&lt;/div&gt;\`,</span></span>
<span class="line"><span>            props:[&#39;fromHere&#39;]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="三、在构造器里向组件中传值" tabindex="-1">三、在构造器里向组件中传值 <a class="header-anchor" href="#三、在构造器里向组件中传值" aria-label="Permalink to &quot;三、在构造器里向组件中传值&quot;">​</a></h3><p>把构造器中data的值传递给组件，我们只要进行绑定就可以了</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;panda v-bind:here=&quot;message&quot;&gt;&lt;/panda&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> var app=new Vue({</span></span>
<span class="line"><span>    el:&#39;#app&#39;,</span></span>
<span class="line"><span>    data:{</span></span>
<span class="line"><span>        message:&#39;SiChuan&#39; </span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    components:{</span></span>
<span class="line"><span>        &quot;panda&quot;:{</span></span>
<span class="line"><span>            template:\`&lt;div style=&quot;color:red;&quot;&gt;Panda from {{ here }}.&lt;/div&gt;\`,</span></span>
<span class="line"><span>            props:[&#39;here&#39;]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="_8-component-父子组件关系" tabindex="-1">8.Component 父子组件关系 <a class="header-anchor" href="#_8-component-父子组件关系" aria-label="Permalink to &quot;8.Component 父子组件关系&quot;">​</a></h2><h3 id="一、构造器外部写局部注册组件" tabindex="-1">一、构造器外部写局部注册组件 <a class="header-anchor" href="#一、构造器外部写局部注册组件" aria-label="Permalink to &quot;一、构造器外部写局部注册组件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot; src=&quot;../assets/js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;title&gt;component-3&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;component-3&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;hr&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>      &lt;diycpt&gt;&lt;/diycpt&gt;  </span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>       var city={</span></span>
<span class="line"><span>           template:\`&lt;div&gt;Sichuan of China&lt;/div&gt;\`</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>        var diycpt = {</span></span>
<span class="line"><span>            template:\`&lt;div&gt;</span></span>
<span class="line"><span>                    &lt;p&gt; Panda from China!&lt;/p&gt;</span></span>
<span class="line"><span>                    &lt;city&gt;&lt;/city&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;\`,</span></span>
<span class="line"><span>            components:{</span></span>
<span class="line"><span>                &quot;city&quot;:city</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        var app=new Vue({</span></span>
<span class="line"><span>            el:&#39;#app&#39;,</span></span>
<span class="line"><span>            components:{</span></span>
<span class="line"><span>                &quot;diycpt&quot;:diycpt</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h2 id="_9-component-标签" tabindex="-1">9.Component 标签 <a class="header-anchor" href="#_9-component-标签" aria-label="Permalink to &quot;9.Component 标签&quot;">​</a></h2><p>标签是Vue框架自定义的标签，它的用途就是可以动态绑定我们的组件，根据数据的不同更换不同的组件。</p><ol><li>我们先在构造器外部定义三个不同的组件，分别是componentA,componentB和componentC.</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> var componentA={</span></span>
<span class="line"><span>     template:\`&lt;div&gt;I&#39;m componentA&lt;/div&gt;\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> var componentB={</span></span>
<span class="line"><span>      template:\`&lt;div&gt;I&#39;m componentB&lt;/div&gt;\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var componentC={</span></span>
<span class="line"><span>    template:\`&lt;div&gt;I&#39;m componentC&lt;/div&gt;\`</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="2"><li>我们在构造器的components选项里加入这三个组件。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>components:{</span></span>
<span class="line"><span>    &quot;componentA&quot;:componentA,</span></span>
<span class="line"><span>    &quot;componentB&quot;:componentB,</span></span>
<span class="line"><span>    &quot;componentC&quot;:componentC,</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="3"><li>我们在html里插入component标签，并绑定who数据，根据who的值不同，调用不同的组件。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;component v-bind:is=&quot;who&quot;&gt;&lt;/component&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot; src=&quot;../assets/js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;title&gt;component-4&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;component-4&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;hr&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>       &lt;component v-bind:is=&quot;who&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"><span>       &lt;button @click=&quot;changeComponent&quot;&gt;changeComponent&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span>        var componentA={</span></span>
<span class="line"><span>            template:\`&lt;div style=&quot;color:red;&quot;&gt;I&#39;m componentA&lt;/div&gt;\`</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        var componentB={</span></span>
<span class="line"><span>            template:\`&lt;div style=&quot;color:green;&quot;&gt;I&#39;m componentB&lt;/div&gt;\`</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        var componentC={</span></span>
<span class="line"><span>            template:\`&lt;div style=&quot;color:pink;&quot;&gt;I&#39;m componentC&lt;/div&gt;\`</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        var app=new Vue({</span></span>
<span class="line"><span>            el:&#39;#app&#39;,</span></span>
<span class="line"><span>            data:{</span></span>
<span class="line"><span>                who:&#39;componentA&#39;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            components:{</span></span>
<span class="line"><span>                &quot;componentA&quot;:componentA,</span></span>
<span class="line"><span>                &quot;componentB&quot;:componentB,</span></span>
<span class="line"><span>                &quot;componentC&quot;:componentC,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            methods:{</span></span>
<span class="line"><span>                changeComponent:function(){</span></span>
<span class="line"><span>                    if(this.who==&#39;componentA&#39;){</span></span>
<span class="line"><span>                        this.who=&#39;componentB&#39;;</span></span>
<span class="line"><span>                    }else if(this.who==&#39;componentB&#39;){</span></span>
<span class="line"><span>                        this.who=&#39;componentC&#39;;</span></span>
<span class="line"><span>                    }else{</span></span>
<span class="line"><span>                        this.who=&#39;componentA&#39;;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>学习资料:<a href="https://jspang.com/detailed?id=57" target="_blank" rel="noreferrer">Vue2.x学习路线-按次路线学习顺畅无比</a></p>`,22))])}const k=e(r,[["render",h]]);export{y as __pageData,k as default};
