---
title: 堆排序
date: 2019-11-10
tags:
 - sort
categories:
 - 算法
---
## Heap Sort
是指利用堆这种数据结构所涉及的一种排序算法，堆积是一个近似完全二叉树的结构，并满足堆积的性质：即子节点的键值或索引总是小于（或大于）它的父节点
```
function heapSort(array) {
    let length = array.length;
    for (let i = parseInt(array.length / 2) - 1; i >= 0; i--) {
        heap(array, i, length);
    }
    for (let j = length - 1; j >= 1; j--) {
        const temp = array[0];
        array[0] = array[j];
        array[j] = temp;
        heap(array, 0, --length);
    }
    return array;
}
function heap(array, x, length) {
    let l = 2 * x + 1, r = 2 * x + 2, largest = x;
    if (l < length && array[l] > array[largest]) {
        largest = l;
    }
    if (r < length && array[r] > array[largest]) {
        largest = r;
    }
    if (largest != x) {
        const temp = array[x];
        array[x] = array[largest];
        array[largest] = temp;
        heap(array, largest, length);
    }
}
```

参考文章:[十大经典排序算法的JS版](https://www.jianshu.com/p/96f5c19e13df)