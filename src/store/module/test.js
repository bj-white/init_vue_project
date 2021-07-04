export default {
  namespaced: true,
  state: {
    test: 'hello world',
  },
  mutations: {
    SET_TEST: (state, test) => {
      state.test = test;
    }
  },
  actions: {
    setTest ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const msg = 'hello white';
          commit('SET_TEST', msg);
          resolve(msg);
        }, 1000);
      });
    }
  }
};
