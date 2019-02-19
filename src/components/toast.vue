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
        message: '112312312312311111111111'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .message {
    position: fixed;
    bottom: 300px;
    width: 400px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
  }
</style>
