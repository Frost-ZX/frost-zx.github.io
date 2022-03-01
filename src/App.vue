<template>
  <div id="app">

    <!-- 导航栏 -->
    <b-navbar class="app-header">

      <template #brand>
        <b-navbar-item tag="router-link" :to="{ name: 'Home' }">
          <img src="./assets/image/avatar.png" alt="Avatar" />
        </b-navbar-item>
      </template>

      <template #start>
        <b-navbar-item
          tag="router-link"
          :to="{ name: 'Home' }"
          :active="routeName === 'Home'"
        >主页</b-navbar-item>
        <b-navbar-item
          tag="router-link"
          :to="{ name: 'ContentIndex' }"
          :active="['Content','ContentIndex'].includes(routeName)"
        >文章</b-navbar-item>
        <b-navbar-item
          tag="router-link"
          :to="{ name: 'About' }"
          :active="routeName === 'About'"
        >关于</b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <a
            class="button is-light"
            href="https://github.com/Frost-ZX"
            target="_blank"
          >
            <b-icon icon="github"></b-icon>
            <span>GitHub</span>
          </a>
        </b-navbar-item>
      </template>

    </b-navbar>

    <!-- 页面内容 -->
    <router-view class="app-content" />

  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {

    /** 当前路由名称 */
    routeName(vm) {
      return vm.$route.name;
    },

  },
}
</script>

<style lang="less">
#app {
  display: flex;
  flex-direction: column;

  > * {
    position: relative;
    width: 100%;
  }
}

.app-header {
  flex-shrink: 0;
  box-shadow: 0 0 1rem 0.25rem rgba(10, 10, 10, 0.1);
}

.app-content {
  flex-grow: 1;
  height: 0;
}
</style>
