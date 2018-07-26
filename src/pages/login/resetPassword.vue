/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="resetPassword">
    <my-header title="重置密码"></my-header>
    <my-form></my-form>
  </div>
</template>

<script>
  import myForm from '../../components/login/form'
  export default {
    components: {myForm},
    name: 'resetPassword',
    data () {
      return {}
    },
    created () {},
    mounted () {},
    methods: {}
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../static/css/login";
  .div-login-position {
    padding-top: 15%;
  }
  .login-btn {
    margin-top: 20%;
    .demo-flat-button {
      height: .45rem;
      line-height: .45rem;
      color: white;
      font-size: .16rem;
      margin-top: .25rem;
      border-radius: .22rem;
      text-align: center;
    }
    .toRight {
      background-image: -webkit-linear-gradient(to right, #ff7626, #ffab68);
      background-image: linear-gradient(to right, #ff7626, #ffab68);
    }
  }
</style>
