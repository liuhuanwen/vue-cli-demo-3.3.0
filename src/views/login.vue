<template>
  <div>
    <svg class="logo">
      <use xlink:href="#ele-logo"></use>
    </svg>
    <form class="form">
      <div class="input-wrap">
        <input class="input-phone" v-model="mobile" type="text" placeholder="手机号"/>
        <button class="btn-code" :class="{btn_disabled: disabled}" @click="handleGetMobileCode()" :disabled="disabled">{{btnText}}</button>
      </div>
      <div class="input-wrap">
        <input class="input-code" v-model="validateCode"  type="text" placeholder="验证码"/>
      </div>
      <p class="p-protocol">新用户登录即自动注册，并表示已同意&nbsp;<a>《用户服务协议》</a></p>
      <button class="btn-login" @click="handleLogin()">登录</button>
    </form>
    <p class="p-about">关于我们</p>
    <transition name="fade">
      <div class="captcha-wrapper" v-if="isShowCaptcha">
        <div class="captcha">
          <h1 class="title">请填写图形验证码</h1>
          <div class="input-wrapper">
            <input type="text" v-model="captchaValue"/>
            <img :src="captcha.captchaImage" @click="handleGetCaptcha()" alt="图形验证码"/>
          </div>
          <div class="btn-wrapper">
            <button class="cancel" @click="handleCancel()">取消</button>
            <button class="ok" @click="handleOk()">确定</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
  import * as userApi from "../api/userApi";

  export default {
    data() {
      return {
        mobile: '',
        validateCode: '',
        btnText: '获取验证码',
        isCountDownOver: true,
        isShowCaptcha: false,
        captchaValue: '',
        captcha: {
          captchaHash: '',
          captchaImage: ''
        },
        validateToken: ''
      }
    },
    computed: {
      ...mapState([
        'count'
      ]),
      ...mapGetters([
        'totalCount'
      ]),
      disabled() {
        return !this.isCountDownOver || !(/^1\d{10}$/gi.test(this.mobile));
      }
    },
    methods: {
      ...mapMutations([
        'INCREMENT',
        'SHOW_TOAST',
        'SAVE_USER_ID'
      ]),
      ...mapActions([
        'login'
      ]),
      async handleGetMobileCode() {
        try {
          const data = await userApi.sendMobileCode(this.mobile, this.captcha.captchaHash, this.captchaValue);
          this.validateToken = data.validate_token;
          this.isShowCaptcha = false;
          this.captchaValue = '';
          this.countDown();
        } catch (err) {
          if (err.response && err.response.status === 400) {
            if (err.response.data.name === 'NEED_CAPTCHA') {
              this.isShowCaptcha = true;
              this.captchaValue = '';
              this.handleGetCaptcha();
            } else {
              this.SHOW_TOAST(err.message);
            }
          } else {
            this.SHOW_TOAST('获取验证码失败');
          }
        }
      },
      async handleGetCaptcha() {
        try {
          const data = await userApi.getCaptcha(this.mobile);
          this.captcha.captchaHash = data.captcha_hash;
          this.captcha.captchaImage = data.captcha_image;
        } catch (err) {
          this.SHOW_TOAST('获取图形验证码失败');
        }
      },
      countDown() {
        let time = 30;
        this.btnText = `已发送(${time}s)`;
        this.isCountDownOver = false;
        let interval = setInterval(() => {
          time--;
          if (time === 0) {
            clearInterval(interval);
            this.btnText = '重新获取';
            this.isCountDownOver = true;
            this.captcha = {captchaHash: '', captchaImage: ''}
          } else {
            this.btnText = `已发送(${time}s)`;
            this.isCountDownOver = false;
          }
        }, 1000)
      },
      async handleLogin() {
        if (!this.mobile) {
          this.SHOW_TOAST('手机号码不能为空');
          return;
        }
        if (!this.validateCode) {
          this.SHOW_TOAST('验证码不能为空');
          return;
        }
        try {
          const data = await userApi.login(this.mobile, this.validateToken, this.validateCode);
          this.SAVE_USER_ID(data.user_id);
        } catch (err) {
          this.SHOW_TOAST('登录失败');
        }
      },
      handleCancel() {
        this.captchaValue = '';
        this.isShowCaptcha = false;
      },
      handleOk() {
        if (this.captchaValue) {
          this.handleGetMobileCode();
        } else {
          this.handleGetCaptcha();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .logo {
    width: 280px;
    height: 112px;
    margin-top: 80px;
  }

  .form {
    width: 600px;
    margin: 32px auto 0 auto;

    .input-wrap {
      position: relative;
      margin-bottom: 32px;

      input {
        width: 100%;
        height: 98px;
        padding-left: 20px;
        border: 1px solid #ccc;
        box-sizing: border-box;
        border-radius: 8px;
        font-size: 28px;
      }

      input:focus {
        border-color: #0089dc;
      }

      .btn-code {
        position: absolute;
        background-color: transparent;
        right: 20px;
        height: 98px;
        color: #0089dc;
        font-size: 28px;
      }

      .btn_disabled {
        color: #999;
      }
    }

    .p-protocol {
      font-size: 28px;
      text-align: left;
      color: #999;
      a {
        color: #0089dc;
      }
    }

    .btn-login {
      width: 100%;
      height: 84px;
      margin-top: 60px;
      font-size: 32px;
      color: #fff;
      border-radius: 8px;
      background-color: #4cd96f;
    }
  }

  .p-about {
    margin-top: 40px;
    font-size: 24px;
    color: #999;
  }

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
          top: 5px;
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
