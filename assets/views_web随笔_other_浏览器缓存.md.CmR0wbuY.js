import{_ as o,c as a,a2 as i,o as s}from"./chunks/framework.CjNeJe2C.js";const h=JSON.parse('{"title":"浏览器缓存","description":"","frontmatter":{"title":"浏览器缓存","date":"2024-11-10T00:00:00.000Z","tags":["浏览器缓存"],"categories":["浏览器缓存"]},"headers":[],"relativePath":"views/web随笔/other/浏览器缓存.md","filePath":"views/web随笔/other/浏览器缓存.md"}'),r={name:"views/web随笔/other/浏览器缓存.md"};function t(d,e,g,c,l,n){return s(),a("div",null,e[0]||(e[0]=[i('<h1 id="浏览器缓存" tabindex="-1">浏览器缓存 <a class="header-anchor" href="#浏览器缓存" aria-label="Permalink to &quot;浏览器缓存&quot;">​</a></h1><h2 id="_1-web缓存体系" tabindex="-1">1. WEB缓存体系 <a class="header-anchor" href="#_1-web缓存体系" aria-label="Permalink to &quot;1. WEB缓存体系&quot;">​</a></h2><p>在实际WEB开发过程中，缓存技术会涉及到不同层、不同端，比如：用户层、系统层、代理层、前端、后端、服务端等，<code>每一层的缓存目标都是一致的，就是尽快返回请求数据、减少延迟</code>，但每层使用的技术实现是各有不同，面对不同层、不同端的优劣，选用不同的技术来提升系统响应效率。所以，我们首先看下各层的缓存都有哪些技术，都缓存哪些数据，从整体上，对WEB的缓存技术进行了解，如下图所示：</p><image src="../images/浏览器缓存/1.png"></image><h2 id="_2-认识浏览器缓存" tabindex="-1">2. 认识浏览器缓存 <a class="header-anchor" href="#_2-认识浏览器缓存" aria-label="Permalink to &quot;2. 认识浏览器缓存&quot;">​</a></h2><p>当浏览器请求一个网站的时候，会加载各种各样的资源，比如：HTML文档、图片、CSS和JS等文件。对于一些不经常变的内容，浏览器会将他们保存在<code>本地</code>的文件中，下次访问相同网站的时候，<code>直接加载这些资源，加速访问</code>。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这些被浏览器保存的文件就被称为缓存（不是指Cookie或者Localstorage）。</p></div><image src="../images/浏览器缓存/1.png"></image><p>那么如何知晓浏览器是读取了缓存还是直接请求服务器？如下图网站来做个示例：</p><image src="../images/浏览器缓存/2.png"></image><p>第一次打开该网站后，如果再次刷新页面。会发现浏览器加载的众多资源中，有一部分size有具体数值，然而还有一部分请求，比如图片、css和js等文件并没有显示文件大小，而是显示了 <code>from dis cache</code> 或者 <code>from memory cache</code> 字样。这就说明了，该资源直接从本地硬盘或者浏览器内存读取，而并没有请求服务器。</p><h4 id="浏览器缓存优先级" tabindex="-1">浏览器缓存优先级： <a class="header-anchor" href="#浏览器缓存优先级" aria-label="Permalink to &quot;浏览器缓存优先级：&quot;">​</a></h4><ol><li><code>Service Worker</code></li><li><code>Memory Cache</code> (内存缓存)</li><li><code>Disk Cache</code> (硬盘缓存)</li><li><code>Push Cache</code> (推送缓存)</li><li><code>Network</code> (网络请求)</li></ol><h2 id="_3-浏览器缓存机制" tabindex="-1">3. 浏览器缓存机制 <a class="header-anchor" href="#_3-浏览器缓存机制" aria-label="Permalink to &quot;3. 浏览器缓存机制&quot;">​</a></h2><p>浏览器启用缓存至少有两点显而易见的好处：<strong>（1）减少页面加载时间；（2）减少服务器负载；</strong></p><p><strong>浏览器是否使用缓存、缓存多久，是由服务器控制的</strong>。准确来说，当浏览器请求一个网页（或者其他资源）时，服务器发回的响应的 <strong>「响应头」</strong> 部分的 <strong>某些字段</strong> 指明了有关缓存的关键信息。下面看下，HTTP报文中与缓存相关的<strong>首部字段</strong>：</p><ol><li><strong>通用首部字段</strong>（就是请求报文和响应报文都能用上的字段）</li></ol><image src="../images/浏览器缓存/3.png"></image><ol start="2"><li><strong>请求首部字段</strong>（客户端发送请求时，向服务器端发送请求的附加信息，它能补充请求的上下文信息）</li></ol><image src="../images/浏览器缓存/4.png"></image><ol start="3"><li><strong>响应首部字段</strong>（服务器向客户端返回响应报文时，会告知客户端关于响应的附加信息，它能补充响应的上下文信息）</li></ol><image src="../images/浏览器缓存/5.png"></image><ol start="4"><li><strong>实体首部字段</strong>（它用于补充实体主体的附加信息，比如，实体内容的长度和类型）</li></ol><image src="../images/浏览器缓存/6.png"></image><p>根据上面四种类型的首部字段不同使用策略，浏览器中缓存可分为<code>强缓存</code>和<code>协商缓存</code>：</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ol><li>浏览器在加载资源时，先根据这个资源的一些http header判断它<code>是否命中强缓存</code>，强缓存如果命中，浏览器直接从自己的缓存中读取资源，不会发请求到服务器。比如：某个css文件，如果浏览器在加载它所在的网页时，这个css文件的缓存配置命中了强缓存，浏览器就直接从缓存中加载这个css，连请求都不会发送到网页所在服务器；</li><li><code>当强缓存没有命中的时候</code>，浏览器一定会<code>发送一个请求到服务器</code>，通过服务器端依据资源的另外一些http header验证这个资源是否命中<code>协商缓存</code>，如果协商缓存命中，服务器会将这个请求返回，但是不会返回这个资源的数据，而是告诉客户端可以直接从缓存中加载这个资源，于是浏览器就又会从自己的缓存中去加载这个资源；</li><li>强缓存与协商缓存的共同点是：如果命中，都是从客户端缓存中加载资源，而不是从服务器加载资源数据；区别是：<code>强缓存不发请求到服务器，协商缓存会发请求到服务器</code>。</li><li>当协商缓存也没有命中的时候，浏览器直接从服务器加载资源数据。</li></ol></div><h3 id="_3-1-强缓存-expires-cache-control" tabindex="-1">3.1 强缓存：Expires&amp;Cache-Control <a class="header-anchor" href="#_3-1-强缓存-expires-cache-control" aria-label="Permalink to &quot;3.1 强缓存：Expires&amp;Cache-Control&quot;">​</a></h3><p>当浏览器对某个资源的请求<code>命中了强缓存</code>时，返回的HTTP状态为<code>200</code>，在chrome的开发者工具的network里面 <code>size会显示为from cache</code>，比如：京东的首页里就有很多静态资源配置了强缓存，用chrome打开几次，再用f12查看network，可以看到有不少请求就是从缓存中加载的：</p><image src="../images/浏览器缓存/7.png"></image><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>强缓存是利用Expires或者Cache-Control这两个http response header实现的，它们都用来表示资源在客户端缓存的有效期。</p></div><p><strong>Expires是HTTP 1.0提出的一个表示资源过期时间的header，它描述的是一个绝对时间，由服务器返回，用GMT格式的字符串表示</strong>，如：Expires:Thu, 31 Dec 2037 23:55:55 GMT，包含了Expires头标签的文件，就说明浏览器对于该文件缓存具有非常大的控制权。</p><p>例如，一个文件的Expires值是2020年的1月1日，那么就代表，在2020年1月1日之前，浏览器都可以直接使用该文件的本地缓存文件，而不必去服务器再次请求该文件，哪怕服务器文件发生了变化。</p><p>所以，<strong>Expires是优化中最理想的情况，因为它根本不会产生请求</strong>，所以后端也就无需考虑查询快慢。它的缓存原理，如下：</p><ol><li>浏览器第一次跟服务器请求一个资源，服务器在返回这个资源的同时，在response的header加上Expires的header，如：</li></ol><image src="../images/浏览器缓存/8.png"></image><ol start="2"><li>浏览器在接收到这个资源后，会把这个资源连同所有response header一起缓存下来（所以缓存命中的请求返回的header并不是来自服务器，而是来自之前缓存的header）；</li><li>浏览器再请求这个资源时，<strong>先从缓存中寻找，找到这个资源后，拿出它的Expires跟当前的请求时间比较</strong>，如果请求时间在Expires指定的时间之前，就能命中缓存，否则就不行；</li><li>如果缓存没有命中，浏览器直接从服务器加载资源时，Expires Header在重新加载的时候会被更新；</li></ol><p>Expires是较老的强缓存管理header，<strong>由于它是服务器返回的一个绝对时间</strong>，在服务器时间与客户端时间相差较大时，缓存管理容易出现问题，<strong>比如：随意修改下客户端时间，就能影响缓存命中的结果</strong>。所以在HTTP 1.1的时候，提出了一个新的header，就是<strong>Cache-Control</strong>，这是一个相对时间，在配置缓存的时候，以秒为单位，用数值表示，如：Cache-Control:max-age=315360000，它的缓存原理是：</p><ol><li>浏览器第一次跟服务器请求一个资源，服务器在返回这个资源的同时，在response的header加上Cache-Control的header，如：</li></ol><image src="../images/浏览器缓存/9.png"></image><ol start="2"><li>浏览器在接收到这个资源后，会把这个资源连同所有response header一起缓存下来；</li><li>浏览器再请求这个资源时，<strong>先从缓存中寻找，找到这个资源后，根据它第一次的请求时间和Cache-Control设定的有效期</strong>，计算出一个资源过期时间，再拿这个过期时间跟当前的请求时间比较，如果请求时间在过期时间之前，就能命中缓存，否则就不行</li><li>如果缓存没有命中，浏览器直接从服务器加载资源时，<strong>Cache-Control Header在重新加载的时候会被更新；</strong></li></ol><p>**Cache-Control与Expires可以一起使用，**Cache-Control的优先级更高。当Expires和Cache-Control同时存在时，<strong>Cache-Control会覆盖Expires的值</strong>。</p><p><strong>Cache-Control</strong>描述的是一个相对时间，在进行缓存命中的时候，<strong>都是利用客户端时间</strong>进行判断，所以相比较Expires，Cache-Control的缓存管理更有效，安全一些。</p><image src="../images/浏览器缓存/10.png"></image><p>此外，还可以为 Cache-Control 指定 <code>public</code> 或 <code>private</code> 标记。<strong>如果使用 private，则表示该资源仅仅属于发出请求的最终用户，这将禁止中间服务器（如代理服务器）缓存此类资源</strong>。对于包含用户个人信息的文件（如一个包含用户名的 HTML 文档），可以设置 private，一方面由于这些缓存对其他用户来说没有任何意义，另一方面用户可能不希望相关文件储存在不受信任的服务器上。需要指出的是，private 并不会使得缓存更加安全，它同样会传给中间服务器（如果网站对于传输的安全性要求很高，应该使用传输层安全措施）<strong>。对于 public，则允许所有服务器缓存该资源</strong>。通常情况下，对于所有人都可以访问的资源（例如网站的 logo、图片、脚本等），<strong>Cache-Control 默认设为 public 是合理的</strong></p><h3 id="_3-2-协商缓存-last-modified-etag" tabindex="-1">3.2 协商缓存：Last-Modified&amp;ETag <a class="header-anchor" href="#_3-2-协商缓存-last-modified-etag" aria-label="Permalink to &quot;3.2 协商缓存：Last-Modified&amp;ETag&quot;">​</a></h3><p>当浏览器对某个资源的请求<code>没有命中强缓存</code>，就会发一个请求到服务器，验证这个资源是否命中协商缓存，如果协商缓存命中，服务器将返回一个<code>304</code>响应并且会显示一个Not Modified的字符串，但是不会返回这个资源的数据，而是告诉浏览器可以直接从缓存中加载这个资源；</p><image src="../images/浏览器缓存/11.png"></image><p>查看单个请求的Response Header，也能看到304的状态码和Not Modified的字符串，只要看到这个就可说明这个资源是命中了协商缓存，然后从客户端缓存中加载的，而不是服务器最新的资源：</p><image src="../images/浏览器缓存/12.png"></image><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>协商缓存是利用的是【Last-Modified，If-Modified-Since】和【ETag、If-None-Match】这两对Header来管理的。</p></div><p><strong>Last-Modified与If-Modified-Since</strong>是利用【资源的最后修改时间】来判断的，ETag与If-None-Match是利用【资源标识】来判断的。</p><p><strong>Last-Modified与If-Modified-Since</strong>的工作流程是：</p><ol><li>浏览器第一次跟服务器请求一个资源，服务器在返回这个资源的同时，在response的header加上Last-Modified的header，这个header表示这个资源在服务器上的最后修改时间，如：</li></ol><image src="../images/浏览器缓存/13.png"></image> <ol start="2"><li>浏览器再次跟服务器请求这个资源时，在request的header上加上If-Modified-Since的header，这个header的值就是上一次请求时返回的Last-Modified的值，如：</li></ol><image src="../images/浏览器缓存/14.png"></image> <ol start="3"><li>服务器再次收到资源请求时，<strong>根据浏览器传过来If-Modified-Since和资源在服务器上的最后修改时间判断资源是否有变化</strong>，如果没有变化则返回304 Not Modified，但是不会返回资源内容；如果有变化，就正常返回资源内容。<strong>当服务器返回304 Not Modified的响应时</strong>，response header中不会再添加Last-Modified的header，因为既然资源没有变化，那么Last-Modified也就不会改变，这是服务器返回304时的response header：</li></ol><image src="../images/浏览器缓存/15.png"></image> <ol start="4"><li>浏览器收到304的响应后，就会从缓存中加载资源。</li><li>如果协商缓存没有命中，浏览器直接从服务器加载资源时，<strong>Last-Modified Header在重新加载的时候会被更新</strong>，下次请求时，<strong>If-Modified-Since会启用上次返回的Last-Modified值。</strong></li></ol><p>**【Last-Modified，If-Modified-Since】**都是根据服务器时间返回的header，一般来说，<strong>在没有调整服务器时间和篡改客户端缓存的情况下，这两个header配合起来管理协商缓存是非常可靠的，但是有时候也会服务器上资源其实有变化，但是最后修改时间却没有变化的情况</strong>，而这种问题又很不容易被定位出来，而当这种情况出现的时候，就会影响协商缓存的可靠性。<strong>所以就有了另外一对header来管理协商缓存，这对header就是【ETag、If-None-Match】</strong>。它们的缓存管理的方式是：</p><ol><li>浏览器第一次跟服务器请求一个资源，<strong>服务器在返回这个资源的同时，在response的header加上ETag的header</strong>，这个header是服务器根据当前请求的资源生成的一个唯一标识，<strong>这个唯一标识是一个字符串，只要资源有变化这个串就不同</strong>，跟最后修改时间没有关系，所以能很好的补充Last-Modified的问题：</li></ol><image src="../images/浏览器缓存/16.png"></image> <ol start="2"><li>浏览器再次跟服务器请求这个资源时，<strong>在request的header上加上If-None-Match的header</strong>，这个header的值就是上一次请求时返回的ETag的值：</li></ol><image src="../images/浏览器缓存/17.png"></image><ol start="3"><li>服务器再次收到资源请求时，<strong>根据浏览器传过来If-None-Match和当前请求的资源生成的唯一标识进行比较</strong>，如果一样就说明资源没有变化，返回304 Not Modified，但是不会返回资源内容；如果不一致就说明资源有变化，就正常返回资源内容。<strong>当服务器返回304 Not Modified的响应时</strong>，<strong>由于ETag重新生成过，response header中还会把这个ETag返回</strong>，即使这个ETag跟之前的没有变化：</li></ol><image src="../images/浏览器缓存/18.png"></image><ol start="4"><li>浏览器收到304的响应后，就会从缓存中加载资源。</li></ol><p>协商缓存跟强缓存不一样，强缓存不发请求到服务器，<strong>所以有时候资源更新了浏览器还不知道，但是协商缓存会发请求到服务器</strong>，所以资源是否更新，服务器肯定知道。大部分web服务器都默认开启协商缓存，而且是同时启用【Last-Modified，If-Modified-Since】和【ETag、If-None-Match】，比如apache:</p><image src="../images/浏览器缓存/19.png"></image><p>如果没有协商缓存，每个到服务器的请求，就都得返回资源内容，这样服务器的性能会极差。</p><p>【Last-Modified，If-Modified-Since】和【ETag、If-None-Match】一般都是同时启用，这是为了处理Last-Modified不可靠的情况。有一种场景需要注意：</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>分布式系统里多台机器间文件的Last-Modified必须保持一致，以免负载均衡到不同机器导致比对失败； 分布式系统尽量关闭掉ETag(每台机器生成的ETag都会不一样）；</p></div><p>比如，京东页面的资源请求，返回的repsonse header就只有Last-Modified，没有ETag：</p><image src="../images/浏览器缓存/20.png"></image><p>协商缓存需要配合强缓存使用，上面这个截图中，除了Last-Modified这个header，还有强缓存的相关header，<strong>因为如果不启用强缓存的话，协商缓存根本没有意义</strong>。</p><ol start="4"><li><strong>浏览器缓存流程图</strong> 如果资源已经被浏览器缓存下来，在缓存失效之前，再次请求时，默认会先检查是否命中强缓存，如果强缓存命中则直接读取缓存，如果强缓存没有命中则发请求到服务器检查是否命中协商缓存，如果协商缓存命中，则告诉浏览器还是可以从缓存读取，否则才从服务器返回最新的资源。其浏览器判断缓存的详细流程图，如下：</li></ol><image src="../images/浏览器缓存/21.png"></image>',81)]))}const m=o(r,[["render",t]]);export{h as __pageData,m as default};
