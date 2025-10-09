<script setup>
import { useData } from 'vitepress';
import { computed } from 'vue';
import { siteLinksOnline } from '../../site-links.mjs';

const siteData = useData();

const siteLinks = computed(() => {
  return siteLinksOnline.filter((item) => {
    return item.isGlobal;
  });
});
</script>

<template>
  <div class="site-footer">
    <div class="site-footer__row">
      <span>Copyright © {{ siteData.site.value.title }} • Powered by VitePress</span>
    </div>
    <div class="site-footer__row">
      <span>友情链接：</span>
      <a
        v-for="(item, index) in siteLinks"
        :key="index"
        :href="item.siteUrl"
        target="_blank"
      >{{ item.siteTitle }}</a>
    </div>
  </div>
</template>

<style lang="less">
.site-footer {
  padding: 32px 0;
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  font-size: 14px;
  line-height: 2;
  text-align: center;
  user-select: none;

  a {
    margin: 0 0.25em;
    color: var(--vp-c-brand-1);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
}
</style>
