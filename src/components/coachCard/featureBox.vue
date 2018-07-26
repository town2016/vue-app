/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="featureBox">
    <div class="featureItem">
      <div v-for="(item, index) in data" :class="[{selected: item.selected}, {marginAuto: index == 1 || index % 3 === 1}]" @click="onFeatureItem(item)" :key="index">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    props: {
      data: [Array],
      default: function () {
        return []
      }
    },
    data () {
      return {
        selectedItem: []
      }
    },
    created () {
    },
    mounted () {
    },
    methods: {
      onFeatureItem (item) {
        item.selected = !item.selected
        let selectedItem = this.selectedItem
        if (item.selected) {
          selectedItem.push(item.text)
        } else {
          selectedItem.splice(selectedItem.indexOf(item.text), 1)
        }
        this.$emit('handleItem', selectedItem)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .featureBox {
    .featureItem {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      div {
        background: #ffffff;
        border: 1px solid #a8a8a8;
        border-radius: .06rem;
        width: .9rem;
        line-height: .3rem;
        text-align: center;
        font-size: .14rem;
        color:#666666;
        margin: .1rem 0
      }
      .marginAuto {
        margin: .1rem auto;
      }
      .selected {
        background-color: #41bdc7;
        color: #ffffff;
        border: 1px solid #41bdc7;
      }
    }
  }
</style>
