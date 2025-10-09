<script setup>
import DefaultTheme from 'vitepress/theme';
import DocContentFooter from './DocContentFooter.vue';
import SiteFooter from './SiteFooter.vue';

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #doc-footer-before>
      <hr class="custom__divider" />
      <DocContentFooter />
    </template>
    <template #layout-bottom>
      <SiteFooter />
    </template>
  </Layout>
</template>
