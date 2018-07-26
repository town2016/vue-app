<template>
  <div class="share" v-if='openShare'>
    <transition name='bottomIn'>
      <div class="shareWrapper" v-if='flag'>
        <ul class="shareList ">
          <li class="shareItem" v-for='item in shareList'>
            <span :class='item.classes'>
              <i :class='item.icon'></i>
            </span>     
            <p>{{item.label}}</p>
          </li>
        </ul>
        <div class="cancelBtn" @click='flag = false'>取消</div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'share',
    data () {
      return {
        shareList: [
          {
            icon: 'iconfont icon-ic_WEIXIN',
            classes: 'wx',
            label: '微信'
          },
          {
            icon: 'iconfont icon-IC_quan',
            classes: 'quan',
            label: '朋友圈'
          },
          {
            icon: 'iconfont icon-ic_QQ',
            classes: 'qq',
            label: 'QQ好友'
          },
          {
            icon: 'iconfont icon-ic_ZONE',
            classes: 'zone',
            label: 'QQ空间'
          }
        ],
        flag: false
      }
    },
    props: {
      openShare: {
        type: Boolean,
        default () {
          return false
        }
      }
    },
    watch: {
      openShare: function (val) {
        setTimeout(() => {
          this.flag = val
        }, 200)
      },
      flag: function (val) {
        setTimeout(() => {
          this.$emit('update:openShare', val)
        }, 200)
      }
    }
  }
</script>

<style scoped lang="less">
@import url("../../../static/css/mixin");
.share{
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  .cancelBtn{
    width: 100%;
    font-size: 0.2rem;
    color:#007aff;
    letter-spacing: 1px;
    line-height:1;
    border-top:1px solid @borderColor;
    text-align: center;
    padding: 0.12rem 0;
  }
  .shareWrapper{
    position: absolute;
    background-color: #fff;
    bottom: 0.15rem;
    left: 0.1rem;
    right: 0.1rem;
    border-radius: 0.14rem;
    .shareList{
      width: 100%;
      padding:0.4rem 0;
      .flex;
      .flex-pack-justify;
      li{
        flex: 1;
        text-align: center;
        >span{
          display: inline-block;
          height: 0.5rem;
          width: 0.5rem;
          border-radius: 50%;
          text-align: center;
          line-height: 0.5rem;
        }
        i{
          font-size:0.3rem;
          color: #fff;
        }
        .quan{
          background-color: #75ba4b;
        }
        .wx{
          background-color: #45ad47;
        }
        .qq{
          background-color: #34a7d2;
        }
        .zone{
          background-color: #dfbc50;
        }
        p{
          font-size: 0.12rem;
          color: #999;
          letter-spacing: 0.009rem;
        }
      }
    }
  }
}

</style>