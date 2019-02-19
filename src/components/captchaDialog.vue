<template>
  <div class="captcha-wrapper" v-if="isShowCaptcha">
    <div class="captcha">
      <h1 class="title">请填写图形验证码</h1>
      <div class="input-wrapper">
        <input type="text" v-model="captchaValue"/>
        <img :src="captcha.captcha_image" alt="图形验证码"/>
      </div>
      <div class="btn-wrapper">
        <button class="cancel" @click="handleCancel()">取消</button>
        <button class="ok" @click="handleOk()">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
  import * as userApi from "../api/userApi";
  import {mapState, mapMutations} from 'vuex';

  export default {
    data() {
      return {
        captchaValue: '',
        captcha: {
          captcha_hash: '',
          captcha_image: ''
        }
      }
    },
    computed: {
      ...mapState([
        'user',
        'isShowCaptcha'
      ])
    },
    watch: {
      isShowCaptcha: function (newValue) {
        if (newValue) {
          this.handleGetCaptcha();
        }
      }
    },
    methods: {
      ...mapMutations([
        'HIDE_CAPTCHA'
      ]),
      async handleGetCaptcha() {
        try {
          this.captcha = await userApi.getCaptcha(this.user.mobile);
        } catch (err) {
          console.log('获取验证码失败');
        }
      },
      async handleGetMobileCode(captchaHash, captchaValue) {
        try {
          const data = await userApi.sendMobileCode(this.user.mobile, captchaHash, captchaValue);
        } catch (err) {
          if (err.response && err.response.status === 400) {
            if (err.response.data.name === 'NEED_CAPTCHA') {

            }
          }
        }
      },
      handleCancel() {
        this.captchaValue = '';
        this.HIDE_CAPTCHA();
      },
      handleOk() {
        if (this.captchaValue) {
          this.handleGetMobileCode(this.captcha.captcha_hash, this.captchaValue)
        } else {
          this.handleGetCaptcha();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .captcha-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .4);

    .captcha {
      width: 580px;
      background-color: hsla(0, 0%, 100%, .9);
      position: absolute;
      border-radius: 12px;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);

      .title {
        font-size: 40px;
        margin: 40px 0;
      }

      .input-wrapper {
        position: relative;
        width: 540px;
        height: 80px;
        line-height: 80px;
        margin-left: 20px;
        margin-bottom: 60px;
        background-color: #fff;

        input {
          position: absolute;
          width: 300px;
          height: 80px;
          font-size: 36px;
          left: 20px;
        }

        img {
          position: absolute;
          right: 20px;
          height: 70px;
        }
      }

      .btn-wrapper {
        width: 100%;
        border-top: 1px solid #ddd;

        button {
          width: 50%;
          height: 80px;
          font-size: 36px;
          background-color: transparent;
        }

        .cancel {
          border-right: 1px solid #ddd;
        }

        .ok {
          font-weight: bold;
          color: #3190e8;
        }
      }
    }
  }
</style>

