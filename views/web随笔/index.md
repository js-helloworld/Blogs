<!--
 * @Author: your name
 * @Date: 2024-11-04 09:49:05
 * @LastEditTime: 2024-11-04 09:53:16
 * @LastEditors: DESKTOP-0BPKAQR
 * @Description: In User Settings Edit
 * @FilePath: \code\github\Blogs\views\web随笔\index.md
-->
<script setup>
 import { useData } from 'vitepress'

const { page } = useData()
console.log(page,123)
</script>

<template>
  <div>
  {{page}}
  132
  </div>
</template>