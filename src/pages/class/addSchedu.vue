<template>
  <div class="addSchedu">
    <my-header title='添加排班'></my-header>
    <v-funcItem v-for='(item, index) in funcList' :data='item' :key='index'></v-funcItem>
  </div>
</template>

<script>
  import funcItem from '@/components/public/funcItem'
  export default {
    name: 'addSchedu',
    data () {
      return {
        funcList: [
          {
            name: '课程名称',
            click: true,
            events: () => {
              this.selectSubject()
            }
          },
          {
            name: '教练车牌',
            click: true,
            path: '/home'
          },
          {
            name: '训练地点',
            click: true,
            path: '/home'
          },
          {
            name: '上课日期',
            click: true,
            path: '/home'
          },
          {
            name: '开课时间',
            click: true,
            path: '/home'
          },
          {
            name: '选择学员',
            click: true
          }
        ]
      }
    },
    methods: {
      selectSubject () {
        console.log(this.funcList)
      }
    },
    components: {
      'v-funcItem': funcItem
    }
  }
</script>

<style>
</style>