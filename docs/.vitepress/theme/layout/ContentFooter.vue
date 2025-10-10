<script setup>
import { useData } from 'vitepress';
import { computed } from 'vue';
import { getCommonDateTime } from '@frost-utils/javascript';

const { frontmatter } = useData();

const tagList = computed(() => {
  let tags = frontmatter.value.tags || [];
  return tags;
});

const updatedAt = computed(() => {

  let date0 = frontmatter.value.lastmod;
  let date1 = (typeof date0 === 'string') ? date0.replace(/Z$/gi, '') : '';
  let date2 = date1 ? getCommonDateTime(date1, 'all') : '';

  return date2;

});
</script>

<template>
  <div class="doc-content-footer">
    <div class="post-tags">
      <Badge
        v-for="(text, index) in tagList"
        :key="index"
        :text="text"
        type="info"
      />
    </div>
    <div v-show="updatedAt" class="post-date">
      <span>最后更新于：</span>
      <span>{{ updatedAt }}</span>
    </div>
  </div>
</template>

<style lang="less">
.doc-content-footer {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  line-height: 1;
  user-select: none;

  .VPBadge {
    display: inline-block;
    margin: 0.25em;
  }

  .post-tags {
    margin-top: 0.5em;
  }

  .post-date {
    margin: 0.5em 0.25em;
    font-size: 14px;
  }
}
</style>
