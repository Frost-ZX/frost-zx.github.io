<template>
  <div class="float-btn btn-to-top" @click="scrollToTop()">
    <b-icon icon="arrow-up"></b-icon>
    <div class="cover"></div>
  </div>
</template>

<script>
export default {
  name: 'BtnToTop',
  props: {

    /** 滚动的元素 */
    scrollElement: {
      type: HTMLElement,
      default: null
    },

  },
  methods: {

    /** 滚动到顶部 */
    scrollToTop() {

      const el = (this.scrollElement || this.$el.parentElement);

      if (!el) {
        console.error('操作失败，找不到滚动元素。');
        return;
      }

      el.scrollTo({
        behavior: 'smooth',
        top: 0,
      });

    },

  },
}
</script>

<style lang="less" scoped>
.btn-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
}
</style>
