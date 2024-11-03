import{_ as s,c as n,a2 as e,o as p}from"./chunks/framework.CjNeJe2C.js";const r=JSON.parse('{"title":"Git 提交指南","description":"","frontmatter":{"title":"Git 提交指南","date":"2020-11-11T00:00:00.000Z","tags":["git"],"categories":["git"]},"headers":[],"relativePath":"views/web随笔/git提交指南.md","filePath":"views/web随笔/git提交指南.md"}'),t={name:"views/web随笔/git提交指南.md"};function i(l,a,o,c,d,h){return p(),n("div",null,a[0]||(a[0]=[e(`<h2 id="_1-commit-message-格式" tabindex="-1">1. Commit message 格式 <a class="header-anchor" href="#_1-commit-message-格式" aria-label="Permalink to &quot;1. Commit message 格式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</span></span>
<span class="line"><span>// 空一行</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>// 空一行</span></span>
<span class="line"><span>&lt;footer&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 冒号后有空格</span></span>
<span class="line"><span>// eg：feat(view): add case based on Vue and Vuex</span></span></code></pre></div><p>其中 Header 是必需的，Body 和 Footer 可以省略。</p><h3 id="_1-1-header" tabindex="-1">1.1 Header <a class="header-anchor" href="#_1-1-header" aria-label="Permalink to &quot;1.1 Header&quot;">​</a></h3><p>Header部分只有一行，包括三个字段：type（必需）、scope（可选）和 subject（必需）。</p><h4 id="_1-1-type" tabindex="-1">1.1 type <a class="header-anchor" href="#_1-1-type" aria-label="Permalink to &quot;1.1 type&quot;">​</a></h4><p>type 说明 commit 的类别，只允许使用如下 7 个标识。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>feat: 新功能</span></span>
<span class="line"><span>fix: 修补 bug</span></span>
<span class="line"><span>docs: 文档</span></span>
<span class="line"><span>style: 格式（不影响代码运行的变动）</span></span>
<span class="line"><span>refactor: 重构</span></span>
<span class="line"><span>test: 增加测试</span></span>
<span class="line"><span>chore: 构建过程或辅助工具的变动</span></span></code></pre></div><p>如果 type 为 feat 和 fix，则该 commit 将肯定出现在 Change log 之中。其余情况不建议放入。</p><h4 id="_1-1-2-scope" tabindex="-1">1.1.2 scope <a class="header-anchor" href="#_1-1-2-scope" aria-label="Permalink to &quot;1.1.2 scope&quot;">​</a></h4><p>scope 说明 commit 的作用范围，如数据层、控制层、试图层等，视项目不同而不同。</p><h4 id="_1-1-3-subject" tabindex="-1">1.1.3 subject <a class="header-anchor" href="#_1-1-3-subject" aria-label="Permalink to &quot;1.1.3 subject&quot;">​</a></h4><p>subject 是 commit 目的的简短描述，不超过 50 个字符。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>以动词开头，使用第一人称现在时，比如 change，而不是 changed 或 changes</span></span>
<span class="line"><span>第一个字母小写</span></span>
<span class="line"><span>结尾不加句号（.）</span></span></code></pre></div><h3 id="_1-2-body" tabindex="-1">1.2 Body <a class="header-anchor" href="#_1-2-body" aria-label="Permalink to &quot;1.2 Body&quot;">​</a></h3><p>Body 部分是对本次 commit 的详细描述，可以分为多行。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>使用第一人称现在时，比如使用change而不是changed或changes。</span></span>
<span class="line"><span>应该说明代码变动的动机，以及与以前行为的对比。</span></span></code></pre></div><h3 id="_1-3-footer" tabindex="-1">1.3 Footer <a class="header-anchor" href="#_1-3-footer" aria-label="Permalink to &quot;1.3 Footer&quot;">​</a></h3><p>Body 部分是对本次 commit 的详细描述，可以分为多行。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>使用第一人称现在时，比如使用change而不是changed或changes。</span></span>
<span class="line"><span>应该说明代码变动的动机，以及与以前行为的对比。</span></span></code></pre></div><h2 id="_2-规范方式" tabindex="-1">2. 规范方式 <a class="header-anchor" href="#_2-规范方式" aria-label="Permalink to &quot;2. 规范方式&quot;">​</a></h2><p>通过 <a href="https://commitlint.js.org/" target="_blank" rel="noreferrer">cimmitlint</a> 和 <a href="https://github.com/typicode/husky" target="_blank" rel="noreferrer">husky</a> 来进行提交检查，当执行 git commit 时会先进行校验，校验成功才能提交成功。</p><h3 id="_2-1-commitlint" tabindex="-1">2.1 commitlint <a class="header-anchor" href="#_2-1-commitlint" aria-label="Permalink to &quot;2.1 commitlint&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 项目目录下安装</span></span>
<span class="line"><span>npm i commitlint @commitlint/config-conventional --save-dev</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 项目目录下，新建配置文件 commitlint.config.js</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  extends: [&#39;@commitlint/config-conventional&#39;],</span></span>
<span class="line"><span>  rules: {</span></span>
<span class="line"><span>    // type 类型定义</span></span>
<span class="line"><span>    &#39;type-enum&#39;: [2, &#39;always&#39;, [</span></span>
<span class="line"><span>      &quot;feat&quot;, // 新功能 feature</span></span>
<span class="line"><span>      &quot;fix&quot;, // 修复 bug</span></span>
<span class="line"><span>      &quot;docs&quot;, // 文档注释</span></span>
<span class="line"><span>      &quot;style&quot;, // 代码格式(不影响代码运行的变动)</span></span>
<span class="line"><span>      &quot;refactor&quot;, // 重构(既不增加新功能，也不是修复bug)</span></span>
<span class="line"><span>      &quot;perf&quot;, // 性能优化</span></span>
<span class="line"><span>      &quot;test&quot;, // 增加测试</span></span>
<span class="line"><span>      &quot;chore&quot;, // 构建过程或辅助工具的变动</span></span>
<span class="line"><span>      &quot;revert&quot;, // 回退</span></span>
<span class="line"><span>      &quot;build&quot; // 打包</span></span>
<span class="line"><span>    ]],</span></span>
<span class="line"><span>    // subject 大小写不做校验</span></span>
<span class="line"><span>    // 自动部署的BUILD ROBOT的commit信息大写，以作区别</span></span>
<span class="line"><span>    &#39;subject-case&#39;: [0]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span></code></pre></div><h3 id="_2-2-husky" tabindex="-1">2.2 husky <a class="header-anchor" href="#_2-2-husky" aria-label="Permalink to &quot;2.2 husky&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i husky --save-dev</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 在package.json 文件中增加</span></span>
<span class="line"><span>&quot;husky&quot;: {</span></span>
<span class="line"><span>  &quot;hooks&quot;: {</span></span>
<span class="line"><span>    &quot;commit-msg&quot;: &quot;commitlint -E HUSKY_GIT_PARAMS&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-3-commitizen" tabindex="-1">2.3 commitizen <a class="header-anchor" href="#_2-3-commitizen" aria-label="Permalink to &quot;2.3 commitizen&quot;">​</a></h3><p>Commitizen 是一个撰写合格 Commit message 的工具。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 全局安装</span></span>
<span class="line"><span>npm i commitizen -g</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 项目目录下安装</span></span>
<span class="line"><span>npm i commitizen --save-dev</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 初始化项目以使用 cz-conventional-changelog 适配器</span></span>
<span class="line"><span>commitizen init cz-customizable --save-dev --save-exact</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 在 package.json 文件中增加相关配置</span></span>
<span class="line"><span>// 其中 path 可能需要更改</span></span>
<span class="line"><span>&quot;config&quot;: {</span></span>
<span class="line"><span>  &quot;commitizen&quot;: {</span></span>
<span class="line"><span>    &quot;path&quot;: &quot;./node_modules/cz-customizable&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 在项目目录下，新建配置文件 .cz-config.js</span></span>
<span class="line"><span>&#39;use strict&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  types: [</span></span>
<span class="line"><span>    {value: &#39;feat&#39;,     name: &#39;feat:     新功能&#39;},</span></span>
<span class="line"><span>    {value: &#39;fix&#39;,      name: &#39;fix:      修复&#39;},</span></span>
<span class="line"><span>    {value: &#39;docs&#39;,     name: &#39;docs:     文档变更&#39;},</span></span>
<span class="line"><span>    {value: &#39;style&#39;,    name: &#39;style:    代码格式(不影响代码运行的变动)&#39;},</span></span>
<span class="line"><span>    {value: &#39;refactor&#39;, name: &#39;refactor: 重构(既不是增加feature，也不是修复bug)&#39;},</span></span>
<span class="line"><span>    {value: &#39;perf&#39;,     name: &#39;perf:     性能优化&#39;},</span></span>
<span class="line"><span>    {value: &#39;test&#39;,     name: &#39;test:     增加测试&#39;},</span></span>
<span class="line"><span>    {value: &#39;chore&#39;,    name: &#39;chore:    构建过程或辅助工具的变动&#39;},</span></span>
<span class="line"><span>    {value: &#39;revert&#39;,   name: &#39;revert:   回退&#39;},</span></span>
<span class="line"><span>    {value: &#39;build&#39;,    name: &#39;build:    打包&#39;}</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  // override the messages, defaults are as follows</span></span>
<span class="line"><span>  messages: {</span></span>
<span class="line"><span>    type: &#39;请选择提交类型:&#39;,</span></span>
<span class="line"><span>    // scope: &#39;请输入文件修改范围(可选):&#39;,</span></span>
<span class="line"><span>    // used if allowCustomScopes is true</span></span>
<span class="line"><span>    customScope: &#39;请输入修改范围(可选):&#39;,</span></span>
<span class="line"><span>    subject: &#39;请简要描述提交(必填):&#39;,</span></span>
<span class="line"><span>    body: &#39;请输入详细描述(可选，待优化去除，跳过即可):&#39;,</span></span>
<span class="line"><span>    // breaking: &#39;List any BREAKING CHANGES (optional):\\n&#39;,</span></span>
<span class="line"><span>    footer: &#39;请输入要关闭的issue(待优化去除，跳过即可):&#39;,</span></span>
<span class="line"><span>    confirmCommit: &#39;确认使用以上信息提交？(y/n/e/h)&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  allowCustomScopes: true,</span></span>
<span class="line"><span>  // allowBreakingChanges: [&#39;feat&#39;, &#39;fix&#39;],</span></span>
<span class="line"><span>  skipQuestions: [&#39;body&#39;, &#39;footer&#39;],</span></span>
<span class="line"><span>  // limit subject length, commitlint默认是72</span></span>
<span class="line"><span>  subjectLimit: 72</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>以后，凡是用到 git commit 命令，一律改为使用 git cz。这是，就会出现选项，用来生成符合格式的 Commit message。</p><h2 id="_3-自动生成-change-log" tabindex="-1">3. 自动生成 change log <a class="header-anchor" href="#_3-自动生成-change-log" aria-label="Permalink to &quot;3. 自动生成 change log&quot;">​</a></h2><p>如果所有的 Commit 都符合 Angular 格式。那么发布新版本时，Change log 就可以用脚本自动生成。生成的文档包括以下三个部分。</p><ul><li>New features</li><li>Bug fixes</li><li>Breaking changes. 每个部分都会罗列相关的 commit ，并且有指向这些 commit 的链接。当然，生成的文档允许手动修改，所以发布前，你还可以添加其他内容。 <a href="https://github.com/conventional-changelog/conventional-changelog" target="_blank" rel="noreferrer">conventional-changelog</a> 就是生成 Change log 的工具，运行下面的命令即可。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install -g conventional-changelog-cli --save-dev</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 在package.json 中加入配置</span></span>
<span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>  &quot;changelog&quot;: &quot;conventional-changelog -p angular -i CHANGELOG.md -s&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm run changelog</span></span></code></pre></div><p>参考资料: <a href="https://juejin.im/post/6893480468101103623?utm_source=gold_browser_extension" target="_blank" rel="noreferrer">Git 提交指南</a></p>`,41)]))}const g=s(t,[["render",i]]);export{r as __pageData,g as default};
