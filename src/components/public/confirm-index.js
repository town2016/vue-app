import Vue from 'vue'
const confirmBox = (resolve) => { require(['./confirm'], resolve) }
const confirm = (params) => {
  let el = document.querySelector('.confirm-wrapper')
  if (!el) {
    el = document.createElement('div')
    el.className = 'confirm-wrapper'
  }
  document.querySelector('body').appendChild(el)
  let _confirm = new Vue({
    el: el,
    template: `<confirmBox :options='options' @onConfirm='confirm' @onCancel='cancel' @goRulePage='goRulePage' @goRefundPage='goRefundPage'></confirmBox>`,
    components: {confirmBox},
    data: {
      options: {
        msg: params.msg,
        confirmText: params.confirmText,
        cancelText: params.cancelText,
        append: params.append,
        styles: params.styles
      }
    },
    methods: {
      confirm () {
        params.confirm && params.confirm()
      },
      cancel () {
        params.cancel && params.cancel()
      },
      goRulePage () {
        params.goDetail && params.goDetail()
      },
      goRefundPage () {
        params.goRefound && params.goRefound()
      }
    }
  })
  return _confirm
}
export default confirm
