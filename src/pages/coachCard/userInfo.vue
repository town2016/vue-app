* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="full-content">
    <my-header title="基本信息" @right_click="onRightSave">
      <div class="mainColor">保存</div>
    </my-header>

    <div class="coachCard">
      <my-cell class="marginTop10" title="头像" border="">
        <div class="flex-double-center">
          <span>真实头像更利于招生</span>
          <img src="../../../static/img/user_img_m.png" alt=""/>
        </div>
      </my-cell>
      <my-cell title="姓名" :content="userInfo.username" border="" icon="" active=""></my-cell>
      <my-cell title="性别" icon="" border="" active="">
        <div class="selectGander flex-space-between">
          <span :class="{males: userInfo.gander}" @click="userInfo.gander = 1">男</span>
          <span :class="{females: !userInfo.gander}" @click="userInfo.gander = 0">女</span>
        </div>
      </my-cell>
      <my-cell title="电话" :content="userInfo.mobile" border="" icon="" active=""></my-cell>
      <my-filed label="身份证号" v-model="userInfo.identification"
                :styleObj="style"
                border="" icon=""></my-filed>
      <!--下面是第二部分-->
      <my-cell class="marginTop10" title="所属驾校" :content="userInfo.drivingSchool" border=""></my-cell>
      <my-cell title="带教车型" :content="userInfo.carType" border=""></my-cell>
      <my-filed label="教龄" v-model="userInfo.teachYear"
                :styleObj="style"
                border="" icon="">
        <span style="flex: 0;color: #999999;margin-left: .03rem;">年</span>
      </my-filed>
      <my-cell title="招生范围" :content="userInfo.area" border=""></my-cell>
      <my-cell title="招生地址" :content="userInfo.place" border=""></my-cell>
      <my-cell class="marginTop10" title="教练认证" border="">
        <span class="identify">{{userInfo.identify}}</span>
      </my-cell>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'coachCard',
    data () {
      return {
        style: {
          span: {'font-size': '.17rem', color: '#333333'},
          input: {'font-size': '.15rem', color: '#666666', 'text-align': 'right'}
        },
        userInfo: {
          username: '张教练',
          mobile: '166454878445',
          identification: '510200198804261234',
          gander: 0,
          drivingSchool: '深圳-深感驾校',
          carType: 'C1、C2',
          teachYear: '5',
          area: '南山区、福田区、罗湖…',
          place: '深圳市南山西丽街道101号深港…',
          identify: '未认证'
        }
      }
    },
    created () {
    },
    mounted () {
    },
    methods: {
      onRightSave () {
        this.turnTo('editCoachCard')
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .full-content {
    background-color: #f6f6f6;
    overflow-y: auto;
    .coachCard {
      > div {
        height: .6rem;
        padding: 0 .2rem;
      }
      > div:first-child {
        img {
          width: .4rem;
          max-height: 100%;
          margin-left: .05rem;
        }
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
        }
        span:first-child {
          margin-right: .25rem;
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
      .identify {
        color:#41bdc7;
      }
    }
  }
</style>
