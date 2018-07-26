/**
* @file Header头部
* @author xjc
* @date
*/
<template>
  <div class="headers">
    <div class="header_left" :class="hideBack ? [] : ['iconfont icon-arrow_left']" @click="back"></div>
    <div class="header_title">{{title || ''}}</div>
    <div class="header_right" @click="rightClick">
      {{right_text}}
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'headers',
    data () {
      return {
      }
    },
    props: ['title', 'right_text', 'hideBack'],
    created () {
    },
    mounted () {
      // document.title = this.title || '哩哩云教练'
    },
    methods: {
      rightClick () {
        this.$emit('right_click')
      },
      back () {
        if (this.hideBack) return
        // 若有返回事件，则覆盖默认动作
        if (this.$listeners.left_click) {
          this.$listeners.left_click()
        } else {
          this.$router.back()
        }
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .headers {
    position: fixed;
    top: 0;
    width: 100%;
    height: .45rem;
    background-color: white;
    display: flex;
    color: #666666;;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    /*box-shadow: 0 0 10px 0 rgba(138, 138, 138, 0.32);*/
    div {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: .35rem;
    }
    .header_left {
      width: .35rem;
      font-size: .22rem;
      margin-left: .05rem;
      margin-right: .25rem;
    }
    .header_title {
      width: 1.50rem;
      font-size: .17rem;
    }
    .header_right {
      font-size: .15rem;
      width: .60rem;
      margin-right: .05rem;
    }
    .header_left:active {
      opacity: 0.6;
    }
    .header_right:active {
      opacity: 0.6;
    }
  }
</style>
