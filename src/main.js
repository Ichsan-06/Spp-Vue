import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import Vue from 'vue'
import Axios from 'axios'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

// axios.defaults.withCredentials = true
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
