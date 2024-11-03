---
title: vue2.x实例和内置组件
date: 2020-06-16
tags:
 - vue
categories:
 - vue
author:
 - 游城走不动
---

## 1.实例属性
### 一、Vue和Jquery.js一起使用
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <script type="text/javascript" src="../assets/js/jquery-3.1.1.min.js"></script>
    <title>Early Examples Demo</title>
</head>
<body>
    <h1>Early Examples Demo</h1>
    <hr>
    <div id="app">
        {{message}}
    </div>

    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                message:'hello Vue!'
            },
            //在Vue中使用jQuery
            mounted:function(){
                $('#app').html('我是jQuery!');
            }
        })
    </script>
</body>
</html>
```
### 二、实例调用自定义方法
构造器里的add方法：
```
methods:{
    add:function(){
        console.log("调用了Add方法");
    }
}
```
实例调用：
```
app.add();
```

## 2.实例方法
### 一、$mount方法
$mount方法是用来挂载我们的扩展
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>Examples Method Demo</title>
</head>
<body>
    <h1>Examples Method Demo</h1>
    <hr>
    <div id="app">
        {{message}}
    </div>

    <script type="text/javascript">
      var ext = Vue.extend({
          template:`<p>{{message}}</p>`,
          data:function(){
              return {
                  message:'Hello ,I am vue'
              }
          }
      })
      var vm = new ext().$mount("#app")
    </script>
</body>
</html>
```

### 二、$destroy() 卸载方法
```
<p><button onclick="destroy()">卸载</button></p>
```
```
function destroy(){
   vm.$destroy();
}
```
PS:$destroy()后边必须要有括号，没有括号是无用的。

### 三、$forceUpdate() 更新方法
```
vm.$forceUpdate()
```
### 四、$nextTick() 数据修改方法
当Vue构造器里的data值被修改完成后会调用这个方法，也相当于一个钩子函数吧，和构造器里的updated生命周期很像。
```
function tick(){
    vm.message="update message info ";
    vm.$nextTick(function(){
        console.log('message更新完后我被调用了');
    })
}
```
## 3.实例事件
实例事件就是在构造器外部写一个调用构造器内部的方法。这样写的好处是可以通过这种写法在构造器外部调用构造器内部的数据。

### 一、$on 在构造器外部添加事件。
```
app.$on('reduce',function(){
    console.log('执行了reduce()');
    this.num--;
});
```
$on接收两个参数，第一个参数是调用时的事件名称，第二个参数是一个匿名方法。

如果按钮在作用域外部，可以利用$emit来执行。
```
//外部调用内部事件
function reduce(){
    app.$emit('reduce');
}
```

### 二、$once执行一次的事件
```
app.$once('reduceOnce',function(){
    console.log('只执行一次的方法');
    this.num--;

});
```
### 三、$off关闭事件
```
//关闭事件
function off(){
   app.$off('reduce');
}
```

## 4.内置组件 -slot讲解
slot是标签的内容扩展，也就是说你用slot就可以在自定义组件时传递给组件内容，组件接收内容并输出。

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>Slot content extend Demo</title>
</head>
<body>
    <h1>Slot content extend Demo</h1>
    <hr>
    <div id="app">
    <jspang>
        <span slot="bolgUrl">{{jspangData.bolgUrl}}</span>
        <span slot="netName">{{jspangData.netName}}</span>
        <span slot="skill">{{jspangData.skill}}</span>
    </jspang>
    </div>


<template id="tmp">
    <div>
        <p>博客地址：<slot name="bolgUrl"></slot></p>
        <p>网名：<slot name="netName"></slot></p>
        <p>技术类型：<slot name="skill"></slot></p>

    </div>
</template>

    <script type="text/javascript">
        var jspang={
            template:'#tmp'
        }

        var app=new Vue({
            el:'#app',
            data:{
               jspangData:{
                   bolgUrl:'http://jspang.com',
                   netName:'技术胖',
                   skill:'Web前端'
               }
            },
            components:{
                "jspang":jspang
            }
        })
    </script>
</body>
</html>
```



学习资料:[Vue2.x学习路线-按次路线学习顺畅无比](https://jspang.com/detailed?id=57)

