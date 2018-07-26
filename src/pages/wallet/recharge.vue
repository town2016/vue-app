<template>
  <div class="recharge">
    <my-header title='充值'></my-header>
    <ul class="info">
      <li class="flex flex-align-center">
        <label>订单名称</label>
        <div class="flex-1">余额充值</div>
      </li>
      <li class="flex">
        <label>订单金额</label> 
        <div class="flex-1"><input placeholder="请输入金额" type="number"/></div>
      </li>
    </ul>
    <h5>支付方式</h5>
    <ul class="payTypes">
      <li v-for='(item, index) in payTypes' :key='index' class="flex flex-pack-justify flex-align-center" @click='selectPayType(item)'>
        <div><i :class="item.icon" ></i><span>{{item.payType === 'wechat'?'微信支付':'支付宝支付'}}</span></div>
        <span>
          <i class="iconfont icon-tick" v-if='curType === item.payType'></i>
          <i class="iconfont icon-tick_outline" v-else></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'recharge',
    data () {
      return {
        curType: 'wechat',
        payTypes: [
          {
            icon: 'iconfont icon-weixinzhifu',
            payType: 'wechat'
          },
          {
            icon: 'iconfont icon-zhifubao',
            payType: 'alipay'
          }
        ]
      }
    },
    methods: {
      selectPayType (item) {
        this.curType = item.payType
      }
    }
  }
</script>

<style scoped lang="less">
@import '../../../static/css/mixin';
.recharge{
  background-color: @mainBgColor;
  ul.info{
    margin-top: 0.1rem;
    background-color: #fff;
    li{
      padding:0.18rem 0.2rem;
      label{
        font-size: 0.17rem;
        line-height: 0.2rem;
      }
      >div{
        padding: 0 0.3rem;
        font-size: 0.15rem;
        color: #666;
        line-height: 0.2rem;
        input{
          line-height: 0.2rem;
          color: @mainColor;
          font-size: 0.15rem;
          width: 100%;
          border: none;
        }
      }
    }
  }
  .payTypes{
    li{
      padding: 0.17rem 0.2rem;
      background-color: #fff;
      >div{
        i{
          font-size: 0.34rem;
          display: inline-block;
          vertical-align: middle;
        }
        i.icon-weixinzhifu{
          color: #45ad47;
        }
        i.icon-zhifubao{
          color:#11a0e5;
        }
        span{
          font-size: 0.17rem;
          color: #333;
          display: inline-block;
          vertical-align: middle;
          margin-left: 0.1rem;
        }
      }
      >span{
        i.icon-tick_outline{
          color: #DBDBDB;
        }
        i.icon-tick{
          color: @mainColor;
        }
      }
    }
  }
  h5{
    font-size: 0.15rem;
    color: #333;
    padding: 0.2rem;
    font-weight: 400;
  }
}
</style>