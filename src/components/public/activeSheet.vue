/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="activeSheet" :style="activeSheetStyle">
    <div class="sheetContent" :style="contentStyle">
      <div class="content">
        <div class="title">{{title}}</div>
        <slot></slot>
        <div class="actions">
          <div v-for="(item, index) in actions" :class="[isCheck ? 'flex-space-between' : 'flex-double-center']" class="actionsItem isActive border-bottom" @click="handleAction(item, index)">
            <div class="activeItem"
                 :key="index">{{item.name || ''}}</div>
            <i class="iconfont" :class="[{'icon-tick': item.selected}, {'icon-tick_outline': !item.selected}]"></i>
          </div>
        </div>
        <div class="button" @click.stop.prevent="onButton">{{cancelText}}</div>
      </div>
    </div>
    <transition name='fade'>
      <div v-show="sheetShow" class="cover" @click.stop.prevent="onClose"></div>
    </transition>
  </div>
</template>

<script>
  let moveLength
  export default {
    name: 'activeSheet',
    data () {
      return {
        sheetShow: false,
        activeSheetStyle: {
          'pointer-events': 'auto'
        },
        contentStyle: {
          'transition-property': 'transform',
          'transition-timing-function': 'ease-in-out',
          'transition-duration': '0ms',
          'transform': 'translate(0px, 0px) translateZ(0px)'
        }
      }
    },
    model: {
      prop: 'value',
      event: 'onClose'
    },
    props: {
      // 数据类型，单选项还是还是有checkBox
      isCheck: {
        type: [Boolean],
        default: true
      },
      // 选项数据 {name: '点击'， active：'function () {}'}
      actions: {
        type: [Array],
        default: function () {
          return []
        }
      },
      // 绑定model，一定要传
      value: {
        type: Boolean,
        default: false
      },
      // 动画时长
      duration: {
        type: [Number, String],
        default: 250
      },
      // 是否可以点击遮罩层关闭弹框
      closeOnClickModal: {
        type: [Boolean],
        default: true
      },
      // 按钮的字
      cancelText: {
        type: [String],
        default: '取消'
      },
      title: [String]
    },
    watch: {
      value (val) {
        if (val === true) {
          this.sheetShow = val
          this.onOpen()
        } else {
          this.sheetShow = val
          this.onClose()
        }
      }
    },
    created () {
      // 检测是否漏了selected属性
      if (this.isCheck) {
        this.actions.forEach((item) => {
          if (!('selected' in item)) console.error('selected attribution not in actions item')
        })
      }
    },
    mounted () {
      moveLength = document.querySelector('.sheetContent').clientHeight
      this.contentStyle.transform = `translate(0px, ${moveLength}px) translateZ(0px)`
    },
    methods: {
      onOpen () {
        this.contentStyle['transition-duration'] = this.duration + 'ms'
        this.contentStyle.transform = `translate(0px, 0px) translateZ(0px)`
        this.$emit('onOpen')
      },
      onClose (event) {
        if (!this.closeOnClickModal && event && event.target) return
        this.contentStyle.transform = `translate(0px, ${moveLength}px) translateZ(0px)`
        // this.activeSheetStyle['pointer-events'] = 'none'
        this.$emit('onClose')
        setTimeout(() => {
          this.sheetShow = false
          this.activeSheetStyle['pointer-events'] = 'auto'
        }, this.duration - 50)
      },
      onButton () {
        // 如果是选择模式，最后把选择的项返回
        if (this.isCheck) {
          let result = []
          this.actions.forEach((item) => {
            if (item.selected) result.push(Object.assign({}, item))
          })
          this.$emit('onCancelSheet', result)
        }
        this.onClose()
      },
      handleAction (item, index) {
        if (this.isCheck && 'selected' in item) item.selected = !item.selected
        this.actions[index].active && this.actions[index].active(item, index)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .activeSheet {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    .sheetContent {
      position: fixed;
      bottom: 0;
      left: 0;
      background-color: #ffffff;
      width: 100%;
      z-index: 1000;
      .content {
        .title {
          font-size: .15rem;
          color: #666666;
          line-height: .5rem;
          text-align:center;
        }
        .actionsItem {
          font-size: .16rem;
          color: #424242;
          .activeItem {
            line-height: .45rem;
          }
          .icon-tick {
            color: #41bdc7;
          }
          .icon-tick_outline {
            color: #dbdbdb;
          }
        }
        .flex-space-between {
          margin-left: .2rem;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          i {
            margin-right: .2rem;
          }
        }
        .button {
          background-color: #41bdc7;
          line-height: .5rem;
          text-align: center;
          font-size: .18rem;
          color: #ffffff;
        }
      }
    }
    .cover {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.5);
      z-index: 100;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
</style>
