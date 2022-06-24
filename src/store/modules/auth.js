import Auth from '@/service/Auth'
import axios from '@/axios'
export default {
  state: {
    token: '',
    user: {},
    isAuthenticated:false,
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_AUTH: (state, res) => {
      state.isAuthenticated = res
    },
    RESET: state => {
      state.user = null
      state.token = null
    },
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    getUser: state => state.user,
    getToken: state => state.token,
  },
  actions: {
    login({ commit }, data) {
      return new Promise((resolve, reject) => {
        Auth.login(data).then(response => {
          const token = response.data.token
          localStorage.setItem('token', token)
          localStorage.setItem('user', JSON.stringify(response.data.user))
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
          commit('SET_TOKEN', token)
          commit('SET_AUTH', true)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    logout: ({ commit }) => {
      return new Promise((resolve,reject) => {
        Auth.logout().then(response => {
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          commit('RESET')
          resolve(response)
          
        })
      })
      // commit('RESET', '')
    },
  },
}
