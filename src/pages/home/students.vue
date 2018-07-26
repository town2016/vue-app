/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="full-content">
    <datapicker></datapicker>
  </div>
</template>

<script>
  import datapicker from '../../components/public/datapicker'
  export default {
    name: 'students',
    data () {
      return {
      }
    },
    components: {datapicker},
    created () {},
    mounted () {
      // let promise = async () => {
      //   console.log(1)
      //   await this._http.login({}).then(() => {
      //     console.log(2)
      //   }, () => {
      //     console.log(2)
      //   })
      //   console.log(3)
      // }
      // promise().then(() => {
      //   console.log(4)
      // })
    },
    methods: {}
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
</style>
