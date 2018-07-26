import Vue from 'vue'
import Message from './toast'
// const Message = require('./toast')

let Toast = (options = {}) => {
  let el = document.createElement('div')
  document.body.appendChild(el)
  let duration = options.duration
  let _toast = new Vue({
    el: el,
    template: `<transition name="mint-toast-pop">
<Message v-show="visible" :message="message" :position="position" :className="className" :iconClass="iconClass"></Message>
</transition>`,
    components: {Message},
    data () {
      return {
        message: typeof options === 'string' ? options : options.message,
        position: options.position || 'middle',
        className: options.className || '',
        iconClass: options.iconClass || '',
        visible: false
      }
    },
    mounted () {
      let self = this
      this.$nextTick(function () {
        self.visible = true
      })
      if (duration) {
        setTimeout(() => {
          self.visible = false
          setTimeout(() => {
            self.$destroy()
            self.$el.parentNode.removeChild(self.$el)
          }, 1000)
        }, duration)
      }
    }
  })
  return _toast
}
export default Toast
