/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="div-login-position">
    <div v-if="isRegister" class="login-logo-top">
      <img :src="loginLogo">
    </div>
    <div>
      <my-filed v-model="loginParam.username" placeholder="手机号" tipContent="请输入11位手机号码！" :tipRegulation="usernameRegulation"></my-filed>
      <my-filed class="marginTop13" v-model="loginParam.password" type="password"
                :placeholder="isRegister ? '设置密码' : '输入新密码'"
                tipContent="至少8位字母和数字的组合！"
                :tipRegulation="passwordRegulation"></my-filed>
      <my-filed v-if="!isRegister" class="marginTop13" v-model="loginParam.repeatPassword" type="password" placeholder="重复新密码"
                tipContent="再次输入密码！"
                :tipRegulation="repeatpasswordRegulation"></my-filed>
      <my-filed class="marginTop13"
                v-model="loginParam.imageCode"
                placeholder="图形码"
                :classObj="{input: 'check-code'}">
        <graphic-code></graphic-code>
      </my-filed>
      <my-filed class="marginTop13"
                v-model="loginParam.code"
                type="password"
                placeholder="验证码"
                :classObj="{input: 'check-code'}">
        <count-down text="获取验证码" @handleTime="handleTime"></count-down>
      </my-filed>
    </div>
    <div class="login-btn">
      <div class="demo-flat-button active" @click="onLogin">{{isRegister ? '注册' : '提交'}}</div>
    </div>
  </div>
</template>

<script>
  import countDown from './count-down'
  import graphicCode from '@/components/login/graphic-code'
  export default {
    name: '',
    components: {countDown, graphicCode},
    data () {
      return {
        loginLogo: '/static/img/logo@1.5x.png',
        loginParam: {
          username: '',
          code: '',
          password: '',
          repeatPassword: ''
        }
      }
    },
    props: {
      isRegister: { // 是否为注册,和重置密码逻辑不同
        type: Boolean,
        default: false
      }
    },
    computed: {},
    created () {},
    mounted () {},
    methods: {
      onLogin () {
        if (this.isRegister) { // 注册，跳转到信息完善
          this.turnTo('completeInformation')
        } else {
          this.turnTo('index')
        }
      },
      handleTime () {},
      usernameRegulation (t) {
        return t.length === 11 && /^1\d{10}$/.test(t)
      },
      passwordRegulation (t) {
        return t.length === 8 && /^[a-zA-Z0-9]{6}$/.test(t)
      },
      repeatpasswordRegulation (t) {
        return t === (function () {
          return this.loginParam.password
        }.call(this))
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../static/css/login";
  .login-logo-top {
    height: 27%;
  }
  .login-btn {
    margin-top: 15%;
  }
</style>
