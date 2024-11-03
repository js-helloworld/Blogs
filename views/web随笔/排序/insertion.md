---
title: 插入排序
date: 2019-11-04
tags:
 - sort
categories:
 - 算法
---
## Insertion Sort

插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴，但是它的原理却是最好理解的，它的工作原理是通过构建有序序列，对未排序的数据，在已排序的序列中从后向前扫描，找到相应的位置并插入

### 1. 初级版—从后往前插
```
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
}
```
### 2. 升级版—基于二分法
```
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i], left = 0, right = i - 1;
        while (left <= right) {
            let middle = parseInt((left + right) / 2);
            if (key < array[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
        for (let j = i - 1; j >= left; j--) {
            array[j + 1] = array[j];
        }
        array[left] = key;
    }
    return array;
}
```

参考文章:[十大经典排序算法的JS版](https://www.jianshu.com/p/96f5c19e13df)