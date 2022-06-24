import axios from 'axios'
import Vue from 'vue'
import store from '@/store'

// const baseDomain = 'http://new.literasia.co.id'

// const baseDomain = process.env.VUE_APP_API_BASE_URL

const baseDomain = 'http://localhost:8009'
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

axiosEnv.interceptors.response.use(
  res => Promise.resolve(res),
  err => {
    let errorMessage = err.response.data.message ?? "Something went wrong"
    switch (err.response.status) {
      case 500:
        store.dispatch('snackbar/showSnackbar', {
          text: errorMessage,
          color: 'error',
        })
        console.log(err.response.data)
        return Promise.reject(err.response.data.result)
      case 400:
        err.response.data.result.message.forEach(item => {
          item.errors.forEach(err => {
            store.dispatch('snackbar/showSnackbar', {
              text: `${err} - ${item.values.username}`,
              color: 'error',
            })
          })
        })

        return Promise.reject(err.response.data.result)
      default:
        store.dispatch('snackbar/showSnackbar', {
          text: errorMessage,
          color: 'error',
        })

        return Promise.reject(err.response.data.result)
    }
  }
)

Vue.prototype.$http = axiosEnv
export default axiosEnv
