<template>
  <li class="funcItem">
    <router-link  tag='span' class='link' v-if='data.path' :to='data.path'>
      <span>{{data.name}}</span>
      <div class="right">
        <span class="value" v-if='data.value !== ""'>{{data.value}}</span>
        <i class="iconfont icon-arrow_right" v-if='data.click'></i>
      </div>
    </router-link>
    <span v-else-if='data.events' class="link" @click='data.events'>
      <span>{{data.name}}</span>
      <div class="right">
        <span class="value" v-if='data.value !== ""'>{{data.value}}</span>
        <i class="iconfont icon-arrow_right" ></i>
      </div>
    </span>
    <span v-else class="link">
      <span>{{data.name}}</span>
      <div class="right">
        <span class="value" v-if='data.value !== ""'>{{data.value}}</span>
        <i class="iconfont icon-arrow_right" ></i>
      </div>
    </span>
  </li>
</template>

<script>
  export default {
    name: 'funcItem',
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
@import '../../../static/css/mixin';
.funcItem{
  padding: 0.18rem 0.2rem;
  .link{
    display: block;
    .flex;
    .flex-pack-justify;
    .flex-align-center;
    span{
      font-size: 0.17rem;
      color: #333;
      line-height: 0.2rem;
    }
    .right{
      line-height: 0.2rem;
      i{
        vertical-align: middle;
      }
      span{
        font-size: 0.15rem;
        color: #666;
        margin-right: 0.1rem;
      }
    }
  }
}
</style>