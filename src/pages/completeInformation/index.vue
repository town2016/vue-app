/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="completeInformation">
    <my-header title="资料完善"></my-header>
    <div class="content">
      <div class="item">
        <my-filed v-model="userInfo.username" placeholder="真实姓名更有利于招生" label="姓名" border=""></my-filed>
      </div>
      <div class="item">
        <my-filed label="性别" :styleObj="{input: {display: 'none'}}" border="">
          <div class="selectGander">
            <span :class="{males: userInfo.gander}" @click="userInfo.gander = 1">男</span>
            <span :class="{females: !userInfo.gander}" @click="userInfo.gander = 0">女</span>
          </div>
        </my-filed>
      </div>
      <div class="item" @click="turnTo('selectCity')">
        <my-filed class="drive" label="驾校" :styleObj="{input: {display: 'none'}}" border="">
          <div class="drivingSchool">
            {{userInfo.drivingSchool || '请选择'}}
            <i class="iconfont icon-arrow_right"></i>
          </div>
        </my-filed>
      </div>
    </div>
    <div class="login-btn">
      <div class="demo-flat-button" :class="[{disabled: !disabled}, {active: disabled}]" @click="onSubmit">确定</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'completeInformation',
    data () {
      return {
        userInfo: {
          username: '',
          gander: '',
          drivingSchool: ''
        }
      }
    },
    computed: {
      disabled () {
        return !!this.userInfo.username && this.userInfo.gander !== '' && !!this.userInfo.drivingSchool
      }
    },
    created () {
    },
    mounted () {
    },
    methods: {
      onSubmit () {}
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .completeInformation {
    background-color: #f4f4f4;
    .content {
      background-color: #ffffff;
      margin-top: .10rem;
      .item > div {
        height: .60rem;
        box-sizing: border-box;
        padding: 0 4%;
      }
      .selectGander {
        flex: auto;
        span {
          display: inline-block;
          background: #f4f4f4;
          border-radius: .90rem;
          width: .55rem;
          color:#999999;
          font-size: .14rem;
          line-height: .28rem;
          text-align: center;
          margin-right: 6%;
        }
        .males {
          background-color: #41bdc7;
          color: #ffffff;
        }
        .females {
          background-color: #ff6980;
          color: #ffffff;
        }
      }
      .drive:active {
        background-color: #fafafa;
      }
      .drivingSchool {
        flex: auto;
        font-size: .14rem;
        color: #999999;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .login-btn {
      box-sizing: border-box;
      padding: 0 13%;
      position: absolute;
      width: 100%;
      bottom: 15%;
      left: 0;
    }
  }
</style>
