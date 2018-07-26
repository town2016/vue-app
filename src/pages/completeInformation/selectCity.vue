/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="selectCity">
    <my-header title="选择城市"></my-header>
      <v-listview :data='citys'></v-listview>
  </div>
</template>

<script>
  import listview from '@/components/public/listview'
  import {citys} from '@/components/public/city'
  import Listitem from '@/pages/completeInformation/listitem'
  export default {
    name: 'selectCity',
    data () {
      return {
        citys: []
      }
    },
    created () {
      this.citys = this.normalizeSinger(citys)
    },
    mounted () {
    },
    methods: {
      normalizeSinger (list) {
        let map = {}
        list.map(item => {
          const key = item.indexName
          if (!map[key]) {
            map[key] = new Listitem({indexName: key})
          }
          map[key].items.push(item)
        })
        let lists = []
        for (let key in map) {
          var val = map[key]
          if (val.indexName.match(/[a-zA-Z]/)) {
            lists.push(val)
          }
        }
        lists.sort((a, b) => {
          return a.indexName.charCodeAt(0) - b.indexName.charCodeAt(0)
        })
        return lists
      }
    },
    components: {
      'v-listview': listview
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .bar {
    display: flex;
    width: .15rem;
    height: 100%;
    position: absolute;
    right: .15rem;
    top: 40%;
    flex-direction: column;
  }
</style>
