<template>
  <div class="order">
    <my-header :title="header.title" right_text="" @left_click='back' :hideBack="header.hideBack" class="noShadow"></my-header>
    <ul class="tabs">
      <li v-for="(item,index) in tabs" :class='{active:curTab == index}' @click="tabTransform(index)"><span>{{item}}</span></li>
    </ul>
    <v-scroller
      class="scroller"
      ref="scroller"
      :data="order.orderList"
      :pullDown='scroller.pullDown'
      :pullUp='scroller.pullUp'
      @pullingDown='pullDown'
      @pullingUp='pullUp'
      @scroll="scroll">
      <transition-group  name="slide" tag='div' mode="out-in">
        <div class="content" v-for="(item,index) in tabs" v-if="index == curTab" :key='index'>
          <ul>
            <li v-for="item in order.orderList" isClick  @click="getDetail(item)">
              <v-orderItem :data="item"></v-orderItem>
            </li>
          </ul>
        </div>
      </transition-group>
    </v-scroller>
    <transition name="bottomIn">
      <router-view class='orderDetail'></router-view>
    </transition>
    
  </div>
</template>

<script>
import orderItem from '@/pages/order/orderItem'
import scroller from '@/components/public/scrollWrapper'
export default {
  name: 'order',
  data () {
    return {
      header: {
        title: '我的订单',
        hideBack: false
      },
      tabs: ['全部', '已完成', '待完成', '已取消'],
      curTab: 0,
      scroller: {
        pullDown: {
          threshold: 50,
          stop: 40
        },
        pullUp: {
          threshold: 0
        }
      },
      order: {
        orderList: [{
          id: 'or1',
          examroom: '深圳-广仁考场',
          amt: 400.00,
          yymmdd: '2017-02-06',
          hhmmss: '14:00-16:00',
          type: 'C1',
          carNo: '粤B1234学',
          state: 0
        }, {
          id: 'or2',
          examroom: '深圳-广仁考场',
          amt: 400.00,
          yymmdd: '2017-02-06',
          hhmmss: '14:00-16:00',
          type: 'C2',
          carNo: '粤B1234学',
          state: 2
        }]
      }
    }
  },
  methods: {
    tabTransform (index) {
      this.curTab = index
    },
    back () {
      this.$router.push({
        path: '/home/self'
      })
    },
    scroll (pos) {},
    pullDown () {
      setTimeout(() => {
        this.$refs.scroller.finishPullDown()
      }, 2000)
    },
    pullUp () {
      setTimeout(() => {
        this.$refs.scroller.finishPullUp()
      }, 2000)
    },
    getDetail (order) {
      this.$router.push({
        path: '/order/detail',
        query: {
          id: order.id
        }
      })
    }
  },
  components: {
    'v-scroller': scroller,
    'v-orderItem': orderItem
  }
}
</script>

<style scoped lang="less">
@import '../../../static/css/mixin';
.order{
  background-color: @mainBgColor;
  position:relative;
}
.tabs{
  margin-top:1px;
  width: 100%;
  height:0.6rem;
  background-color: #fff;
  .flex;
  .flex-pack-justify;
  li{
    line-height: 0.6rem;
    text-align: center;
    font-size: 0.16rem;
    color: #333;
    .flex-1;
    span{
      padding: 0 5px;
      display: inline-block;
      height: 100%;
      box-sizing: border-box;
      border-bottom: 2px solid transparent;
    }
  }
  li:hover{
    span{
      color: @mainColor;
      border-color: @mainColor;
    }
  }
  li.active{
    span{
      color: @mainColor;
      border-color: @mainColor;
    }
  }
}
.scroller{
  position: absolute;
  width: 100%;
  top: 1.15rem;
  bottom: 0;
}
.orderDetail{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
}
</style>