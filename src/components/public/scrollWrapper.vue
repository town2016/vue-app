<template>
  <div class="scrollWrapper" ref="scrollWrapper">
    <div>
       <div class="scroll" ref="scroll">
        <slot></slot>
      </div>
       <div class="loading" v-if="load.isLoading">
          <img src="../../../static/img/loading.gif" v-if='!load.noMore'/>
          <p class="noMore" v-if='load.noMore'>--&nbsp;已加载全部数据&nbsp;--</p>
        </div>
    </div>
    <div class="refresh" v-if="pullDown" :style="{top:fresh.top+'px'}">
        <span class="icon-refresh" v-if="fresh.beginRefresh">
          <i :class="{borders:fresh.beginRefresh}"></i>
        </span>
    </div>
   
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {getRect} from '@/assets/common.js'
  export default {
    name: 'scrollWrapper',
    props: {
      isClick: {
        type: [Boolean, String],
        default: true
      },
      probeType: {
        type: Number,
        default: 3
      },
      listenScroll: {
        type: Boolean,
        default: true
      },
      pullUp: {
        type: [Boolean, Object],
        default: null
      },
      pullDown: {
        type: [Boolean, Object],
        default: null
      },
      data: {
        type: [Array, Object],
        default: null
      },
      freeScroll: {
        type: Boolean,
        default: false
      },
      direction: {
        type: String,
        default () {
          return 'Y'
        }
      }
    },
    data () {
      return {
        fresh: {
          beginRefresh: false,
          isRefresh: false,
          top: this.pullDown ? -this.pullDown.stop : -50
        },
        load: {
          isLoading: false,
          noMore: false
        }
      }
    },
    components: {},
    mounted () {
      this.$nextTick(() => {
        setTimeout(() => {
          this.initScroll()
        }, 20)
      })
      window.addEventListener('resize', () => {
        setTimeout(() => {
          this.initScroll()
        }, 20)
      })
      const inputs = document.getElementsByTagName('input')
      for (var i = 0; i < inputs.length; i++) {
        var _node = inputs[i]
        _node.onfocus = () => {
          this.initScroll()
        }
      }
    },
    methods: {
      initScroll () {
        if (!this.$refs.scrollWrapper) {
          return
        }
        if (this.$refs.scroll && (this.pullDownRefresh !== null || this.pullUpLoad !== null)) {
          this.$refs.scroll.style.minHeight = `${getRect(this.$refs.scrollWrapper).height + 1}px`
        }
        let config = this.initConfig()
        this.scroll = new BScroll(this.$refs.scrollWrapper, config)
        if (this.listenScroll) {
          this.scroll.on('scroll', (pos) => {
            this.$emit('scroll', pos)
            this.setRefreshPos(pos)
          })
        }
        if (this.pullDown !== null) {
          this.scroll.on('pullingDown', () => {
            if (this.load.isLoading) {
              this.finishPullDown()
              return
            }
            if (this.fresh.isRefresh) {
              return
            }
            this.fresh.isRefresh = true
            this.$emit('pullingDown')
          })
        }
        if (this.pullUp !== null) {
          this.scroll.on('pullingUp', () => {
            console.log(this.fresh.isRefresh)
            if (this.fresh.isRefresh) {
              this.finishPullUp()
              return
            }
            if (this.load.isLoading) {
              return
            }
            this.load.isLoading = true
            this.$emit('pullingUp')
          })
        }
      },
      /* 初始化BScroll配置参数 */
      initConfig () {
        const config = {}
        config.click = this.isClick
        config.probeType = this.probeType
        config.scrollY = this.freeScroll || this.direction === 'Y'
        config.scrollX = this.freeScroll || this.direction === 'X'
        if (this.pullDown !== null) {
          config.pullDownRefresh = this.pullDown
        }
        if (this.pullUp !== null) {
          config.pullUpLoad = this.pullUp
        }
        return config
      },
      /* 刷新滚动列表 */
      refresh () {
        this.scroll && this.scroll.refresh()
      },
      /* 滚动到指定位置 */
      scrollTo () {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      /* 滚动到指定dom节点处 */
      scrollToElement () {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      },
      /* 停止刷新状态 */
      finishPullDown () {
        let moveDisc = -this.pullDown ? this.pullDown.stop : -50
        this.$emit('fresh', 'top', moveDisc)
        this.fresh.isRefresh = false
        this.scroll.finishPullDown()
        this.refresh()
      },
      /* 停止加载状态 */
      finishPullUp () {
        this.initLoad()
        this.scroll.finishPullUp()
        this.refresh()
      },
      initLoad () {
        this.load.isLoading = false
        this.load.noMore = false
      },
      /* 设置刷新的位置 */
      setRefreshPos (pos) {
        if (pos.y > 0 && !this.load.isLoading) {
          let y = pos.y
          this.fresh.beginRefresh = true
          let moveDisc = this.pullDown ? -this.pullDown.stop : -50
          this.fresh.top = Math.min(moveDisc + y)
        }
      }
    },
    watch: {
      data (val) {
        if (val.length === 0) {
          this.load.noMore = true
        }
        setTimeout(() => {
          this.refresh()
        }, 100)
      },
      'fresh.isRefresh' (val) {
        if (val) {
          this.fresh.beginRefresh = true
        } else {
          this.fresh.beginRefresh = false
        }
      }
    }
  }
</script>

<style scoped lang='less'>
@import '../../../static/css/mixin.less';
  .scrollWrapper {
    width: 100%;
    overflow:hidden;
    .scroll{
      width:100%;
    }
  }
  .refresh{
    position: absolute;
    height: 40px;
    line-height: 40px;
    text-align: center;
    top: -40px;
    left: 0;
    width: 100%;
  }
  .icon-refresh{
    display: inline-block;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color:@mainColor;
    position: relative;
    margin-top: 7px;
    .boxShadow(0 0 10px rgba(0,0,0,0.6));
    animation: rotate 1s linear infinite;
    position: relative;
    i{
      display: block;
      position: absolute;
      width: 13px;
      height: 13px;
      border-width: 2px;
      border-style: solid;
      border-color: #fff #fff transparent transparent; 
      top: 50%;
      left: 50%;
      transition: all 1s linear;
      .border-radius(50%);
      .translate(-50%,-50%,0);
    }
    .borders{
      .animation(borders 3s linear infinite);
    }
  }
  .loading{
    padding: 10px 0;
    text-align: center;
    line-height: 1;
    img{
      display: inline-block;
      width: 26px;
      height: 26px;
    }
    .noMore{
      font-size: 14px;
      color: @mainColor;
    }
  }
  
  @-webkit-keyframes rotate{
  	0%{
  	  .rotate(0,0,1,0deg)
  	}
  	100%{
  	  .rotate(0,0,1,-360deg)
  	}
  }
  @-webkit-keyframes borders{
  	20%{ 
  	  border-color: #fff #fff transparent transparent;
  	}
  	75%{
  	   border-color:#FF7626 #FF7626 transparent transparent; 
  	}
  	100%{
  	   border-color:#ff0000 #ff0000 transparent transparent; 
  	}
  }
</style>