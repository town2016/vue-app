<template>
  <div class="calendars">
    <my-header title='日历'></my-header>
    <ul class="weeks">
      <li v-for='item in weeks'>{{item}}</li>
    </ul>
    <v-scroller class='scroller'
      ref='scroller'
      :data='scheduList'
      :pullUp='scroller.pullUp'
      @pullingUp='pullUp'>
      <v-calendar 
        v-for='(item, index) in scheduList' 
        @onSelected='getDate($event, index)' 
        :year='item.year' 
        :month='item.month' 
        :data='item.schdulings' 
        :key='index' ref='calendar'>
      </v-calendar>
    </v-scroller>
  </div>
</template>

<script>
  import scroller from '@/components/public/scrollWrapper'
  import calendar from '@/components/public/calendar'
  import {mapMutations} from 'vuex'
  export default {
    name: 'calendars',
    data () {
      return {
        weeks: ['日', '一', '二', '三', '四', '五', '六'],
        scheduList: [
          {
            year: 2018,
            month: 4,
            schedulings: []
          },
          {
            year: 2018,
            month: 5,
            schedulings: [
              {
                id: 'sc001',
                hasNote: true
              }
            ]
          },
          {
            year: 2018,
            month: 6,
            schedulings: []
          }
        ],
        scroller: {
          pullUp: {
            threshold: 50
          }
        }
      }
    },
    beforeDestroy () {
      this.$refs.scroller.finishPullUp()
    },
    methods: {
      pullUp () {
        let lastMonth = this.scheduList[this.scheduList.length - 1].month
        let lastYear = this.scheduList[this.scheduList.length - 1].year
        new Promise((resolve, reject) => {
          let list = []
          for (var i = 0; i < 3; i++) {
            var item = {}
            if ((lastMonth + 1) > 12) {
              lastYear++
              lastMonth = 0
            }
            lastMonth++
            item.year = lastYear
            item.month = lastMonth
            item.schedulings = []
            list.push(item)
          }
          setTimeout(() => {
            resolve(list)
          }, 2000)
        }).then(res => {
          this.scheduList = this.scheduList.concat(res)
          if (this.$refs.scroller) {
            this.$refs.scroller.finishPullUp()
          }
        })
      },
      getDate ($event, index) {
        var list = this.$refs.calendar
        for (let i = 0; i < list.length; i++) {
          if (i !== index) {
            this.$refs.calendar[i].resetForm()
          }
        }
        this.setDateCache($event)
        this.$router.push({
          path: '/home/class'
        })
      },
      ...mapMutations({
        setDateCache: 'setDateCache'
      })
    },
    components: {
      'v-calendar': calendar,
      'v-scroller': scroller
    }
  }
</script>

<style scoped lang="less">
@import url("../../../static/css/mixin");
.app-page-root{
  overflow: auto
}
.scroller{
  position: absolute;
  top: 0.75rem;
  bottom: 0;
  width: 100%;
}
.calendars{
  padding-top: 0.75rem;
}
.weeks{
  width: 100%;
  position: fixed;
  top: 0.45rem;
  left: 0;
  background-color: #fff;
  z-index: 1000;
  .flex;
  li{
   .flex-1;
   font-size:0.12rem;
   color:@mainColor;
   text-align: center;
   line-height: 0.3rem;
   border-top: 1px solid @borderColor;
   border-bottom: 1px solid @borderColor;
  }
}
</style>