import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index.js';
import store from './store/index.js';
import App from './App.vue';
import BaseMixin from './mixin/BaseMixin.js';
import request from './util/request.js';
import './permission.js';

Vue.use(ElementUI);
Vue.mixin(BaseMixin);

Vue.prototype.$axios = request;

export default new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#root');
