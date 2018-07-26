/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="full-content">
   <div style="height: 1.8rem;">
      <mt-swipe :auto="4000" :show-indicators="false">
        <mt-swipe-item><img src="../../../static/img/banner@2X.png" alt="" width="100%"></mt-swipe-item>
        <mt-swipe-item><img src="../../../static/img/banner@2X.png" alt="" width="100%"></mt-swipe-item>
      </mt-swipe>
   </div>
    <div class="icon-menus">
      <div v-for="(item, index) in icons" @click="handleIcon(item, index)" :key="index">
        <i class="iconfont" :class="item.icon"></i>
        <div class="icon-router">{{item.text}}</div>
      </div>
    </div>
    <div class="not-date flex-space-between">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon-test"></use>
        </svg>
      </div>
      <div class="not-date-right">
        <my-cell title="考试批复" border="" active="">
          <div class="mainColor">去使用</div>
        </my-cell>
        <div class="text">记录学员考试时间，轻松安排学员训练</div>
      </div>
    </div>
    <div class="not-date flex-space-between">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon-test1"></use>
        </svg>
      </div>
      <div class="not-date-right">
        <my-cell title="教学排班" border="" active="">
          <div class="mainColor">去使用</div>
        </my-cell>
        <div class="text">打造您的专属教练课程表</div>
      </div>
    </div>
  </div>
</template>

<script>
  import datapicker from '../../components/public/datapicker'
  export default {
    name: 'home_index',
    data () {
      return {
        icons: [
          {
            text: '招生名片',
            icon: 'icon-mingpian',
            router: 'editCoachCard'
          },
          {
            text: '考场预约',
            icon: 'icon-car',
            router: 'venueBooking'
          },
          {
            text: '考试批复',
            icon: 'icon-date',
            router: 'testApproval'
          }
        ],
        styleObj: {
          title: {
            'font-size': '.15rem'
          },
          content: {
            'font-size': '.14rem',
            'color': '#41bdc7'
          }
        }
      }
    },
    created () {},
    mounted () {},
    components: {datapicker},
    methods: {
      handleIcon (item, index) {
        if (item.router === '') return false
        this.turnTo(item.router)
      }
    },
    activated () {
      console.log('activated')
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .homePage {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 .2rem;
    position: relative;
    .icon-menus {
      box-shadow: 0 .03rem .04rem 0 rgba(115,123,162,0.10);
      border-radius: .05rem;
      height: 1rem;
      width: 100%;
      font-size: .12rem;
      color: #4e4e4e;
      background-color: #fff;
      display: flex;
      flex-direction: row;
      .icon-mingpian {
        color: #00c582;
      }
      .icon-car {
        color: #fc8a5b;
      }
      .icon-date {
        color: #4ca0ff;
      }
      > div:active {
        color: rgba(243, 135, 72, 0.79);
      }
      > div {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 0 .15rem;
        i {
          font-size: .43rem;
        }
      }
    }
    .swipe img {
      width: 100%;
    }
    .not-date {
      margin-top: .1rem;
      box-shadow:0 .03rem .04rem 0 rgba(115,123,162,0.10);
      border-radius: .05rem;
      height: 1rem;
      font-size: .12rem;
      color: #666666;
      box-sizing: border-box;
      padding: .2rem .15rem;
      .not-date-right {
        flex: 1;
        .text {
          margin-left: 3%;
          margin-top: .06rem;
        }
        .my-cell {
          height: .3rem;
        }
      }
      svg {
        font-size: .75rem;
      }
    }
    .near-text {
      width: 100%;
      height: .50rem;
      font-size: .14rem;
      margin-top: .05rem;
      .input {

      }
    }
    .more-plan {
      height: .40rem;
    }
  }
</style>
