<template>
  <div class="item-wrapper">
    <div class="shop-info">
      <img src="../../assets/avatar-default.png" alt="">
      <div class="main">
        <section class="shop-name">
          <span class="span-left">谭江麻辣香锅</span>
          <span class="span-right">···</span>
        </section>
        <section class="shop-rate">
          <div class="rate-wrapper">
            <!--<img src="" alt="">-->
            <span>4.1</span>
            <span>月售696单</span>
          </div>
          <span class="span-right">蜂鸟专送</span>
        </section>
        <section class="shop-money-distance">
          <span class="money-limit">¥20起送 | 配送费¥2.5</span>
          <span class="distance-time">1.51km | 40分钟</span>
        </section>
      </div>
    </div>
    <div class="activity-wrapper">
      <div class="tag">
        <span>香锅砂锅</span>
        <span>品质联盟</span>
      </div>
      <div class="activity-list-wrapper">
        <div class="activity-list">
          <div class="activity-item">
            <span class="icon">减</span>
            <span class="content">满28减17，满48减23，满68减28</span>
          </div>
          <div class="activity-item">
            <span class="icon">减</span>
            <span class="content">满28减17，满48减23，满68减28</span>
          </div>
        </div>
        <div class="activity-count">
          <span>7个活动</span>
          <svg class="icon-arrow-bottom" fill="rgb(153, 153, 153)">
            <use xlink:href="#icon-arrow-bottom"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .item-wrapper {
    padding: 30px 20px;
    border-bottom: 1px solid #fef;

    .shop-info {
      display: flex;

      img {
        width: 130px;
        height: 130px;
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
          font-size: 22px;

          .rate-wrapper {
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
        }
      }
    }

    .activity-wrapper {
      margin-left: 150px;
      margin-top: 10px;

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
        flex-grow: 1;
        justify-content: space-between;
        margin-top: 10px;
        .activity-list {
          .activity-item {
            font-size: 22px;
            line-height: 42px;
            .icon {
              background-color: rgb(0, 151, 255);
              border-radius: 4px;
              padding: 0 4px;
              color: #fff;
              line-height: 22px;
            }

            .content {
              margin-left: 5px;
              line-height: 22px;
            }
          }
        }

        .activity-count {
          span {
            font-size: 22px;
          }

          .icon-arrow-bottom {
            width: 14px;
            height: 8px;
            margin-left: 6px;
          }
        }
      }
    }
  }
</style>