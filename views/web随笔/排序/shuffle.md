---
title: 洗牌算法
date: 2019-12-04
tags:
 - 洗牌
categories:
 - 算法
---
## 洗牌

洗牌算法其实就是随机打乱数组，实现思路是：遍历数组元素，将当前元素和前面未有序序列中任意一个数进行交换，保证每个元素和其他元素交换的概率是等大的。
```
let arr = [0, 1, 2, 3, 4];
for(let i=arr.length-1; i>0; i--) {
  let index = parseInt(Math.random() * (i + 1));
  [arr[i], arr[index]] = [arr[index], arr[i]];
}
```