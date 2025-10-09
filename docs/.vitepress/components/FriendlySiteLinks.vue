<script setup>
import { withBase } from 'vitepress'
import { ref, onBeforeMount } from 'vue';
import { siteLinksOnline, siteLinksOffline } from '../site-links.mjs';

/**
 * @typedef  SiteItem
 * @property {string} siteTitle
 * @property {string} siteDesc
 * @property {string} siteUrl
 * @property {string} iconUrl0
 * @property {string} iconUrl1
 */

/** 默认图标 */
const defaultAvatar = withBase('/default-avatar.svg');

/**
 * @desc 网站列表
 * @type {ReturnType<typeof ref<SiteItem[]>>}
 */
const siteListOnline = ref([]);

/**
 * @desc 网站列表
 * @type {ReturnType<typeof ref<SiteItem[]>>}
 */
const siteListOffline = ref([]);

/** 初始化数据 */
function initData() {

  siteListOnline.value = siteLinksOnline.map((item) => {
    return {
      siteTitle: item.siteTitle,
      siteDesc: item.siteDesc,
      siteUrl: item.siteUrl,
      iconUrl0: item.iconUrl,
      iconUrl1: '',
    };
  });

  siteListOffline.value = siteLinksOffline.map((item) => {
    return {
      siteTitle: item.siteTitle,
      siteDesc: item.siteDesc,
      siteUrl: item.siteUrl,
      iconUrl0: item.iconUrl,
      iconUrl1: '',
    };
  });

  ((dataList) => {
    dataList.forEach((siteList) => {
      siteList.forEach((item) => {

        let image = new Image();
        let url = item.iconUrl0;

        image.onload = () => {
          item.iconUrl1 = url;
        };

        image.src = url;

      });
    });
  })([
    siteListOnline.value,
    siteListOffline.value,
  ]);

}

/**
 * @description 跳转链接（用于无法访问的网站）
 * @param {typeof siteListOffline[number]} item
 */
function openLink(item) {
  window.open(item.siteUrl, '_blank');
}

onBeforeMount(() => {
  initData();
});
</script>

<template>
  <div class="friendly-site-links">

    <!-- 正常访问 -->
    <ul>
      <li v-for="(item, index) in siteListOnline" :key="index">
        <a
          class="link-item"
          target="_blank"
          :href="item.siteUrl"
          :title="item.siteTitle"
        >
          <div class="icon">
            <div
              class="icon-content"
              :style="{ backgroundImage: `url('${item.iconUrl1 || defaultAvatar}')` }"
            ></div>
          </div>
          <div class="info">
            <div class="name">{{ item.siteTitle }}</div>
            <div class="desc">{{ item.siteDesc }}</div>
          </div>
        </a>
      </li>
    </ul>

    <!-- 无法访问 -->
    <details class="details custom-block">
      <summary>无法正常访问的网站</summary>
      <ul>
        <li v-for="(item, index) in siteListOffline" :key="index">
          <a
            class="link-item"
            href="#"
            :title="item.siteTitle"
            @click="openLink(item)"
          >
            <div class="icon">
              <div
                class="icon-content"
                :style="{ backgroundImage: `url('${item.iconUrl1 || defaultAvatar}')` }"
              ></div>
            </div>
            <div class="info">
              <div class="name">{{ item.siteTitle }}</div>
              <div class="desc">{{ item.siteDesc }}</div>
            </div>
          </a>
        </li>
      </ul>
    </details>

  </div>
</template>

<style lang="less">
.friendly-site-links {
  --transition-time: 0.25s;
  display: block;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  * {
    box-sizing: inherit;
  }

  ul, li {
    margin: 0;
    padding: 0;
  }

  ul {
    position: relative;
    margin-bottom: 12px;
    box-shadow: 0.125em 0.125em 0.75em rgba(0, 0, 0, 0.1);
    background-color: #FFF;
    list-style: none;
    overflow: hidden;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 0.25em;
      height: 100%;
    }
  }

  li {
    display: block;
    position: relative;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    height: 5em;
    border-left: 0.25em solid transparent;
    border-right: 0.25em solid transparent;
    background-color: #FFF;
    white-space: nowrap;
    transition: all var(--transition-time);
    cursor: pointer;

    &:hover {
      z-index: 10;
      box-shadow: 0 0.125em 0.75em rgba(0, 0, 0, 0.1);
      border-left-color: #2196F3;
      transform: translateY(-0.125em);
    }

    &:not(:last-child)::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 50%;
      width: calc(100% - 1em);
      height: 0.0625em;
      background-color: #EEE;
      transform: translateX(-50%);
      transition: background-color var(--transition-time);
    }

    &:hover::after {
      background-color: transparent;
    }
  }

  .link-item {
    > div {
      display: inline-block;
      vertical-align: middle;
    }

    .icon {
      width: 5em;
      height: 100%;
    }

    .icon-content {
      position: relative;
      top: 20%;
      left: 20%;
      width: 60%;
      height: 60%;
      border-radius: 0.25em;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      transition: background var(--transition-time);
    }

    .info {
      padding-right: 1em;
      width: calc(100% - 5em);
      line-height: 1.5rem;

      > div {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .name {
      color: #222;
    }

    &[href="/"] .name {
      color: #888;
    }

    .desc {
      font-size: 0.8em;
      color: #607D8B;
    }
  }
}
</style>
