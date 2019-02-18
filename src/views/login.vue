<template>
  <div>
    <svg class="logo">
      <use xlink:href="#ele-logo"></use>
    </svg>
    <form class="form">
      <div class="input-wrap">
        <input class="input-phone" v-model="mobile" type="text" placeholder="手机号"/>
        <button class="btn-code" @click="handleGetMobileCode()">获取验证码</button>
      </div>
      <div class="input-wrap">
        <input class="input-code" v-model="password"  type="text" placeholder="验证码"/>
      </div>
      <p class="p-protocol">新用户登录即自动注册，并表示已同意&nbsp;<a>《用户服务协议》</a></p>
      <button class="btn-login" @click="handleLogin()">登录</button>
    </form>
    <p class="p-about">关于我们</p>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
  import * as userApi from "../api/userApi";

  export default {
    name: "login",
    data() {
      return {
        mobile: '',
        password: ''
      }
    },
    computed: {
      ...mapState([
        'count',
        'countryList'
      ]),
      ...mapGetters([
        'totalCount'
      ]),
      totalNum: function () {
        return this.totalCount(10);
      }
    },
    methods: {
      ...mapMutations([
        'INCREMENT'
      ]),
      ...mapActions([
        'getAllCountryList',
        'login'
      ]),
      handleLogin() {
      },
      async handleGetMobileCode() {
        try {
          const res = await userApi.sendMobileCode(this.mobile);
        } catch (error) {
          if (error.response && error.response.status === 400) {
            if (error.response.data.name === 'NEED_CAPTCHA') {
              console.log('需要图形验证码');
            }
          }
        }
      }
    },
    mounted() {
      // this.getAllCountryList();
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
        color: #999;
        font-size: 28px;
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
