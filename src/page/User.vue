<template>
  <div>
    <el-button
      size="small"
      type="primary"
      @click="handleDebounce"
    >
      click throttle
    </el-button>
    <div class="primary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
      voluptatem, architecto aliquid harum dolor porro cumque libero deserunt,
      aperiam possimus ea dicta pariatur fugiat vero esse ipsum impedit rerum
      iure?
    </div>
  </div>
</template>

<script>
// import { debounce } from '../util/common.js';
export default {
  data () {
    return {};
  },
  computed: {},
  created () {
    /* this.handleDebounce = debounce(this.handleDebounce);
    this.$axios({
      url: '/api/getUserList'
    }).then(response => {
      console.log(response);
    }); */
  },
  methods: {
    handleDebounce () {
      this.$store.dispatch('test/getTest').then(response => {
        console.log(response);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.primary {
  color: $--color-primary;
}
</style>
