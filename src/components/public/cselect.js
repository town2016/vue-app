import Vue from 'vue'
const cselect = (datas, onChange) => {
  let el = document.querySelector('.cselectWrapper')
  if (!el) {
    el = document.createElement('div')
    el.className = 'cselectWrapper'
  }
  document.querySelector('body').appendChild(el)
  let _select = new Vue({
    el: el,
    template: `<div class="cselect" ref='cselect' @click='remove'>
                <ul class="inner">
                  <li v-for='(item, index) in options' @click='select($event, index)'>
                    {{item[col]}}
                  </li>
                </ul>
              </div>`,
    data: {
      options: datas.options,
      col: datas.col
    },
    methods: {
      select (event, index) {
        onChange && onChange(this.options[index])
      },
      remove () {
        this.$refs.cselect.remove()
      }
    }
  })
  return _select
}

export default cselect
