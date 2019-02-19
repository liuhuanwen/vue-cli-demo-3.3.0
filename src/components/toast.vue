<template>
  <div class="message">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: "toast",
    data() {
      return {
        message: '请输入手机号码请输入手机号请输入手机号码请输'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .message {
    position: fixed;
    bottom: 250px;
    max-width: 400px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    word-break: break-all;
    background-color: #333;;
    border-radius: 40px;
    padding: 24px;
    color: #fff;
  }
</style>
