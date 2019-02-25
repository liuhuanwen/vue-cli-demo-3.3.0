<template>
  <div class="item-wrapper">
    <div class="shop-info">
      <customImage class="image" :img="shopLogo"></customImage>
      <div class="main">
        <section class="shop-name">
          <span class="span-left">{{foodShop.name}}</span>
          <span class="span-right">···</span>
        </section>
        <section class="shop-rate">
          <div class="rate-wrapper">
            <div class="rate">
              <div class="rate-gray">
                <img :src="rateGrayImage" alt="">
              </div>
              <div class="rate-actived" :style="{width: `${foodShop.rating / 5 * 100}%`}">
                <img :src="rateActivedImage" alt="">
              </div>
            </div>
            <span>{{foodShop.rating}}</span>
            <span>月售{{foodShop.recent_order_num}}单</span>
          </div>
          <span v-show="foodShop.delivery_mode" class="span-right">蜂鸟专送</span>
        </section>
        <section class="shop-money-distance">
          <span
              class="money-limit">¥{{foodShop.float_minimum_order_amount}}起送 | 配送费¥{{foodShop.float_delivery_fee}}</span>
          <span class="distance-time">{{shopDistance}} | {{foodShop.float_minimum_order_amount}}分钟</span>
        </section>
      </div>
    </div>
    <div class="activity-wrapper">
      <div class="tag">
        <span v-for="item in foodShop.flavors">{{item.name}}</span>
      </div>
      <div class="activity-list-wrapper">
        <div class="activity-list">
          <div class="activity-item" v-for="(item, index) in activities" v-if="index < 2 || isShowMoreActivities">
            <span class="icon" :style="{backgroundColor: `#${item.icon_color}`}">{{item.icon_name}}</span>
            <span class="content">{{item.description}}</span>
          </div>
        </div>
        <div v-if="activities.length > 2" class="activity-count" @click="handleShowMoreActivities()">
          <span>{{activities.length}}个活动</span>
          <svg class="icon-arrow-bottom" :class="{'icon-arrow-bottom-transform': isShowMoreActivities}"
               fill="rgb(153, 153, 153)">
            <use xlink:href="#icon-arrow-bottom"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {RATE_GRAY, RATE_ACTIVED} from '../../config/base64Image'
  import {BASE_IMG_URL} from '../../config/env'
  import customImage from '../../components/customImage'
  import {getFullImageName, formatDistance} from '../../common/util'

  export default {
    props: {
      foodShop: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        rateGrayImage: RATE_GRAY,
        rateActivedImage: RATE_ACTIVED,
        isShowMoreActivities: false
      }
    },
    components: {
      customImage
    },
    computed: {
      shopLogo() {
        return `${BASE_IMG_URL}/${getFullImageName(this.foodShop.image_path)}`;
      },
      shopDistance() {
        return formatDistance(this.foodShop.distance);
      },
      activities() {
        return [...this.foodShop.activities, ...this.foodShop.supports];
      }
    },
    methods: {
      handleShowMoreActivities() {
        this.isShowMoreActivities = !this.isShowMoreActivities;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .item-wrapper {
    padding: 30px 20px;
    border-bottom: 1px solid #fef;

    .shop-info {
      display: flex;

      .image {
        width: 130px;
        height: 130px;
        border-radius: 4px;
      }

      .main {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        margin-left: 20px;

        section {
          line-height: 42px;
        }

        .shop-name {
          display: flex;
          justify-content: space-between;

          .span-left {
            font-size: 30px;
          }

          .span-right {
            font-size: 24px;
          }
        }

        .shop-rate {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 22px;
          margin: 10px 0;

          .rate-wrapper {
            display: flex;
            align-items: center;
            line-height: 20px;

            .rate {
              position: relative;

              .rate-gray, .rate-actived {
                display: flex;

                img {
                  width: 112px;
                  height: 20px;
                  max-width: 112px;
                }
              }

              .rate-actived {
                position: absolute;
                overflow: hidden;
                top: 0;
                left: 0;
              }
            }

            span {
              margin-left: 10px;
            }
          }

          .span-right {
            background-color: rgb(0, 151, 255);
            border-radius: 4px;
            padding: 2px;
            color: #fff;
            height: 24px;
            line-height: 24px;
          }
        }

        .shop-money-distance {
          display: flex;
          justify-content: space-between;
          font-size: 22px;
          margin-top: 5px;
        }
      }
    }

    .activity-wrapper {
      margin-left: 150px;
      margin-top: 16px;

      .tag {
        text-align: left;

        span {
          border: 1px solid rgb(221, 221, 221);
          border-radius: 4px;
          padding: 2px;
          color: rgb(102, 102, 102);
          height: 22px;
          line-height: 22px;
          font-size: 20px;
          margin-right: 10px;
        }
      }

      .activity-list-wrapper {
        display: flex;
        flex: 1;
        justify-content: space-between;
        margin-top: 30px;

        .activity-list {
          display: flex;
          flex-direction: column;
          margin-right: 10px;
          overflow: hidden;

          .activity-item {
            display: flex;
            font-size: 22px;
            margin-bottom: 7px;

            .icon {
              background-color: rgb(0, 151, 255);
              border-radius: 4px;
              padding: 2px;
              color: #fff;
              line-height: 24px;
            }

            .content {
              display: inline-block;
              margin-left: 8px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }

        .activity-count {
          width: 160px;
          text-align: right;

          span {
            font-size: 22px;
            vertical-align: middle;
          }

          .icon-arrow-bottom {
            width: 14px;
            height: 8px;
            margin-left: 6px;
            vertical-align: middle;
            transform: rotate(0deg);
            transition: all .3s ease-in-out;
          }

          .icon-arrow-bottom-transform {
            transform: rotate(180deg);
          }
        }
      }
    }
  }
</style>
