/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="home_index">
    <my-header @right_click="rightClick" @right_left="" hideBack="true">
      <i class="iconfont icon-bell"></i>
    </my-header>
    <keep-alive>
      <router-view class="homePage"></router-view>
    </keep-alive>
    <div class="footer-icons">
      <div v-for="(item, index) in icons" @click="handleIcon(item, index)" :key="index" :class="{selectIcon: item.select}">
        <i class="iconfont" :class="item.icon"></i>
        <div class="icon-router">{{item.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import datapicker from '../../components/public/datapicker'
  import scroll from '../../components/public/scroll'
  let cacheIndex
  export default {
    name: 'home',
    components: {datapicker, scroll},
    data () {
      return {
        icons: [
          {
            text: '首页',
            icon: 'icon-home',
            router: 'index',
            select: true
          },
          {
            text: '排班',
            icon: 'icon-note',
            router: 'class',
            select: false
          },
          {
            text: '我的',
            icon: 'icon-me',
            router: 'self',
            select: false
          }
        ]
      }
    },
    created () {
      cacheIndex = 0
    },
    mounted () {},
    methods: {
      rightClick () {
        console.log('消息')
      },
      handleIcon (item, index) {
        item.select = true
        this.title = item.text
        if (cacheIndex !== undefined) this.icons[cacheIndex].select = false
        cacheIndex = index
        this.turnTo({name: item.router})
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .home_index {
    position: relative;
    overflow: hidden;
    .homePage {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding-bottom: .50rem;
    }
    .footer-icons {
      width: 100%;
      height: .50rem;
      font-size: .12rem;
      color: #4e4e4e;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: white;
      box-shadow: 0 0 .10rem 0 rgba(138, 138, 138, 0.32);
      display: flex;
      flex-direction: row;
      .selectIcon {
        color: #41bdc7;
      }
      > div:active {
        color: rgba(65, 189, 199, 0.7);
      }
      > div {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 0 .15rem;
        i {
          font-size: .25rem;
        }
      }
    }
  }
</style>
