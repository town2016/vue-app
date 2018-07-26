/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="graphicCode" @click="getLogo">
    <img :src="logo" alt="">
  </div>
</template>

<script>
  export default {
    name: 'graphicCode',
    data () {
      return {
        logo: '../../../static/img/user_img_m.png'
      }
    },
    created () {
    },
    mounted () {
      this.getLogo()
    },
    methods: {
      getLogo () {}
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .graphicCode {
    font-size: .13rem;
    width: 34%;
    text-align: center;
    margin: 0;
    padding: 0;
    height: .35rem;
    border-radius: .07rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: .03rem;
    right: 0;
    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
</style>
