---
title: vue2.x全局API
date: 2020-06-13
tags:
 - vue
categories:
 - vue
author:
 - 游城走不动
---

## 1.Vue.directive 自定义指令
定义一些属于自己的指令，比如我们要定义一个v-diy的指令，作用就是让文字变成绿色。
```
<div id="app">
    <div v-diy="color" id="demo">
        {{num}}
    </div>
    <div>
        <button @click="add">Add</button>
    </div>
</div>
```
```
    Vue.directive('diy',function(el,binding,vnode){
        el.style='color:'+binding.value;
    });
    var app=new Vue({
        el:'#app',
        data:{
            num:10,
            color:'green'
        },
        methods:{
            add:function(){
                this.num++;
            }
        }
    })
```
### 自定义指令中传递的三个参数
- el: 指令所绑定的元素，可以用来直接操作DOM。
- binding: 一个对象，包含指令的很多信息。
- vnode: Vue编译生成的虚拟节点。

### 自定义指令的生命周期
自定义指令有五个生命周期（也叫钩子函数），分别是 bind,inserted,update,componentUpdated,unbind
1. bind:只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定
义一个绑定时执行一次的初始化动作。

2. inserted:被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于document中）。

3. update:被绑定于元素所在的模板更新时调用，而无论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。

4. componentUpdated:被绑定元素所在模板完成一次更新周期时调用。

5. unbind:只调用一次，指令与元素解绑时调用。

## 2.Vue.extend构造器的延伸
### 一、什么是Vue.extend
Vue.extend 返回的是一个“扩展实例构造器”,也就是预设了部分选项的Vue实例构造器。经常服务于Vue.component用来生成组件，可以简单理解为当在模板中遇到该组件名称作为标签的自定义元素时，会自动调用“扩展实例构造器”来生产组件实例，并挂载到自定义元素上。

### 二、自定义无参数标签
我们想象一个需求，需求是这样的，要在博客页面多处显示作者的网名，并在网名上直接有链接地址。我们希望在html中只需要写<author></author>，这和自定义组件很像，但是他没有传递任何参数，只是个静态标签。

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>vue.extend-扩展实例构造器</title>
</head>
<body>
    <h1>vue.extend-扩展实例构造器</h1>
    <hr>
    <author></author>

    <script type="text/javascript">
       var authorExtend = Vue.extend({
           template:"<p><a :href='authorUrl'>{{authorName}}</a></p>",
           data:function(){
               return{
                   authorName:'JSPang',
                   authorUrl:'http://www.jspang.com'
               }
           }
       });
       new authorExtend().$mount('author');
    </script>
</body>
</html>
```
还可以通过HTML标签上的id或者class来生成扩展实例构造器，Vue.extend里的代码是一样的，只是在挂载的时候，我们用类似jquery的选择器的方法，来进行挂载就可以了。
```
new authorExtend().$mount('#author');
```

## 3.Vue.set全局操作
Vue.set 的作用就是在构造器外部操作构造器内部的数据、属性或者方法。比如在vue构造器内部定义了一个count为1的数据，我们在构造器外部定义了一个方法，要每次点击按钮给值加1.就需要用到Vue.set。

### 一、引用构造器外部数据：
什么是外部数据，就是不在Vue构造器里里的data处声明，而是在构造器外部声明，然后在data处引用就可以了。外部数据的加入让程序更加灵活，我们可以在外部获取任何想要的数据形式，然后让data引用。
```
//在构造器外部声明数据
 var outData={
    count:1,
    goodName:'car'
};
var app=new Vue({
    el:'#app',
    //引用外部数据
    data:outData
})
```

### 二、在外部改变数据的三种方法：
1. 用Vue.set改变
```
function add(){
       Vue.set(outData,'count',4);
 }
```
2. 用Vue对象的方法添加
```
app.count++;
```
3. 直接操作外部数据
```
outData.count++;
```

### 三、为什么要有Vue.set的存在?
由于Javascript的限制，Vue不能自动检测以下变动的数组。
- 当你利用索引直接设置一个项时，vue不会为我们自动更新。
- 当你修改数组的长度时，vue不会为我们自动更新。

## 4.Vue的生命周期（钩子函数）

Vue一共有10个生命周期函数，我们可以利用这些函数在vue的每个阶段都进行操作数据或者改变内容。
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>构造器的声明周期</title>
</head>
<body>
    <h1>构造器的声明周期</h1>
    <hr>
    <div id="app">
        {{message}}
        <p><button @click="jia">加分</button></p>
    </div>
        <button onclick="app.$destroy()">销毁</button>

    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                message:1
            },
            methods:{
                jia:function(){
                    this.message ++;
                }
            },
            beforeCreate:function(){
                console.log('1-beforeCreate 初始化之后');
            },
            created:function(){
                console.log('2-created 创建完成');
            },
            beforeMount:function(){
                console.log('3-beforeMount 挂载之前');
            },
            mounted:function(){
                console.log('4-mounted 被创建');
            },
            beforeUpdate:function(){
                console.log('5-beforeUpdate 数据更新前');
            },
            updated:function(){
                console.log('6-updated 被更新后');
            },
            activated:function(){
                console.log('7-activated');
            },
            deactivated:function(){
                console.log('8-deactivated');
            },
            beforeDestroy:function(){
                console.log('9-beforeDestroy 销毁之前');
            },
            destroyed:function(){
                console.log('10-destroyed 销毁之后')
            }

        })
    </script>
</body>
</html>
```

## 5.Template 制作模版
### 一、直接写在选项里的模板
直接在构造器里的template选项后边编写。这种写法比较直观，但是如果模板html代码太多，不建议这么写。
```
var app=new Vue({
     el:'#app',
     data:{
         message:'hello Vue!'
      },
     template:`
        <h1 style="color:red">我是选项模板</h1>
     `
})
```
### 二、写在template标签里的模板
这种写法更像是在写HTML代码，就算不会写Vue的人，也可以制作页面。
```
<template id="demo2">
    <h2 style="color:red">我是template标签模板</h2>
</template>

<script type="text/javascript">
    var app=new Vue({
        el:'#app',
        data:{
            message:'hello Vue!'
        },
        template:'#demo2'
    })
</script>
```

### 三、写在script标签里的模板
这种写模板的方法，可以让模板文件从外部引入。
```
<script type="x-template" id="demo3">
    <h2 style="color:red">我是script标签模板</h2>
</script>

<script type="text/javascript">
    var app=new Vue({
        el:'#app',
        data:{
            message:'hello Vue!'
        },
        template:'#demo3'
    })
</script>
```

## 6.Component 初识组件
### 一、全局化注册组件
全局化就是在构造器的外部用Vue.component来注册
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>component-1</title>
</head>
<body>
    <h1>component-1</h1>
    <hr>
    <div id="app">
        <diycpt></diycpt>
    </div>

    <script type="text/javascript">
        //注册全局组件
        Vue.component('diycpt',{
            template:`<div style="color:red;">全局化注册的jspang标签</div>`
        })
        var app=new Vue({
            el:'#app',
            data:{
            }
        })
    </script>
</body>
</html>
```
### 二、局部注册组件局部
局部注册组件局部注册组件和全局注册组件是向对应的，局部注册的组件只能在组件注册的作用域里进行使用，其他作用域使用无效。

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>component-1</title>
</head>
<body>
    <h1>component-1</h1>
    <hr>
    <div id="app">
      <panda></panda>
    </div>

    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            components:{
                "panda":{
                    template:`<div style="color:red;">局部注册的panda标签</div>`
                }
            }
        })
    </script>
</body>
</html>
```
:::tip
构造器里的components 是加s的，而全局注册是不加s
:::
### 三、组件和指令的区别
组件注册的是一个标签，而指令注册的是已有标签里的一个属性

## 7.Component 组件props 属性设置
props选项就是设置和获取标签上的属性值的
### 一、定义属性并获取属性值
定义属性我们需要用props选项，加上数组形式的属性名称，例如：props:[‘here’]。在组件的模板里读出属性值只需要用插值的形式，例如{{ here }}.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>component-2</title>
</head>
<body>
    <h1>component-2</h1>
    <hr>
    <div id="app">
      <panda here="China"></panda>
    </div>

    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            components:{
                "panda":{
                    template:`<div style="color:red;">Panda from {{ here }}.</div>`,
                    props:['here']
                }
            }
        })
    </script>
</body>
</html>
```
### 二、属性中带’-‘的处理方式
我们在写属性时经常会加入’-‘来进行分词，比如：，那这时我们在props里如果写成props:[‘form-here’]是错误的，我们必须用小驼峰式写法props:[‘formHere’]。
```
<panda from-here="China"></panda>
```
```
 var app=new Vue({
    el:'#app',
    components:{
        "panda":{
            template:`<div style="color:red;">Panda from {{ here }}.</div>`,
            props:['fromHere']
        }
    }
})
```
### 三、在构造器里向组件中传值
把构造器中data的值传递给组件，我们只要进行绑定就可以了
```
<panda v-bind:here="message"></panda>
```
```
 var app=new Vue({
    el:'#app',
    data:{
        message:'SiChuan' 
    },
    components:{
        "panda":{
            template:`<div style="color:red;">Panda from {{ here }}.</div>`,
            props:['here']
        }
    }
})
```

## 8.Component 父子组件关系
### 一、构造器外部写局部注册组件
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>component-3</title>
</head>
<body>
    <h1>component-3</h1>
    <hr>
    <div id="app">
      <diycpt></diycpt>  
    </div>
    <script type="text/javascript">
       var city={
           template:`<div>Sichuan of China</div>`
       }
        var diycpt = {
            template:`<div>
                    <p> Panda from China!</p>
                    <city></city>
            </div>`,
            components:{
                "city":city
            }
        }
        var app=new Vue({
            el:'#app',
            components:{
                "diycpt":diycpt
            }

        })
    </script>
</body>
</html>
```

## 9.Component 标签
标签是Vue框架自定义的标签，它的用途就是可以动态绑定我们的组件，根据数据的不同更换不同的组件。

1. 我们先在构造器外部定义三个不同的组件，分别是componentA,componentB和componentC.
```
 var componentA={
     template:`<div>I'm componentA</div>`
}
 var componentB={
      template:`<div>I'm componentB</div>`
}
var componentC={
    template:`<div>I'm componentC</div>`
}
```
2. 我们在构造器的components选项里加入这三个组件。
```
components:{
    "componentA":componentA,
    "componentB":componentB,
    "componentC":componentC,
}
```
3. 我们在html里插入component标签，并绑定who数据，根据who的值不同，调用不同的组件。
```
<component v-bind:is="who"></component>
```

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../assets/js/vue.js"></script>
    <title>component-4</title>
</head>
<body>
    <h1>component-4</h1>
    <hr>
    <div id="app">
       <component v-bind:is="who"></component>
       <button @click="changeComponent">changeComponent</button>
    </div>

    <script type="text/javascript">
        var componentA={
            template:`<div style="color:red;">I'm componentA</div>`
        }
        var componentB={
            template:`<div style="color:green;">I'm componentB</div>`
        }
        var componentC={
            template:`<div style="color:pink;">I'm componentC</div>`
        }

        var app=new Vue({
            el:'#app',
            data:{
                who:'componentA'
            },
            components:{
                "componentA":componentA,
                "componentB":componentB,
                "componentC":componentC,
            },
            methods:{
                changeComponent:function(){
                    if(this.who=='componentA'){
                        this.who='componentB';
                    }else if(this.who=='componentB'){
                        this.who='componentC';
                    }else{
                        this.who='componentA';
                    }
                }
            }
        })
    </script>
</body>
</html>
```

学习资料:[Vue2.x学习路线-按次路线学习顺畅无比](https://jspang.com/detailed?id=57)

