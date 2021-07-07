<template>
  <div>hello world</div>
</template>

<script>
export default {
  data () {
    return {};
  },
  computed: {},
  created () {
    console.log('----' + process.env.NODE_ENV);
  }
};
</script>
