<template>
  <div>
    <div>{{ isLogin ? '已登录' : '未登录' }}</div>
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
import Cookie from 'js-cookie';
export default {
  data () {
    return {
      isLogin: false
    };
  },
  created () {
    const token = Cookie.get('token');
    this.isLogin = !!token;
    console.log(token);
  }
};
</script>

<style scoped lang="scss"></style>
