/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="full-content">
    <my-header title="教练特色" @right_click="onRightSave">
      <div class="mainColor">保存</div>
    </my-header>
    <div class="coachFeature">
      <feature-box :data="featureItem" @handleItem="handleItem"></feature-box>
      <div class="onesInfo">
        <div>个人简介</div>
        <div style="position: relative">
          <textarea maxlength="40" name="" id="" v-model="onesInfo" @input="onInput"></textarea>
          <span class="tip">{{letterNum}}/40</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import featureBox from '@/components/coachCard/featureBox'
  export default {
    name: 'coachFeature',
    components: {featureBox},
    data () {
      return {
        onesInfo: '',
        featureItem: [
          {
            text: '不抽烟',
            selected: false
          },
          {
            text: '包接送',
            selected: false
          },
          {
            text: '脾气好',
            selected: false
          },
          {
            text: '不收礼',
            selected: false
          },
          {
            text: '吃饭AA',
            selected: false
          },
          {
            text: '资深教练',
            selected: false
          },
          {
            text: '夜间培训',
            selected: false
          },
          {
            text: '分期付款',
            selected: false
          },
          {
            text: '周末培训',
            selected: false
          }
        ]
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {
      letterNum () {
        return 40 - this.onesInfo.length > 0 ? 40 - this.onesInfo.length : 0
      }
    },
    methods: {
      onRightSave () {
        this.turnTo('editCoachCard')
      },
      handleItem (boxs) {
        console.log(boxs)
      },
      onInput () {
        // if (this.onesInfo.length > 40) this.onesInfo = this.onesInfo.slice(0, 40)
        // console.log(this.onesInfo)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .coachFeature {
    padding: .1rem .2rem;
    box-sizing: border-box;
    .onesInfo {
      margin-top: .15rem;
      font-size: .15rem;
      color: #333333;
      textarea {
        box-sizing: border-box;
        padding: .14rem .15rem;
        margin-top: .12rem;
        border: .01rem solid #dbdbdb;
        border-radius: .04rem;
        width: 100%;
        height: 1.72rem;
        font-size: .15rem;
        color: #666666;
      }
      .tip {
        position: absolute;
        right: .12rem;
        bottom: .15rem;
        font-size: .12rem;
        color: #999999;
        line-height: .1rem;
        text-align: center;
      }
    }
  }
</style>
