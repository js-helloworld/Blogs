---
title: inline-block产生空隙问题
date: 2020-03-15
tags:
 - display
categories:
 - css
---

## 原因
「inline-block」元素空隙的本质是 HTML 中存在的空白符（whitespace）


元素被当成行内元素排版的时候，元素之间的空白符（空格、回车换行等）都会被浏览器处理，根据white-space的处理方式（默认是normal，合并多余空白），原来HTML代码中的回车换行被转成一个空白符，在字体不为0的情况下，空白符占据一定宽度，所以inline-block的元素之间就出现了空隙。这些元素之间的间距会随着字体的大小而变化，当行内元素font-size:16px时，间距为8px。

## 解决办法

1. 将子元素标签的结束符和下一个标签的开始符写在同一行或把所有子标签写在同一行
```
<div class="parent">
  <div class="child">child1
  </div><div class="child">child2
  </div>
</div>

<!-- 将所有子元素写在同一行 -->
<div class="parent">
  <div class="child">child1</div><div class="child">child2</div>
</div>

```
缺点：可读性变差

2. 父元素中设置font-size: 0，在子元素上重置正确的font-size
```
.parent{
    font-size: 0;
}
```
缺点：inline-block元素必须设定字体，不然行内元素中的字体不会显示。 增加了代码量

3.为inline-block元素添加样式float:left
.child{
    float: left;
}
缺点：float布局会有高度塌陷问题


[有哪些好方法能处理 display: inline-block 元素之间出现的空格？](https://www.zhihu.com/question/21468450/answer/18342657)