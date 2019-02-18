<template>
  <div class="container">
    <div class="header">
      <div class="close">X</div>
      <div class="login-title">登录知乎</div>
      <div class="login-tip">发现更大的世界</div>
    </div>
    <form class="form">
      <div class="input-phone-wrap">
        <span>+86</span>
        <input type="text" placeholder="输入手机号"/>
      </div>
      <div class="form-item">
        <div class="input-verification-wrap">
          <input type="text" placeholder="输入手机验证码"/>
        </div>
        <button>发送验证码</button>
      </div>
      <div class="tips">
        未注册手机验证后自动登录<br>
        注册即同意<a href="javascript:">《知乎协议》</a>&nbsp;<a href="javascript:">《隐私保护指引》</a>
      </div>
      <button class="login-btn">登录</button>
    </form>
    <div class="forget">
      <a>密码登录</a>
      <a>需要帮助</a>
    </div>
    <div class="third-login">
      <a>社交账号登录</a>
      <a>注册机构账号</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'helloWorld',
  }
</script>

<style lang="scss" scoped>
  .container {
    height: 1334px;
    min-height: 100vh;
    position: relative;
    .header {
      width: 750px;
      height: 216px;
      background-color: #0084FF;
      color: #fff;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .close {
        position: absolute;
        top: 30px;
        right: 30px;
        font-size: 28px;
      }
      .login-title {
        font-size: 50px;
      }
      .login-tip {
        font-size: 32px;
      }
    }
    .form {
      margin: 40px 32px;
      .input-phone-wrap {
        text-align: left;
        height: 100px;
        line-height: 100px;
        border-bottom: 1px solid #EBEBEB;
        span {
          height: 36px;
          line-height: 36px;
          display: inline-block;
          text-align: center;
          width: 160px;
          border-right: 1px solid #EBEBEB;
          box-sizing: border-box;
          vertical-align: middle;
          font-size: 32px;
        }
        input {
          width: 526px;
          height: 36px;
          line-height: 36px;
          padding-left: 32px;
          font-size: 32px;
          box-sizing: border-box;
          vertical-align: middle;
        }
      }
      .form-item {
        text-align: left;
        .input-verification-wrap {
          width: 480px;
          height: 100px;
          display: inline-block;
          line-height: 100px;
          border-bottom: 1px solid #EBEBEB;
          margin-top: 20px;
          input {
            width: 100%;
            font-size: 32px;
          }
        }
        button {
          width: 206px;
          height: 60px;
          display: inline-block;
          border: 1px solid #999;
          border-radius: 8px;
          font-size: 28px;
        }
      }
      .tips {
        font-size: 24px;
        margin-top: 40px;
        color: #999;
        a {
          font-size: 24px;
          color: #999;
          text-decoration: #999 underline;
        }
      }
      .login-btn {
        width: 100%;
        height: 80px;
        margin-top: 40px;
        font-size: 32px;
        background-color: #0084FF;
        color: #fff;
        border-radius: 8px;
      }
      .login-btn:active {
        background-color: #0077FF;
      }
    }
    .forget {
      margin: 0 32px;
      display: flex;
      justify-content: space-between;
      color: #175199;
      a {
        font-size: 32px;
      }
    }
    .third-login {
      position: absolute;
      bottom: 80px;
      display: flex;
      flex-direction: column;
      left: 50%;
      transform: translateX(-50%);
      color: #175199;
      a {
        margin-top: 32px;
        font-size: 32px;
      }
    }
  }

</style>
