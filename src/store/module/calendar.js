const state = {
  dateCache: {}
}

const getters = {
  dateCache: state => { return state.dateCache }
}

const mutations = {
  setDateCache (state, payload) {
    state.dateCache = payload
  }
}

export default {
  state,
  getters,
  mutations
}
