<docs>

## $emit

- change-page
- close

</docs>

<template>
  <div
    v-show="isShow"
    class="search-panel"
    @click="close()"
  >

    <!-- 遮罩 -->
    <div class="panel-cover"></div>

    <!-- 面板 -->
    <div class="panel-content">

      <b-input
        ref="searchInput"
        v-model="searchWords"
        type="search"
        class="search-input"
        icon="magnify"
        icon-clickable
        @icon-click="search()"
        @click.native.stop
        @keydown.native.enter="search()"
      ></b-input>

      <div class="search-result">
        <div
          v-for="(item, index) in searchResult"
          :key="index + '_' + item.itemName"
          :title="item.itemLabel"
          class="result-item"
          @click.stop="changePage(item.categoryName, item.itemName)"
        >
          <span class="item-title">{{ item.itemLabel }}</span>
          <b-tag
            class="item-tag"
            type="is-primary is-light"
            rounded
          >{{ item.categoryLabel }}</b-tag>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'SearchPanel',
  props: {

    /** 是否显示 */
    isShow: {
      type: Boolean,
      default: false
    },

    /** 内容列表 */
    itemList: {
      type: Array,
      default() {
        return [];
      }
    },

  },
  data() {
    return {

      /** 搜索关键词 */
      searchWords: '',

      /** 搜索结果 */
      searchResult: [],

    }
  },
  watch: {

    // 自动聚焦
    isShow: {
      handler(value) {

        if (!value) {
          return;
        }

        setTimeout(() => {

          /** @type {HTMLInputElement} */
          const el = this.$refs['searchInput'];

          if (el) {
            el.focus();
          }

        }, 200);

      }
    },

    // 自动清空搜索结果
    searchWords: {
      handler(value) {
        if (!value) {
          this.search();
        }
      }
    },

  },
  methods: {

    /** 跳转页面 */
    changePage(categoryName, itemName) {
      this.$emit('change-page', categoryName, itemName);
      this.close();
    },

    /** 关闭面板 */
    close() {
      this.$emit('close');
    },

    /** 搜索 */
    search() {

      const items = this.itemList;
      const keyword = this.searchWords.toLowerCase();

      if (keyword) {
        this.searchResult = items.filter((item) => {

          /** @type {string} */
          const itemName = (item['itemName'] || '').toLowerCase();

          /** @type {string} */
          const itemLabel = (item['itemLabel'] || '').toLowerCase();

          return (itemName.includes(keyword) || itemLabel.includes(keyword));

        });
      } else {
        this.searchResult = [];
      }

    },

  },
}
</script>

<style lang="less" scoped>
.search-panel {
  display: flex;
  justify-content: center;
  position: fixed !important;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
}

.panel-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  backdrop-filter: blur(0.25rem);
  opacity: 0.5;
}

.panel-content {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 2rem;
  width: 100%;
  max-width: 32rem;

  .search-input {
    position: relative;
    flex-shrink: 0;
  }

  .search-result {
    position: relative;
    flex-grow: 1;
    margin-top: 1rem;
    height: 0;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .result-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    background-color: #FFF;
    font-size: 0.875rem;
    line-height: 1;
    transition: opacity 0.25s;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    .item-title {
      display: inline-block;
      flex-grow: 1;
      width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .item-tag {
      flex-shrink: 0;
      margin-left: 1em;
    }
  }
}
</style>
