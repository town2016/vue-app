/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="full-content">
  	<v-index></v-index>
  </div>
</template>

<script>
  import selfIndex from '@/pages/self/index'
  export default {
    name: 'self',
    data () {
      return {
      }
    },
    created () {},
    mounted () {},
    methods: {},
    components: {
      'v-index': selfIndex
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
.full-content{
  background-color:#f6f6f6;
  overflow: auto;
}
</style>
