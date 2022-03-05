<template>
  <div class="to-top" @click="scrollToTop()">
    <b-icon icon="arrow-up"></b-icon>
    <div class="cover"></div>
  </div>
</template>

<script>
export default {
  name: 'ToTop',
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
.to-top {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 2.25rem;
  height: 2.25rem;
  box-shadow:
    0 0.15rem 0.15rem 0 rgba(0, 0, 0, 0.14),
    0 0.2rem 0.1rem -0.15rem rgba(0, 0, 0, 0.12),
    0 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  background-color: var(--color-green);
  color: #FFF;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;

  &:hover .cover {
    opacity: 0.2;
  }
}

.cover {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #FFF;
  opacity: 0;
  transition: opacity 0.25s;
}
</style>
