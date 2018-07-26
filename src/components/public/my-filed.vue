/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="form-input-div" :class="{border: border}">
    <span v-if="label" :class="classObj.span" :style="styleObj.span">{{label}}</span>
    <input class="form-input"
           v-bind="$attrs"
           :type="type"
           :value="value"
           @input="handleInput"
           @focus="handleFocus"
           @blur="handleBlur"
           :class="classObj.input"
           :style="styleObj.input"
           :disabled="disabled"/>
    <slot></slot>
    <div class="tip" v-if="tipContent" :class="{toggle: !tipShow}">
      <div>{{tipContent}}</div>
      <div class="triangle"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'myFiled',
    props: {
      tipRegulation: {
        type: Function,
        default: function () {
          return function () {}
        }
      },
      value: [String, Number],
      tipContent: String,
      type: {
        type: String,
        default: 'text'
      },
      label: {
        type: String,
        default: ''
      },
      styleObj: {
        type: Object,
        default: function () {
          return {
            span: {},
            input: {}
          }
        }
      },
      classObj: {
        type: Object,
        default: function () {
          return {
            span: '',
            input: ''
          }
        }
      },
      disabled: [Boolean, String],
      border: {
        type: [Boolean, String],
        default: true
      }
    },
    computed: {},
    data () {
      return {
        tipShow: false
      }
    },
    created () {
    },
    mounted () {
    },
    methods: {
      handleInput (event) {
        this.tipShow = !this.tipRegulation(event.target.value)
        this.$emit('input', event.target.value)
      },
      handleFocus (event) {
        // debugger
        this.tipShow = !this.tipRegulation(event.target.value)
        this.$emit('foucs', event.target.value, event)
      },
      handleBlur (event) {
        this.tipShow = false
        this.$emit('blur', event.target.value, event)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .form-input-div {
    width: 100%;
    font-size: .17rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #ffffff;
    box-sizing: border-box;
    span {
      display: inline-block;
      padding: 0;
      margin: 0;
      width: 25%;
      color: #333333;
    }
    .form-input {
      height: .35rem;
      flex: auto;
      border: none;
      background-color: #ffffff;
      outline: none;
      color:#333333;
    }
    .check-code {
      width: 40%;
    }
    .tip {
      position: absolute;
      border: .01rem solid #41bdc7;
      top: .40rem;
      /*left: 25%;*/
      font-size: .12rem;
      letter-spacing: .005rem;
      box-sizing: border-box;
      padding: .02rem .05rem;
      z-index: 1;
      border-radius: .03rem;
      background-color: #41bdc7;
      color: white;
      transition: opacity .5s;
      .triangle {
        width: .04rem;
        height: .04rem;
        display: inline-block;
        position: absolute;
        background-color: #41bdc7;
        transform: rotate(45deg);
        top: -.02rem;
        left: 50%;
      }
    }
    .toggle {
      opacity: 0;
    }
  }
  .border {
    border-bottom: .01rem solid #d8d8d8;
  }
</style>
