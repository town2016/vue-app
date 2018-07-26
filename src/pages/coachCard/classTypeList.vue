/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="full-content">
    <my-header title="招生班型"></my-header>
    <div class="classTypeList">
      <div class="content">
        <type-box @handelBox="handelBox"></type-box>
        <type-box @handelBox="handelBox"></type-box>
      </div>
      <div class="addClassType" @click="addClass">添加班型</div>
    </div>
  </div>
</template>

<script>
  import typeBox from '@/components/coachCard/classTypeBox'
  export default {
    name: 'classTypeList',
    components: {typeBox},
    data () {
      return {}
    },
    created () {
    },
    mounted () {
    },
    methods: {
      handelBox () {
        this.turnTo('handelClassType')
      },
      addClass () {
        this.turnTo('handelClassType')
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .full-content {
    background-color: #f6f6f6;
  }
  .classTypeList {
    > div {
      margin-top: .1rem;
    }
    .addClassType {
      line-height: .45rem;
      width: 100%;
      text-align: center;
      background-color: #ffffff;
      font-size: .15rem;
      color:#41bdc7;
    }
  }
</style>
