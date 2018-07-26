<template>
  <div class="selfIndex">
    
      <div class="userInfo">
        <div class="infoWrapper">
          <router-link to='/infoEdit' tag='div'>
            <div class="cell avatar">
              <div class="iconWrapper" style="display: inline-block;">
                <img src="../../../static/img/user_img_m.png" />
              </div><div class="cell right">
                <i class="iconfont icon-arrow_right"></i>
              </div>
            </div>
            <div class="cell info">
              <div class="infoBox">
                <div class="infoDetail">
                  <h2 class="name">张教练</h2>
                  <p class="school">深圳-深港驾校</p>
                </div>
                <div class="tag">未认证</div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <v-scroller class="scroller">
        <div class="functionList">
          <ul>
            <li v-for="item in userFuncList">
              <router-link :to="item.path" tag="a">
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
                <i class="iconfont icon-arrow_right"></i>
              </router-link>
            </li>
          </ul>
          <ul>
            <li v-for="item in carFuncList">
              <router-link :to="item.path" tag="a">
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
                <i class="iconfont icon-arrow_right"></i>
              </router-link>
            </li>
          </ul>
          <ul>
            <li v-for="item in setingFuncList">
              <router-link :to="item.path" tag="a">
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
                <i class="iconfont icon-arrow_right"></i>
              </router-link>
            </li>
          </ul>
        </div>
      </v-scroller>
  </div>
</template>

<script>
  import scroller from '@/components/public/scrollWrapper'
  export default {
    name: 'selfIndex',
    data () {
      return {
        userFuncList: [{
          name: '我的订单',
          icon: 'iconfont icon-dingdan',
          path: '/order'
        }, {
          name: '我的钱包',
          icon: 'iconfont icon-qianbao',
          path: '/wallet'
        }, {
          name: '积分管理',
          icon: 'iconfont icon-jifeng',
          path: '/self'
        }],
        carFuncList: [{
          name: '车辆管理',
          icon: 'iconfont icon-cheliang',
          path: '/self'
        }, {
          name: '训练场地',
          icon: 'iconfont icon-xunlianchang',
          path: '/self'
        }, {
          name: '常用考场',
          icon: 'iconfont icon-kaochang',
          path: '/self'
        }],
        setingFuncList: [{
          name: '个人设置',
          icon: 'iconfont icon-shezhi',
          path: '/self'
        }]
      }
    },
    components: {
      'v-scroller': scroller
    }
  }
</script>

<style scoped lang="less">
  @import '../../../static/css/mixin';
  .selfIndex{
    position: relative;
    height: 100%;
  }
  .scroller{
    position: absolute;
    top:1.24rem;
    bottom: 0rem;
    overflow: hidden;
    width: 100%;
  }
  .userInfo {
    background-color: #fff;
    box-sizing: border-box;
    border-bottom: 1px solid @borderColor;
    padding: 0 0 0.25rem 0;
    width: 100%;
    .messageReminding {
      width: 100%;
      height: 0.45rem;
      line-height: 0.45rem;
      text-align: right;
      i{
        display:inline-block;
        padding:0 0.15rem;
        font-size: 0.16rem;
        vertical-align: middle;
      }
    }
    .infoWrapper {
      box-sizing: border-box;
      width: 100%;
      overflow: hidden;
      padding: 0.04rem 0;
      .cell {
        vertical-align: top;
        height: 100%;
      }
      .right {
        display: inline-block;
        width: 0.33rem;
        height: 100%;
        font-size: 0;
        text-align: center;
        line-height: 0.75rem;
      }
      .avatar {
        width: 1.1rem;
        float: right;
        .iconWrapper {
          width: 0.75rem;
          height: 0.75rem;
          display: inline-block;
          font-size: 0;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            min-height: 100%;
          }
        }
      }
      .info {
        margin: 0 1.08rem 0 0;
        padding: 0 0.2rem;
        .infoBox {
          display: inline-block;
          padding: 0 0.1rem 0 0;
          position: relative;
          h2.name {
            padding: 0;
            font-size: 0.34rem;
            margin: 0 0 0.21rem 0;
            color: #333;
            line-height: 1;
            font-weight: 400;
          }
          .school {
            font-size: 0.14rem;
            line-height: 0.2rem;
            color: #666;
            margin: 0;
          }
          .tag {
            position: absolute;
            top: 0.1rem;
            left: 100%;
            border: 1px solid @mainColor;
            border-radius: 21px;
            height: 0.18rem;
            font-size: 0.12rem;
            text-align: center;
            white-space: nowrap;
            color: @mainColor;
            padding: 0.02rem 0.06rem;
          }
        }
      }
    }
  }
  
  .functionList {
    width: 100%;
    padding-left: 0.2rem;
    box-sizing: border-box;
    margin: 0rem 0 0.1rem 0;
    background-color: #fff;
    ul {
      padding: 0.13rem 0;
      border-bottom: 1px solid @borderColor;
    }
    ul:last-of-type{
      border-bottom: none;
    }
    li {
      width: 100%;
      box-sizing: border-box;
      padding: 0.125rem 0.2rem 0.125rem 0;
      a {
        color: #333333;
        display: block;
        text-decoration: none;
        line-height: 0.2rem;
      }
      span {
        font-size: 0.17rem;
        color: #333;
        line-height: 1;
        display: inline-block;
        vertical-align: middle;
      }
      i:first-of-type {
        display: inline-block;
        color: @mainColor;
        font-size: 0.2rem;
        vertical-align: middle;
      }
      i:last-of-type {
        float: right;
        line-height: 1;
        margin-top: 0.04rem;
      }
    }
  }
  
</style>