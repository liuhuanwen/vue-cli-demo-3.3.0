<template>
  <div class="swiper">
    <div
        @touchstart="handleMousedown($event, index)"
        class="swiperItem"
        v-for="(item, index) in items"
        :key="index"
        :class="{actived: item.isActived}"
        :style="{transform: `translate3d(${item.moveDistance}px, 0, 0)`}"
    >
      <slot></slot>
    </div>
    <indicator></indicator>
  </div>
</template>

<script>
  import indicator from './indicator';

  export default {
    props: {
      count: {
        type: Number,
        required: true
      }
    },
    computed: {
      items() {
        let array = [];
        for (let i = 0; i < this.count; i++) {
          if (i === 0) {
            array.push({isActived: true, moveDistance: 0})
          } else {
            array.push({isActived: false, moveDistance: 0})
          }
        }
        return array;
      }
    },
    components: {
      indicator
    },
    methods: {
      handleMousedown(event, index) {
        let downX = event.clientX;
        console.log(event);
        document.ontouchmove = (event) => {
          this.items[index].moveDistance = event.clientX - downX;
          console.log(this.items[index].moveDistance);
        };
        document.ontouchend = () => {
          document.ontouchmove = null;
          document.ontouchend = null;
        };
      }
    }
  }
</script>

<style lang="scss" scoped>
  .swiper {
    position: relative;
    height: 354px;
    .swiperItem {
      position: absolute;
      display: none;
    }
    .actived {
      display: block;
    }
  }

</style>
