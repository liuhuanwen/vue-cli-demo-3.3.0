<template>
  <div class="nav">
    <div class="icon-wrapper" @click="handleBack()">
      <svg class="icon-back">
        <use xlink:href="#icon-back"></use>
      </svg>
    </div>
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

    .icon-wrapper {
      position: absolute;
      width: 88px;
      height: 88px;
      left: 0;
      .icon-back {
        width: 36px;
        height: 36px;
        margin-top: 26px;
      }
    }

    .title {
      font-size: 36px;
      line-height: 88px;
      color: #fff;
    }
  }
</style>
