<template>
  <div>
    <div class="header">
      <div class="address">
        <svg class="icon-address-location">
          <use xlink:href="#icon-address-location"></use>
        </svg>
        <span>正在识别地址...</span>
        <svg fill="#fff" class="icon-address-arrow-bottom">
          <use xlink:href="#icon-arrow-bottom"></use>
        </svg>
      </div>
    </div>
    <div class="search-wrapper">
      <div class="search">
        <svg class="icon-search">
          <use xlink:href="#icon-search"></use>
        </svg>
        <span>搜索饿了么商家、商品名称</span>
      </div>
    </div>
    <div class="body">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="food_types_container" v-for="(food, index) in foodItems" :key="index">
          <router-link class="food-item" v-for="item in food" :key="item.position" to="login">
            <img :src="`${baseImgUrl}/${item.image_hash}.jpeg`" :alt="item.name">
            <span>{{item.name}}</span>
          </router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="middle">
        <div class="vip-wrapper">
          <div class="vip">
            <img src="../../assets/icon-vip.png" alt="会员">
            <span class="span1">超级会员&nbsp;·&nbsp;</span>
            <span class="span2">每月领20元红包</span>
          </div>
          <div class="open-vip-wrapper">
            <div class="open-vip">
              <span>立即开通</span>
              <svg fill="#000" class="icon-arrow">
                <use xlink:href="#icon-arrow-right"></use>
              </svg>
            </div>
          </div>
        </div>
        <div class="activity-wrapper">
          <div class="activity-text">
            <h3>品质套餐</h3>
            <span>搭配齐全吃得好</span>
            <span class="span">立即抢购></span>
          </div>
          <img src="../../assets/icon-activity.png" alt="">
        </div>
        <swiper class="swiper-banner" :options="swiperBannerOption">
          <swiper-slide v-for="(banner, index) in bannerItems" :key="index">
            <router-link to="login">
              <img :src="`${baseImgUrl}/${banner.image_hash}.jpeg`" alt="">
            </router-link>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="shoplist-title">推荐商家</div>
    </div>
    <div class="filter-wrapper">
      <div class="filter">
        <a>
          <span>综合排序</span>
          <svg fill="rgb(51, 51, 51)" class="icon-arrow-bottom">
            <use xlink:href="#icon-arrow-bottom"></use>
          </svg>

        </a>
        <a>距离最近</a>
        <a>品质联盟</a>
        <a>
          <span>筛选</span>
          <svg fill="#666" class="icon-more-filter">
            <use xlink:href="#icon-more-filter"></use>
          </svg>
        </a>
      </div>
    </div>
    <food-shop-list :food-shop-list="restaurantItems" :loading="loadingMoreRestaurant"></food-shop-list>
  </div>
</template>

<script>
  import * as userApi from '../../api/userApi'
  import _ from 'lodash'
  import {BASE_IMG_URL} from '../../config/env'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  import foodShopList from '../../components/food/foodShopList'
  import {isReachBottom} from '../../common/util'

  export default {
    data() {
      return {
        foodItems: [],
        baseImgUrl: BASE_IMG_URL,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
        bannerItems: [],
        swiperBannerOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: true
        },
        restaurantItems: [],
        hasNext: false,
        loadingMoreRestaurant: false
      }
    },
    components: {
      swiper,
      swiperSlide,
      foodShopList
    },
    watch: {
      loadingMoreRestaurant(newValue) {
        if (newValue) {
          window.removeEventListener('scroll', this.handleMore, true);
        } else {
          window.addEventListener('scroll', this.handleMore, true);
        }
      }
    },
    methods: {
      async getEntries() {
        const data = await userApi.getEntries();
        const temp = data.filter(item => {
          return item.template === 'main_template';
        })[0].entries;
        this.foodItems = _.chunk(temp, 10);
      },
      async getBanners() {
        this.bannerItems = await userApi.getBanners();
      },
      async getRestaurants() {
        const data = await userApi.getRestaurants();
        this.restaurantItems.push(...data.items);
        this.loadingMoreRestaurant = false;
        this.hasNext = data.has_next;
      },
      handleMore() {
        this.loadingMoreRestaurant = isReachBottom() && this.hasNext;
        if (this.loadingMoreRestaurant) {
          this.getRestaurants();
        }
      }
    },
    mounted() {
      this.restaurantItems = [];
      this.getEntries();
      this.getBanners();
      this.getRestaurants();
      window.addEventListener('scroll', this.handleMore, true);
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
  }

  .search-wrapper {
    position: sticky;
    top: 0;
    padding: 16px 28px;
    z-index: 999;
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

  .body {
    .swiper {
      width: 750px;
      overflow-y: visible;

      .food_types_container {
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
            font-size: 24px;
          }
        }
      }

      .swiper-pagination {
        position: static;
        bottom: 0;
      }
    }

    .middle {
      padding: 0 20px 20px 20px;

      .vip-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 80px;
        background-image: linear-gradient(90deg, #ffefc4, #f3dda0);
        border-radius: 6px;
        padding-left: 30px;
        padding-right: 20px;

        .vip {
          display: flex;
          align-items: center;

          img {
            width: 32px;
            height: 32px;
          }

          .span1 {
            margin-left: 10px;
            font-size: 28px;
          }

          .span2 {
            font-size: 24px;
          }
        }
      }

      .open-vip-wrapper {
        display: flex;
        align-items: center;

        span {
          font-size: 24px;
        }

        .icon-arrow {
          width: 20px;
          height: 20px;
        }
      }

      .activity-wrapper {
        position: relative;
        margin-top: 10px;
        height: 220px;
        background-color: #f8f8f8;
        border-radius: 6px;

        .activity-text {
          position: absolute;
          left: 30px;
          top: 20px;
          text-align: left;

          h3 {
            font-size: 34px;
          }

          span {
            display: block;
            font-size: 28px;
            color: #666;
          }

          .span {
            font-size: 24px;
            color: #af8260;
            margin-top: 10px;
          }
        }

        img {
          position: absolute;
          width: 282px;
          right: 30px;
          top: 20px;
        }
      }

      .swiper-banner {
        margin-top: 10px;

        .swiper-pagination {
          bottom: 0;
        }
      }
    }

    .shoplist-title {
      font-size: 30px;
      line-height: 72px;
      height: 72px;
    }

    .shoplist-title:before, .shoplist-title:after {
      display: inline-block;
      content: "";
      width: 60px;
      height: 1px;
      background-color: #999;
      vertical-align: middle;
    }

    .shoplist-title:before {
      margin-right: 30px;
    }

    .shoplist-title:after {
      margin-left: 30px;
    }
  }

  .filter-wrapper {
    position: sticky;
    top: 104px;
    z-index: 999;
    background-color: #fff;
    .filter {
      display: flex;
      height: 72px;
      align-items: center;
      border-bottom: 1px solid #fef;

      a {
        display: table-cell;
        width: 25%;
        font-size: 28px;

        span {
          vertical-align: middle;
        }

        .icon-arrow-bottom {
          width: 14px;
          height: 8px;
          margin-left: 6px;
          vertical-align: middle;
        }

        .icon-more-filter {
          width: 26px;
          height: 26px;
          margin-left: 6px;
          vertical-align: middle;
        }
      }
    }
  }
</style>
