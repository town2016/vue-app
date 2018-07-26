import axios from 'axios'
import store from '../store/index'
import service from './service'
const get = axios.get
const post = axios.post
/**
 * http拦截器
 */
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.timeout = 10000
  Object.assign(config.headers, store.getters.getHeaders)
  store.commit('toggleLoading', true)
  return config
}, function (error) {
  // 对请求错误做些什么
  store.commit('toggleLoading')
  console.log('请求错误')
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  store.commit('toggleLoading')
  return response
}, function (error) {
  // 对响应错误做点什么
  store.commit('toggleLoading')
  return Promise.reject(error)
})
export {get, post, service}
