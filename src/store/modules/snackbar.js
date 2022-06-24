export default {
  namespaced: true,
  state: {
    text: '',
    color: '',
    show: false,
  },
  actions: {
    showSnackbar({commit}, payload) {
      commit('handleSnackbar', payload)
    },
    setCloseSnackBar({commit}) {
      commit('handleCloseSnackbar')
    }
  },
  mutations: {
    handleSnackbar(state, data) {
      state.text = data.text
      state.color = data.color
      state.show = true
    },
    handleCloseSnackbar(state) {
      state.show = false
    },
  },
  getters: {
    text: state => state.text,
    color: state => state.color,
    show: state => state.show,
  },
}
