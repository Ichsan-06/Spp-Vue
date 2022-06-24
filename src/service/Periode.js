import http from '@/repositories/axios'
import paramsConverter from './utils/paramsConverter'

const resource = '/periode'

export default {
  list(params = {}) {
    const paramsString = paramsConverter(params)

    return http.get(`${resource}${paramsString}`)
  },

  get(uuid) {
    return http.get(`${resource}/${uuid}`)
  },
  update(ability, uuid) {
    return http.put(`${resource}/${uuid}`, ability)
  },
  add(ability) {
    return http.post(`${resource}`, ability)
  },
  destroy(uuid) {
    return http.delete(`${resource}/${uuid}`)
  },

}
