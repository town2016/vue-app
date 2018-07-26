/**
 * author xjc
 * discribe 插件，插件后面需要按插件用途来拆分。
 * date 2018/03/16
 * */
// import { Toast } from 'mint-ui'
import _httpMaps from '../assets/api'
import myHeader from '@/components/public/header'
import myCell from '@/components/public/my-cell'
import myFiled from '@/components/public/my-filed'
import activeSheet from '@/components/public/activeSheet'
import Toast from '@/components/public/toast-index'
import confirm from '@/components/public/confirm-index'
import slide from '@/components/public/slide'
import slideItem from '@/components/public/slideItem'
import cselect from 'public/cselect.js'
let MyPlugin = {}
MyPlugin.config = {}

MyPlugin.install = (Vue) => {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = () => {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('touch', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
      let beginX = 0
      let beginY = 0
      let moveX = 0
      let moveY = 0
      el.addEventListener('touchstart', function (event) {
        beginX = event.touches[0].screenX
        beginY = event.touches[0].screenY
      }, false)
      el.addEventListener('touchmove', function (event) {
        moveX = event.touches[0].screenX - beginX
        moveY = event.touches[0].screenY - beginY
      }, false)
      el.addEventListener('touchend', function (event) {
        beginX = 0
        beginY = 0
        console.log(moveX, moveY)
      }, false)
    }
  })

  // 3. 注入组件
  Vue.mixin({
    components: {
      myHeader,
      myCell,
      myFiled,
      slide,
      slideItem,
      activeSheet
    },
    methods: {
      turnTo (param = '') {
        let router = typeof param === 'string' ? {name: param} : param
        this.$router.push(router)
      },
      toast (txt = '', time = 3000, option = '') {
        let param = {
          message: txt,
          duration: time
        }
        if (Object.prototype.toString.call(option) === '[object Object]') Object.assign(param, option)
        Toast(param)
      },
      $confirm (params = {}) {
        confirm(params)
      },
      $select (params, func) {
        cselect(params, func)
      },
      formatFnItem (val) {
        if (val || val === 0) {
          return ('0' + (val + 1)).slice(-2)
        } else {
          return '00'
        }
      },
      // 接收时间戳，转成日期格式，根据项目需求拓展此方法
      formatFn (val, format) {
        if (!val) {
          return ''
        }
        let date = new Date(val)
        let rtStr
        if (!format) {
          rtStr = `${date.getFullYear()}/${this.formatFnItem(date.getMonth())}/${('0' + date.getDate()).slice(-2)}`
        } else {
          let formatLc = format
          rtStr = formatLc.replace(/yyyy/g, date.getFullYear()).replace(/MM/g, this.formatFnItem(date.getMonth())).replace(/dd/g, this.formatFnItem(date.getDate()))
                          .replace(/hh/g, this.formatFnItem(date.getHours())).replace(/mm/g, this.formatFnItem(date.getMinutes())).replace('ss', this.formatFnItem(date.getMilliseconds()))
        }
        return rtStr
      },
      // 空字符转换
      filterEmpty (arg, txt = '') {
        return (arg === '' || arg === null || arg === undefined) ? txt : arg
      }
    }
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
  Vue.prototype.$httpApis = _httpMaps
}
export {MyPlugin}
