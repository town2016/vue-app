import vue from 'vue'
import Vuex from 'vuex'
import base from './module/base'
import schedu from './module/schedu'
import calendar from './module/calendar'
vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    base,
    schedu,
    calendar
  }
})
