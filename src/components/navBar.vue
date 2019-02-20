<template>
  <div class="nav">
    <router-link to="index">
      <div class="nav-item">
        <svg class="nav-icon">
          <use :xlink:href="indexActived ? '#nav-index-active' : '#nav-index-default'"></use>
        </svg>
        <span :class="{active: indexActived}">首页</span>
      </div>
    </router-link>
    <router-link to="discovery">
      <div class="nav-item">
        <svg class="nav-icon">
          <use :xlink:href="discoveryActived ? '#nav-discovery-active' : '#nav-discovery-default'"></use>
        </svg>
        <span :class="{active: discoveryActived}">发现</span>
      </div>
    </router-link>
    <router-link to="order">
      <div class="nav-item">
        <svg class="nav-icon">
          <use :xlink:href="orderActived ? '#nav-order-active' : '#nav-order-default'"></use>
        </svg>
        <span :class="{active: orderActived}">订单</span>
      </div>
    </router-link>
    <router-link to="mine">
      <div class="nav-item">
        <svg class="nav-icon">
          <use :xlink:href="mineActived ? '#nav-mine-active' : '#nav-mine-default'"></use>
        </svg>
        <span :class="{active: mineActived}">我的</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    computed: {
      indexActived() {
        return this.$route.path === '/index';
      },
      discoveryActived() {
        return this.$route.path === '/discovery';
      },
      orderActived() {
        return this.$route.path === '/order';
      },
      mineActived() {
        return this.$route.path === '/mine';
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav {
    height: 100px;
    border-top: 2px solid #eee;
    background-color: #fff;
    .nav-item {
      display: inline-block;
      width: 25%;
      margin-top: 14px;
      .nav-icon {
        width: 44px;
        height: 44px;
      }
      span {
        display: block;
        font-size: 20px;
        line-height: 20px;
        color: #818181;
      }
      .active {
        color: #0089dc;
      }
    }
  }
</style>
