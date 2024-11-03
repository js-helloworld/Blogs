---
title: 冒泡排序
date: 2019-11-01
tags:
 - sort
categories:
 - 算法
---

## Bubble Sort

冒泡排序是一种简单的排序算法，它重复的走访要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来，走访数列的工作是重复的进行直到没有再需要交换，也就是说数列已经排序完成，这个算法的名字的由来是因为越小的元素会精油交换慢慢浮到数列的顶端。

### 1. 初级版
```
function bubbleSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {      
           let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

```
### 2. 改进版

设置一个标志性变量pos，用于记录每趟排序中最后一次进行交换的位置，由于pos位置之后的记录均已交换到位，故在进行下一趟排序是只要扫描到pos位置即可
```
function bubbleSort(array) {
    let i = array.length - 1;
    while (i > 0) {
        let pos = 0;
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                pos = j;
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
        i = pos;
    }
    return array;
}
```
### 3. 加强版

传统冒泡排序中的每一趟排序操作只能找到一个最大值或者最小值，我们考虑利用在每趟排序中进行正向和反向两遍冒泡的方法一可以得到里那个个最终值（最大及最小），从而使排序趟数至少减少一半
```
function bubbleSort(array) {
    let low = 0;
    let high = array.length - 1;
    while (low < high) {
        for (let j = low; j < high; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
        --high;
    }
    return array;
}
```

参考文章:[十大经典排序算法的JS版](https://www.jianshu.com/p/96f5c19e13df)