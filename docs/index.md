---
# 主页
# https://vitepress.dev/zh/reference/default-theme-home-page
layout: home
title: 主页
hero:
  name: "Frost-ZX 的博客"
  text: ""
  tagline: 一个分享技术、资源，记录学习与生活的博客。
---

<script setup>
import { data as contentListData } from './.vitepress/content-list.data.mts';
let { contentListByDate } = contentListData;
</script>

<template v-for="yearItem in contentListByDate">
  <h2>{{ yearItem.year }} 年</h2>
  <template v-for="monthItem in yearItem.items">
    <h3>{{ monthItem.month }} 月</h3>
    <ul>
      <li v-for="postItem in monthItem.items" :key="postItem.slug">
        <a :href="postItem.url">{{ postItem.title }}</a>
        <span>&nbsp;</span>
        <Badge type="info" :text="postItem['created-at'].split(' ')[0]" />
      </li>
    </ul>
  </template>
</template>
