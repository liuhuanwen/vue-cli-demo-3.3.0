<template>
  <div>
    <router-view></router-view>
    <nav-bar class="nav-bar"></nav-bar>
  </div>
</template>

<script>
  import navBar from '../components/navBar';

  export default {
    components: {
      navBar
    }
  }
</script>

<style lang="scss" scoped>
  .nav-bar {
    position: fixed;
    width: 750px;
    bottom: 0;
    background-color: #fff;
    z-index: 1000;
  }
</style>
