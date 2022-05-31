import axios from 'axios'
import Vue from 'vue'
import store from '@/store'

// const baseDomain = 'http://new.literasia.co.id'

// const baseDomain = process.env.VUE_APP_API_BASE_URL

const baseDomain = 'http://localhost:3002'
// eslint-disable-next-line no-undef
const baseURL = `${baseDomain}`

const axiosEnv = axios.create({
  baseURL,
})

axiosEnv.interceptors.request.use(config => {
  const token = store.getters.getToken
  config.headers.authorization = `Bearer ${token}`

  return config
})

Vue.prototype.$http = axiosEnv
export default axiosEnv
