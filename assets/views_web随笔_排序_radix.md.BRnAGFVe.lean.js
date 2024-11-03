import{_ as a,c as n,a2 as p,o as t}from"./chunks/framework.CjNeJe2C.js";const h=JSON.parse('{"title":"基数排序","description":"","frontmatter":{"title":"基数排序","date":"2019-11-15T00:00:00.000Z","tags":["sort"],"categories":["算法"]},"headers":[],"relativePath":"views/web随笔/排序/radix.md","filePath":"views/web随笔/排序/radix.md"}'),e={name:"views/web随笔/排序/radix.md"};function l(i,s,r,c,o,d){return t(),n("div",null,s[0]||(s[0]=[p(`<h2 id="radix-sort" tabindex="-1">Radix Sort <a class="header-anchor" href="#radix-sort" aria-label="Permalink to &quot;Radix Sort&quot;">​</a></h2><p>基数排序也是非比较的排序算法，对每一位进行排序，从最低位开始排序，复杂度为O(kn),为数组长度，k为数组中的数的最大的位数；基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。基数排序基于分别排序，分别收集，所以是稳定的。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span>	* name: 基数排序</span></span>
<span class="line"><span>	* @param  array 待排序数组</span></span>
<span class="line"><span>	* @param  max 最大位数</span></span>
<span class="line"><span>	*/</span></span>
<span class="line"><span>const radixSort = (array, max) =&gt; {</span></span>
<span class="line"><span>	console.time(&#39;计数排序耗时&#39;);</span></span>
<span class="line"><span>	const buckets = [];</span></span>
<span class="line"><span>	let unit = 10,</span></span>
<span class="line"><span>		base = 1;</span></span>
<span class="line"><span>	for (let i = 0; i &lt; max; i++, base *= 10, unit *= 10) {</span></span>
<span class="line"><span>		for (let j = 0; j &lt; array.length; j++) {</span></span>
<span class="line"><span>			let index = ~~((array[j] % unit) / base); //依次过滤出个位，十位等等数字</span></span>
<span class="line"><span>			if (buckets[index] == null) {</span></span>
<span class="line"><span>				buckets[index] = []; //初始化桶</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			buckets[index].push(array[j]); //往不同桶里添加数据</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		let pos = 0,</span></span>
<span class="line"><span>			value;</span></span>
<span class="line"><span>		for (let j = 0, length = buckets.length; j &lt; length; j++) {</span></span>
<span class="line"><span>			if (buckets[j] != null) {</span></span>
<span class="line"><span>				while ((value = buckets[j].shift()) != null) {</span></span>
<span class="line"><span>					array[pos++] = value; //将不同桶里数据挨个捞出来，为下一轮高位排序做准备，由于靠近桶底的元素排名靠前，因此从桶底先捞</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	console.timeEnd(&#39;计数排序耗时&#39;);</span></span>
<span class="line"><span>	return array;</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>参考文章:<a href="https://www.jianshu.com/p/96f5c19e13df" target="_blank" rel="noreferrer">十大经典排序算法的JS版</a></p>`,4)]))}const b=a(e,[["render",l]]);export{h as __pageData,b as default};
