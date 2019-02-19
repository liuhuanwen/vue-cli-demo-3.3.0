<template>
  <div>
    <router-view></router-view>
    <svg-icon></svg-icon>
    <toast></toast>
  </div>
</template>

<script>
  import svgIcon from '../components/svgIcon';
  import toast from '../components/toast';

  export default {
    components: {
      toast,
      svgIcon
    }
  }
</script>

<style lang="scss" scoped>

</style>
