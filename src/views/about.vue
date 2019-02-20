<template>
  <div>
    <title-bar title="关于我们"></title-bar>
    <div class="about">
      <h3>公司</h3>
      <p>上海拉扎斯信息科技有限公司</p>
      <h3>地址</h3>
      <p>上海市普陀区金沙江路1518弄近铁城市广场401室</p>
      <h3>电话</h3>
      <p>(021) 8024-1717</p>
    </div>
  </div>
</template>

<script>
  import titleBar from '../components/titleBar';

  export default {
    components: {
      titleBar
    }
  }

</script>

<style lang="scss" scoped>
  .about {
    text-align: left;
    margin-left: 32px;
    h3 {
      font-size: 30px;
      margin-top: 40px;
      color: #333;
    }
    p {
      font-size: 28px;
      margin-top: 8px;
      color: #666;
    }
  }

</style>
