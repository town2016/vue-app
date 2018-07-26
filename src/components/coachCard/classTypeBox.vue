/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="classTypeBox" @click="handelBox">
    <my-cell title="卓越班" border="" active="" :styleObj="{title: titleStyle.title_18}"></my-cell>
    <my-cell title="招生班型：" border="" active="" icon="" :styleObj="{title: titleStyle.title_15}">
      <div class="cardType" slot="centerContent">{{'C1、C2'}}</div>
    </my-cell>
    <my-cell title="班型特色：" border="" active="" icon="" :styleObj="{title: titleStyle.title_15}">
      <div class="cardType" slot="centerContent">{{'费用全包，不限学时，一人一车'}}</div>
    </my-cell>
    <my-cell title="C1价格：" border="" active="" icon="" :styleObj="{title: titleStyle.title_15}">
      <div class="cardType" slot="centerContent">{{'￥5800'}}</div>
    </my-cell>
    <my-cell title="C2价格：" border="" active="" icon="" :styleObj="{title: titleStyle.title_15}">
      <div class="cardType" slot="centerContent">{{'￥5800'}}</div>
    </my-cell>
  </div>
</template>

<script>
  export default {
    name: 'classTypeBox',
    data () {
      return {
        titleStyle: {
          title_18: {
            'font-size': '.18rem',
            'color': '#41bdc7'
          },
          title_15: {
            'font-size': '.15rem',
            'color': '#333333'
          }
        }
      }
    },
    created () {},
    mounted () {},
    methods: {
      handelBox () {
        this.$emit('handelBox')
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .classTypeBox {
    background-color: #ffffff;
    width: 100%;
    font-size: .15rem;
    padding: .10rem .10rem;
    box-sizing: border-box;
    margin-bottom: .1rem;
    > div:first-child {
      margin: .05rem 0 .04rem 0;
    }
    > div {
      line-height: .33rem;
    }
    .cardType {
      flex: 1;
      color: #666666;
    }
  }
</style>
