<template>
  <div class="home-view">

    <div class="bg-cover"></div>

    <div class="center-content">
      <div class="home-title">Frost-ZX 的主页</div>
      <div class="home-desc">
        <p>一个使用 Vue + Buefy + markdown-it 开发实现的静态博客。</p>
        <p>
          <span>背景图片来源：</span>
          <a href="https://unsplash.com/photos/myq0GB_AAVU" target="_blank">Unsplash / Niels Cornet</a>
        </p>
      </div>
      <b-button
        type="is-light"
        outlined
        rounded
        @click="toDetail()"
      >了解更多</b-button>
    </div>

  </div>
</template>

<script>
import { setTitle } from '@/assets/js/utils';

export default {
  name: 'HomeView',
  methods: {
    
    toDetail() {
      this.$router.push({
        name: 'ContentIndex'
      });
    },
    
  },
  created() {
    setTitle();
  },
}
</script>

<style lang="less" scoped>
.home-view {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: #323232;
  background-image: url("../assets/image/home-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #FFF;
}

.bg-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(4px);
}

.center-content {
  position: relative;
  padding: 0 10%;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;

  a {
    color: inherit;
    text-decoration: underline;
  }

  .home-title {
    font-size: 2.25em;
  }

  .home-desc {
    margin: 0.75em 0;
    font-size: 1em;
  }

  .button {
    margin-top: 0.5em;
  }
}
</style>
