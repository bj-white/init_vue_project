import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const constantRoutes = [
  {
    path: '/user',
    component: () => import('../page/User.vue'),
  },
  {
    path: '/role',
    component: () => import('../page/Role.vue'),
  },
];

const router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: constantRoutes
});

export default router;
