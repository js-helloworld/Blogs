import{_ as a,c as n,a2 as p,o as e}from"./chunks/framework.CjNeJe2C.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"views/web随笔/js/前端挑战.md","filePath":"views/web随笔/js/前端挑战.md"}'),l={name:"views/web随笔/js/前端挑战.md"};function i(t,s,c,r,o,u){return e(),n("div",null,s[0]||(s[0]=[p(`<hr><p>title: 前端挑战 date: 2019-11-21 tags:</p><ul><li>js categories:</li><li>js</li></ul><hr><h2 id="封装函数-f-使-f-的-this-指向指定的对象" tabindex="-1">封装函数 f，使 f 的 this 指向指定的对象 <a class="header-anchor" href="#封装函数-f-使-f-的-this-指向指定的对象" aria-label="Permalink to &quot;封装函数 f，使 f 的 this 指向指定的对象&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function bindThis(f, oTarget) {</span></span>
<span class="line"><span>    return function(){</span></span>
<span class="line"><span>        return f.apply(oTarget,arguments);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="获取-url-中的参数" tabindex="-1">获取 url 中的参数 <a class="header-anchor" href="#获取-url-中的参数" aria-label="Permalink to &quot;获取 url 中的参数&quot;">​</a></h2><ol><li>指定参数名称，返回该参数的值 或者 空字符串</li><li>不指定参数名称，返回全部的参数对象 或者 {}</li><li>如果存在多个同名参数，则返回数组</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http://www.nowcoder.com?key=1&amp;key=2&amp;key=3&amp;test=4#hehe key</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function getUrlParam(sUrl, sKey) {</span></span>
<span class="line"><span>    var param = sUrl.split(&#39;#&#39;)[0].split(&#39;?&#39;)[1];</span></span>
<span class="line"><span>    if (sKey){//指定参数名称</span></span>
<span class="line"><span>        var strs = param.split(&#39;&amp;&#39;);</span></span>
<span class="line"><span>        var arrs = new Array();//如果存在多个同名参数，则返回数组</span></span>
<span class="line"><span>        for(var i = 0, len = strs.length; i &lt; len; i++){</span></span>
<span class="line"><span>            var tmp = strs[i].split(&#39;=&#39;);</span></span>
<span class="line"><span>            if(tmp[0] == sKey){</span></span>
<span class="line"><span>                arrs.push(tmp[1]);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (arrs.length == 1){//返回该参数的值或者空字符串</span></span>
<span class="line"><span>            return arrs[0];</span></span>
<span class="line"><span>        } else if (arrs.length == 0){</span></span>
<span class="line"><span>            return &quot;&quot;;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            return arrs;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    } else {//不指定参数名称，返回全部的参数对象 或者 {}</span></span>
<span class="line"><span>        if(param == undefined || param == &quot;&quot;){</span></span>
<span class="line"><span>            return {};</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            var strs = param.split(&#39;&amp;&#39;);</span></span>
<span class="line"><span>            var arrObj = new Object();</span></span>
<span class="line"><span>            for(var i = 0, len = strs.length; i &lt; len; i++){</span></span>
<span class="line"><span>                var tmp = strs[i].split(&#39;=&#39;);</span></span>
<span class="line"><span>                if (!(tmp[0] in arrObj)) {</span></span>
<span class="line"><span>                    arrObj[tmp[0]] = [];</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                arrObj[tmp[0]].push(tmp[1]);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return arrObj;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="查找两个节点的最近的一个共同父节点-可以包括节点自身" tabindex="-1">查找两个节点的最近的一个共同父节点，可以包括节点自身 <a class="header-anchor" href="#查找两个节点的最近的一个共同父节点-可以包括节点自身" aria-label="Permalink to &quot;查找两个节点的最近的一个共同父节点，可以包括节点自身&quot;">​</a></h2><p>oNode1 和 oNode2 在同一文档中，且不会为相同的节点</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function commonParentNode(oNode1, oNode2) {</span></span>
<span class="line"><span>    for(;oNode1;oNode1=oNode1.parentNode){</span></span>
<span class="line"><span>        if(oNode1.contains(oNode2)){</span></span>
<span class="line"><span>            return oNode1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="根据包名-在指定空间中创建对象" tabindex="-1">根据包名，在指定空间中创建对象 <a class="header-anchor" href="#根据包名-在指定空间中创建对象" aria-label="Permalink to &quot;根据包名，在指定空间中创建对象&quot;">​</a></h2><p>input namespace({a: {test: 1, b: 2}}, &#39;a.b.c.d&#39;)</p><p>output {a: {test: 1, b: {c: {d: {}}}}}</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function namespace(oNamespace, sPackage) {</span></span>
<span class="line"><span>    var arr = sPackage.split(&#39;.&#39;);</span></span>
<span class="line"><span>    var res = oNamespace;   // 保留对原始对象的引用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for(var i = 0, len = arr.length; i &lt; len; i++) {</span></span>
<span class="line"><span>        if(arr[i] in oNamespace) {  // 空间名在对象中</span></span>
<span class="line"><span>            if(typeof oNamespace[arr[i]] !== &quot;object&quot;) {    // 为原始值</span></span>
<span class="line"><span>                oNamespace[arr[i]] = {};    // 将此属性设为空对象</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } else {    // 空间名不在对象中，建立此空间名属性，赋值为空</span></span>
<span class="line"><span>            oNamespace[arr[i]] = {};</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        oNamespace = oNamespace[arr[i]];    // 将指针指向下一个空间名属性。</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return res;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="为-array-对象添加一个去除重复项的方法" tabindex="-1">为 Array 对象添加一个去除重复项的方法 <a class="header-anchor" href="#为-array-对象添加一个去除重复项的方法" aria-label="Permalink to &quot;为 Array 对象添加一个去除重复项的方法&quot;">​</a></h2><p>input: [false, true, undefined, null, NaN, 0, 1, {}, {}, &#39;a&#39;, &#39;a&#39;, NaN]</p><p>output: [false, true, undefined, null, NaN, 0, 1, {}, {}, &#39;a&#39;]</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Array.prototype.uniq = function () {</span></span>
<span class="line"><span>    return [...new Set(this)];</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Array.prototype.uniq = function () {</span></span>
<span class="line"><span>   var resArr = [];</span></span>
<span class="line"><span>   var flag = true;</span></span>
<span class="line"><span>   for(var i=0;i&lt;this.length;i++){</span></span>
<span class="line"><span>       if(resArr.indexOf(this[i]) == -1){</span></span>
<span class="line"><span>           if(this[i] != this[i]){   //排除 NaN</span></span>
<span class="line"><span>              if(flag){</span></span>
<span class="line"><span>                   resArr.push(this[i]);</span></span>
<span class="line"><span>                   flag = false;</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>           }else{</span></span>
<span class="line"><span>                resArr.push(this[i]);</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>    return resArr;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="用-javascript-实现斐波那契数列函数-返回第n个斐波那契数。-f-1-1-f-2-1-等" tabindex="-1">用 JavaScript 实现斐波那契数列函数,返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等 <a class="header-anchor" href="#用-javascript-实现斐波那契数列函数-返回第n个斐波那契数。-f-1-1-f-2-1-等" aria-label="Permalink to &quot;用 JavaScript 实现斐波那契数列函数,返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function fibonacci(n) {</span></span>
<span class="line"><span>        //一、递归解法 较优</span></span>
<span class="line"><span>        //return n&lt;=2?1:fibonacci(n-1)+fibonacci(n-2);</span></span>
<span class="line"><span>        //二、循环解法</span></span>
<span class="line"><span>        var num1=1;</span></span>
<span class="line"><span>        var num2=1;</span></span>
<span class="line"><span>        for(var i=2;i&lt;n;i++){</span></span>
<span class="line"><span>                num2+=num1;</span></span>
<span class="line"><span>                num1=num2-num1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return num2;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="按所给的时间格式输出指定的时间" tabindex="-1">按所给的时间格式输出指定的时间 <a class="header-anchor" href="#按所给的时间格式输出指定的时间" aria-label="Permalink to &quot;按所给的时间格式输出指定的时间&quot;">​</a></h2><p>格式说明</p><p>对于 2014.09.05 13:14:20</p><p>yyyy: 年份，2014</p><p>yy: 年份，14</p><p>MM: 月份，补满两位，09</p><p>M: 月份, 9</p><p>dd: 日期，补满两位，05</p><p>d: 日期, 5</p><p>HH: 24制小时，补满两位，13</p><p>H: 24制小时，13</p><p>hh: 12制小时，补满两位，01</p><p>h: 12制小时，1</p><p>mm: 分钟，补满两位，14</p><p>m: 分钟，14</p><p>ss: 秒，补满两位，20</p><p>s: 秒，20</p><p>w: 星期，为 [&#39;日&#39;, &#39;一&#39;, &#39;二&#39;, &#39;三&#39;, &#39;四&#39;, &#39;五&#39;, &#39;六&#39;] 中的某一个，本 demo 结果为 五</p><p>input: formatDate(new Date(1409894060000), &#39;yyyy-MM-dd HH:mm:ss 星期w&#39;)</p><p>output: 2014-09-05 13:14:20 星期五</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function formatDate(oDate, sFormation) {</span></span>
<span class="line"><span>    var add0 = function(num){</span></span>
<span class="line"><span>        if(num&lt;10)</span></span>
<span class="line"><span>            return 0+&quot;&quot;+num;</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>            return num;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    var o = {</span></span>
<span class="line"><span>        &quot;yyyy&quot;:oDate.getFullYear(),</span></span>
<span class="line"><span>        &quot;yy&quot;:oDate.getFullYear()%100,</span></span>
<span class="line"><span>        &quot;MM&quot;:add0(oDate.getMonth()+1),</span></span>
<span class="line"><span>        &quot;M&quot;:oDate.getMonth()+1,</span></span>
<span class="line"><span>        &quot;dd&quot;:add0(oDate.getDate()),</span></span>
<span class="line"><span>        &quot;d&quot;:oDate.getDate(),</span></span>
<span class="line"><span>        &quot;HH&quot;:add0(oDate.getHours()),</span></span>
<span class="line"><span>        &quot;H&quot;:oDate.getHours(),</span></span>
<span class="line"><span>        &quot;hh&quot;:add0(oDate.getHours()%12),</span></span>
<span class="line"><span>        &quot;h&quot;:oDate.getHours()%12,</span></span>
<span class="line"><span>        &quot;mm&quot;:add0(oDate.getMinutes()),</span></span>
<span class="line"><span>        &quot;m&quot;:oDate.getMinutes(),</span></span>
<span class="line"><span>        &quot;ss&quot;:add0(oDate.getSeconds()),</span></span>
<span class="line"><span>        &quot;s&quot;:oDate.getSeconds(),</span></span>
<span class="line"><span>        &quot;w&quot;:function(){</span></span>
<span class="line"><span>            var day = [&quot;日&quot;,&quot;一&quot;,&quot;二&quot;,&quot;三&quot;,&quot;四&quot;,&quot;五&quot;,&quot;六&quot;];</span></span>
<span class="line"><span>            return day[oDate.getDay()];</span></span>
<span class="line"><span>        }(),</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    for(var k in o){</span></span>
<span class="line"><span>        sFormation = sFormation.replace(k,o[k]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return sFormation;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="如果第二个参数-bunicode255for1-true-则所有字符长度为-1-否则如果字符-unicode-编码-255-则长度为-2" tabindex="-1">如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1 .否则如果字符 Unicode 编码 &gt; 255 则长度为 2 <a class="header-anchor" href="#如果第二个参数-bunicode255for1-true-则所有字符长度为-1-否则如果字符-unicode-编码-255-则长度为-2" aria-label="Permalink to &quot;如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1 .否则如果字符 Unicode 编码 &gt; 255 则长度为 2&quot;">​</a></h2><p>input: &#39;hello world, 牛客&#39;, false</p><p>output:17</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function strLength(s, bUnicode255For1) {</span></span>
<span class="line"><span>    if( bUnicode255For1 ){</span></span>
<span class="line"><span>        return s.length;</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        var len = s.length;</span></span>
<span class="line"><span>        for( var i=0; i&lt;s.length; i++ ){</span></span>
<span class="line"><span>            if( s.charCodeAt(i) &gt; 255 ){</span></span>
<span class="line"><span>                len++;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return len;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="css-中经常有类似-background-image-这种通过-连接的字符-通过-javascript-设置样式的时候需要将这种样式转换成-backgroundimage-驼峰格式-请完成此转换功能" tabindex="-1">css 中经常有类似 background-image 这种通过 - 连接的字符，通过 javascript 设置样式的时候需要将这种样式转换成 backgroundImage 驼峰格式，请完成此转换功能 <a class="header-anchor" href="#css-中经常有类似-background-image-这种通过-连接的字符-通过-javascript-设置样式的时候需要将这种样式转换成-backgroundimage-驼峰格式-请完成此转换功能" aria-label="Permalink to &quot;css 中经常有类似 background-image 这种通过 - 连接的字符，通过 javascript 设置样式的时候需要将这种样式转换成 backgroundImage 驼峰格式，请完成此转换功能&quot;">​</a></h2><ol><li>以 - 为分隔符，将第二个起的非空单词首字母转为大写</li><li>-webkit-border-image 转换后的结果为 webkitBorderImage 示例1</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function cssStyle2DomStyle(sName) {</span></span>
<span class="line"><span>    var arr = sName.split(&#39;&#39;); </span></span>
<span class="line"><span>    //判断第一个是不是 &#39;-&#39;，是的话就删除</span></span>
<span class="line"><span>    if(arr.indexOf(&#39;-&#39;) == 0)</span></span>
<span class="line"><span>        arr.splice(0,1);</span></span>
<span class="line"><span>   //处理剩余的&#39;-&#39;</span></span>
<span class="line"><span>    for(var i=0; i&lt;arr.length; i++){</span></span>
<span class="line"><span>        if(arr[i] == &#39;-&#39;){</span></span>
<span class="line"><span>            arr.splice(i,1);</span></span>
<span class="line"><span>            arr[i] = arr[i].toUpperCase();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return arr.join(&#39;&#39;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="统计字符串中每个字符的出现频率-返回一个-object-key-为统计字符-value-为出现频率" tabindex="-1">统计字符串中每个字符的出现频率，返回一个 Object，key 为统计字符，value 为出现频率 <a class="header-anchor" href="#统计字符串中每个字符的出现频率-返回一个-object-key-为统计字符-value-为出现频率" aria-label="Permalink to &quot;统计字符串中每个字符的出现频率，返回一个 Object，key 为统计字符，value 为出现频率&quot;">​</a></h2><ol><li>不限制 key 的顺序</li><li>输入的字符串参数不会为空</li><li>忽略空白字符</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>function count(str) {</span></span>
<span class="line"><span>    for(var i=0, m=str.length, res={}; i&lt;m; i++){</span></span>
<span class="line"><span>        if(str.charAt(i) in res) res[str.charAt(i)]++;</span></span>
<span class="line"><span>        else res[str.charAt(i)] = 1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return res;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>参考文章：<a href="https://www.nowcoder.com/" target="_blank" rel="noreferrer">牛客网</a></p>`,55)]))}const g=a(l,[["render",i]]);export{h as __pageData,g as default};
