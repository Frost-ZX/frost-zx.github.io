<docs>

## $emit

- show-search

</docs>

<template>
  <div class="float-btn btn-search" @click="toggleSearch()">
    <b-icon icon="magnify"></b-icon>
    <div class="cover"></div>
  </div>
</template>

<script>
export default {
  name: 'BtnSearch',
  methods: {

    /** 显示搜索面板 */
    toggleSearch() {
      this.$emit('show-search');
    },

  },
}
</script>

<style lang="less" scoped>
.btn-search {
  position: fixed;
  bottom: 5rem;
  right: 2rem;
}
</style>
