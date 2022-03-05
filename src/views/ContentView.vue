<template>
  <div class="content-view" :class="{ 'show-sidebar': isShowSidebar }">

    <!-- 侧边栏 -->
    <b-sidebar
      class="content-sidebar"
      mobile="hide"
      position="static"
      type="is-light"
      :open="true"
      :reduce="false"
      fullheight
    >
      <b-menu :accordion="false" :activable="false">

        <b-menu-list label="文章信息">
          <!-- 创建日期 -->
          <b-menu-item
            icon="creation"
            :label="'创建：' + contentInfo.createdAt"
          ></b-menu-item>
          <!-- 更新日期 -->
          <b-menu-item
            icon="update"
            :label="'更新：' + contentInfo.updatedAt"
          ></b-menu-item>
        </b-menu-list>

        <b-menu-list label="文章目录">
          <!-- 分类项 -->
          <b-menu-item
            v-for="category in contentList"
            v-show="!category.isHide"
            :key="category.name"
            :active="category.name === contentInfo.category"
            :expanded="Boolean(category.isExpanded)"
            :label="category.label"
            icon="format-list-bulleted-square"
          >
            <!-- 内容项 -->
            <b-menu-item
              v-for="item in category.items"
              :key="item.name"
              :active="(
                category.name === contentInfo.category && item.name === contentInfo.itemName
              )"
              :label="item.title"
              icon="file-document-outline"
              @click="changePage(category.name, item.name)"
            ></b-menu-item>
          </b-menu-item>
        </b-menu-list>

      </b-menu>
    </b-sidebar>

    <div class="sidebar-toggle" @click="toggleSidebar()">
      <b-icon v-if="isShowSidebar" icon="chevron-left" size="is-small" />
      <b-icon v-else icon="chevron-right" size="is-small" />
    </div>

    <!-- 内容区域 -->
    <div class="content-wrapper">

      <!-- 文章主页 -->
      <template v-if="isIndex">
        <content-index
          :item-list="contentListAll"
        />
      </template>

      <!-- 文章内容页 -->
      <template v-else>
        <markdown-parser
          :md-src="contentData"
        />
        <b-loading
          :active="isLoading"
          :can-cancel="false"
          :is-full-page="false"
        />
      </template>

    </div>

  </div>
</template>

<script>
import { setTitle, toast } from '@/assets/js/utils';
import { getContentFile } from '@/request/index';

import ContentIndex from '@/components/ContentIndex';
import MarkdownParser from '@/components/MarkdownParser';

export default {
  name: 'ContentView',
  components: {
    ContentIndex,
    MarkdownParser,
  },
  data() {
    return {

      /** 是否为文章主页 */
      isIndex: false,

      /** 是否正在载入内容 */
      isLoading: false,

      /** 是否在移动端显示侧边栏 */
      isShowSidebar: false,

      /** 内容正文 */
      contentData: '',

      /** 内容信息 */
      contentInfo: {
        category: '',
        createdAt: '',
        updatedAt: '',
        itemName: '',
        itemtitle: '',
      },

      /** 内容列表 */
      contentList: [{
        name: '',
        label: '',
        items: [{
            name: '',
            title: '',
            createdAt: '',
            updatedAt: '',
        }],
        isHide: true,
        isExpanded: false,
      }],

      /** 内容列表（全部） */
      contentListAll: [],

    }
  },
  watch: {

    // 切换页面时刷新内容
    '$route.path': {
      handler() {
        this.updateContents();
      }
    },

  },
  created() {
    this.init();
  },
  methods: {

    /** 初始化 */
    init() {

      const config = window['appConfig'];

      if (config) {

        const listCurr = JSON.parse(JSON.stringify(this.contentList));
        const listConfig = (config.contentList || []);

        listConfig.forEach((item) => {
          listCurr.push(item);
        });

        this.contentList = listCurr;
        this.initContentListAll();

      } else {
        toast({
          indefinite: true,
          message: '读取配置文件失败！',
          type: 'is-danger',
        });
        return;
      }

      this.updateContents();

    },

    /** 初始化内容列表 */
    initContentListAll() {

      const src = this.contentList;

      /** @type {{ createdAt: string }[]} */
      const result = [];

      src.forEach((category) => {

        if (category.isHide) {
          return;
        }

        const {
          name: categoryName,
          label: categoryLabel,
        } = category;

        category.items.forEach((item) => {
          item['categoryName'] = categoryName;
          item['categoryLabel'] = categoryLabel;
          item['itemName'] = item.name;
          item['itemLabel'] = item.title;
          result.push(item);
        });

      });

      result.sort((a, b) => {

        const dateA = (a.createdAt || '');
        const dateB = (b.createdAt || '');

        return dateB.localeCompare(dateA, 'co');

      });

      this.contentListAll = result;

    },

    /** 切换页面 */
    changePage(categoryName, itemName) {
      this.$router.push({
        name: 'Content',
        params: {
          category: categoryName,
          name: itemName,
        }
      });
    },

    /**
     * @description 获取正文内容文件
     * @param {object} options
     * @param {string} options.category 分类名称
     * @param {string} options.itemName 内容名称
     */
    getContentFile(options) {

      this.setLoading(true);
      this.updateContentInfo(options);

      getContentFile(options).then((res) => {

        this.setLoading(false);

        const { status, data } = res;

        if (status === 200) {
          this.contentData = (data || '');
        } else if (status === 404) {
          toast({
            duration: 3000,
            message: `内容 /${options.category}/${options.itemName}.md 不存在。`,
            type: 'is-warning',
          });
          this.contentData = '';
        }

      }).catch((error) => {

        console.error('[请求失败]', error);
        toast({
          duration: 3000,
          message: '请求失败！',
          type: 'is-danger',
        });
        this.setLoading(false);
        this.contentData = '';

      });

    },

    /**
     * @description 设置载入状态
     * @param {boolean} isLoading
     */
    setLoading(isLoading = false) {
      this.isLoading = isLoading;
    },

    /** 切换侧边栏显示隐藏 */
    toggleSidebar() {
      this.isShowSidebar = !this.isShowSidebar;
    },

    /** 更新内容 */
    updateContents() {

      const {
        name: routeName,
        params: routeParams,
      } = this.$route;

      const isContentPage = (routeName === 'Content');

      if (isContentPage) {
        this.getContentFile({
          category: routeParams.category,
          itemName: routeParams.name,
        });
      } else {
        this.updateContentInfo({
          isIndex: true,
        });
      }

      this.isIndex = !isContentPage;

    },

    /**
     * @description 更新内容信息
     * @param {object} options
     * @param {string} options.category 分类名称
     * @param {string} options.itemName 内容名称
     * @param {boolean} [options.isIndex] 是否为文章主页
     */
    updateContentInfo(options) {

      setTitle();

      const {
        category,
        itemName,
        isIndex = false,
      } = options;

      const { contentInfo, contentList } = this;

      if (isIndex) {
        setTitle('文章');
        contentInfo.category = 'index';
        contentInfo.createdAt = '2022-03-01';
        contentInfo.updatedAt = '2022-03-05';
        contentInfo.itemName = 'index';
        contentInfo.itemtitle = '文章';
        contentList.forEach((item) => {
          item.isExpanded = false;
        });
        return;
      }

      if (!(category && itemName)) {
        console.error('更新内容信息失败！');
        return;
      }

      const categoryInfo = contentList.find((item) => {
        return (item.name === category);
      });

      if (categoryInfo) {
        // 标记展开
        categoryInfo.isExpanded = true;
      } else {
        console.error('获取分类信息失败！');
        return;
      }

      const itemInfo = categoryInfo.items.find((item) => {
        return (item.name === itemName);
      });

      if (itemInfo) {
        setTitle(itemInfo.title);
        contentInfo.category = category;
        contentInfo.createdAt = (itemInfo.createdAt || '无');
        contentInfo.updatedAt = (itemInfo.updatedAt || '无');
        contentInfo.itemName = (itemInfo.name || '');
        contentInfo.itemtitle = (itemInfo.title || '无标题');
      } else {
        console.error('获取内容信息失败！');
      }

    },

  },
}
</script>

<style lang="less" scoped>
.content-view {
  display: flex;

  > * {
    position: relative;
    height: 100%;
  }

  .content-sidebar {
    flex-shrink: 0;
    z-index: 12;
  }

  /deep/ .sidebar-content {
    width: 320px;
  }

  .content-wrapper {
    width: 0;
    flex-grow: 1;
    z-index: 11;
    overflow-y: auto;
  }
}

@sidebarBtnWidth: 1.25rem;
@sidebarBtnOffset: 1rem;

.sidebar-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 0%;
  z-index: 50;
  width: @sidebarBtnWidth;
  height: 4em;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0 0.25rem 0.25rem 0;
  background-color: var(--color-primary);
  color: #FFF;
  font-size: 1rem;
  opacity: 0.8;
  transform: translateY(-50%);

  @media screen and (max-width: 768px) {
    display: flex;
  }
}

.show-sidebar {
  .content-sidebar {
    width: calc(100% - @sidebarBtnWidth - @sidebarBtnOffset);
  }

  .sidebar-toggle {
    left: unset;
    right: @sidebarBtnOffset;
    opacity: 1;
  }

  .content-wrapper {
    display: none;
  }

  /deep/ .sidebar-content {
    display: block !important;
    width: 100% !important;
    height: 100% !important;
    overflow-y: auto !important;
  }
}
</style>
