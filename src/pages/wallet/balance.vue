<template>
  <div class="balance">
    <my-header title='余额明细'></my-header>
    <v-scroller 
      ref='scroller'
      :data='detailList' 
      class='scroller'
      :pullUp='scroller.pullUp'
      :pullDown='scroller.pullDown'
      @pullingDown='pullDown'
      @pullingUp='pullUp'>
      <ul class="detailList">
        <li v-for='(item, index) in detailList' :key='index'>
          <div class="top flex flex-pack-justify">
            <span class="tradeType">{{item.tradeType}}</span>
            <span class="tradeTime">{{item.tradeTime}}</span>
          </div>
          <div class="bottom flex flex-pack-justify">
            <span class="balances">余额：{{item.balances}}</span>
            <span class="amt">{{item.amt}}</span>
          </div>
        </li>
      </ul>
    </v-scroller>
  </div>
</template>

<script>
  import scroller from 'public/scrollWrapper'
  export default {
    name: 'balance',
    data () {
      return {
        detailList: [
          {
            tradeType: '充值',
            tradeTime: '2018-04-10  12:45:12',
            balances: 100,
            amt: '+100'
          },
          {
            tradeType: '提现',
            tradeTime: '2018-04-10  12:45:12',
            balances: 100,
            amt: '-100'
          }
        ],
        scroller: {
          pullUp: {
            threshold: 0
          },
          pullDown: {
            threshold: 50,
            stop: 40
          }
        }
      }
    },
    methods: {
      pullDown () {
        setTimeout(() => {
          this.$refs.scroller.finishPullDown()
        }, 2000)
      },
      pullUp () {
        setTimeout(() => {
          this.$refs.scroller.finishPullUp()
        }, 2000)
      }
    },
    components: {
      'v-scroller': scroller
    }
  }
</script>

<style scoped lang="less">
@import '../../../static/css/mixin';
.balance{
  background-color: @mainBgColor;
  .scroller{
    width: 100%;
    position: absolute;
    top: 0.45rem;
    bottom: 0;
  }
  .detailList{
    background-color: #fff;
    margin-top: 0.1rem;
    li{
      padding: 0.15rem 0.2rem;
      background-color: #fff;
      span{
        line-height: 1;
      }
      .top{
        margin-bottom:0.08rem;
        .tradeType{
          font-size: 0.18rem;
          color: #333;
        }
        .tradeTime{
          font-size: 0.12rem;
          color: #999;
        }
      }
      .bottom{
        .balances{
          color: #999;
          font-size: 0.12rem;
        }
        .amt{
          font-size: 0.15rem;
          color: @mainColor;
        }
      }
    }
  }
  
  
}
</style>