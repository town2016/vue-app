/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="slide">
    <div class="slide-content" :style="contentStyle" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  // 记录滑动位移数据
  let beginX = 0
  let moveX = 0
  /* 刚开始移动时的位移 */
  let translate = 0
  /* 屏幕宽度，默认适应全屏 */
  let clientWidth
  /* 元素个数 */
  let contentLen = 0
  /* 动画速度 */
  let speed = 500
  export default {
    name: 'mySlide',
    props: {
      duration: {
        type: [String, Number],
        default: 2500
      },
      speed: {
        type: [String, Number],
        default: 500
      }
    },
    data () {
      return {
        contentStyle: {
          'transition-property': 'transform',
          'transition-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
          'transition-duration': '0ms',
          'transform': 'translate(0px, 0px) translateZ(0px)'
        },
        slideTask: []
      }
    },
    created () {
    },
    mounted () {
      speed = this.speed
      clientWidth = document.querySelector('.slide').clientWidth
      contentLen = document.querySelector('.slide-content').children.length
      this.contentStyle.width = clientWidth * contentLen + 'px'
      this.contentStyle['transform'] = `translate(${-clientWidth}px, 0px) translateZ(0px)`
      this.swipe()
    },
    methods: {
      swipe (i = 1) {
        let duration = this.duration
        this.contentStyle['transition-duration'] = '0ms'
        this.contentStyle['transform'] = `translate(${-clientWidth * i}px, 0px) translateZ(0px)`
        i++
        let timer = setInterval(() => {
          /* 要做一直右滑效果，只能这么干了 */
          if (i >= contentLen - 1) {
            i = 1
            this.contentStyle['transition-duration'] = '0ms'
            this.contentStyle['transform'] = `translate(0px, 0px) translateZ(0px)`
            let timer1 = setTimeout(() => {
              this.contentStyle['transition-duration'] = speed + 'ms'
              this.contentStyle['transform'] = `translate(${-clientWidth}px, 0px) translateZ(0px)`
            })
            this.slideTask[1] = timer1
          } else {
            this.contentStyle['transition-duration'] = speed + 'ms'
            this.contentStyle['transform'] = `translate(${-clientWidth * i}px, 0px) translateZ(0px)`
          }
          i++
        }, duration)
        this.slideTask[0] = timer
      },
      touchStart (event) {
        beginX = event.touches[0].clientX
        translate = parseInt(this.contentStyle.transform.slice(10, this.contentStyle.transform.indexOf('px')))
        this.close()
      },
      touchMove (event) {
        moveX = event.touches[0].clientX - beginX
        this.contentStyle['transform'] = `translate(${translate + moveX}px, 0px) translateZ(0px)`
      },
      touchEnd () {
        let activeItem = parseInt(-translate / clientWidth)
        if (moveX < 0) { // 向左滑动
          if (parseInt(Math.abs(moveX)) >= (clientWidth / 4)) { // 滑动距离超过1/4
            activeItem++
            if (activeItem >= contentLen) {
              this.contentStyle['transition-duration'] = '0ms'
              this.contentStyle['transform'] = `translate(0px, 0px) translateZ(0px)`
              activeItem = 1
            }
          }
          this.contentStyle['transition-duration'] = speed + 'ms'
          this.contentStyle['transform'] = `translate(${-clientWidth * activeItem}px, 0px) translateZ(0px)`
        } else {
          if (parseInt(Math.abs(moveX)) >= (clientWidth / 4)) {
            activeItem--
            if (activeItem < 0) {
              activeItem = contentLen - 1
              this.contentStyle['transition-duration'] = '0ms'
              this.contentStyle['transform'] = `translate(${-clientWidth * activeItem}px, 0px) translateZ(0px)`
            }
          }
          this.contentStyle['transition-duration'] = speed + 'ms'
          this.contentStyle['transform'] = `translate(${-clientWidth * activeItem}px, 0px) translateZ(0px)`
        }
        setTimeout(() => {
          this.swipe(activeItem)
        }, 400)
      },
      close () {
        this.slideTask.forEach((item) => {
          clearInterval(item)
        })
        this.slideTask = []
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .slide {
    width: 100%;
    overflow: hidden;
    .slide-content {
      position: relative;
      overflow: hidden;
      white-space: nowrap;
    }
  }
</style>
