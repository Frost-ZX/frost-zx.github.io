<template>
  <div class="content-index">

    <router-link
      v-for="(item, index) in itemList"
      :key="index + '_' + item.itemName"
      :to="{
        name: 'Content',
        params: {
          category: item.categoryName,
          name: item.itemName,
        },
      }"
      class="index-item card"
    >
      <div class="card-content">
        <div class="info-row info-title">{{ item.itemLabel }}</div>
        <div class="info-row info-desc">
          <b-tag type="is-success" rounded>{{ item.categoryLabel }}</b-tag>
          <b-tag type="is-primary" rounded>{{ item.createdAt }}</b-tag>
        </div>
      </div>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'ContentIndex',
  props: {

    /** 内容列表 */
    itemList: {
      type: Array,
      default() {
        return [];
      }
    },

  },
}
</script>

<style lang="less" scoped>
.content-index {
  margin: 0 auto;
  padding: 2.5rem;
  box-sizing: border-box;
  max-width: 50rem;
  user-select: none;

  @media (max-width: 768px) {
    padding: 1rem;
  }
}

.index-item {
  margin-bottom: 1.5em;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  span {
    vertical-align: middle;
  }

  .info-row:not(:first-child) {
    margin-top: 1em;
  }

  .info-title {
    font-weight: bold;
  }

  .info-desc {
    text-align: right;
  }

  .tag:not(:first-child) {
    margin-left: 0.5em;
  }
}

</style>
