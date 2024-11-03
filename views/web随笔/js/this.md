---
title: this指向小结 
date: 2019-12-11
tags:
 - js
categories:
 - js
---

### this是 JavaScript 语言的一个关键字。它是函数运行时，在函数体内部自动生成的一个对象，只能在函数体内部使用。

下面几种情况，总结this的用法。

1. 纯粹的函数调用
```
var x = 1;
function test() {
   console.log(this.x);
}
test();  // 1
```

2. 作为对象方法的调用

```

var x = 1;
function test() {
  console.log(this.x);
}

var obj = {
  x:2,
  test:test
};
test(); //1
obj.test();   // 2
```

```
var A = {
    name: '张三',
    f: function () {
        console.log('姓名：' + this.name);
    }
};
​
var B = {
    name: '李四'
};

B.f = A.f;

B.f()   // 姓名：李四
A.f()   // 姓名：张三
```

3. 作为构造函数调用
```
function test() {
　this.x = 1;
}

var obj = new test();
obj.x // 1
```

```
var obj = {
    fun:function(){
        console.log(this) ;
    }
}
​
setInterval(obj.fun,1000);      // this指向window对象
setInterval('obj.fun()',1000);  // this指向obj对象

```
4. 事件绑定中的this
```
<input type="button" id="btn" value="按钮" onclick="clickFun()">
```

```
 function clickFun(){
      console.log(this) // 此函数的运行环境在全局window对象下，因此this指向window;
  }
​
<input type="button" value="按钮" onclick="this">
<!-- 运行环境在节点对象中，因此this指向本节点对象 -->
```

```
 var btn = document.getElementById('btn');
 btn.onclick = function(){
       console.log(this) // this指向本节点对象
 }
```

5. apply 调用
```
var x = 0;
function test() {
　console.log(this.x);
}

var obj = {
  x:1,
  m:test
};
obj.m.apply() // 0

obj.m.apply(obj); //1
```

6. 箭头函数调用
```

var obj={
    a:222,
    fn:function(){
        console.log(this) //obj
        setTimeout(function(){console.log(this.a)})
    },
    fn2:function(){
        setTimeout(()=>{console.log(this.a)});
    },
    fn3:()=>{
        console.log(this) //Window

    }
};
obj.fn();//undefined
obj.fn2();//222


```
- fn()里面的this是指向obj，但是传给 setTimeout 的是普通函数，this指向是window，window下面没有a，所以这里输出 undefined。
- 箭头函数里面没有 this ，所以要向上层作用域查找

参考文章：

- [Javascript 的 this 用法](http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html)
- [彻底搞懂JavaScript中的this指向问题](https://zhuanlan.zhihu.com/p/42145138)