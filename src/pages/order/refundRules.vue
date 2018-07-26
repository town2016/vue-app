<template>
  <div class="refund-rules">
    <my-header :title="header.title" :hideBack="header.hideBack" class="noShadow"></my-header>
    <div class="rules" @click='openPicker'>
      <p v-for="(item,index) in rules"><span>{{(index*1+1)}}、</span>{{item}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'refund-rules',
    data () {
      return {
        rules: [
          '距离预约场次开始时间10小时前取消订单，不扣任何费用；',
          '距离预约场次开始时间10小时内取消订单，扣除支付金额的20%作为违约金；',
          '进入预约场次的训练时间后取消，扣除支付金额的50%作为违约金；',
          '预约场次结束后，不能取消订单，不办理任何退费手续；',
          '因人为不可抗拒因素（主要指车辆出现突发故障、遭遇事故，但不包括塞车）导致无法按时参加训练的，由教练提前致电考场，考场根据实际情况处理；',
          '因考场因素导致无法正常训练的，由教练与考场协商后，考场根据实际情况处理；',
          '以上情况如未及时通知考场，逾期导致的不可退款，考场不承担任何责任。',
          '退费成功后，费用将会退还至钱包余额，并允许提现；'
        ],
        header: {
          title: '退费规则',
          hideBack: false
        }
      }
    }
  }
</script>
<style scoped lang="less">
  .rules{
    padding: 0.21rem 0.2rem;
    p{
      font-size: 0.15rem;
      color: #333;
      text-align:justify;
    }
  }
</style>