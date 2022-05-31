// import Axios from '@/repositories/axios'

export default {
  state: {
    token: '',
    user: {},
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    RESET: state => {
      state.user = null
      state.token = null
    },
  },
  getters: {
    isAuthenticated: state => !!state.user,
    getUser: state => state.user,
    getToken: state => state.token,
  },
  actions: {
    login({
      commit,
    }, {
      token,
      user,
    }) {
      commit('SET_TOKEN', token)
      commit('SET_USER', user)

      /* eslint no-unused-vars: "error" */
      // Axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    logout: ({
      commit,
    }) => {
      commit('RESET', '')
    },
  },
}
