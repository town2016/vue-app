<template>
  <div class="scheduling">
    <div class="calendarWrapper">
      <div class="top">
        <div class="date">
          <h5>{{curDate}}</h5>
          <i class="iconfont icon-date" @click='goCalendar'></i>
        </div>
        <div class="addBtn" @click='goAddSchedu'>
          <i class="iconfont icon-add1"></i>添加排班
        </div>
      </div>
      <v-scroll :loop='scroll.loop' :max="scroll.max" @onChange='getDate' :startDate='scroll.startDate'></v-scroll>
    </div>
    <v-scroller class='scroller' v-if='scheduList.length > 0'>
      <div class="scheduList">
        <v-scheduItem v-for='(item, index) in scheduList' :data='item' :key='index' @click.native='goDetail(item)'></v-scheduItem>
      </div>
    </v-scroller>
    <div class="nodata" v-if='isEmpty'>
      <div class="emptyContent">
        <img src="../../../static/img/empty@3x.png" />
        <p>暂无排班</p>
      </div>
      <div class="addNowBtn" @click='goAddSchedu("hasDate")'>立即排班</div>
    </div>
  </div>
</template>

<script>
  import scroller from '@/components/public/scrollWrapper'
  import scroll from '@/components/public/scroll'
  import scheduItem from '@/pages/class/scheduItem'
  import {mapMutations, mapGetters} from 'vuex'
  import * as common from '@/utils/common'
  export default {
    name: 'scheduling',
    data () {
      return {
        scroll: {
          loop: false,
          max: 4,
          startDate: new Date()
        },
        curDate: '',
        scheduList: [],
        curDay: {},
        isEmpty: false
      }
    },
    created () {
      this.curDate = this.dateFormate(new Date())
      this.getList()
      if (Object.keys(this.dateCache).length > 0) {
        this.scroll.startDate = this.dateCache.ymd
      }
    },
    destroyed () {
      this.setDateCache({})
    },
    methods: {
      dateFormate (_date) {
        return _date.getFullYear() + '年' + (_date.getMonth() + 1) + '月'
      },
      getDate (_date) {
        let curDate = new Date(_date.year + '/' + (_date.month + 1) + '/' + _date.date)
        this.$set(this, 'curDate', this.dateFormate(curDate))
        this.curDay = _date
      },
      goCalendar () {
        this.$router.push({
          path: '/calendars'
        })
      },
      goAddSchedu (sign) {
        if (sign === 'hasDate') {
          this.setScheduDate(common.strJoint([this.curDay.year, this.curDay.month + 1, this.curDay.date], '-'))
        } else {
          this.setScheduDate('')
        }
        this.$router.push({
          path: '/editSchedu',
          query: {
            model: 'add'
          }
        })
      },
      goDetail (schedu) {
        this.$router.push({
          path: '/editSchedu',
          query: {
            model: 'detail',
            id: schedu.id
          }
        })
      },
      getList () {
        setTimeout(() => {
          this.scheduList = [
            {
              id: 's1',
              timeRange: '08:00-12:00',
              state: '已完成',
              subject: '科目二基础训练',
              plat: '深港-西丽训练场',
              students: [
                {
                  avatar: '../../../static/img/20160612231002_CHtPZ.thumb.700_0@1x (1).png',
                  name: '张三'
                }
              ]
            },
            {
              id: 's2',
              timeRange: '08:00-12:00',
              state: '已完成',
              subject: '科目二基础训练',
              plat: '深港-西丽训练场',
              students: [
                {
                  avatar: '../../../static/img/20160612231002_CHtPZ.thumb.700_0@1x (1).png',
                  name: '张三'
                }
              ]
            }
          ]
          if (this.scheduList.length > 0) {
            this.isEmpty = false
          } else {
            this.isEmpty = true
          }
        }, 200)
      },
      ...mapMutations({
        setScheduDate: 'setScheduDate',
        setDateCache: 'setDateCache'
      })
    },
    computed: {
      ...mapGetters([
        'dateCache'
      ])
    },
    components: {
      'v-scroll': scroll,
      'v-scheduItem': scheduItem,
      'v-scroller': scroller
    }
  }
</script>

<style scoped lang="less">
@import url("../../../static/css/mixin");
.scheduling{
  height:100%;
  position:relative;
  .scroller{
    position:absolute;
    top:1.53rem;
    bottom:0;
    width:100%;
  }
  .scheduList{
    padding:0.1rem 0.12rem;
  }
  .calendarWrapper{
    background-color: @mainColor;
    padding:0.28rem 0 0.06rem 0;
    .top{
      margin-bottom: 0.26rem;
      .flex;
      .flex-pack-justify;
    }
    .date{
      color: #fff;
      margin-left: 0.24rem;
      line-height: 0.3rem;
      font-size: 0;
      h5{
        font-size:0.24rem;
        font-weight: 200;
        display: inline-block;
        vertical-align: middle;
      }
      i{
        display: inline-block;
        vertical-align: middle;
        font-size: 0.16rem;
        padding: 0 0.13rem;
      }
    }
    .addBtn{
      color: #fff;
      font-size: 0.13rem;
      font-weight: 400;
      .userSelect;
      width: 0.9rem;
      height: 0.3rem;
      box-sizing: border-box;
      text-align: center;
      line-height: 0.3rem;
      margin-right: 0.24rem;
      border: 1px solid #fff;
      border-radius: 0.15rem;
      i{
        margin-right: 0.06rem;
        font-size: 0.12rem;
      }
    }
  }
}
.nodata{
  width: 100%;
  .emptyContent{
    width: 100%;
    text-align: center;
    padding-top:1rem;
    img{
      display: inline-block;
      width: 1.13rem;
    }
    p{
      text-align: center;
      font-size: 0.18rem;
      color: #c2c2c2;
      margin-top: 0.1rem;
      line-height: 1;
    }
  }
  .addNowBtn{
    margin: 0.4rem auto 0;
    width: 1rem;
    height: 0.35rem;
    line-height: 0.35rem;
    color: #fff;
    background-color: @mainColor;
    font-size: 0.15rem;
    text-align: center;
    border-radius: 0.06rem;
  }
}
</style>