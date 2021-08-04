<template>
  <div>
    <router-link to="/user">
      user
    </router-link>
    <router-link to="/role">
      role
    </router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  created () {}
};
</script>

<style lang="scss"></style>
