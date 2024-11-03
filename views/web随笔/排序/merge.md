---
title: 归并排序
date: 2019-11-06
tags:
 - sort
categories:
 - 算法
---
## Merge Sort

归并排序是建立在归并操作的一种有效的排序算法，该算法是采用分治法的一个非常典型的应用。归并排序是一种稳定的排序算法，将已有序的子序列合并，等到一个完全有序的序列，即先使每个子序列有序，再使子序列段有序，若将两个有序表合并成一个有序表，称作2路合并
```
function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }
    const middle = parseInt(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    return merge(test_run(left), test_run(right));
}
function merge(left, right) {
    const newArray = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            newArray.push(left.shift());
        } else {
            newArray.push(right.shift());
        }
    }
    while (left.length) {
        newArray.push(left.shift());
    }
    while (right.length) {
        newArray.push(right.shift());
    }
    return newArray;
}
```

参考文章:[十大经典排序算法的JS版](https://www.jianshu.com/p/96f5c19e13df)