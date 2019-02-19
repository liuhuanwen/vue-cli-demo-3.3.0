<template>
  <transition name="fade">
    <div class="message" v-if="toast.isShow">
      {{toast.message}}
    </div>
  </transition>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    computed: {
      ...mapState([
        'toast'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

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
    padding: 12px 24px;
    color: #fff;
  }
</style>
