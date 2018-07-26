<template>
 <div class="listview" style="height: 100%;">
  <v-scroller style="height: 100%;" ref='scroller' @scroll='scroll'>
     <div class="lists">
      <ul>
        <li v-for="group in data" ref='listGroup'>
          <h2>{{group.indexName}}</h2>
          <ul>
            <li v-for="item in group.items" class="listItem">
              <span>{{item.name}}</span>
              <i class="iconfont icon-arrow_right" v-if="islink !== undefined"></i>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </v-scroller>
  <div class="shortcutList">
    <ul>
      <li :class="{current:currentIndex === index}" v-for='(item,index) in shortcuts' :data-index='index' @touchstart.stop.prevent='onShorcutClick(index)'>{{item}}</li>
    </ul>
  </div>
 </div>
</template>

<script>
  import scroller from '@/components/public/scrollWrapper'
  export default {
    name: 'listview',
    data () {
      return {
        currentIndex: 0,
        scrollY: -1
      }
    },
    props: {
      data: {
        type: Array,
        default () {
          return []
        }
      },
      islink: {
        type: [String, Boolean],
        default () {
          return undefined
        }
      }
    },
    created () {},
    mounted () {
      this.$nextTick(() => {
        setTimeout(() => {
          this.calculateHeight()
        }, 20)
      })
    },
    methods: {
      onShorcutClick (index) {
        this.currentIndex = index
        this.$refs.scroller.scrollToElement(this.$refs.listGroup[index], 300)
      },
      calculateHeight () {
        const groupList = this.$refs.listGroup
        let height = 0
        this.heightList = []
        this.heightList.push(height)
        for (var i = 0; i < groupList.length; i++) {
          let item = groupList[i]
          height += item.clientHeight
          this.heightList.push(height)
        }
      },
      scroll (pos) {
        this.scrollY = pos.y
      }
    },
    watch: {
      data (val) {
        setTimeout(() => {
          this.calculateHeight()
        }, 20)
      },
      scrollY (val) {
        const heightList = this.heightList
        if (val >= 0) {
          this.currentIndex = 0
          return
        }
        for (var i = 0; i < heightList.length - 1; i++) {
          let height1 = heightList[i]
          let height2 = heightList[i + 1]
          if (-val >= height1 && -val < height2) {
            this.currentIndex = i
            return
          }
        }
        this.currentIndex = heightList.length - 1
      }
    },
    components: {
      'v-scroller': scroller
    },
    computed: {
      shortcuts () {
        let list = []
        this.data.map(item => {
          list.push(item.indexName)
        })
        return list
      }
    }
  }
</script>

<style scoped lang="less">
@import url("../../../static/css/mixin");
.listview {
  li{
    h2{
      font-size: 0.16rem;
      color: #666;
      background-color: @mainBgColor;
      font-weight:400;
      padding:0.06rem 0.12rem
    }
    .listItem{
      font-size: 0.14rem;
      color: #333;
      position:relative;
      padding:0.1rem 0.12rem;
      .flex;
      .flex-pack-justify;
      .flex-align-center;
      span{
        .flex-1;
      }
      &:last-of-type{
        border: none;
      }
      &:after{
        content: '';
        position: absolute;
        height: 1px;
        left: 5px;
        right: 5px;
        top: 100%;
        background-color: @mainBgColor;
      }
    }
  }
  .shortcutList{
    position: fixed;
    top: 0.5rem;
    bottom: 0.5rem;
    right: 0rem;
    .flex;
    .flex-v;
    .flex-pack-center;
    li{
      font-size: 0.14rem;
      color: #666;
      padding: 0.04rem 0.1rem;
      font-weight: 500;
    }
    li.current{
      color: @mainColor;
    }
  }
}
</style>