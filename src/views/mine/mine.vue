<template>
  <div class="container">
    <div class="header">
      <div class="avatar-wrapper">
        <img :src="avatar" alt="头像"/>
      </div>
      <div class="profile-wrapper">
        <p class="username">登录/注册</p>
        <p class="mobile">
          <svg>
            <use xlink:href="#icon-mobile"></use>
          </svg>
          <span>&nbsp;登录后享受更多特权</span>
        </p>
      </div>
      <svg class="arrow">
        <use xlink:href="#icon-arrow-right"></use>
      </svg>
    </div>
    <div class="body">
      <section>
        <a class="red-packet-wrapper">
          <p>
            <span class="count">8</span>
            <span class="unit">个</span>
          </p>
          <p class="title">红包</p>
        </a>
        <a class="gold-wrapper">
          <p>
            <span class="count">141</span>
            <span class="unit">个</span>
          </p>
          <p class="title">金币</p>
        </a>
      </section>
      <section class="item-wrapper">
        <a class="item">
          <svg class="item-icon">
            <use xlink:href="#icon-address"></use>
          </svg>
          <span class="item-title">我的地址</span>
          <svg class="item-arrow">
            <use></use>
          </svg>
        </a>
      </section>
    </div>
  </div>
</template>

<script>
  import avatarImg from '../../assets/avatar-default.png';
  import svgIcon from '../../components/svgIcon';

  export default {
    data() {
      return {
        avatar: avatarImg
      }
    },
    components: {
      svgIcon
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 750px;
    height: 1334px;
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

        .count {
          font-size: 48px;
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

        .count {
          font-size: 48px;
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

        .item {
          display: block;
          height: 88px;
          line-height: 88px;
          text-align: left;
          .item-icon {
            margin-left: 32px;
            width: 36px;
            height: 36px;
            vertical-align: middle;
          }

          .item-title {
            line-height: 88px;
            font-size: 32px;
            margin-left: 20px;
          }
        }
      }
    }
  }

</style>
