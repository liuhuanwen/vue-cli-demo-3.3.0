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

<style scoped>
  .nav-bar {
    position: fixed;
    width: 750px;
    bottom: 0;
    background-color: #fff;
  }
</style>
