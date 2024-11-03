<!--
 * @Author: your name
 * @Date: 2024-11-04 00:50:25
 * @LastEditTime: 2024-11-04 00:50:28
 * @LastEditors: DESKTOP-0BPKAQR
 * @Description: In User Settings Edit
 * @FilePath: \code\github\Blogs\views\web随笔\vue\vue-router.md
-->
---
title: vue-router
date: 2020-06-17
tags:
 - vue
 - route
categories:
 - vue
author:
 - 游城走不动
---

## 1.Vue-router入门
### 一、安装vue-router
```
npm install vue-router --save-dev
```
```
import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import Hello from '@/components/Hello'  //引入根目录下的Hello.vue组件

Vue.use(Router)  //Vue全局使用Router

export default new Router({
  routes: [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/',         //链接路径
      name: 'Hello',     //路由名称，
      component: Hello   //对应的组件模板
    }
  ]
})
```

### 二、router-link制作导航
```
<p>导航 ：
   <router-link to="/">首页</router-link>
   <router-link to="/hi">Hi页面</router-link>
</p>
```

## 2.vue-router配置子路由
```
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path:'/hi',
      component:Hi,
      children:[
        {path:'/',component:Hi},
        {path:'hi1',component:Hi1},
        {path:'hi2',component:Hi2},
      ]
    }
  ]
})
```

## 3.vue-router如何参数传递
###  一、用name传递参数 
1. 在路由文件src/router/index.js里配置name属性
```
routes: [
    {
    path: '/',
    name: 'Hello',
    component: Hello
    }
]
```
2. 模板里(src/App.vue)用$route.name的形势接收，比如直接在模板中显示：

```
<p>{{ $route.name}}</p>
```

### 二、通过router-link标签中的to传参
```
<router-link :to="{name:xxx,params:{key:value}}">valueString</router-link>
```
在模板里用$route.params.username进行接收.
```
{{$route.params.key}}
```

## 4.单页面多路由区域操作
```
<router-view ></router-view>
<router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
<router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
```
```
mport Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default:Hello,
        left:Hi1,
        right:Hi2
      }
    },{
      path: '/Hi',
      components: {
        default:Hello,
        left:Hi2,
        right:Hi1
      }
    }

  ]
})
```

## 5.vue-router 利用url传递参数
```
{
    path:'/params/:newsId/:newsTitle',
     component:Params
}
```
```
<template>
    <div>
        <h2>{{ msg }}</h2>
        <p>新闻ID：{{ $route.params.newsId}}</p>
        <p>新闻标题：{{ $route.params.newsTitle}}</p>
    </div>
</template>

```
```
<router-link to="/params/198/123">params</router-link> |
```
正则表达式在URL传值中的应用
```
path:'/params/:newsId(\\d+)/:newsTitle',
```
## 6.vue-router 的重定向-redirect
```
export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },{
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params
    },{
      path:'/goback',
      redirect:'/'
    }

  ]
})
```
重定向时传递参数
```
{
  path:'/params/:newsId(\\d+)/:newsTitle',
  component:Params
},{
  path:'/goParams/:newsId(\\d+)/:newsTitle',
  redirect:'/params/:newsId(\\d+)/:newsTitle'
}
```

## 7.alias别名的使用
```
{
    path: '/hi1',
    component: Hi1,
    alias:'/别名'
 }
 ```
```
<router-link  to="/别名">jspang</router-link>
```
#### redirect和alias的区别
- redirect：仔细观察URL，redirect是直接改变了url的值，把url变成了真实的path路径。
- alias：URL路径没有别改变，这种情况更友好，让用户知道自己访问的路径，只是改变了router-view中的内容。

ps:别名请不要用在path为’/’中，如下代码的别名是不起作用的。
```
{
  path: '/',
  component: Hello,
  alias:'/home'
}
```

## 8.路由的过渡动画
```
<transition name="fade">
  <router-view ></router-view>
</transition>
```
```
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
```
我们在/src/App.vue文件里添加了transition标签，并给标签起了一个名字叫fade。

css过渡类名：组件过渡过程中，会有四个CSS类名进行切换，这四个类名与transition的name属性有关，比如name=”fade”,会有如下四个CSS类名：

- fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。
- fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。
- fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。
- fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。

过渡模式mode：
- in-out:新元素先进入过渡，完成之后当前元素过渡离开。
- out-in:当前元素先进行过渡离开，离开完成后新元素过渡进入。

## 9.mode的设置和404页面的处理
mode的两个值
1. histroy:当你使用 history 模式时，URL 就像正常的 url
2. hash:默认’hash’值，但是hash看起来就像无意义的字符排列

#### 404页面的设置
```
{
   path:'*',
   component:Error
}
```

## 10.路由中的钩子
### 一、路由配置文件中写钩子函数
在路由文件中我们只能写一个beforeEnter,就是在进入此路由配置时
```
{
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params,
      beforeEnter:(to,from,next)=>{
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
},
```
三个参数：
- to:路由将要跳转的路径信息，信息是包含在对像里边的。
- from:路径跳转前的路径信息，也是一个对象的形式。
- next:路由的控制参数，常用的有next(true)和next(false)。

### 二、模板中的钩子函数
有两个钩子函数可以使用：
- beforeRouteEnter：在路由进入前的钩子函数。
- beforeRouteLeave：在路由离开前的钩子函数。
```
export default {
  name: 'params',
  data () {
    return {
      msg: 'params page'
    }
  },
  beforeRouteEnter:(to,from,next)=>{
    console.log("准备进入路由模板");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    next();
  }
}
</script>
```

## 11.编程式导航
```
this.$router.go(-1);
this.$router.push('/');
```

学习资料:[Vue2.x学习路线-按次路线学习顺畅无比](https://jspang.com/detailed?id=57)

