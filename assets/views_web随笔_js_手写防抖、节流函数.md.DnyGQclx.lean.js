import{_ as s,c as a,a2 as p,o as e}from"./chunks/framework.CjNeJe2C.js";const h=JSON.parse('{"title":"手写防抖、节流函数","description":"","frontmatter":{"title":"手写防抖、节流函数","date":"2020-04-13T00:00:00.000Z","tags":["js","手写"],"categories":["js"],"author":["游城走不动"]},"headers":[],"relativePath":"views/web随笔/js/手写防抖、节流函数.md","filePath":"views/web随笔/js/手写防抖、节流函数.md"}'),l={name:"views/web随笔/js/手写防抖、节流函数.md"};function t(i,n,c,o,r,u){return e(),a("div",null,n[0]||(n[0]=[p(`<h2 id="_1-debounce-防抖" tabindex="-1">1. debounce（防抖） <a class="header-anchor" href="#_1-debounce-防抖" aria-label="Permalink to &quot;1. debounce（防抖）&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>函数防抖（debounce）：当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时</p></div><h3 id="_1-简易版" tabindex="-1">1. 简易版 <a class="header-anchor" href="#_1-简易版" aria-label="Permalink to &quot;1. 简易版&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function debounce(func, wait) {</span></span>
<span class="line"><span>    let timeout = null</span></span>
<span class="line"><span>    return function() {</span></span>
<span class="line"><span>        let context = this</span></span>
<span class="line"><span>        let args = arguments</span></span>
<span class="line"><span>        if (timeout) clearTimeout(timeout)</span></span>
<span class="line"><span>        timeout = setTimeout(() =&gt; {</span></span>
<span class="line"><span>            func.apply(context, args)</span></span>
<span class="line"><span>        }, wait)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-高级版" tabindex="-1">2. 高级版 <a class="header-anchor" href="#_2-高级版" aria-label="Permalink to &quot;2. 高级版&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function debounce(func, wait, immediate) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var timeout, result;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var debounced = function () {</span></span>
<span class="line"><span>		var context = this;</span></span>
<span class="line"><span>		var args = arguments;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		if (timeout) clearTimeout(timeout);</span></span>
<span class="line"><span>		if (immediate) {</span></span>
<span class="line"><span>			// 如果已经执行过，不再执行</span></span>
<span class="line"><span>			var callNow = !timeout;</span></span>
<span class="line"><span>			timeout = setTimeout(function(){</span></span>
<span class="line"><span>				timeout = null;</span></span>
<span class="line"><span>			}, wait)</span></span>
<span class="line"><span>			if (callNow) result = func.apply(context, args)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		else {</span></span>
<span class="line"><span>			timeout = setTimeout(function(){</span></span>
<span class="line"><span>				func.apply(context, args)</span></span>
<span class="line"><span>			}, wait);</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>		return result;</span></span>
<span class="line"><span>	};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	debounced.cancel = function() {</span></span>
<span class="line"><span>		clearTimeout(timeout);</span></span>
<span class="line"><span>		timeout = null;</span></span>
<span class="line"><span>	};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return debounced;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_1-throttle-节流" tabindex="-1">1. throttle（节流） <a class="header-anchor" href="#_1-throttle-节流" aria-label="Permalink to &quot;1. throttle（节流）&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>函数节流（throttle）：当持续触发事件时，保证一定时间段内只调用一次事件处理函数。</p></div><h3 id="_1-简易版-1" tabindex="-1">1. 简易版 <a class="header-anchor" href="#_1-简易版-1" aria-label="Permalink to &quot;1. 简易版&quot;">​</a></h3><h4 id="时间戳版" tabindex="-1">时间戳版 <a class="header-anchor" href="#时间戳版" aria-label="Permalink to &quot;时间戳版&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function throttle(func, wait) {</span></span>
<span class="line"><span>    let context, args;</span></span>
<span class="line"><span>    let previous = 0;</span></span>
<span class="line"><span>    return function() {</span></span>
<span class="line"><span>        let now = +new Date();</span></span>
<span class="line"><span>        context = this;</span></span>
<span class="line"><span>        args = arguments;</span></span>
<span class="line"><span>        if (now - previous &gt; wait) {</span></span>
<span class="line"><span>            func.apply(context, args);</span></span>
<span class="line"><span>            previous = now;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="定时器版" tabindex="-1">定时器版 <a class="header-anchor" href="#定时器版" aria-label="Permalink to &quot;定时器版&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function throttle(func, wait) {</span></span>
<span class="line"><span>    let timeout = null</span></span>
<span class="line"><span>    return function() {</span></span>
<span class="line"><span>        let context = this</span></span>
<span class="line"><span>        let args = arguments</span></span>
<span class="line"><span>        if (!timeout) {</span></span>
<span class="line"><span>            timeout = setTimeout(() =&gt; {</span></span>
<span class="line"><span>                timeout = null</span></span>
<span class="line"><span>                func.apply(context, args)</span></span>
<span class="line"><span>            }, wait)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>第一种事件会立刻执行，第二种事件会在 n 秒后第一次执行</li><li>第一种事件停止触发后没有办法再执行事件，第二种事件停止触发后依然会再执行一次事件</li></ul><h3 id="_2-高级版-1" tabindex="-1">2. 高级版 <a class="header-anchor" href="#_2-高级版-1" aria-label="Permalink to &quot;2. 高级版&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> options = {</span></span>
<span class="line"><span>    leading:false,// 表示禁用第一次执行</span></span>
<span class="line"><span>    trailing:false // 表示禁用停止触发的回调</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> //leading：false 和 trailing: false 不能同时设置。</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function throttle(func, wait, options) {</span></span>
<span class="line"><span>    var timeout, context, args;</span></span>
<span class="line"><span>    var previous = 0;</span></span>
<span class="line"><span>    if (!options) options = {};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var later = function() {</span></span>
<span class="line"><span>        previous = options.leading === false ? 0 : new Date().getTime();</span></span>
<span class="line"><span>        timeout = null;</span></span>
<span class="line"><span>        func.apply(context, args);</span></span>
<span class="line"><span>        if (!timeout) context = args = null;</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var throttled = function() {</span></span>
<span class="line"><span>        var now = new Date().getTime();</span></span>
<span class="line"><span>        if (!previous &amp;&amp; options.leading === false) previous = now;</span></span>
<span class="line"><span>        var remaining = wait - (now - previous);</span></span>
<span class="line"><span>        context = this;</span></span>
<span class="line"><span>        args = arguments;</span></span>
<span class="line"><span>        if (remaining &lt;= 0 || remaining &gt; wait) {</span></span>
<span class="line"><span>            if (timeout) {</span></span>
<span class="line"><span>                clearTimeout(timeout);</span></span>
<span class="line"><span>                timeout = null;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            previous = now;</span></span>
<span class="line"><span>            func.apply(context, args);</span></span>
<span class="line"><span>            if (!timeout) context = args = null;</span></span>
<span class="line"><span>        } else if (!timeout &amp;&amp; options.trailing !== false) {</span></span>
<span class="line"><span>            timeout = setTimeout(later, remaining);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    throttled.cancel = function() {</span></span>
<span class="line"><span>        clearTimeout(timeout);</span></span>
<span class="line"><span>        previous = 0;</span></span>
<span class="line"><span>        timeout = null;</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return throttled;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>参考资料：</p><ul><li><a href="https://github.com/mqyqingfeng/Blog/issues/26" target="_blank" rel="noreferrer">JavaScript专题之跟着 underscore 学节流</a></li><li><a href="https://mp.weixin.qq.com/s/Vkshf-nEDwo2ODUJhxgzVA" target="_blank" rel="noreferrer">JS的防抖与节流</a></li></ul>`,18)]))}const m=s(l,[["render",t]]);export{h as __pageData,m as default};
