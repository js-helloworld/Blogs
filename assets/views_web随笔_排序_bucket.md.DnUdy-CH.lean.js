import{_ as s,c as a,a2 as p,o as e}from"./chunks/framework.CjNeJe2C.js";const f=JSON.parse('{"title":"桶排序","description":"","frontmatter":{"title":"桶排序","date":"2019-11-13T00:00:00.000Z","tags":["sort"],"categories":["算法"]},"headers":[],"relativePath":"views/web随笔/排序/bucket.md","filePath":"views/web随笔/排序/bucket.md"}'),l={name:"views/web随笔/排序/bucket.md"};function t(i,n,r,c,o,u){return e(),a("div",null,n[0]||(n[0]=[p(`<h2 id="bucket-sort" tabindex="-1">Bucket Sort <a class="header-anchor" href="#bucket-sort" aria-label="Permalink to &quot;Bucket Sort&quot;">​</a></h2><p>桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。桶排序 (Bucket sort)的工作的原理：假设输入数据服从均匀分布，将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排序</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 桶排序</span></span>
<span class="line"><span>const bucketSort = (array, bucketSize) =&gt; {</span></span>
<span class="line"><span>  if (array.length === 0) {</span></span>
<span class="line"><span>    return array;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  console.time(&#39;桶排序耗时&#39;);</span></span>
<span class="line"><span>  let i = 0;</span></span>
<span class="line"><span>  let minValue = array[0];</span></span>
<span class="line"><span>  let maxValue = array[0];</span></span>
<span class="line"><span>  for (i = 1; i &lt; array.length; i++) {</span></span>
<span class="line"><span>    if (array[i] &lt; minValue) {</span></span>
<span class="line"><span>      minValue = array[i]; //输入数据的最小值</span></span>
<span class="line"><span>    } else if (array[i] &gt; maxValue) {</span></span>
<span class="line"><span>      maxValue = array[i]; //输入数据的最大值</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //桶的初始化</span></span>
<span class="line"><span>  const DEFAULT_BUCKET_SIZE = 5; //设置桶的默认数量为 5</span></span>
<span class="line"><span>  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;</span></span>
<span class="line"><span>  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;</span></span>
<span class="line"><span>  const buckets = new Array(bucketCount);</span></span>
<span class="line"><span>  for (i = 0; i &lt; buckets.length; i++) {</span></span>
<span class="line"><span>    buckets[i] = [];</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //利用映射函数将数据分配到各个桶中</span></span>
<span class="line"><span>  for (i = 0; i &lt; array.length; i++) {</span></span>
<span class="line"><span>    buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  array.length = 0;</span></span>
<span class="line"><span>  for (i = 0; i &lt; buckets.length; i++) {</span></span>
<span class="line"><span>    quickSort(buckets[i]); //对每个桶进行排序，这里使用了快速排序</span></span>
<span class="line"><span>    for (var j = 0; j &lt; buckets[i].length; j++) {</span></span>
<span class="line"><span>      array.push(buckets[i][j]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  console.timeEnd(&#39;桶排序耗时&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return array;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 快速排序</span></span>
<span class="line"><span>const quickSort = (arr, left, right) =&gt; {</span></span>
<span class="line"><span>	let len = arr.length,</span></span>
<span class="line"><span>		partitionIndex;</span></span>
<span class="line"><span>	left = typeof left != &#39;number&#39; ? 0 : left;</span></span>
<span class="line"><span>	right = typeof right != &#39;number&#39; ? len - 1 : right;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if (left &lt; right) {</span></span>
<span class="line"><span>		partitionIndex = partition(arr, left, right);</span></span>
<span class="line"><span>		quickSort(arr, left, partitionIndex - 1);</span></span>
<span class="line"><span>		quickSort(arr, partitionIndex + 1, right);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return arr;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const partition = (arr, left, right) =&gt; {</span></span>
<span class="line"><span>	//分区操作</span></span>
<span class="line"><span>	let pivot = left, //设定基准值（pivot）</span></span>
<span class="line"><span>		index = pivot + 1;</span></span>
<span class="line"><span>	for (let i = index; i &lt;= right; i++) {</span></span>
<span class="line"><span>		if (arr[i] &lt; arr[pivot]) {</span></span>
<span class="line"><span>			swap(arr, i, index);</span></span>
<span class="line"><span>			index++;</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	swap(arr, pivot, index - 1);</span></span>
<span class="line"><span>	return index - 1;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const swap = (arr, i, j) =&gt; {</span></span>
<span class="line"><span>	let temp = arr[i];</span></span>
<span class="line"><span>	arr[i] = arr[j];</span></span>
<span class="line"><span>	arr[j] = temp;</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>参考文章:<a href="https://www.jianshu.com/p/96f5c19e13df" target="_blank" rel="noreferrer">十大经典排序算法的JS版</a></p>`,4)]))}const d=s(l,[["render",t]]);export{f as __pageData,d as default};
