<template>
  <div>
    <svg class="logo">
      <use xlink:href="#ele-logo"></use>
    </svg>
    <form class="form">
      <div class="input-wrap">
        <input class="input-phone" v-model="mobile" type="text" placeholder="手机号"/>
        <button class="btn-code" :class="{btn_disabled: !rightMobile}" @click="handleGetMobileCode()" :disabled="!rightMobile">{{btnText}}</button>
      </div>
      <div class="input-wrap">
        <input class="input-code" v-model="password"  type="text" placeholder="验证码"/>
      </div>
      <p class="p-protocol">新用户登录即自动注册，并表示已同意&nbsp;<a>《用户服务协议》</a></p>
      <button class="btn-login" @click="handleLogin()">登录</button>
    </form>
    <p class="p-about">关于我们</p>
    <captcha-dialog></captcha-dialog>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
  import * as userApi from "../api/userApi";
  import captchaDialog from '../components/captchaDialog';

  export default {
    data() {
      return {
        mobile: '',
        password: '',
        btnText: '获取验证码'
      }
    },
    components: {
      captchaDialog
    },
    computed: {
      ...mapState([
        'count'
      ]),
      ...mapGetters([
        'totalCount'
      ]),
      rightMobile: function() {
        return /^1\d{10}$/gi.test(this.mobile);
      }
    },
    methods: {
      ...mapMutations([
        'INCREMENT',
        'SAVE_MOBILE',
        'SHOW_CAPTCHA',
        'SHOW_TOAST'
      ]),
      ...mapActions([
        'login'
      ]),
      handleLogin() {
        this.SHOW_TOAST('请输入手机号码');
      },
      async handleGetMobileCode() {
        this.SAVE_MOBILE(this.mobile);
        try {
          const data = await userApi.sendMobileCode(this.mobile);
        } catch (err) {
          if (err.response && err.response.status === 400) {
            if (err.response.data.name === 'NEED_CAPTCHA') {
              this.SHOW_CAPTCHA();
            }
          }
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
</style>
