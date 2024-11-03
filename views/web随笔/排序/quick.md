---
title: 快速排序
date: 2019-11-07
tags:
 - sort
categories:
 - 算法
---
## Quick Sort

快速排序的基本思想是：通过一趟排序将待排记录分割成独立的两部分，其中一部分记录关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序
### 1. 方法一
```
const quickSort = function (array) {
    if (array.length <= 1) {
        return array;
    }
    const pivotIndex = parseInt(array.length / 2);
    const pivot = Number(array.splice(pivotIndex, 1));
    const left = [];    const right = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
};
```
### 2. 方法二
其中 left = 0; right = array.length-1
```
function quickSort(array, left, right) {
    if (left < right) {
        let x = array[right], i = left - 1;
        for (let j = left; j <= right; j++) {
            if (array[j] <= x) {
                i++;
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        quickSort(array, left, i - 1);
        quickSort(array, i + 1, right);
    }
    return array;
}
```

参考文章:[十大经典排序算法的JS版](https://www.jianshu.com/p/96f5c19e13df)