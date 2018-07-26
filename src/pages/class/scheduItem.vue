<template>
  <div class="scheduItem">
    <div class="top">
      <span>{{data.timeRange}}</span>
      <span>{{data.state}}</span>
    </div>
    <div class="middle">
      <p><i class="iconfont icon-cheliang"></i><span>{{data.subject}}</span></p>
      <p><i class="iconfont icon-map_pin"></i><span>{{data.plat}}</span></p>
    </div>
    <ul class="bottom clearfix">
      <li v-for='item in data.students'>
        <div class="avatar">
          <img :src="item.avatar"/>
        </div>
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'scheduItem',
    props: {
      data: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="less">
@import url("../../../static/css/mixin");
.scheduItem{
  background-color: #fff;
  border-radius: 0.06rem;
  width: 100%;
  box-sizing: border-box;
  padding-left: 0.2rem;
  margin-bottom: 0.1rem;
  padding-bottom:0.06rem;
  .top{
    height: 0.41rem;
    padding-right:0.2rem;
    .flex;
    .flex-pack-justify;
    .flex-align-center;
    border-bottom:1px solid @borderColor;
    span{
      color: #999;
      font-size: 0.18rem;
      font-weight: 300;
      line-height: 1;
    }
  }
  .middle{
    p{
      font-size: 0.14rem;
      color: #666;
      margin: 0.1rem 0;
      i{
        color: #999;
        font-size: 0.14rem;
      }
      span{
        margin-left: 0.15rem;
      }
    }
  }
  
  .bottom{
    padding-right: 0.4rem;
    li{
      float:left;
      margin-bottom: 0.1rem;
      margin-right: 0.15rem;
      .avatar{
        width: 0.3rem;
        height: 0.3rem;
        overflow: hidden;
        border-radius: 10%;
        img{
          width: 100%;
          min-height: 100%;
          display: block;
        }
      }
      p{
        text-align: center;
        color: #666;
        font-size: 0.1rem;
        margin-top: 0.03rem;
      }
    }
  }
}
</style>