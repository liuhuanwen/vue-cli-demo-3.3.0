<template>
  <ul>
    <li is="food-shop-item" v-for="(foodShop, index) in foodShopList" :key="index" :foodShop="foodShop.restaurant"></li>
    <li class="loading">
      <div v-if="loading" class="span-wrapper">
        <span>正在加载...</span>
      </div>
      <div class="placeholder"></div>
    </li>
  </ul>
</template>

<script>
  import foodShopItem from './foodShopItem'

  export default {
    props: {
      foodShopList: {
        type: Array,
        required: true
      },
      loading: {
        type: Boolean,
        required: false,
        default: false
      }
    },
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