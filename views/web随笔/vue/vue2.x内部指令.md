---
title: vue2.x内部指令 
date: 2020-06-11
tags:
 - vue
categories:
 - vue
author:
 - 游城走不动
---

## 1.编写helloworld
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>Helloworld</title>
</head>
<body>
    <h1>Hello World</h1>
    <hr>
    <div id="app">
        {{message}}
    </div>

    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                message:'hello world!'
            }
        })
    </script>
</body>
</html>
```

## 2.件渲染
- v-if
- v-else
- v-else-if
- v-show
```
<h1 v-if="awesome">Vue is awesome!</h1>
<div v-else-if="awesome === 'B'">
  B
</div>
<h1 v-else>Oh no 😢</h1>
<h1 v-show="ok">Hello!</h1>

```
- v-if： 判断是否加载，可以减轻服务器的压力，在需要时加载。
- v-show：调整css dispaly属性，可以使客户端操作更加流畅。
:::tip
不推荐同时使用 v-if 和 v-for。请查阅风格指南以获取更多信息。
:::

## 3.列表渲染 
### v-for指令：解决模板循环问题
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>V-for 案例</title>
</head>
<body>
    <h1>v-for指令用法</h1>
    <hr>
    <div id="app">
        <ul id="example-1">
            <li v-for="item in items" :key="item.message">
                {{ item.message }}
            </li>
        </ul>
    </div>

    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                items: [
                    { message: 'Foo' },
                    { message: 'Bar' }
                ]
            }
        })
    </script>
</body>
</html>
```

## 4.v-text && v-html
双大括号会将数据解释为纯文本，而非HTML。为了输出真正的HTML，你就需要使用v-html 指令。 需要注意的是：在生产环境中动态渲染HTML是非常危险的，因为容易导致XSS攻击。所以只能在可信的内容上使用v-html，永远不要在用户提交和可操作的网页上使用
```
<span>{{ message }}</span>
等价于
<span v-text="message"></span>
```
```
<span v-html="msgHtml"></span>
```

## 5.v-on 指令监听 DOM 事件
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>v-on事件监听器</title>
</head>
<body>
    <h1>v-on 事件监听器</h1>
    <hr>
    <div id="example-1">
        <button v-on:click="counter += 1">Add 1</button>
        <p>The button above has been clicked {{ counter }} times.</p>
    </div>

    <script type="text/javascript">
        var app=new Vue({
            el: '#example-1',
            data: {
                counter: 0
            }
        })
    </script>
</body>
</html>
```
v-on 还有一种简单的写法，就是用@代替。
```
<button @click="counter += 1">Add 1</button>
```

## 6.v-model指令

你可以用 v-model 指令在表单 input、textarea 及 select 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。
```
<div id="app">
    <p>原始文本信息：{{message}}</p>
    <h3>文本框</h3>
    <p>v-model:<input type="text" v-model="message"></p>
</div>
```
```
var app=new Vue({
  el:'#app',
  data:{
       message:'hello Vue!'
  }
 })
```
修饰符
- .lazy：取代 input 监听 change 事件。
- .number：输入字符串转为数字。
- .trim：输入去掉首尾空格。

## 7.v-bind指令
v-bind是处理HTML中的标签属性的
```
<div id="app">
    <img v-bind:src="imgSrc"  width="200px">
</div>
```
v-bind 缩写
```
<!-- 完整语法 -->
<a v-bind:href="url"></a>
<!-- 缩写 -->
<a :href="url"></a>
```
## 8.其他内部指令(v-pre & v-cloak & v-once)
### v-pre
在模板中跳过vue的编译，直接输出原始值。就是在标签中加入v-pre就不会输出vue中的data值
```
<div v-pre>{{message}}</div>
```
### v-cloak
在vue渲染完指定的整个DOM后才进行显示。它必须和CSS样式一起使用
```
[v-cloak] {
  display: none;
}
```
```
<div v-cloak>
  {{ message }}
</div>
```
### v-once
在第一次DOM时进行渲染，渲染完成后视为静态内容，跳出以后的渲染过程
```
<div v-once>第一次绑定的值：{{message}}</div>
<div><input type="text" v-model="message"></div>
```

学习资料:[Vue2.x学习路线-按次路线学习顺畅无比](https://jspang.com/detailed?id=57)
