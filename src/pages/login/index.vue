<template>
  <div class="login-index">
    <div class="div-login-position">
      <div class="login-logo-top">
        <img src="../../../static/img/logo@1.5x.png">
      </div>
      <div>
        <my-filed v-model="loginParam.username" placeholder="手机号" tipContent="请输入11位手机号码！" :tipRegulation="usernameRegulation"></my-filed>
        <my-filed v-show="toggleLoginPas" class="marginTop20" v-model="loginParam.password" type="password" placeholder="密码"
                  tipContent="请输入6位字母和数字的组合！"
                  :tipRegulation="passwordRegulation"></my-filed>
        <my-filed class="marginTop20" v-show="!toggleLoginPas"
                  v-model="loginParam.imageCode"
                  placeholder="图形码"
                  :classObj="{input: 'check-code'}">
          <graphic-code></graphic-code>
        </my-filed>
        <my-filed v-show="!toggleLoginPas" class="marginTop20"
                  v-model="loginParam.code"
                  placeholder="输入验证码"
                  :classObj="{input: 'check-code'}">
          <count-down text="获取验证码" @handleTime="handleTime" :switchCount="toggleLoginPas"></count-down>
        </my-filed>
      </div>
      <div class="takePas" :class="{marginTop20: toggleLoginPas}">
        <div v-show="toggleLoginPas">
          <span @click="changeCachePas"><i class="iconfont" :class="{['check icon-xuanzekuang']: cachePas, 'icon-xuankuang': !cachePas}"></i>记住密码</span>
          <span @click="turnTo('resetPassword')">忘记密码？</span>
        </div>
      </div>
      <div class="login-btn">
        <div class="demo-flat-button active" @click="onLogin">登录</div>
        <div class="more-login">
          <div class="sign" @click="turnTo('register')">立即注册</div>
          <div class="code" @click="onCheckCode">{{toggleLoginPas ? '密码登录' : '验证码登录'}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import countDown from '../../components/login/count-down'
  import graphicCode from '../../components/login/graphic-code'
  export default{
    components: {countDown, graphicCode},
    data () {
      return {
        cachePas: false, // 是否保存密码
        toggleLoginPas: true, // 登录模式切换,默认密码登录
        loginParam: {
          username: '', // 13600407213
          password: '', // 123456
          imageCode: '',
          code: ''
        }
      }
    },
    computed: {},
    created () {
      this.cachePas = !!window.localStorage.loginMessage
      if (this.cachePas) {
        let login = window.localStorage.getItem('loginMessage') ? JSON.parse(window.localStorage.getItem('loginMessage')) : {}
        this.loginParam.username = login.username || ''
        this.loginParam.password = login.password || ''
      }
    },
    mounted () {
      // console.log(this)
      // this.$store.commit('setHeaders', {a: 1})
    },
    methods: {
      changeCachePas () {
        this.cachePas = !this.cachePas
        if (this.cachePas) {
          window.localStorage.setItem('loginMessage', JSON.stringify({
            username: this.loginParam.username,
            password: this.loginParam.password,
            time: +new Date()
          }))
        } else {
          window.localStorage.removeItem('loginMessage')
        }
      },
      onCheckCode () {
        this.toggleLoginPas = !this.toggleLoginPas
      },
      onLogin () {
        if (this.cachePas) {
          window.localStorage.setItem('loginMessage', JSON.stringify({
            username: this.loginParam.username,
            password: this.loginParam.password,
            time: +new Date()
          }))
        }
        if (!/^1\d{10}$/.test(this.loginParam.username)) {
          this.toast('请输入正确的手机号码！')
          return false
        }
        if (this.toggleLoginPas) { // 密码登录
          if (!/^[a-zA-Z0-9]{6}$/.test(this.loginParam.password)) {
            this.toast('请输入正确的密码！')
            return false
          }
        }
        this.turnTo('index')
      },
      handleTime (state) {
        console.log(state)
      },
      usernameRegulation (t) {
        return t.length === 11 && /^1\d{10}$/.test(t)
      },
      passwordRegulation (t) {
        return t.length === 6 && /^[a-zA-Z0-9]{6}$/.test(t)
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../static/css/login";
  .login-index {
    padding: 0;
    .takePas {
      height: .28rem;
      > div {
        display: inline-block;
        width:100%;
        height: .28rem;
        font-size:.13rem;
        color:#4e4e4e;
        line-height:.28rem;
        span:last-child {
          float:right;
        }
        span:first-child {
          float:left;
          display: flex;
          justify-content: center;
          align-items: center;
          i {
            margin-right: 0.05rem;
            color:#41bdc7;
          }
        }
      }
    }
  }
  .more-login {
    margin-top: 0.10rem;
    font-size: 0.13rem;
    color: #4e4e4e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 4%;
    .sign {
      color:#41bdc7;
    }
  }
</style>

