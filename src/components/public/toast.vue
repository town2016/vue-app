<template>
  <!--<transition name="mint-toast-pop">-->
    <div class="mint-toast" :class="customClass">
      <i class="mint-toast-icon" :class="iconClass" v-if="iconClass !== ''"></i>
      <span class="mint-toast-text" :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }">{{message}}</span>
    </div>
  <!--</transition>-->
</template>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../static/css/toast.less";
    .mint-toast {
      position: fixed;
      max-width: 80%;
      border-radius: .05rem;
      background: rgba(51,51,51,0.70);
      color: #fff;
      box-sizing: border-box;
      text-align: center;
      z-index: 10;
      transition: opacity .3s linear;
      padding: .1rem .3rem;
      .mint-toast-icon {
        display: block;
        text-align: center;
        font-size: .56rem;
      }

      .mint-toast-text {
        font-size: .15rem;
        display: block;
        text-align: center;
      }
    }
  .is-placetop {
    top: .50rem;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .is-placemiddle {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .is-placebottom {
    bottom: .50rem;
    left: 50%;
    transform: translate(-50%, 0);
  }
</style>

<script>
  export default {
    name: 'Message',
    props: {
      message: String,
      className: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'middle'
      },
      iconClass: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
      }
    },
    computed: {
      customClass () {
        let classes = []
        switch (this.position) {
          case 'top':
            classes.push('is-placetop')
            break
          case 'bottom':
            classes.push('is-placebottom')
            break
          default:
            classes.push('is-placemiddle')
        }
        classes.push(this.className)
        return classes.join(' ')
      }
    }
  }
</script>
