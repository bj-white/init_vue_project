import * as testApi from '../../api/testApi.js';

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    getTest () {
      return new Promise((resolve) => {
        testApi.getTest().then((response) => {
          resolve(response);
        });
      });
    }
  }
};
