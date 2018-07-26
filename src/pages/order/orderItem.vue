<template>
  <div class="orderItem">
    <div class="inner">
      <div class="top">
        <h5>
          <span>{{data.examroom}}</span>
          <span>&yen;{{data.amt}}</span>
        </h5>
        <div class="dateBox">
          <span>{{data.yymmdd}}</span>
          <span>{{data.hhmmss}}</span>
        </div>
      </div>
      <div class="bottom">
        <div class="cardNo">
          <span class="iconfont primary" :class="{'icon-grid':data.type == 'C2','icon-students':data.type == 'C1'}"></span>
          <span>{{data.carNo}}</span>
        </div>
        <div class="stateBtn" :class="{'primary':data.state == 1 || data.state == 2}">{{states[data.state]}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'orderItem',
    data () {
      return {
        states: {
          0: '未支付',
          1: '已支付',
          2: '练考中',
          3: '已取消',
          4: '已完成'
        }
      }
    },
    props: {
      data: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="less">
@import '../../../static/css/mixin';
.orderItem{
  width: 100%;
  margin-bottom: 0.1rem;
  height: 1.11rem;
  box-sizing:border-box;
  background-color: #fff;
  padding-left: 0.2rem;
  .inner{
    .top{
      width:100%;
      box-sizing:border-box;
      padding:0.18rem 0 0.15rem 0;
      border-bottom: 1px solid @borderColor;
      h5{
        .flex;
        .flex-pack-justify;
        margin:0 0.2rem 0.1rem 0;
        line-height: 1;
        span{
          color:#333;
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          font-size: 0.17rem;
          font-weight: 400;
        }
        span:last-of-type{
          text-align: right;
        }
      }
      .dateBox{
        line-height: 1;
        margin: 0 0.2rem 0 0;
        padding: 0;
        font-size: 0;
        span{
          display: inline-block;
          color: #666;
          font-size: 0.14rem;
          line-height: 1;
          margin-right: 0.17rem;
        }
      }
    }
    .bottom{
      height: 0.35rem;
      margin-right: 0.2rem;
      .flex;
      .flex-pack-justify;
      .flex-align-center;
      .cardNo,.stateBtn{
        line-height: 0.21rem;
      }
      .cardNo{
        font-size: 0.17rem;
      }
      .stateBtn{
        font-size: 0.15rem;
      }
    }
  }
}
</style>