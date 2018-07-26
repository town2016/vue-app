/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="full-content">
    <my-header title="编辑招生名片"></my-header>
    <div class="editCoachCard">
      <my-cell class="marginTop10" title="基本信息" border="" @handleCell="handleCell('userInfo')">
        <span v-if="cardInfo.a">未完善</span>
        <span class="haveInfo" v-else>已完善</span>
      </my-cell>
      <my-cell title="教练特色" border="" @handleCell="handleCell('coachFeature')">
        <span v-if="cardInfo.b">未完善</span>
        <span class="haveInfo" v-else>已完善</span>
      </my-cell>
      <my-cell title="招生班型" border="" @handleCell="handleCell('classTypeList')">
        <span v-if="cardInfo.c">未完善</span>
        <span class="haveInfo" v-else>已完善</span>
      </my-cell>
    </div>
    <div class="createCard" @click="createCoachCard">生成招生名片</div>
  </div>
</template>

<script>
  export default {
    name: 'editCoachCard',
    data () {
      return {
        cardInfo: {
          a: 1,
          b: 0,
          c: 0
        }
      }
    },
    created () {
    },
    mounted () {
    },
    methods: {
      handleCell (router) {
        if (router) this.turnTo(router)
      },
      createCoachCard () {
        this.turnTo('coachCard')
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .full-content {
    background-color: #f6f6f6;
    .editCoachCard > div {
      height: .6rem;
      padding: 0 .2rem;
      span {
        font-size: .14rem;
        color:#999999;
      }
      span.haveInfo {
        color:#41bdc7;
      }
    }
    .createCard {
      background-color: #41bdc7;
      line-height: .5rem;
      width: 100%;
      text-align: center;
      font-size: .17rem;
      color: #ffffff;
      position: fixed;
      bottom: 0;
      left: 0;
    }
    .createCard:active {
      background-color: rgba(65, 189, 199, 0.78);
    }
  }
</style>
