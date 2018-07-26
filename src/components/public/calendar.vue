<template>
  <div class="calendar">
    <p class="curYearMonth">{{year}}年{{month}}月</p>
    <ul class="dateList clearfix">
      <li v-for="item in curMonth.firstWeek"></li>
      <li v-for="item in curMonth.lastDay" :class='{curDay: isCurDay(item),active:selected.day === item,hasNote:data[item - 1]?data[item - 1].hasNote : false}' @click='selectedDate(item)'>
        <div class="day">
          {{item}}
          <span v-if="isCurDay(item)">今天</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import MonthCalendar from '@/assets/calendar'
  import * as common from '@/utils/common'
  export default {
    name: 'calendar',
    data () {
      return {
        selected: {}
      }
    },
    props: {
      data: {
        type: Array,
        default () {
          return []
        }
      },
      year: {
        type: [Number, String],
        default () {
          return new Date().getFullYear()
        }
      },
      month: {
        type: [Number, String],
        default () {
          return new Date().getMonth() + 1
        }
      },
      day: {
        type: [Number, String],
        default () {
          return new Date().getDate()
        }
      }
    },
    created () {
      console.log(this.data)
      let month = new MonthCalendar(this.year, this.month)
      this.curMonth = month
      console.log(this.curMonth)
    },
    methods: {
      isCurDay (day) {
        let _date = new Date()
        if (_date.getFullYear() === this.curMonth.year && (_date.getMonth() + 1) === this.curMonth.month && _date.getDate() === day) {
          return true
        } else {
          return false
        }
      },
      selectedDate (day) {
        if (day !== this.selected.day) {
          this.selected = {...this.curMonth}
          this.$set(this.selected, 'day', day)
        } else {
          this.$set(this.selected, 'day', 0)
        }
        var ymd = new Date(common.strJoint([this.selected.year, this.selected.month, this.selected.day], '/'))
        this.$set(this.selected, 'ymd', ymd)
        this.$emit('onSelected', this.selected)
      },
      resetForm () {
        this.selected = {}
      }
    }
  }
</script>

<style scoped lang="less">
@import url("../../../static/css/mixin");
.calendar{
  padding: 0.25rem 0 0 0;
  .curYearMonth{
    line-height:1;
    font-size: 0.18rem;
    color:@mainColor;
    padding:0  0.2rem;
    margin-bottom: 0.15rem;
  }
  .dateList{
    li{
      float: left;
      width: 14.2857%;
      padding: 0.08rem 0;
      text-align: center;
      line-height: 1;
      font-size: 0;
      margin: 0;
      div.day{
        position: relative;
        font-size: 0.15rem;
        z-index: 0;
        color: #333;
        width: 0.3rem;
        height: 0.3rem;
        line-height: 0.3rem;
        font-family: tahoma;
        display: inline-block;
        border-radius: 50%;
        span{
          position: absolute;
          top: 100%;
          font-size: 0.1rem;
          text-align: center;
          left: 0;
          right: 0;
          line-height: 1;
          margin-top: -0.06rem;
        }
      }
      
    }
    li.curDay{
      .day{
        color: @mainColor;
      }
    }
    li.active .day{
      background-color: @mainColor;
      color: #fff;
    }
    li.active.curDay {
      .day{
        span{
          display: none;
        }
      }
    }
    li.active.hasNote .day, li.curDay.hasNote .day{
      &:after{
        display: none;
      }
    }
    li.hasNote .day{
      &:after{
        content: '';
        width: 0.06rem;
        height: 0.06rem;
        border-radius: 50%;
        background-color: @mainColor;
        display: block;
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -0.025rem;
      }
    }
    
  }
}
</style>