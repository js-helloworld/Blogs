---
title: js数组的高阶函数
date: 2020-05-27
tags:
 - js
 - array
categories:
 - js
author:
 - 游城走不动
---


## 1.什么是高阶函数

JavaScript的函数其实都指向某个变量。既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。

## 2.数组中的高阶函数

### 1.map
- 参数:接受两个参数，一个是回调函数，一个是回调函数的this值(可选)。
其中，回调函数被默认传入三个值，依次为当前元素、当前索引、整个数组。

- 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值,对原数组没有影响
```
let nums = [1, 2, 3];
let obj = {val: 4};
let newNums = nums.map(function(item,index,array) {
  return item + index + array[index] + this.val; 
  //对第一个元素，1 + 0 + 1 + 4 = 6
  //对第二个元素，2 + 1 + 2 + 4 = 9
  //对第三个元素，3 + 2 + 3 + 4 = 12
}, obj);
console.log(newNums);//[6, 9, 12]
```

### 2. reduce
- 参数: 接收两个参数，一个为回调函数，另一个为初始值。回调函数中三个默认参数，依次为积累值、当前值、整个数组。
```
let nums = [1, 2, 3];
// 多个数的加和
let newNums = nums.reduce(function(preSum,curVal,array) {
  return preSum + curVal; 
}, 0);
console.log(newNums);//6
```
不传默认值会自动以第一个元素为初始值，然后从第二个元素开始依次累计。

### 3.filter
- 参数: 一个函数参数。这个函数接受一个默认参数，就是当前元素。这个作为参数的函数返回值为一个布尔类型，决定元素是否保留。

- filter方法返回值为一个新的数组，这个数组里面包含参数里面所有被保留的项。
```
let nums = [1, 2, 3];
// 保留奇数项
let oddNums = nums.filter(item => item % 2);
console.log(oddNums);
```

### 4.sort

参数: 一个用于比较的函数，它有两个默认参数，分别是代表比较的两个元素。

```
let nums = [2, 3, 1];
//两个比较的元素分别为a, b
nums.sort(function(a, b) {
  if(a > b) return 1;
  else if(a < b) return -1;
  else if(a == b) return 0;
})
```
当比较函数返回值大于0，则 a 在 b 的后面，即a的下标应该比b大。反之，则 a 在 b 的后面，即 a 的下标比 b 小。整个过程就完成了一次升序的排列。


比较函数不传的时候,函数将数字转换为字符串，然后根据字母unicode值进行升序排序，也就是根据字符串的比较规则进行升序排序。