<template>
  <div class="full-content">
    <router-view class="app-page-root"></router-view>
    <loading v-show="$store.state.base.loading.flag"></loading>
  </div>
</template>

<script>
  import loading from '@/components/public/loading.vue'
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    methods: {
      login () {}
    },
    components: {
      loading
    },
    mounted () {
      let a = document.body.clientHeight
      document.body.onresize = () => {
        // alert(document.body.clientHeight + '******' + window.screen.availHeight + '******' + document.querySelector('.app-page-root').clientHeight + '*****' + document.body.clientHeight + '*****' + a)
        document.querySelector('.app-page-root').style.height = a + 'px'
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../static/css/index";
</style>
