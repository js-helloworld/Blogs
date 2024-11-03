---
title: 手写call、apply、bind
date: 2020-04-13
tags:
 - js
 - 手写
categories:
 - js
author:
 - 游城走不动
---

 ## 1. call

:::tip
call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。

call()方法的作用和 apply() 方法类似，区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组。
:::

```
Function.prototype.MyCall = function (context, ...args) {
    const fn = Symbol('fn') // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
    context = context || window // 如果没有传或传的值为空对象 context指向window
    context[fn] = this // this指向调用call的对象,即我们要改变this指向的函数
    const result = context[fn](...args) // 执行当前函数
    delete context[fn] // 删除我们声明的fn属性
    return result // 返回函数执行结果
}

//测试
let Person = {
    name: 'Tom',
    say(age) {
        console.log(this)
        console.log(`我叫${this.name}我今年${age}`)
    }
}

Person1 = {
    name: 'Tom1'
}

Person.say.call(Person1, 18) //我叫Tom1我今年18
Person.say.MyCall(Person1, 18) //我叫Tom1我今年18
```

## 2.apply
:::tip
apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。
:::
```
Function.prototype.MyApply = function (context,args) {
    const fn = Symbol('fn') // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
    context = context || window // 如果没有传或传的值为空对象 context指向window
    context[fn] = this // this指向调用call的对象,即我们要改变this指向的函数
    const result = context[fn](...args) // 执行当前函数
    delete context[fn] // 删除我们声明的fn属性
    return result // 返回函数执行结果

}
```

## 3.bind
:::tip
bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

bind() 的另一个最简单的用法是使一个函数拥有预设的初始参数。只要将这些参数（如果有的话）作为 bind() 的参数写在 this 后面。当绑定函数被调用时，这些参数会被插入到目标函数的参数列表的开始位置，传递给绑定函数的参数会跟在它们后面。
:::
```
Function.prototype.MyBind = function (context, ...args) {
    var self = this
    // new优先级
    var fbound = function () {
        self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)))
    }
    // 继承原型上的属性和方法
    fbound.prototype = Object.create(self.prototype);

    return fbound;
}

//测试
const obj = { name: 'Tom1' }
function foo() {
    console.log(this.name)
    console.log(arguments)
}

foo.MyBind(obj, 'a', 'b', 'c')() 
```