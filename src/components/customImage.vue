<template>
  <div class="container">
    <img v-if="isPlaceholderVisible" :src="placeholderImage" alt="">
    <img v-if="isVisible" :src="img" @load="handleLoad($event)" @error="handleError()" alt="">
  </div>
</template>

<script>
  import avatarDefaultImg from '../assets/avatar-default.png'
  import avatarErrorImg from '../assets/avatar-error.png'

  export default {
    props: {
      defaultImg: {
        type: String,
        required: false
      },
      img: {
        type: String,
        required: true
      },
      errorImg: {
        type: String,
        required: false
      }
    },
    data() {
      return {
        placeholderImage: this.defaultImg ? this.defaultImg : avatarDefaultImg,
        isPlaceholderVisible: true,
        isVisible: true,
      }
    },
    methods: {
      handleLoad(event) {
        if (event.target.complete) {
          this.isPlaceholderVisible = false;
          this.isVisible = true;
        } else {
          this.isPlaceholderVisible = true;
          this.isVisible = false;
        }
      },
      handleError() {
        this.isPlaceholderVisible = true;
        this.isVisible = false;
        this.placeholderImage = this.errorImg ? this.errorImg : avatarErrorImg;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>