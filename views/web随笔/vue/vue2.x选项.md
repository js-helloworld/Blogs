---
title: vue2.x选项
date: 2020-06-15
tags:
 - vue
categories:
 - vue
author:
 - 游城走不动
---

## 1.propsData Option 全局扩展的数据传递
propsData 不是和属性有关，他用在全局扩展时进行传递数据
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>PropsData Option Demo</title>
</head>
<body>
    <h1>PropsData Option Demo</h1>
    <hr>
    <header></header>

    <script type="text/javascript">
       var  header_a = Vue.extend({
           template:`<p>{{message}}</p>`,
           data:function(){
               return {
                   message:'Hello,I am Header'
               }
           }
       }); 
       new header_a().$mount('header');
    </script>
</body>
</html>
```
扩展标签已经做好了，这时我们要在挂载时传递一个数字过去，我们就用到了propsData。 我们用propsData三步解决传值： 1.在全局扩展里加入props进行接收。propsData:{a:1} 2.传递时用propsData进行传递。props:[‘a’] 3.用插值的形式写入模板。{{ a }} 完整代码：
```
var  header_a = Vue.extend({
    template:`<p>{{message}}-{{a}}</p>`,
    data:function(){
        return {
            message:'Hello,I am Header'
        }
    },
    props:['a']
}); 
new header_a({propsData:{a:1}}).$mount('header');
```

## 2.computed Option 计算选项
computed 的作用主要是对原数据进行改造输出。改造输出：包括格式的编辑，大小写转换，顺序重排，添加符号……。
### 一、格式化输出结果：
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>Computed Option 计算选项</title>
</head>
<body>
    <h1>Computed Option 计算选项</h1>
    <hr>
    <div id="app">
        {{newPrice}}
    </div>

    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                price:100
            },
            computed:{
                newPrice:function(){
                    return this.price='￥' + this.price + '元';
                }
            }
        })
    </script>
</body>
</html>
```
输出结果：￥100元。

### 二、用计算属性反转数组
例如：我们得到了一个新闻列表的数组，它的顺序是安装新闻时间的顺序正序排列的，也就是早反生的新闻排在前面。这是反人类的，我们需要给他反转。这时我们就可以用到我们的计算属性了。

没有排序的新闻列表，是安装日期正序排列的。

```
var newsList=[
    {title:'香港或就“装甲车被扣”事件追责 起诉涉事运输公司',date:'2017/3/10'},
    {title:'日本第二大准航母服役 外媒：针对中国潜艇',date:'2017/3/12'},
    {title:'中国北方将有明显雨雪降温天气 南方阴雨持续',date:'2017/3/13'},
    {title:'起底“最短命副市长”：不到40天落马，全家被查',date:'2017/3/23'},
];
```
我们希望输出反转的结果
```
computed:{
    reverseNews:function(){
        return this.newsList.reverse();
    }
}
```

## 3.Methods Option 方法选项
### 一、methods中参数的传递
使用方法和正常的javascript传递参数的方法一样，分为两部：
- 在methods的方法中进行声明，比如我们给add方法加上一个num参数，就要写出add:function(num){}.
- 调用方法时直接传递，比如我们要传递2这个参数，我们在button上就直接可以写。<button @click="add(2)"></button>.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>methods Option</title>
</head>
<body>
    <h1>methods Option</h1>
    <hr>
    <div id="app">
        {{ a }}
        <p><button @click="add(2)">add</button></p>
    </div>

    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                a:1
            },
            methods:{
                add:function(num){
                    if(num!=''){this.a+=num}
                    else{this.a++}
                }
            }
        })
    </script>
</body>
</html>
```
### 二、methods中的$event参数
传递的$event参数都是关于你点击鼠标的一些事件和属性。
```
<button @click=”add(2,$event)”>add</button> 。
```

### 三、native 给组件绑定构造器里的原生事件
在实际开发中经常需要把某个按钮封装成组件，然后反复使用，如何让组件调用构造器里的方法，而不是组件里的方法。就需要用到我们的.native修饰器了。

声明btn对象：
```
var btn={
    template:`<button>组件Add</button>`     
}
```
在构造器里声明：
```
components:{
    "btn":btn
 }
```
用.native修饰器来调用构造器里的add方法
```
<p><btn @click.native="add(3)"></btn></p>
```
### 四、作用域外部调用构造器里的方法
这种不经常使用，如果你出现了这种情况，说明你的代码组织不够好。
```
<button onclick="app.add(4)" >外部调用构造器里的方法</button>
```

## 4.Watch 选项 监控数据
#### 用实例属性写watch监控
有些时候我们会用实例属性的形式来写watch监控。也就是把我们watch卸载构造器的外部，这样的好处就是降低我们程序的耦合度，使程序变的灵活。
```
app.$watch('xxx',function(){})
```
```
app.$watch('temperature',function(newVal,oldVal){
    if(newVal>=26){
        this.suggestion=suggestion[0];
    }else if(newVal<26 && newVal >=0)
    {
        this.suggestion=suggestion[1];
    }else{
        this.suggestion=suggestion[2];
    }

})
```
```
var vm = new Vue({
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: {
      f: {
        g: 5
      }
    }
  },
  watch: {
    a: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    },
    // 方法名
    b: 'someMethod',
    // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
    c: {
      handler: function (val, oldVal) { /* ... */ },
      deep: true
    },
    // 该回调将会在侦听开始之后被立即调用
    d: {
      handler: 'someMethod',
      immediate: true
    },
    // 你可以传入回调数组，它们会被逐一调用
    e: [
      'handle1',
      function handle2 (val, oldVal) { /* ... */ },
      {
        handler: function handle3 (val, oldVal) { /* ... */ },
        /* ... */
      }
    ],
    // watch vm.e.f's value: {g: 5}
    'e.f': function (val, oldVal) { /* ... */ }
  }
})
vm.a = 2 // => new: 2, old: 1
```

## 5.Mixins 混入选项操作
Mixins一般有两种用途：
1. 在你已经写好了构造器后，需要增加方法或者临时的活动时使用的方法，这时用混入会减少源代码的污染。
2. 很多地方都会用到的公用方法，用混入的方法可以减少代码量，实现代码重用。
### 一、Mixins的基本用法
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>Mixins Option Demo</title>
</head>
<body>
    <h1>Mixins Option Demo</h1>
    <hr>
    <div id="app">
        <p>num:{{ num }}</p>
        <P><button @click="add">增加数量</button></P>
    </div>

    <script type="text/javascript">
        //额外临时加入时，用于显示日志
        var addLog={
            updated:function(){
                console.log("数据放生变化,变化成"+this.num+".");
            }
        }
        var app=new Vue({
            el:'#app',
            data:{
                num:1
            },
            methods:{
                add:function(){
                    this.num++;
                }
            },
            mixins:[addLog]//混入
        })
    </script>
</body>
</html>
```
### 二、Mixins的调用顺序
从执行的先后顺序来说，都是混入的先执行，然后构造器里的再执行，需要注意的是，这并不是方法的覆盖，而是被执行了两边。

在上边的代码的构造器里我们也加入了updated的钩子函数：
```
updated:function(){
      console.log("构造器里的updated方法。")
},
```
这时控制台输出的顺序是:
```
mixins数据放生变化,变化成2.
构造器里的updated方法。
```
PS：当混入方法和构造器的方法重名时，混入的方法无法展现，也就是不起作用。
### 三、全局API混入方式
我们也可以定义全局的混入，这样在需要这段代码的地方直接引入js，就可以拥有这个功能了。我们来看一下全局混入的方法：
```
Vue.mixin({
    updated:function(){
        console.log('我是全局被混入的');
    }
})
```
PS：全局混入的执行顺序要前于混入和构造器里的方法。

## 6.Extends Option 扩展选项
### 一、extends我们来看一个扩展的实例。
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>Extends Optin Demo</title>
</head>
<body>
    <h1>Extends Optin Demo</h1>
    <hr>
    <div id="app">
        {{message}}
        <p><button @click="add">add</button></p>
    </div>

    <script type="text/javascript">
        var bbb={
            created:function(){
                console.log("我是被扩展出来的");
            },
            methods:{
                add:function(){
                    console.log('我是被扩展出来的方法！');
                }
            }
        };
        var app=new Vue({
            el:'#app',
            data:{
                message:'hello Vue!'
            },
            methods:{
                add:function(){
                    console.log('我是原生方法');
                }
            },
            extends:bbb
        })
    </script>
</body>
</html>
```
### 二、delimiters 选项
delimiters的作用是改变我们插值的符号。Vue默认的插值是双大括号{{}}。但有时我们会有需求更改这个插值的形式。
```
delimiters:['${','}']
```
现在我们的插值形式就变成了${}



学习资料:[Vue2.x学习路线-按次路线学习顺畅无比](https://jspang.com/detailed?id=57)

