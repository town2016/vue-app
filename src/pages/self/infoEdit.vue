<template>
  <div class="userInfoEdit">
    <my-header :title='header.title' :hideBack='header.hideBack' class='noShadow'>
      <span class="primary">保存</span>
    </my-header>
    <v-scroller class='scroller'>
      <div class="functionList">
        <ul>
          <li>
            <a>
              <label>头像</label>
              <div class="flex-1">
                <div class="avatar">
                  <img src="../../../static/img/default_img.png"/>
                </div>
                <i class="iconfont icon-arrow_right"></i>
              </div>
            </a>
          </li>
          <li>
            <a>
              <label>姓名</label>
              <div class="flex-1">
                <span class="val">张天翼</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <label>性别</label>
              <div class="flex-1">
                <span class="radio active">男</span>
                <span class="radio">女</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <label>电话</label>
              <div class="flex-1">
                <span class="val">13678561234</span>
              </div>
            </a>
          </li>
          <li>
            <a>
              <label>身份证号</label>
              <div class="flex-1">
                <span class="val">510200198804261234</span>
              </div>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a>
              <label>所属驾校</label>
              <div class="flex-1">
                <span class="val">深圳-深港驾校</span>
                <i class="iconfont icon-arrow_right"></i>
              </div>
            </a>
          </li>
          <li>
            <a>
              <label>带练车型</label>
              <div class="flex-1">
                <span class="val">C1、C2</span>
                <i class="iconfont icon-arrow_right"></i>
              </div>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a>
              <label>教练认证</label>
              <div class="flex-1">
                <span class="val primary">未认证</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </v-scroller>
  </div>
</template>

<script>
  import scroller from '@/components/public/scrollWrapper'
  export default {
    name: 'userInfoEdit',
    data () {
      return {
        header: {
          title: '编辑个人信息',
          hideBack: false
        }
      }
    },
    components: {
      'v-scroller': scroller
    }
  }
</script>

<style scoped lang="less">
@import "../../../static/css/mixin";
.userInfoEdit{
  background-color: @mainBgColor;
  .scroller{
    position: absolute;
    top: 0.45rem;
    width: 100%;
    bottom: 0;
    overflow: hidden;
  }
  .functionList {
    padding-bottom: 0.2rem;
    ul {
      padding: 0.13rem 0.2rem;
      margin-top: 0.1rem;
      background-color: #fff;
    }
    ul:last-of-type{
      border-bottom: none;
    }
    li {
      width: 100%;
      padding: 0.125rem 0;
      a {
        color: #333333;
        .flex;
        .flex-align-center;
        text-decoration: none;
      }
      label {
        font-size: 0.17rem;
        color: #333;
        line-height: 0.24rem;
        display: inline-block;
        vertical-align: middle;
        padding-right: 0.1rem;
      }
      .flex-1{
        text-align: right;
        font-size: 0;
        min-height: 0.24rem;
        .flex;
        .flex-align-center;
        .flex-pack-right;
        .avatar{
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          overflow: hidden;
          vertical-align: middle;
          display: inline-block;
          font-size: 0;
          margin-right:0.1rem;
          img{
            width: 100%;
            min-height: 100%;
          }
        }
        i{
          display: inline-block;
          vertical-align: middle;
        }
        .val{
          font-size: 0.15rem;
          color: #666;
          display: inline-block;
          line-height: 1;
          margin-right: 0.03rem;
          vertical-align: middle;
        }
        .val.primary{
          color: @mainColor;
        }
        .radio{
          font-size: 0.12rem;
          color: #999;
          line-height: 0.24rem;
          display: inline-block;
          padding: 0 0.2rem;
          margin-left: 0.25rem;
          background-color: #F4F4F4;
          border-radius: 0.12rem;
        }
        .radio.active{
          background-color: @mainColor;
          color: #fff;
        }
      }
      
    }
  }
}
</style>