<template>
  <div class="confirmBox" ref='confirmBox'>
    <div class="inner">
      <div class="msgWrapper">
        <p :style="options.styles">{{options.msg}}</p>
        <p style="margin-top:0.2rem" v-if="options.append">查看<span class="primary" @click='goRules'>退费规则</span>或申请<span class="primary" @click='goRefund'>异常申请</span></p>
      </div>
      <div class="btnGroup clearfix">
        <div class="cancelBtn" @click="cancel"><span>{{options.cancelText && options.cancelText != '' ? options.cancelText : '取消'}}</span></div>
        <div class="confirmBtn" @click="confirm"><span>{{options.confirmText && options.confirmText != '' ? options.confirmText : '确定'}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'confirmBox',
    props: {
      options: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      confirm () {
        this.$refs.confirmBox.remove()
        this.$emit('onConfirm')
      },
      cancel () {
        this.$refs.confirmBox.remove()
        this.$emit('onCancel')
      },
      goRules () {
        this.$refs.confirmBox.remove()
        this.$emit('goRulePage')
      },
      goRefund () {
        this.$refs.confirmBox.remove()
        this.$emit('goRefundPage')
      }
    }
  }
</script>

<style scoped lang="less">
@import '../../../static/css/mixin';
.confirmBox{
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 1000;
  .inner{
    position: absolute;
    top: 50%;
    left: 50%;
    width:3rem;
    .border-radius(0.04rem);
    .translate(-50%,-50%,0);
    z-index:1001;
    background-color:#fff;
    .msgWrapper{
      padding: 0.24rem 0.2rem;
      p{
        font-size:0.15rem;
        color: #757575;
        line-height: 1.5em;
      }
    }
    .btnGroup{
      border-top: 1px solid @borderColor;
    }
    .btnGroup>div{
      width: 50%;
      font-size: 0;
      float: left;
      text-align: center;
      cursor: pointer;
      padding: 0.15rem 0;
      -moz-user-select: none;
      -webkit-user-select: none;
      box-sizing:border-box;
      border-right: 1px solid @borderColor;
      span{
        font-size:0.18rem;
      }
    }
    .btnGroup div:last-of-type{
      border: none;
    }
    .confirmBtn{
      color: @mainColor;
    }
  }
}
</style>