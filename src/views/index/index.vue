<template>
  <div>
    <div class="header">
      <div class="address">
        <svg class="icon-address-location">
          <use xlink:href="#icon-address-location"></use>
        </svg>
        <span>正在识别地址...</span>
        <svg class="icon-address-arrow-bottom">
          <use xlink:href="#icon-address-arrow-bottom"></use>
        </svg>
      </div>
      <div class="search-wrapper">
        <div class="search">
          <svg class="icon-search">
            <use xlink:href="#icon-search"></use>
          </svg>
          <span>搜索饿了么商家、商品名称</span>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide food_types_container" v-for="(food, index) in foodItems" :key="index">
            <router-link class="food-item" v-for="item in food" :key="item.position" to="login">
              <img :src="`${baseImgUrl}/${item.image_hash}.jpeg`" :alt="item.name">
              <span>{{item.name}}</span>
            </router-link>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as userApi from '../../api/userApi'
  import Swiper from 'swiper'
  import _ from 'lodash'
  import 'swiper/dist/css/swiper.min.css'
  import {BASE_IMG_URL} from '../../config/env'

  export default {
    data() {
      return {
        foodItems: [],
        baseImgUrl: BASE_IMG_URL
      }
    },
    components: {},
    methods: {
      async getEntries() {
        const data = await userApi.getEntries();
        const temp = data.filter(item => {
          return item.template === 'main_template';
        })[0].entries;
        this.foodItems = _.chunk(temp, 10);
        console.log(this.foodItems);
        new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          loop: true
        })
      }
    },
    mounted() {
      this.getEntries();
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    background-image: linear-gradient(90deg, #0af, #0085ff);

    .address {
      height: 70px;
      padding: 20px 20px 0 20px;
      text-align: left;
      display: flex;
      align-items: center;

      .icon-address-location {
        width: 26px;
        height: 31px;
      }

      span {
        color: #fff;
        margin-left: 10px;
        font-size: 34px;
        font-weight: bold;
      }

      .icon-address-arrow-bottom {
        width: 14px;
        height: 8px;
        margin-left: 10px;
      }
    }

    .search-wrapper {
      position: sticky;
      top: 0;
      padding: 16px 28px;
      background-image: linear-gradient(90deg, #0af, #0085ff);

      .search {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 72px;
        background-color: #fff;

        .icon-search {
          width: 32px;
          height: 32px;
        }

        span {
          font-size: 28px;
          color: #999;
          margin-left: 10px;
        }
      }
    }
  }

  .body {
    .swiper-container {
      width: 750px;
      .swiper-wrapper {
        .food_types_container {
          width: 750px;
          display: flex;
          flex-wrap: wrap;
          .food-item {
            width: 150px;
            margin-top: 20px;
            text-align: center;
            img {
              width: 90px;
              height: 90px;
            }
            span {
              display: block;
              color: #666;
            }
          }

        }
      }
    }
  }
</style>
