/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="slide-item" :style="styleObj" @click="clickItem">
    <div class="full-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'slideItem',
    data () {
      return {
        styleObj: {}
      }
    },
    created () {
    },
    mounted () {
      this.styleObj.width = document.querySelector('.slide').clientWidth + 'px'
    },
    methods: {
      clickItem (event) {
        this.$emit('clickItem', event)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .slide-item {
    display: inline-block;
    overflow: hidden;
    /*width: 100vw;*/
    float: left;
  }
</style>
