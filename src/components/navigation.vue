<template>
  <div class="nav">
    <span class="title">{{title}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },
    methods: {
      handleBack() {
        this.$router.back();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav {
    position: relative;
    width: 750px;
    height: 88px;
    background-color: #2395ff;
    .icon-back {
      position: absolute;
      width: 88px;
      height: 88px;
      left: 0;
    }
    .title {
      font-size: 36px;
      line-height: 88px;
      color: #fff;
    }
  }
</style>
