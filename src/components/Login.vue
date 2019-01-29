<template>
  <div>
    <!--<div aspectratio w-188-246>-->
      <!--<div aspectratio-content>-->
      <!--</div>-->
    <!--</div>-->
    <button @click="add()">增加</button>
    <span>{{count}}</span>
  </div>

</template>

<script>
  import {INCREMENT} from "../store/mutation-types";

  export default {
    name: "Login",
    computed: {
      count: function () {
        return this.$store.state.count;
      }
    },
    methods: {
      add() {
        this.$store.commit(INCREMENT);
      }
    }
  }
</script>

<style lang="scss" scoped>
  [w-188-246] {
    aspect-ratio: '9:16';
  }

  [w-188-246] {
    width: 750px;
    box-sizing: border-box;
    border: 1px solid #aaa;
  }
</style>
