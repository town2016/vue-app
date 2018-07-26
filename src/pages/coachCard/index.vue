/**
* @file 招生名片
* @author xjc
* @date
*/
<template>
  <div class="full-content">
    <my-header title="招生名片" @right_click="onShare">
      <div class="mainColor">分享</div>
    </my-header>
    <div class="coachCard full-content">
      <div class="coachContent">
        <div class="teacherInfoBox">
          <div class="logo flex-double-center">
            <img src="../../../static/img/user_img_m.png" alt="">
          </div>
          <div class="name">{{'张天翼'}}</div>
          <div class="location flex-space-around">
            <div>
              <i class="iconfont icon-salary"></i>
              <span>深圳市</span>
            </div>
            <div>
              <i class="iconfont icon-salary"></i>
              <span>5年教练</span>
            </div>
            <div>
              <i class="iconfont icon-salary"></i>
              <span>已认证</span>
            </div>
          </div>
          <div class="studyPlace">招生范围：{{'南山区、福田区'}}</div>
          <div class="studyPlace">招生地址：{{'深圳市南山区西丽街道1001号'}}</div>
          <div class="phone">
            <i class="iconfont icon-salary"></i>
            <a href="tel:18789566523">18789566523</a>
          </div>
        </div>
        <div class="otherInfo">
          <div>
            <div>个人简介：</div>
            <div>{{'多年教学经验，因材施教，为你打造愉快的学车旅程。'}}</div>
          </div>
          <div>
            <div>教练特色：</div>
            <div>{{'不收礼、脾气好、不抽烟'}}</div>
          </div>
        </div>
        <div class="type-box">
          <type-box @handelBox="handelBox"></type-box>
          <type-box @handelBox="handelBox"></type-box>
        </div>
      </div>
      <div class="footerBtn">
        <div class="flex-double-center" @click="turnTo('studentList')">
          <i class="iconfont icon-qr_code"></i>
          <div>报名列表</div>
        </div>
        <div class="flex-double-center" @click="turnTo('editCoachCard')">
          <i class="iconfont icon-store"></i>
          <div>编辑名片</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import typeBox from '@/components/coachCard/classTypeBox'
  export default {
    name: 'coachCard',
    components: {typeBox},
    data () {
      return {}
    },
    created () {
    },
    mounted () {
    },
    methods: {
      onShare () {},
      handelBox () {
        this.turnTo('handelClassType')
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .coachCard {
    background-color: #f6f6f6;
    display: flex;
    flex-direction: column;
  }
  .coachContent {
    flex: auto;
    overflow: hidden;
    overflow-y: auto;
  }
  .teacherInfoBox {
    width: 100%;
    background-color: #41bdc7;
    color: #ffffff;
    box-sizing: border-box;
    padding: .27rem .45rem .04rem .45rem;
    .logo {
      width: 100%;
      text-align: center;
      img {
        height: .6rem;
      }
    }
    .name {
      margin: .1rem 0 .19rem 0;
      line-height: .18rem;
      font-size: .18rem;
      text-align: center;
    }
    .location {
      width: 100%;
      /*height: .14rem;*/
      font-size: .14rem;
      margin-bottom: .1rem;
      i {
        margin-right: .03rem;
      }
    }
    .studyPlace {
      line-height: .2rem;
      font-size: .14rem;
    }
    .phone {
      margin: .1rem auto;
      line-height: .3rem;
      width: 1.5rem;
      font-size: .15rem;
      color: #41bdc7;
      background-color: #ffffff;
      border-radius: .15rem;
      text-align: center;
      a {
        text-decoration: none;
        color: #41bdc7;
      }
    }
  }
  .otherInfo {
    background-color: #ffffff;
    width: 100%;
    box-sizing: border-box;
    font-size: .14rem;
    color: #666666;
    padding: .1rem;
    padding-top: 0;
    > div {
      padding-top: .1rem;
      display: flex;
      flex-direction: row;
      div {
        min-width: .7rem;
      }
    }
  }
  .type-box {
    margin-top: .1rem;
  }
  .footerBtn {
    display: table;
    height: .5rem;
    background-color: #ffffff;
    /*margin-top: .1rem;*/
    i {
      font-size: .24rem;
    }
    > div {
      height: 100%;
      width: 50%;
      float: left;
      font-size: .13rem;
      color: #41bdc7;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>
