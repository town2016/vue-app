<template>
  <div class="wallet">
    <my-header title='我的钱包'>
      <span @click='goBalance'>明细</span>
    </my-header>
    <div class="banner">
      <p>账户余额</p>
      <h3>200.00</h3>
    </div>
    <ul class="charges">
      <v-funcItem v-for='(item, index) in charges' :data='item' :key='index'></v-funcItem>
    </ul>
    <ul class="banks">
      <v-funcItem v-for='(item, index) in banks' :data='item' :key='index'></v-funcItem>
    </ul>
  </div>
</template>

<script>
  import funcItem from 'public/funcItem'
  export default {
    name: 'wallet',
    data () {
      return {
        charges: [
          {
            name: '充值',
            path: '/recharge',
            click: true
          },
          {
            name: '提现',
            path: '/cash',
            click: true
          }
        ],
        banks: [
          {
            name: '银行卡',
            path: '/banks',
            click: true
          }
        ]
      }
    },
    methods: {
      goBalance () {
        this.$router.push({
          path: '/balance'
        })
      }
    },
    components: {
      'v-funcItem': funcItem
    }
  }
</script>

<style scoped lang='less'>
@import url("../../../static/css/mixin");
.wallet{
  background-color:@mainBgColor;
  .banner{
    height: 1.5rem;
    background-color:@mainColor;
    color:#fff;
    padding-left:0.3rem;
    .flex;
    .flex-v;
    .flex-pack-center;
    p{
      font-size: 0.13rem;
      line-height: 1;
      margin-bottom: .12rem;
    }
    h3{
      font-size: 0.32rem;
      font-weight: 400;
      line-height: 1;
    }
  }
  ul{
    margin-top: 0.1rem;
    background-color: #fff;
  }
  
}
</style>