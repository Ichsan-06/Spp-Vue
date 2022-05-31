import http from '@/repositories/axios'

const resource = '/auth'
const resource2 = '/api/v1/check-username'

export default {
  login(data) {
    return http.post(`${resource}/login`, data)
  },
  logout() {
    return http.post(`${resource}/logout`)
  },
  resetPassword(token, data) {
    return http.post(`${resource}/create-password/token/${token}/type/forgot-password`, data)
  },
  forgotPassword(data) {
    return http.post(`${resource}/create-reset`, data)
  },
  googleLogin(token) {
    return http.get(`${resource}/login/google?access_token=${token}`)
  },
  oauthCallback(data) {
    return http.post(`${resource}/auth/google/callback`, data)
  },
  checkUsername(data) {
    return http.get(`${resource2}?username=${data}`)
  },
}
