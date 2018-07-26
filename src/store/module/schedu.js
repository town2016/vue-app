const state = {
  schedu: {},
  scheduDate: ''
}

const getters = {
  schedu: state => { return state.schedu },
  scheduDate: state => { return state.scheduDate }
}

const mutations = {
  setScheduDate (state, payload) {
    state.scheduDate = payload
  },
  setSchedu (state, payload) {
    state.schedu = payload
  }
}

export default {
  state,
  getters,
  mutations
}
