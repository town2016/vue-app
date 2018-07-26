<template>
  <div class="cselect">
    <ul class="inner">
      <li v-for='(item, index) in data.options' @click='select(index)'>
        {{item[data.col]}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'cselect',
    data () {
      return {}
    },
    props: {
      data: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      select (index) {
        this.$emit('onChange', this.data.options[index])
      }
    }
  }
</script>

<style scoped lang="less">
@import '../../../static/css/mixin.less';

</style>