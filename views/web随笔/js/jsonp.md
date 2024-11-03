---
title: jsonp的原理
date: 2020-06-22
tags:
 - jsonp
categories:
 - js
 - ajax
---

## 1.jsonp 跨域原理
浏览器的同源策略把跨域请求都禁止了，但是页面中的 script、img、iframe标签是例外，不受同源策略限制。

Jsonp 就是利用 script 标签跨域特性进行跨域数据访问。

JSONP 的理念就是，与服务端约定好一个回调函数名，服务端接收到请求后，将返回一段 Javascript，在这段 Javascript 代码中调用了约定好的回调函数，并且将数据作为参数进行传递。当网页接收到这段 Javascript 代码后，就会执行这个回调函数，这时数据已经成功传输到客户端了。

JSONP 的缺点是：它只支持 GET 请求，而不支持 POST 请求等其他类型的 HTTP 请求。

### JSONP的粗糙实现
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <div>jsonp</div>
</body>
<script>
    function getremotedata(data) {
        console.log(data);
    }
    var div = document.getElementsByTagName('div');

    div[0].onclick = function(){
        var url = "./getdata.js";
        var script = document.createElement('script');
        script.setAttribute('src', url);
        document.getElementsByTagName('head')[0].appendChild(script);
    };
</script>
</html>
```
远程的getdata.js
```
getremotedata({
    code:0,
    result:'success'
});
```

## 2.jsonp为什么不是ajax
ajax和jsonp其实本质上是不同的东西。ajax的核心是通过XmlHttpRequest获取非本页内容，而jsonp的核心则是动态添加script标签来调用服务器提供的js脚本。

:::tip
- ajax和jsonp这两种技术在调用方式上"看起来"很像，目的也一样，都是请求一个url，然后把服务器返回的数据进行处理，因此jquery和ext等框架都把jsonp作为ajax的一种形式进行了封装
- ajax与jsonp的区别不在于是否跨域，ajax通过服务端代理一样可以实现跨域，jsonp本身也不排斥同域的数据的获取
- jsonp是一种方式或者说非强制协议，如同ajax一样，它也不一定非要json格式来传递数据，如果你愿意，字符换也行，只不过这样不利于jsonp提供公开服务。
:::