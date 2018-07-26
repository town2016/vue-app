// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import {MyPlugin} from './plugin'
import './utils/common'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
// import './utils/app'
Vue.use(MyPlugin)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
