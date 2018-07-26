/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="i-scroll">
    <div class="i-scroll-content" v-on:scroll.passive="onDateScroll">
      <div style="white-space: nowrap;">
        <div class="dateList" :style="{width: 100/7 + '%'}" v-for="(item,index) in dateList" :class="{active:currentIndex === index,hasScheduling:item.pointer}">
          <div class="inner">
            <div class='week'>
              {{item.day}}
            </div>
            <div @click="onDateClick(item,index)" class='day'>
              {{item.date}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        dateList: [],
        currentIndex: -1
      }
    },
    props: {
      loop: {
        type: Boolean,
        default () {
          return true
        }
      },
      max: {
        type: Number,
        default () {
          return 2
        }
      },
      startDate: {
        type: Date,
        default () {
          return new Date()
        }
      }
    },
    created () {
      this.getDateList()
      this.initCurDate()
    },
    mounted () {},
    methods: {
      initCurDate () {
        this.currentIndex = 0
        this.$emit('onChange', this.dateList[this.currentIndex])
      },
      getDateList () {
        let week = ['日', '一', '二', '三', '四', '五', '六']
        let date
        let y
        let m
        let d
        let nowDay
        if (this.dateList.length < 1) {
          date = this.startDate
        } else {
          let t = this.dateList[this.dateList.length - 1]
          date = new Date(t.year, t.month, t.date)
        }
        y = date.getFullYear()
        m = date.getMonth()
        d = date.getDate()
        nowDay = date.getDay()
        let i = 0
        let day = this.dateList.length ? [] : [{
          day: week[nowDay],
          date: d,
          month: m,
          year: y
        }]
        // 一次加载4周
        while (i < (this.max * 7 - 1)) {
          i++
          let obj = {}
          obj.year = new Date(y, m, d + i).getFullYear()
          obj.month = new Date(y, m, d + i).getMonth()
          obj.date = new Date(y, m, d + i).getDate()
          obj.day = week[new Date(y, m, d + i).getDay()]
          day.push(obj)
        }
        this.dateList.push(...day)
      },
      onDateClick (item, index) {
        this.$emit('onChange', item)
        this.currentIndex = index
      },
      onDateScroll (event) {
        if (!this.loop) {
          return
        }
        let scrollLeft = event.target.scrollLeft
        let scrollWidth = event.target.scrollWidth
        let width = event.target.clientWidth
        // console.log(scrollWidth - scrollLeft, width)
        if (scrollWidth - scrollLeft - width < 2) {
          // console.log(scrollWidth - scrollLeft, width)
          this.getDateList()
        }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
 @import url("../../../static/css/mixin");
  .i-scroll {
    width: 100%;
    .i-scroll-content {
      width: 100%;
      overflow:auto;
      &::-webkit-scrollbar{
        display: none;
      }
      .dateList {
        display: inline-block;
        padding: 0;
        position: relative;
        text-align: center;
        margin: 0;
        color: #fff;
        justify-content: center;
        align-items: center;
        .inner{
          height: 0.45rem;
          width: 0.36rem;
          display: inline-block;
          border-radius: 0.02rem;
        }
        .week{
          font-size: 0.12rem;
          line-height: 0.16rem;
        }
        .day{
          font-size: 0.14rem;
          line-height: 0.2rem;
        }
        &:after{
          content: '•';
          display: none;
          text-align: center;
          width: 100%;
          font-size: 0.04rem;
          position: absolute;
          left:0;
          color: #fff;
          bottom:0rem;
        }
      }
      .dateList.hasScheduling{
        &:after{
          display: block;
        }
      }
      .dateList.active{
        color: @mainColor;
        .inner{
          background-color: #fff;
        }
        &:after{
          color: @mainColor;
        }
      }
    }
  }
</style>
