import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: {
      user: null,
      check: false
    }
  },
  mutations: {
    setAuth(state, user) {
      state.auth.user = user;
      state.auth.check = true;
    }
  },
  actions: {},
  modules: {}
})