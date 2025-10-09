<script setup>
import { withBase } from 'vitepress'
import { ref, onBeforeMount } from 'vue';

/** 默认图标 */
const defaultAvatar = withBase('/default-avatar.svg');

/** 网站列表 - 正常访问 */
const siteListOnline = ref([

  // 博客
  {
    siteTitle: 'DSRBLOG',
    siteDesc: 'blog.dsrkafuu.net',
    siteUrl: 'https://blog.dsrkafuu.net/',
    iconUrl0: 'https://c.frost-zx.top/data/uploads/blog/favicon/blog.dsrkafuu.net.png',
    iconUrl1: '',
  },
  {
    siteTitle: 'haojunmei',
    siteDesc: 'www.haojunmei.top',
    siteUrl: 'https://www.haojunmei.top/',
    iconUrl0: 'https://haojunmei.top/usr/themes/images/haojunmei.png',
    iconUrl1: '',
  },
  {
    siteTitle: `Luminous' Home`,
    siteDesc: '记录生活中的点滴',
    siteUrl: 'https://luotianyi.vc/',
    iconUrl0: 'https://static.lty.fun/weblogo/my.jpg',
    iconUrl1: '',
  },
  {
    siteTitle: 'Panniyanjie 个人博客',
    siteDesc: '追随科技的脚步从不会停止',
    siteUrl: 'https://blog.wdztbil.top/',
    iconUrl0: 'https://blog.wdztbil.top/usr/themes/Poem/images/favicon.png',
    iconUrl1: '',
  },
  {
    siteTitle: 'qqAys',
    siteDesc: '学途漫漫，朋辈同行',
    siteUrl: 'https://qqays.xyz/',
    iconUrl0: 'https://c.frost-zx.top/data/uploads/blog/favicon/qqays.xyz.webp',
    iconUrl1: '',
  },
  {
    siteTitle: `Saiita's Blog`,
    siteDesc: '好记性不如烂笔头',
    siteUrl: 'https://www.saiita.com.cn/',
    iconUrl0: 'https://c.frost-zx.top/data/uploads/blog/favicon/www.saiita.com.cn.png',
    iconUrl1: '',
  },
  {
    siteTitle: 'zgcwkj',
    siteDesc: '做老实人，说老实话，干老实事，就是实事求是！',
    siteUrl: 'https://zgcwkj.cn/',
    iconUrl0: 'https://zgcwkj.cn/favicon.ico',
    iconUrl1: '',
  },
  {
    siteTitle: '冰屋小站',
    siteDesc: 'blog.biduang.cn',
    siteUrl: 'https://blog.biduang.cn/',
    iconUrl0: 'https://gravatar.loli.net/avatar/5273a4d195a45fd8b900545f63a94f58?s=200&r=G',
    iconUrl1: '',
  },
  {
    siteTitle: '高坂滑稽果的滑稽果农场',
    siteDesc: '一个萌新awa',
    siteUrl: 'https://funny233.xyz/',
    iconUrl0: 'https://funny233.xyz/favicon.ico',
    iconUrl1: '',
  },
  {
    siteTitle: '派兹的小站',
    siteDesc: '驶向未来之船',
    siteUrl: 'https://blog.blw.moe/',
    iconUrl0: 'https://global.cdn.blingwang.cn/blog/head.jpg',
    iconUrl1: '',
  },
  {
    siteTitle: '王鑫的小站',
    siteDesc: '活着就是为了折腾！',
    siteUrl: 'https://wxweb.xyz/',
    iconUrl0: 'https://pic.wxweb.xyz/pic/favicon.ico',
    iconUrl1: '',
  },
  {
    siteTitle: '御坂秋生の小窝',
    siteDesc: '不努力就只能听到别人的好消息',
    siteUrl: 'https://www.akio.top/',
    iconUrl0: 'https://webstatic.akio.top/user/NiuBoss123.jpg',
    iconUrl1: '',
  },

  // Minecraft
  {
    siteTitle: '麦子茶会服务器',
    siteDesc: '一个多元素的 Minecraft 服务器',
    siteUrl: 'https://www.wheat-server.top/',
    iconUrl0: 'https://www.wheat-server.top/upload/system/favicon.png',
    iconUrl1: '',
  },
  {
    siteTitle: '氢气工艺服务器',
    siteDesc: '氢气工艺，一个以多元化发展为主的多模组创造类服务器',
    siteUrl: 'https://wiki.hydcraft.cn/',
    iconUrl0: 'https://wiki.hydcraft.cn/favicon/logo.png',
    iconUrl1: '',
  },

]);

/** 网站列表 - 无法访问 */
const siteListOffline = ref([

  // 无法访问
  {
    siteTitle: '4SSH',
    siteDesc: '4ssh.cn',
    siteUrl: 'https://4ssh.cn/',
    iconUrl0: '',
    iconUrl1: '',
  },
  {
    siteTitle: 'AurLemon Blog',
    siteDesc: 'Aurora_Lemon 的个人博客，记录个人感想、生活、记录。',
    siteUrl: 'https://blog.aurlemon.top/',
    iconUrl0: 'https://blog.aurlemon.top/favicon.ico',
    iconUrl1: '',
  },
  {
    siteTitle: 'LuRenDing',
    siteDesc: 'blog.lurending.top',
    siteUrl: 'https://blog.lurending.top/',
    iconUrl0: 'https://blog.lurending.top/favicon.ico',
    iconUrl1: '',
  },
  {
    siteTitle: 'UNKNOW date',
    siteDesc: 'n-a.date',
    siteUrl: 'https://n-a.date/',
    iconUrl0: 'https://n-a.date/favicon.ico',
    iconUrl1: '',
  },
  {
    siteTitle: '安和Blog',
    siteDesc: 'nekocoffee.com',
    siteUrl: 'https://nekocoffee.com/',
    iconUrl0: 'https://i.imgtg.com/2022/06/23/7Sg4L.jpg',
    iconUrl1: '',
  },
  {
    siteTitle: '任我乐',
    siteDesc: '一条迷茫的死咸鱼。',
    siteUrl: 'https://renwole.com/',
    iconUrl0: 'https://renwole.com/wp-content/uploads/2017/04/cropped-Renwole-logo-192x192-192x192.png',
    iconUrl1: '',
  },
  {
    siteTitle: '软件探索',
    siteDesc: '分享好用的软件和网站',
    siteUrl: 'https://www.appts.cn/',
    iconUrl0: 'https://cdn.jsdelivr.net/gh/appexplore/cdn/appts@v1.0/img/logo.png',
    iconUrl1: '',
  },
  {
    siteTitle: '小哈博客',
    siteDesc: '一只硬核的小哈，欢迎访问',
    siteUrl: 'https://blog.littleha.cn/',
    iconUrl0: 'https://www.gravatar.com/avatar/baafed38e0ebbe171caa1cec177bf82e',
    iconUrl1: '',
  },
  {
    siteTitle: '云影云烟工作室',
    siteDesc: 'www.yunyingstudio.cn',
    siteUrl: 'https://www.yunyingstudio.cn/',
    iconUrl0: 'https://www.yunyingstudio.cn/logo.jpg',
    iconUrl1: '',
  },

]);

/** 加载链接项中的图标 */
function loadIcons() {
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
  loadIcons();
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
