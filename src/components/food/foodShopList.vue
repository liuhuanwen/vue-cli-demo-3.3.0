<template>
  <ul>
    <li is="food-shop-item"></li>
    <li v-if="true" class="loading">
      <div class="span-wrapper">
        <span>正在加载...</span>
      </div>
      <div class="placeholder"></div>
    </li>
  </ul>
</template>

<script>
  import foodShopItem from './foodShopItem'

  export default {
    components: {
      foodShopItem
    }
  }
</script>

<style lang="scss" scoped>
  .loading {
    .span-wrapper {
      height: 88px;
      line-height: 88px;
      color: #999;
      span {
        font-size: 30px;
      }
    }
    .placeholder {
      height: 100px;
      background-color: #fff;
    }
  }
</style>