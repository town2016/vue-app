/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="full-content backGroundMain">
    <my-header title="报名列表"></my-header>
    <div class="studentList">
      <div class="student" v-for="(item, index) in studentList" :key="item.index">
        <div class="name">
          <span>{{item.name}}</span>
          <i class="iconfont icon-user"></i>
        </div>
        <div class="phone">{{item.phone}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'studentList',
    data () {
      return {
        studentList: [
          {
            name: '张三',
            grid: '',
            phone: '13824569874'
          },
          {
            name: '张四',
            grid: '',
            phone: '13824569874'
          },
          {
            name: '张三',
            grid: '',
            phone: '13824569874'
          },
          {
            name: '张四',
            grid: '',
            phone: '13824569874'
          }
        ]
      }
    },
    created () {
    },
    mounted () {
    },
    methods: {}
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .studentList {
    background-color: #ffffff;
    margin-top: .1rem;
    .student {
      height: .7rem;
      box-sizing: border-box;
      padding: .16rem .2rem;
      .name {
        line-height: .17rem;
        font-size: .17rem;
        color: #333333;
        span {
          margin-right: .05rem;
        }
      }
      .phone {
        margin-top: .06rem;
        line-height: .12rem;
        font-size: .12rem;
        color: #666666;
      }
    }
  }
</style>
