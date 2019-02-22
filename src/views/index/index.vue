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
      <swiper :count="2">
        <swiper-item>
          <div class="item"></div>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
  import swiper from '../../components/swiper/swiper';
  import swiperItem from '../../components/swiper/swiperItem';

  export default {
    components: {
      swiper,
      swiperItem
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
    .item {
      width: 750px;
      height: 350px;
      background-color: #dddddd;
    }
  }
</style>
