import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './modules/auth'
import session from './modules/session'
import snackbar from './modules/snackbar'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    session,
    snackbar
  },
  // plugins: [createPersistedState()],
})
