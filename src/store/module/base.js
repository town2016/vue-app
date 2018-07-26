const state = {
  loading: {
    flag: false
  },
  headers: {}
}
const getters = {
  // 全局的header在拦截器中配置，这里是提供某些接口的，用完就扔
  getHeaders (state) {
    let h = Object.assign({}, state.headers)
    state.headers = {}
    return h
  }
}
const mutations = {
  toggleLoading (state, show = false) {
    state.loading.flag = show
  },
  setHeaders (state, option = {}) {
    Object.assign(state.headers, option)
  }
}
const actions = {}
export default {
  state,
  getters,
  mutations,
  actions
}
