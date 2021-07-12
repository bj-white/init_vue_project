<template>
  <div>
    <el-button @click="handleClick(1)">
      click me
    </el-button>
    <el-button @click="handleThrottle(2)">
      click throttle
    </el-button>
  </div>
</template>

<script>
import { throttle, debounce } from '../util/common.js';
export default {
  data () {
    return {
      msg1: 'hello 1',
      msg2: 'hello 2',
    };
  },
  computed: {},
  created () {
    this.handleClick = debounce(this.handleClick);
    this.handleThrottle = throttle(this.handleClick);
  },
  methods: {
    handleClick (num) {
      console.log(this['msg' + num]);
    }
  }
};
</script>

<style scoped lang="scss">
div {
  border: 1px solid #ddd;
}
</style>
