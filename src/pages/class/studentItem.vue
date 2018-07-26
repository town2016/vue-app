<template>
  <li class="studdentItem">
    <div class="left">
      <div class="avatar">
        <img :src="data.avatar" />
      </div>
      <div class="info">
        <p>{{data.name}}</p>
        <p>{{data.classes}}</p>
      </div>
    </div>
    <div class="right">
        <slot></slot>
    </span>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'studentItem',
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

<style lang="less" scoped>
@import url("../../../static/css/mixin");
.studdentItem{
  padding: 0.12rem 0.19rem;
  background-color: #fff;
  border-radius: 0.04rem;
  margin-bottom: 0.1rem;
  .flex;
  .flex-pack-justify;
  .flex-align-center;
  .avatar{
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 50%;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    img{
      display:block;
      width: 100%;
      min-height: 100%;
    }
  }
  .info{
    display: inline-block;
    vertical-align: top;
    height: 0.45rem;
    p:first-of-type{
      font-size: 0.17rem;
      line-height: 0.24rem;
      color: #666;
    }
    p:last-of-type{
      font-size: 0.12rem;
      line-height: 0.16rem;
      color: #999;
      margin-top: 0.04rem;
    }
  }
  .right{
    line-height: 0.45rem;
    i{
      line-height: 1;
    }
    a{
      text-decoration: none;
    }
  }
}
</style>