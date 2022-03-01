<template>
  <div class="about-view">
    <div class="about-wrapper markdown-body">

      <h2>关于本站</h2>

      <ul>
        <li>使用 Vue CLI 5.0 搭建，基于 Vue 2.X，集成 Vue Router 前端路由。</li>
        <li>采用了基于 Bulma CSS 框架的 Buefy 组件库。</li>
        <li>使用了 axios，用于读取 Markdown 文件。</li>
        <li>使用了 markdown-it，用于将 Markdown 转换为 HTML。</li>
      </ul>

    </div>
  </div>
</template>

<script>
import 'github-markdown-css/github-markdown-light.css';

import { setTitle } from '@/assets/js/utils';

export default {
  name: 'AboutView',
  created() {
    setTitle('关于');
  },
}
</script>

<style lang="less" scoped>
.about-wrapper {
  padding: 2.5rem;
}
</style>
