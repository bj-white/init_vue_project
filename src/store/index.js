import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';
import test from './module/test.js';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    test,
  },
  getters,
});

export default store;
