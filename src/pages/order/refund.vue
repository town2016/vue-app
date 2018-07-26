<template>
  <div class="refund">
    <my-header :title="header.title" :hideBack="header.hideBack" class="noShadow"></my-header>
    <v-scroller class="wrapper">
      <v-orderItem :data='order' class='order'></v-orderItem>
      <div class="refundInfo">
        <div class="refundReason formGroup">
          <label>退款原因</label>
          <div class="right">
            <span>请选择</span>
            <i class="iconfont icon-arrow_right"></i>
          </div>
        </div>
        <div class="refundDesc formGroup">
          <label>退款说明：</label>
          <div class="right">
            <input type="text" placeholder="选填"/>
          </div>
        </div>
        <div class="refundAmt formGroup" style="margin-top: 0.075rem;">
          <label>退款金额：</label>
          <div class="right">
            <input type="text" placeholder="请输入退款金额"/>
          </div>
        </div>
      </div>
      <div class="tips pd20 clearfix">
        <div class="tipIcon">
          <i class="iconfont icon-bell primary"></i>
        </div>
        <div class="tipMsg">
          为了避免退费失败，请提前致电广仁考场，协商退费金额
        </div>
      </div>
    </v-scroller>
    <div class="fixedBtn"><b>提交</b></div>
  </div>
</template>

<script>
  import scroller from '@/components/public/scrollWrapper'
  import orderItem from '@/pages/order/orderItem'
  export default {
    name: 'refund',
    data () {
      return {
        header: {
          title: '申请退款',
          hideBack: false
        },
        order: {
          id: 'or1',
          examroom: '深圳-广仁考场',
          amt: 400.00,
          yymmdd: '2017-02-06',
          hhmmss: '14:00-16:00',
          type: 'C1',
          carNo: '粤B1234学',
          state: 0
        }
      }
    },
    components: {
      'v-orderItem': orderItem,
      'v-scroller': scroller
    }
  }
</script>

<style  lang="less">
@import url("../../../static/css/mixin");
.refund{
  background-color: @mainBgColor;
  .wrapper{
    position:absolute;
    top:0.45rem;
    padding-top:0.1rem;
    box-sizing:border-box;
    width:100%;
    bottom:0.5rem;
    overflow:hidden;
    .orderItem.order{
      .inner{
        .top{
          border-bottom:none !important;
          h5{
            span:last-of-type{
              color:@mainColor;
            }
          }
        }
        .bottom{
          .stateBtn{
            display: none;
          }
        }
      }
    }
    .refundInfo{
      .formGroup{
        background-color: #fff;
        padding: 0.18rem 0.2rem;
        .flex;
        .flex-pack-justify;
        .flex-align-center;
        label{
          font-size: 0.17rem;
          color: #333;
          line-height: 0.24rem;
          padding-right: 0.1rem;
        }
        .right{
          .flex-1;
          line-height: 0.24rem;
          text-align: right;
          span{
            font-size: 0.14rem;
            color: #999;
          }
          input{
            text-align: left;
            font-size: 0.14rem;
            width: 100%;
            border:none;
            line-height: 0.24rem;
            display: block;
          }
        }
      }
    }
    .tips{
      padding-bottom: 0.2rem;
      margin-top: 0.125rem;
      .tipIcon{
        width: 0.25rem;
        height: 0.25rem;
        float: left;
        font-size: 0.16rem;
      }
      .tipMsg{
        font-size: 0.14rem;
        color: #999;
        margin: 0 0 0 0.25rem;
      }
    }
  }
}
</style>