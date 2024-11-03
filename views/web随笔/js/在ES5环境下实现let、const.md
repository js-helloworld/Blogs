---
title: ES5环境下实现let、const
date: 2020-04-08
tags:
 - js
 - 手写
categories:
 - js
author:
 - 游城走不动
---

1. 可以通过模拟块级作用域来实现let
```
(function(){
  for(var i = 0; i < 5; i ++){
    console.log(i)  // 0 1 2 3 4
  }
})();

console.log(i) //Uncaught ReferenceError: i is not defined
```
babel转换前后的结果:

![20200408140716](https://raw.githubusercontent.com/mail-img/picBed/master/blog/img/picgo/20200408140716.png)

2. 实现const的关键在于Object.defineProperty()这个API

由于ES5环境没有block的概念，所以是无法百分百实现const，只能是挂载到某个对象下，要么是全局的window，要么就是自定义一个object来当容器
```
var __const = function __const (data, value) {
        window.data = value // 把要定义的data挂载到window下，并赋值value
        Object.defineProperty(window, data, { // 利用Object.defineProperty的能力劫持当前对象，并修改其属性描述符
          enumerable: false,
          configurable: false,
          get: function () {
            return value
          },
          set: function (data) {
            if (data !== value) { // 当要对当前属性进行赋值时，则抛出错误！
              throw new TypeError('Assignment to constant variable.')
            } else {
              return value
            }
          }
        })
      }
      __const('a', 10)
      console.log(a)
      delete a
      console.log(a)
      for (let item in window) { // 因为const定义的属性在global下也是不存在的，所以用到了enumerable: false来模拟这一功能
        if (item === 'a') { // 因为不可枚举，所以不执行
          console.log(window[item])
        }
      }
      a = 20 // 报错
```

参考资料：[如何在 ES5 环境下实现一个const ？](https://juejin.im/post/5ce3b2d451882533287a767f)