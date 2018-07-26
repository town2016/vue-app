/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="full-content">
    <v-schedu></v-schedu>
  </div>
</template>

<script>
  import schedu from '@/pages/class/index'
  export default {
    name: 'class',
    data () {
      return {
      }
    },
    created () {},
    mounted () {},
    methods: {},
    components: {
      'v-schedu': schedu
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import url("../../../static/css/mixin");
.full-content{
  background-color: @mainBgColor;
}
</style>
