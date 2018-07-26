<template>
  <div class="addSchedu">
    <my-header :title='header.title'>
      <span class="primary" v-if='model === "detail"' @click="goEdit">编辑</span>
    </my-header>
    <v-scroller class='scroller' :data='students'>
      <ul class="funcList">
        <v-funcItem v-for='(item, index) in funcList' :data='item' :key='index'></v-funcItem>
      </ul>
      <ul class="studuents">
        <v-studentItem v-for='(item, index) in students' :data='item' :key='index'>
            <i class="iconfont icon-delete" @click='_delete(index)' v-if='model !== "detail"'></i>
            <a  v-else :href='"tel:"+item.phone'><i class="iconfont icon-phone primary"></i></a>
        </v-studentItem>
      </ul>
    </v-scroller>
    <v-share :openShare.sync='openShare'></v-share>
    <div class="fixedBtn" @click='goPage'>{{fixedBtnText}}</div>
    <mt-datetime-picker
      ref="datePicker"
      type="date"
      @confirm='getDateValue'
      v-model="formData.dateValue">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="timePicker"
      type="time"
      @confirm='getDateValue'
      v-model="formData.timeValue">
    </mt-datetime-picker>
  </div>
</template>

<script>
  import 'mint-ui/lib/style.css'
  import { DatetimePicker } from 'mint-ui'
  import studentItem from '@/pages/class/studentItem'
  import funcItem from '@/components/public/funcItem'
  import scroller from '@/components/public/scrollWrapper'
  import * as schedu from 'assets/module/schedu'
  import {mapGetters} from 'vuex'
  import share from 'public/share'
  import * as common from '@/utils/common'
  export default {
    name: 'addSchedu',
    data () {
      return {
        openShare: false,
        funcList: [
          {
            name: '课程名称',
            click: true,
            events: () => {
              this.selectSubject()
            },
            value: ''
          },
          {
            name: '教练车牌',
            click: true,
            value: ''
          },
          {
            name: '训练地点',
            click: true,
            value: ''
          },
          {
            name: '上课日期',
            click: true,
            value: '',
            events: () => {
              this.$refs.datePicker.open()
            }
          },
          {
            name: '开课时间',
            click: true,
            value: '',
            events: () => {
              this.$refs.timePicker.open()
            }
          },
          {
            name: '选择学员',
            click: true,
            value: ''
          }
        ],
        students: schedu.students,
        header: {
          title: ''
        },
        fixedBtnText: '',
        formData: {
          dateValue: '',
          timeValue: ''
        },
        subjects: schedu.subjects
      }
    },
    created () {
      if (this.scheduDate !== '') {
        this.funcList[3].value = this.scheduDate
      }
      this.setModel()
    },
    watch: {
      '$route': function (val) {
        this.setModel()
      },
      formData: {
        handler (val) {
          console.log(val)
        },
        deep: true
      }
    },
    methods: {
      setModel () {
        this.model = this.$route.query.model
        this.fixedBtnText = '保存'
        if (this.model === 'edit') {
          this.header.title = '编辑排班'
        } else if (this.model === 'detail') {
          this.header.title = '排班详情'
          this.fixedBtnText = '分享给学员'
        } else {
          this.header.title = '添加排班'
        }
      },
      selectSubject () {
        this.$select(schedu.subjects, ($events) => {
          console.log($events)
        })
      },
      goEdit () {
        this.$router.push({
          path: '/editSchedu',
          query: {
            model: 'edit'
          }
        })
      },
      goPage () {
        if (this.model !== 'detail') {
          this.$router.push({
            path: '/home/class'
          })
        } else {
          this.openShare = true
        }
      },
      _delete (index) {
        this.$confirm({
          msg: '确定移除该学员？',
          styles: {
            'text-align': 'center',
            'color': '#333'
          },
          confirm: () => {
            this.students.splice(index, 1)
          }
        })
      },
      getDateValue ($event) {
        if (typeof $event === 'object') {
          this.formData.dateValue = common.strJoint([$event.getFullYear(), $event.getMonth() + 1, $event.getDate()], '/')
          this.funcList[3].value = this.formData.dateValue
        } else {
          this.formData.timeValue = $event
          this.funcList[4].value = this.formData.timeValue
        }
      }
    },
    components: {
      'v-funcItem': funcItem,
      'v-studentItem': studentItem,
      'v-scroller': scroller,
      'v-share': share,
      'mt-datetime-picker': DatetimePicker
    },
    computed: {
      ...mapGetters([
        'schedu',
        'scheduDate'
      ])
    }
  }
</script>

<style scoped lang='less'>
@import url("../../../static/css/mixin");
.addSchedu{
  background-color: @mainBgColor;
  padding-bottom:0.5rem;
}
.scroller{
  position: absolute;
  top: 0.45rem;
  bottom: 0.5rem;
  width: 100%;
}
.funcList{
  margin-top: 0.1rem;
  background-color: #fff;
}
.studuents{
  padding: 0.1rem 0.15rem;
}
</style>