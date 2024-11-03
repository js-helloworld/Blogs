---
title: 希尔排序
date: 2019-11-05
tags:
 - sort
categories:
 - 算法
---
## Shell Sort

希尔排序的核心在于间隔序列的设定。既可以提前设定好间隔序列，也可以动态定义间隔序列。
```
function shellSort(array) {
    let gap = 1;
    while (gap < array.length / 5) {
        gap = gap * 5 + 1;
    }
    for (gap; gap > 0; parseInt(gap / 5)) {
        for (let i = gap; i < array.length; i++) {
            const temp = array[i];
            for (let j = i - gap; j >= 0 && array[j] > temp; j -= gap) {
                array[j + gap] = array[j];
            }
            array[j + gap] = temp;
        }
    }
    return array;
}
```

参考文章:[十大经典排序算法的JS版](https://www.jianshu.com/p/96f5c19e13df)