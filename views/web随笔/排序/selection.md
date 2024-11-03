---
title: 选择排序
date: 2019-11-02
tags:
 - sort
categories:
 - 算法
---
## Selection Sort

表现最稳定的排序算法之一，因为无论什么数据进去都是O(n2)的时间复杂度......所以用它的时候数据规模越小越好，唯一的好处就是不占用额外的内存空间，理论上讲，选择排序可能也是平时排序一般人想到的最多的排序方法之一
```
function selectionSort(array) {
    let length = array.length;
    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array;
}
```

参考文章:[十大经典排序算法的JS版](https://www.jianshu.com/p/96f5c19e13df)