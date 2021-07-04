<template>
  <div>{{ msg.name }}</div>
</template>

<script>
import bus from '../util/bus.js';
export default {
  data () {
    return {
      msg: bus.msg,
    };
  },
  computed: {},
  created () {}
};
</script>
