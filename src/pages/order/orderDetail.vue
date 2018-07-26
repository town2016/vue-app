<template>
  <div class="orderDetail app-page-root">
      <my-header :title="header.title"  :hideBack="header.hideBack" class="noShadow">
        <span @click="cancelOrder">{{header.rightText}}</span>
      </my-header>
      <v-scroller class="scroller">
        <div class="banner">
          <div class="inner">
            <h3>已支付</h3>
            <p>请凭预约车辆入场</p>
          </div>
        </div>
        
        <ul class="mainMsg msg">
          <li v-for='(value,key) in mainMsg' :key="key">
            <span>{{value}}</span>
            <span v-if='key == "orderAmt" || key == "payAmt"'>&yen; {{order[key].toFixed(2)}}</span>
            <span v-else-if='key != "carNo"'>{{order[key]}}</span>
            <span v-else><i class="iconfont primary" :class="{'icon-grid':order.carType == 'C2','icon-students':order.carType == 'C1'}"></i>&nbsp;{{order[key]}}</span>
          </li>
        </ul>
        
        <ul class="infoMsg msg">
          <li v-for='(value,key) in infoMsg' :key="key">
            <span>{{value}}：</span>
            <span v-if=' key == "payType" '>{{payTypes[order[key]]}}</span>
            <span v-else>{{order[key]}}</span>
          </li>
        </ul>
        
        <div class="reason">
          <p class="title">退费申请记录</p>
          <ul class="recordList">
            <li class="recordItem" v-for='item in recordList'>
              <div class="top">
                <span>{{states[item.state]}}</span>
                <span>{{item.updateTime}}</span>
              </div>
              <div class="bottom">{{item.reason}}</div>
            </li>
          </ul>
        </div>
    </v-scroller>
  </div>
</template>

<script>
  import scroller from '@/components/public/scrollWrapper'
  export default {
    name: 'orderDetail',
    data () {
      return {
        order: {
          id: 'or01',
          orderAmt: 400.00,
          payAmt: 400.00,
          exaimroom: '深圳-广仁考场',
          yymmdd: '2018-02-27',
          hhmmss: '09:00-11:00',
          carType: 'C1',
          carNo: '粤B1234学',
          orderNo: '201802251224563542',
          serialNo: '20180223222456354222432541',
          createTime: '2018-02-23  12:25:45',
          payTime: '2018-02-23  12:27:45',
          payType: 'wechat'
        },
        orderId: 'or01',
        header: {
          title: '订单详情',
          rightText: '取消订单',
          hideBack: false
        },
        mainMsg: {
          orderAmt: '订单金额',
          payAmt: '支付金额',
          exaimroom: '考场名称',
          yymmdd: '练考日期',
          hhmmss: '练考时间',
          carNo: '预约车辆'
        },
        infoMsg: {
          orderNo: '订单编号',
          serialNo: '流水号',
          createTime: '创建时间',
          payTime: '付款时间',
          payType: '支付方式'
        },
        payTypes: {
          wechat: '微信支付',
          alipay: '支付宝'
        },
        recordList: [
          {
            id: 1,
            state: 1,
            updateTime: '2017-12-12 09:12:15',
            reason: '训练时间已结束，不能申请退款。'
          }
        ],
        states: {
          '1': '审核通过',
          '2': '驳回申请'
        }
      }
    },
    methods: {
      /* 取消订单 */
      cancelOrder () {
        this.$confirm({
          msg: '根据考场退费规则，本次取消将收取支付金额的20%作为违约金，是否退费？',
          append: true,
          confirm: () => {
            this.cancel()
          },
          cancel: () => {},
          goDetail: () => {
            this.$router.push({
              path: '/refundRules'
            })
          },
          goRefound: () => {
            this.$router.push({
              path: '/refund',
              query: {
                id: this.orderId
              }
            })
          }
        })
      },
      cancel () {
        console.log(1)
      }
    },
    components: {
      'v-scroller': scroller
    }
  }
</script>

<style scoped lang="less">
@import '../../../static/css/mixin';
.orderDetail{
  background-color: @mainBgColor;
  .scroller{
    position: absolute;
    top: 0.45rem;
    bottom: 0;
    width: 100%;
  }
  .banner{
    width: 100%;
    height: 1rem;
    line-height:1rem;
    background-color: @mainColor;
    .inner{
      display: inline-block;
      vertical-align: middle;
    }
    h3,p{
      color: #fff;
      padding:0 0.34rem ;
      line-height: 1;
      width: 100%;
    }
    h3{
      font-size: 0.2rem;
      font-weight: 400;
      margin-bottom: 0.08rem;
    }
    p{
      font-size: 0.12rem;
    }
  }
  .msg{
    margin-top: 0.1rem;    
    background-color: #fff;
    padding: 0.1rem 0.2rem;
  }
  .mainMsg{
    li{
      padding: 0.1rem 0;
      .flex;
      .flex-pack-justify;
      .flex-align-center;
      span:first-of-type{
        font-size: 0.17rem;
        color: #333;
        padding-right: 10px;
      }
      span:last-of-type{
        font-size: 0.15rem;
        color: #666;
        text-align: right;
        .flex-1;
      }
    }
  }
  .infoMsg{
    li{
      padding: 0.08rem 0;
      font-size:0;
      line-height:1;
      span{
        font-size: 0.12rem;
        color: #666;
        padding-right: 10px;
      }
    }
  }
}

.reason{
  margin-top: 0.1rem;
  padding-bottom: 0.1rem;
  .title{
    padding:0.1rem 0.2rem;
    font-size: 0.15rem;
    color: #666;
  }
  .recordList{
    padding: 0 0.2rem;
    background-color: #fff;
    li{
      border-bottom: 1px solid @borderColor;
      padding-bottom: 0.16rem;
      .top{
        padding: 0.12rem 0;
        .flex;
        .flex-pack-justify;
        .flex-align-center;
        span{
          .flex-1;
          line-height: 0.15rem;
          white-space: nowrap;
          overflow: hidden;
        }
        span:first-of-type{
          color: @mainColor;
          font-size: 0.15rem;
        }
        span:last-of-type{
          font-size: 0.13rem;
          color: #999;
          text-align: right;
        }
      }
      .bottom{
        font-size: 0.14rem;
        color: #757575;
        line-height: 1.5em;
        text-align: justify;
      }
    }
    li:last-of-type{
      border: none;
    }
  }
}
</style>