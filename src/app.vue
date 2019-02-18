<template>
  <div id="app">
    <router-view></router-view>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
  import svgIcon from './components/svgIcon';

  export default {
    name: "app",
    components: {
      svgIcon
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
