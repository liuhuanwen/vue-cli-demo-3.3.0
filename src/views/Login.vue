<template>
  <div>
    <img class="img-logo" src="../assets/ele_logo.png" alt="logo">
    <form class="form">
      <div class="input-wrap">
        <input class="input-phone" v-model="username" type="text" placeholder="手机号"/>
        <button class="btn-code">获取验证码</button>
      </div>
      <div class="input-wrap">
        <input class="input-code" v-model="password"  type="text" placeholder="验证码"/>
      </div>
      <p class="p-protocol">新用户登录即自动注册，并表示已同意&nbsp;<a>《用户服务协议》</a></p>
      <button class="btn-login" @click="handleLogin()">登录</button>
    </form>
    <p class="p-about">关于我们{{totalNum}}</p>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';

  export default {
    name: "Login",
    data() {
      return {
        username: '',
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
        this.login({username: this.username, password: this.password});
      }
    },
    mounted() {
      this.getAllCountryList();
    }
  }
</script>

<style lang="scss" scoped>
  .img-logo {
    width: 280px;
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
