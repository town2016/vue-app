/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="countDown" id="countDown" @click="begin" :class="{countDownIng: countIng}">
    {{time}}
    <slot></slot>
  </div>
</template>

<script>
  let timeTask = ''
  export default {
    name: 'countDown',
    props: {
      timeEnd: {
        type: Number,
        default: 60
      },
      text: {
        type: String,
        default: ''
      },
      switchCount: [String, Boolean]
    },
    data () {
      return {
        time: ''
      }
    },
    computed: {
      countIng () {
        return this.time.indexOf('s') !== -1
      }
    },
    watch: {
      switchCount () {
        if (this.switchCount) {
          this.time = this.text
          this.clearTask()
        }
      }
    },
    beforeDestroy () {
      this.time = this.text
      this.clearTask()
    },
    created () {
      this.time = this.text
    },
    mounted () {},
    methods: {
      // 开始倒计时
      begin () {
        if (timeTask) return
        this.$emit('handleTime', 'start')
        let timeEnd = this.timeEnd
        this.time = timeEnd + 's'
        timeTask = setInterval(() => {
          timeEnd--
          console.log(timeEnd)
          this.time = timeEnd + 's'
          if (timeEnd === 0) {
            this.clearTask()
            this.time = this.text
            this.$emit('handleTime', 'end')
          }
        }, 1000)
      },
      clearTask () {
        if (timeTask !== '') {
          clearInterval(timeTask)
          timeTask = ''
        }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .countDown {
    font-size: .13rem;
    width: 34%;
    min-width: .75rem;
    text-align: center;
    margin: 0;
    padding: 0;
    height: .30rem;
    border: .01rem solid #fea734;
    color: #fea734;
    border-radius: .07rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    letter-spacing: .01rem;
    position: relative;
    bottom: .03rem;
    right: 0;
  }
  .countDownIng {
    background-color: #fea734;
    color: #ffffff;
  }
</style>
