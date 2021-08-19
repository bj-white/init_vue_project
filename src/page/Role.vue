<template>
  <div>
    <ul>
      <li v-for="(item, key) in list" v-show="true" :key="key">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [1, 2, 3]
    };
  },
  computed: {},
  created () {}
};
</script>
