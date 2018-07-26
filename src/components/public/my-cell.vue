/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="my-cell" :class="[{'border-none': !(border === 'false' ? '' : border)}, {'isActive': active}]" @click="handleCell">
    <div class="title" :style="styleObj.title">{{title}}</div>
    <slot name="centerContent"></slot>
    <div class="content flex-space-between" :style="styleObj.content">
      <slot></slot>
      <span v-if="content">{{content}}</span>
      <i class="iconfont icon-arrow_right" v-show="icon === 'false' ? '' : icon"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'my-cell',
    props: {
      title: String,
      content: String,
      icon: {
        type: [Boolean, String],
        default: true
      },
      to: {
        type: String,
        default: ''
      },
      border: {
        type: [Boolean, String],
        default: true
      },
      active: {
        type: [Boolean, String],
        default: true
      },
      styleObj: {
        type: Object,
        default: function () {
          return {
            title: {},
            content: {}
          }
        }
      }
    },
    data () {
      return {}
    },
    created () {
    },
    mounted () {},
    methods: {
      handleCell () {
        if (this.to !== '') this.turnTo(this.to)
        this.$emit('handleCell')
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .my-cell {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: .60rem;
    font-size: .15rem;
    background-color: #ffffff;
    border-bottom: .01rem solid #d2d2d2c7;
    box-sizing: border-box;
    color: #333333;
    padding: 0 3%;
    .title {
      width: 25%;
      font-size: .17rem;
      min-width: .7rem;
    }
    .content {
      color: #666666;
      max-width: 80%;
      line-height: 1;
      i {
        font-size: .15rem;
        margin-left: .1rem;
      }
    }
  }
  .border-none {
    border: none;
  }
</style>
