<template>
  <div class="container">
    <div class="header" @click="handleClickHeader()">
      <div class="avatar-wrapper">
        <img :src="avatar" alt="头像"/>
      </div>
      <div class="profile-wrapper">
        <p class="username">{{user.username ? user.username : '登录/注册'}}</p>
        <p class="mobile">
          <svg>
            <use xlink:href="#icon-mobile"></use>
          </svg>
          <span>&nbsp;{{encryptionMobile ? encryptionMobile : '登录后享受更多特权'}}</span>
        </p>
      </div>
      <svg fill="#fff" class="arrow">
        <use xlink:href="#icon-arrow-right"></use>
      </svg>
    </div>
    <div class="body">
      <section>
        <a class="red-packet-wrapper">
          <p v-if="user.gift_amount || user.gift_amount === 0">
            <span class="count">{{user.gift_amount}}</span>
            <span class="unit">个</span>
          </p>
          <svg v-if="user.gift_amount === undefined" fill="#ff5f3e" class="icon-red-packet">
            <use xlink:href="#icon-red-packet"></use>
          </svg>
          <p class="title">红包</p>
        </a>
        <a class="gold-wrapper">
          <p v-if="user.point || user.point === 0">
            <span class="count">{{user.point}}</span>
            <span class="unit">个</span>
          </p>
          <svg v-if="user.point === undefined" fill="#6ac20b" class="icon-gold">
            <use xlink:href="#icon-gold"></use>
          </svg>
          <p class="title">金币</p>
        </a>
      </section>
      <section class="item-wrapper">
        <a class="item">
          <svg class="item-icon">
            <use xlink:href="#icon-address"></use>
          </svg>
          <span class="item-title">我的地址</span>
          <svg fill="#ccc" class="item-arrow">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
          <div class="item-bottom-line item-bottom-line-hidden"></div>
        </a>
      </section>
      <section class="item-wrapper">
        <a class="item">
          <svg class="item-icon">
            <use xlink:href="#icon-gold-market"></use>
          </svg>
          <span class="item-title">金币商城</span>
          <svg fill="#ccc" class="item-arrow">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
          <div class="item-bottom-line"></div>
        </a>
        <a class="item">
          <svg class="item-icon">
            <use xlink:href="#icon-share"></use>
          </svg>
          <span class="item-title">分享拿10元现金</span>
          <svg fill="#ccc" class="item-arrow">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
          <div class="item-bottom-line item-bottom-line-hidden"></div>
        </a>
      </section>
      <section class="item-wrapper">
        <a class="item">
          <svg class="item-icon">
            <use xlink:href="#icon-service"></use>
          </svg>
          <span class="item-title">我的客服</span>
          <svg fill="#ccc" class="item-arrow">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
          <div class="item-bottom-line"></div>
        </a>
        <a class="item">
          <svg class="item-icon">
            <use xlink:href="#icon-download"></use>
          </svg>
          <span class="item-title">下载饿了么APP</span>
          <svg fill="#ccc" class="item-arrow">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
          <div class="item-bottom-line"></div>
        </a>
        <a class="item">
          <svg class="item-icon">
            <use xlink:href="#icon-rule"></use>
          </svg>
          <span class="item-title">规则中心</span>
          <svg fill="#ccc" class="item-arrow">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
          <div class="item-bottom-line item-bottom-line-hidden"></div>
        </a>
      </section>
    </div>
  </div>
</template>

<script>
  import avatarImg from '../../assets/avatar-default.png';
  import {mapState, mapActions} from 'vuex';

  export default {
    computed: {
      ...mapState([
        'user',
        'userId'
      ]),
      encryptionMobile() {
        if (this.user.mobile) {
          return this.user.mobile.substring(0, 3) + '****' + this.user.mobile.substring(7, 11);
        }
        return '';
      },
      avatar() {
        if (this.user.avatar) {
          return `https://fuss10.elemecdn.com/c/d9/${this.user.avatar}.jpeg`;
        } else {
          return avatarImg;
        }
      }
    },
    methods: {
      ...mapActions([
        'getUserInfo'
      ]),
      handleClickHeader() {
        this.$router.push('login');
      }
    },
    mounted() {
      if (this.userId) {
        this.getUserInfo(this.userId);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 750px;
    height: 100vh;
    background-color: #f5f5f5;

    .header {
      width: 750px;
      height: 220px;
      background-image: linear-gradient(90deg, #0af, #0085ff);

      .avatar-wrapper {
        position: absolute;
        top: 50px;
        left: 32px;
        width: 120px;
        height: 120px;

        img {
          width: 100%;
          border-radius: 50%;
        }
      }

      .profile-wrapper {
        width: 500px;
        position: relative;
        color: #fff;
        left: 184px;
        text-align: left;
        top: 50%;
        transform: translateY(-50%);

        .username {
          font-size: 44px;
          font-weight: bold;
        }

        .mobile {
          margin-top: 8px;
          line-height: 14px;

          svg {
            width: 14px;
            height: 22px;
          }

          span {
            font-size: 24px;
          }
        }
      }

      .arrow {
        position: absolute;
        width: 32px;
        height: 32px;
        right: 32px;
      }
    }

    .body {
      .red-packet-wrapper {
        display: inline-block;
        box-sizing: border-box;
        width: 375px;
        padding: 30px 0;
        border-right: 1px solid #eee;
        background-color: #fff;

        .icon-red-packet {
          width: 52px;
          height: 52px;
        }

        .count {
          font-size: 52px;
          font-weight: bold;
          color: rgb(255, 95, 62);
        }

        .unit {
          font-size: 28px;
          color: rgb(255, 95, 62);
        }

        .title {
          font-size: 24px;
        }
      }

      .gold-wrapper {
        display: inline-block;
        width: 375px;
        padding: 30px 0;
        background-color: #fff;

        .icon-gold {
          width: 52px;
          height: 52px;
        }

        .count {
          font-size: 52px;
          font-weight: bold;
          color: rgb(106, 194, 11);
        }

        .unit {
          font-size: 28px;
          color: rgb(106, 194, 11);
        }

        .title {
          font-size: 24px;
        }
      }

      .item-wrapper {
        margin-top: 20px;
        background-color: #fff;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;

        .item {
          display: block;
          position: relative;
          height: 88px;
          text-align: left;


          .item-icon {
            position: absolute;
            left: 32px;
            width: 36px;
            height: 36px;
            top: 50%;
            transform: translateY(-50%);
          }

          .item-title {
            position: absolute;
            font-size: 32px;
            left: 100px;
            top: 50%;
            transform: translateY(-50%);
          }

          .item-arrow {
            position: absolute;
            width: 32px;
            height: 32px;
            right: 32px;
            top: 50%;
            transform: translateY(-50%);
          }

          .item-bottom-line {
            position: absolute;
            width: 660px;
            height: 1px;
            background-color: #eee;
            bottom: 0;
            left: 90px;
          }

          .item-bottom-line-hidden {
            display: none;
          }
        }
      }
    }
  }

</style>
