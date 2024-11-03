---
title: 计数排序
date: 2019-11-11
tags:
 - sort
categories:
 - 算法
---
## Counting Sort

计数排序的核心在于输入的数据值转换为键存储在额外开辟的数组空间中，作为一种限行时间非要咋地的排序，计数排序要求输入的数据必须是由确定范围的整数。

计数排序是一种很稳定的排序算法，需要用到一个额外的数组C，其中第i个元素是待排序数组A中值等于i的元素的个数，然后根据数字C将A中的元素排到正确的位置上个，它只能对数组进行排序
```
function countSort(array) {
    const newArray = [], C = [];
    let min = array[0];
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min >= array[i]) {
            min = array[i];
        }
        if (max <= array[i]) {
            max = array[i];
        }
        if (C[array[i]] = C[array[i]]) {
            C[array[i]]++;
        } else {
            C[array[i]] = 1;
        }
    }
    for (let j = min; j < max; j++) {
        C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
    }
    for (let k = array.length - 1; k >= 0; k--) {
        newArray[C[array[k]] - 1] = array[k];
        C[array[k]]--;
    }
    return newArray;
}
```

参考文章:[十大经典排序算法的JS版](https://www.jianshu.com/p/96f5c19e13df)