<script setup>
import { useData, useRoute } from 'vitepress';
import { shallowRef, onBeforeUnmount, onMounted, watch } from 'vue';

import Artalk from 'artalk';
import 'artalk/Artalk.css';

/** 页面数据 */
const pageData = useData();

/** 路由 */
const route = useRoute();

/**
 * @desc Artalk 实例
 * @type {ReturnType<typeof shallowRef<ReturnType<typeof Artalk.init> | null>}
 */
const artalk = shallowRef(null);

/**
 * @desc 评论区容器
 * @type {ReturnType<typeof shallowRef<HTMLElement | null>}
 */
const commentWrapper = shallowRef(null);

/** 销毁 */
function destroyComments() {

  console.debug('[Artalk] destroyComments');

  if (artalk.value) {
    artalk.value.destroy();
    artalk.value = null;
  }

}

/** 初始化 */
function initComments() {

  console.debug('[Artalk] initComments');

  let instance = Artalk.init({
    el: commentWrapper.value,
    pageKey: location.pathname,
    pageTitle: pageData.title.value,
    server: 'https://comment.frost-zx.top',
    site: 'frost-zx-blog',
  });

  artalk.value = instance;

}

/** 更新 */
function updateComments() {

  console.debug('[Artalk] updateComments');

  if (artalk.value) {
    artalk.value.update({
      pageKey: location.pathname,
      pageTitle: pageData.title.value,
    });
    artalk.value.reload();
  }

}

watch(() => route.path, updateComments);

onMounted(() => {
  initComments();
});

onBeforeUnmount(() => {
  destroyComments();
});
</script>

<template>
  <div ref="commentWrapper" class="page-comments"></div>
</template>

<style lang="less">
.page-comments {
  margin-top: 12px;
}
</style>
