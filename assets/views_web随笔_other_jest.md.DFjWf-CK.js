import{_ as a,c as n,a2 as e,o as p}from"./chunks/framework.CjNeJe2C.js";const u=JSON.parse('{"title":"Jest","description":"","frontmatter":{"title":"Jest","date":"2021-01-05T00:00:00.000Z","tags":["jest"],"categories":["test"]},"headers":[],"relativePath":"views/web随笔/other/jest.md","filePath":"views/web随笔/other/jest.md"}'),t={name:"views/web随笔/other/jest.md"};function l(i,s,c,o,r,h){return p(),n("div",null,s[0]||(s[0]=[e(`<h2 id="_1-jest初始化配置" tabindex="-1">1. Jest初始化配置 <a class="header-anchor" href="#_1-jest初始化配置" aria-label="Permalink to &quot;1. Jest初始化配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npx jest --init</span></span></code></pre></div><p>之后会有一些选项，你根据自己的需要进行选择就可以了：</p><ul><li><p>Choose the test environment that will be used for testing ? 代码是运行在Node环境还是Web环境下？</p></li><li><p>Do you want Jest to add coverage reports ? 是否生成测试覆盖率文件？</p></li><li><p>Automatically clear mock calls and instrances between every test?是否需要在测试之后清楚模拟调用的一些东西？</p></li></ul><p>在这三个选项选择之后，你会发现你的工程根目录下多了一个jest.config.js的文件。打开文件你可以看到里边有很多Jest的配置项。</p><h2 id="_2-coveragedirectroy" tabindex="-1">2. coverageDirectroy <a class="header-anchor" href="#_2-coveragedirectroy" aria-label="Permalink to &quot;2. coverageDirectroy&quot;">​</a></h2><p>先来了解一个概念code coverage,代码测试覆盖率，就是我们的测试代码，对功能性代码和业务逻辑代码作了百分多少的测试，这个百分比，就叫做代码测试覆盖率。</p><p>coverageDirectroy的配置是用来打开代码覆盖率的，如果我们把代码写成下面的样子,就说明打开了代码覆盖率的这个选项。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>coverageDirectory : &quot;coverage&quot;   //打开测试覆盖率选项</span></span></code></pre></div><p>当这个选项被打开后，我们就可以使用下面的命令,jest就会自动给我们生成一个代码测试覆盖率的说明。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> npx jest --coverage</span></span></code></pre></div><h2 id="_3-匹配器" tabindex="-1">3. 匹配器 <a class="header-anchor" href="#_3-匹配器" aria-label="Permalink to &quot;3. 匹配器&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>toBe</span></span>
<span class="line"><span>toEqual</span></span>
<span class="line"><span>toBeNull</span></span>
<span class="line"><span>toBeUndefined</span></span>
<span class="line"><span>toBeDefined</span></span>
<span class="line"><span>toBeTruthy</span></span>
<span class="line"><span>toBeFalsy</span></span>
<span class="line"><span>toBeGreaterThan 大于</span></span>
<span class="line"><span>toBeLessThan 小于</span></span>
<span class="line"><span>toBeGreaterThanOrEqual 大于等于</span></span>
<span class="line"><span>toBeGreaterThanOrEqual 小于等于</span></span>
<span class="line"><span>toBeCloseTo 这个是可以自动消除JavaScript浮点精度错误的匹配器</span></span>
<span class="line"><span>toMatch 字符串中有没有match的字符，也可以写正则表达式</span></span>
<span class="line"><span>toContain</span></span>
<span class="line"><span>toThrow 专门对异常进行处理的匹配器，可以检测一个方法会不会抛出异常</span></span>
<span class="line"><span>not 匹配器是Jest中比较特殊的匹配器，意思就是相反或者说取反</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const throwNewErrorFunc = ()=&gt;{</span></span>
<span class="line"><span>    throw new Error(&#39;this is a new error&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>test(&#39;toThrow匹配器&#39;,()=&gt;{</span></span>
<span class="line"><span>    expect(throwNewErrorFunc).not.toThrow()</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>官方文档:<a href="https://jestjs.io/docs/en/expect" target="_blank" rel="noreferrer"> https://jestjs.io/docs/en/expect</a></p><h2 id="_4-让jest支持import和es6语法" tabindex="-1">4. 让Jest支持import和ES6语法 <a class="header-anchor" href="#_4-让jest支持import和es6语法" aria-label="Permalink to &quot;4. 让Jest支持import和ES6语法&quot;">​</a></h2><ul><li>Babel 转换器安装</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install @babel/core@7.4.5 @babel/preset-env@7.4.5 -D</span></span></code></pre></div><p>在项目根目录下新建一个.babelrc的文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;presets&quot;:[</span></span>
<span class="line"><span>        [</span></span>
<span class="line"><span>                &quot;@babel/preset-env&quot;,{</span></span>
<span class="line"><span>                &quot;targets&quot;:{</span></span>
<span class="line"><span>                    &quot;node&quot;:&quot;current&quot;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>当写完这段代码后，就可以进行转换了,在Jest里有一个babel-jest组件，我们在使用yarn test的时候，它先去检测开发环境中是否安装了babel，也就是查看有没有babel-core，如果有bable-core就会去查看.babelrc配置文件，根据配置文件进行转换，转换完成，再进行测试</p><h2 id="_5-异步代码测试方法" tabindex="-1">5. 异步代码测试方法 <a class="header-anchor" href="#_5-异步代码测试方法" aria-label="Permalink to &quot;5. 异步代码测试方法&quot;">​</a></h2><ul><li>编写异步代码 fetchData.js</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install axios@0.19.0 --save</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import axios from &#39;axios&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const fetchData = (fn)=&gt;{</span></span>
<span class="line"><span>    axios.get(&#39;http://a.jspang.com/jestTest.json&#39;).then((response)=&gt;{</span></span>
<span class="line"><span>        fn(response.data)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>编写测试代码 fetchData.test.js</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import {</span></span>
<span class="line"><span>  fetchData</span></span>
<span class="line"><span>} from &#39;./fetchData.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>test(&#39;fetchData 测试&#39;, (done) =&gt; {</span></span>
<span class="line"><span>  fetchData((data) =&gt; {</span></span>
<span class="line"><span>    expect(data).toEqual({</span></span>
<span class="line"><span>      success: true</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    done()</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="_6-异步代码测试方法2-直接返回promise" tabindex="-1">6. 异步代码测试方法2--直接返回promise <a class="header-anchor" href="#_6-异步代码测试方法2-直接返回promise" aria-label="Permalink to &quot;6. 异步代码测试方法2--直接返回promise&quot;">​</a></h2><ul><li>fetchData.js</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export const fetchTwoData = ()=&gt;{</span></span>
<span class="line"><span>    return axios.get(&#39;http://a.jspang.com/jestTest.json&#39;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>fetchData.test.js</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { fetchData , fetchTwoData } from &#39;./fetchData.js&#39;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>test(&#39;FetchTwoData 测试&#39;, () =&gt; {</span></span>
<span class="line"><span>  return fetchTwoData().then((response) =&gt; {</span></span>
<span class="line"><span>    expect(response.data).toEqual({</span></span>
<span class="line"><span>      success: true</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="_7-异步代码测试方法3-不存在接口测试方法" tabindex="-1">7. 异步代码测试方法3--不存在接口测试方法 <a class="header-anchor" href="#_7-异步代码测试方法3-不存在接口测试方法" aria-label="Permalink to &quot;7. 异步代码测试方法3--不存在接口测试方法&quot;">​</a></h2><ul><li>fetchData.js</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export const fetchThreeData = ()=&gt;{</span></span>
<span class="line"><span>    return axios.get(&#39;http://a.jspang.com/jestTest_error.json&#39;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>fetchData.test.js</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>test(&#39;FetchThreeData 测试&#39;, () =&gt; {</span></span>
<span class="line"><span>  expect.assertions(1) //断言，必须执行一次expect</span></span>
<span class="line"><span>  return fetchThreeData().catch((e) =&gt; {</span></span>
<span class="line"><span>    expect(e.toString().indexOf(&#39;404&#39;) &gt; -1).toBe(true)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="_8-异步代码测试方法4-async-await" tabindex="-1">8. 异步代码测试方法4-- async await <a class="header-anchor" href="#_8-异步代码测试方法4-async-await" aria-label="Permalink to &quot;8. 异步代码测试方法4-- async await&quot;">​</a></h2><ul><li>fetchData.js</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export const fetchFourData = ()=&gt;{</span></span>
<span class="line"><span>    return axios.get(&#39;http://a.jspang.com/jestTest.json&#39;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>fetchData.test.js</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>test(&#39;FetchFourData 测试&#39;, async () =&gt; {</span></span>
<span class="line"><span>  //resolves把现有对象转换成Promise对象，</span></span>
<span class="line"><span>  //toMatchObject 匹配对象中的属性</span></span>
<span class="line"><span>  await expect(fetchFourData()).resolves.toMatchObject({</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>      success: true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>})</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>test(&#39;FetchFourData 测试&#39;, async () =&gt; {</span></span>
<span class="line"><span>  const response = await fetchFourData()</span></span>
<span class="line"><span>  expect(response.data).toEqual({</span></span>
<span class="line"><span>    success: true</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="_9-jest的四个钩子函数" tabindex="-1">9. Jest的四个钩子函数 <a class="header-anchor" href="#_9-jest的四个钩子函数" aria-label="Permalink to &quot;9. Jest的四个钩子函数&quot;">​</a></h2><ol><li>beforeAll()钩子函数的意思是在所有测试用例之前进行执行</li><li>afterAll()钩子函数是在完成所有测试用例之后才执行的函数</li><li>beforeEach()钩子函数，是在每个测试用例前都会执行一次的钩子函数</li><li>afterEach()钩子函数，是在每次测试用例完成测试之后执行一次的钩子函数</li></ol><h2 id="_10-jest中对测试用例进行分组" tabindex="-1">10. Jest中对测试用例进行分组 <a class="header-anchor" href="#_10-jest中对测试用例进行分组" aria-label="Permalink to &quot;10. Jest中对测试用例进行分组&quot;">​</a></h2><p>Jest为我们提供了一个分组的语法describe(),这个方法接受两个参数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>describe(&#39;刘英相关服务&#39;,()=&gt;{</span></span>
<span class="line"><span>  //测试用例</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="_11-钩子函数的作用域" tabindex="-1">11.钩子函数的作用域 <a class="header-anchor" href="#_11-钩子函数的作用域" aria-label="Permalink to &quot;11.钩子函数的作用域&quot;">​</a></h2><ul><li>钩子函数在父级分组可作用域子集，类似继承</li><li>钩子函数同级分组作用域互不干扰，各起作用</li><li>先执行外部的钩子函数，再执行内部的钩子函数</li></ul><p>学习资料:<a href="https://jspang.com/detailed?id=65#toc365" target="_blank" rel="noreferrer">一起学前端自动化测试</a></p>`,52)]))}const g=a(t,[["render",l]]);export{u as __pageData,g as default};
