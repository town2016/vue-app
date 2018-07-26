/**
* @file 文件说明
* @author xjc
* @date
*/
<template>
  <div class="full-content backGroundMain">
    <my-header title="添加、编辑班型" @right_click="onRightSave">
      <div class="mainColor">保存</div>
    </my-header>
    <div class="handelClassType">
      <my-filed class="marginTop10" label="班型名称" border="" placeholder="输入学员姓名" :styleObj="inputStyle"></my-filed>
      <my-cell title="驾考车型" border="" :styleObj="{title: inputStyle.span}" @handleCell="handleCell">
        <div class="cardType" slot="centerContent">{{classInfo.classType}}</div>
      </my-cell>
      <my-filed v-for="item in classList" class="marginTop10" :label="item.name" v-model="item.value" border="" placeholder="输入价格" :styleObj="inputStyle" :key="item.name"></my-filed>
      <my-cell class="marginTop10" title="班型特色" border="" active="" icon=""></my-cell>
      <feature-box :data="featureItem" @handleItem="handleItem"></feature-box>
    </div>
    <active-sheet :actions="actions" v-model="activeSheet" cancelText="确定" @onCancelSheet="onCancelSheet"></active-sheet>
  </div>
</template>

<script>
  import featureBox from '@/components/coachCard/featureBox'
  export default {
    name: 'handelClassType',
    components: {featureBox},
    data () {
      return {
        classInfo: {
          classType: '请选择',
          classFeature: []
        },
        actions: [
          {
            name: 'C1',
            selected: false
          },
          {
            name: 'C2',
            selected: false
          },
          {
            name: 'C3',
            selected: false
          }
        ],
        classList: [
          {
            name: '班型价格',
            value: ''
          }
        ],
        activeSheet: false,
        inputStyle: {
          input: {
            'font-size': '.14rem'
          },
          span: {
            'width': '.68rem',
            'margin-right': '.4rem'
          }
        },
        featureItem: [
          {
            text: '费用全包',
            selected: false
          },
          {
            text: '包接送',
            selected: false
          },
          {
            text: '分期付款',
            selected: false
          },
          {
            text: '一次性付款',
            selected: false
          },
          {
            text: '体检报销',
            selected: false
          },
          {
            text: '一人一车',
            selected: false
          },
          {
            text: '两人一车',
            selected: false
          },
          {
            text: '四人一车',
            selected: false
          },
          {
            text: '周末学车',
            selected: false
          },
          {
            text: '工作日学车',
            selected: false
          },
          {
            text: '计时学车',
            selected: false
          },
          {
            text: '不限学时',
            selected: false
          }
        ]
      }
    },
    created () {
    },
    mounted () {
    },
    methods: {
      handleItem (boxs) {
        console.log(boxs)
        this.classInfo.classFeature = boxs
      },
      handleCell () {
        this.activeSheet = !this.activeSheet
      },
      onCancelSheet (param) {
        console.log(param)
        let result = []
        let classStr = []
        param.forEach((item, index) => {
          let obj = {}
          obj.name = item.name + '价格'
          obj.value = this.classList[index] ? this.classList[index].value || '' : ''
          result.push(obj)
          classStr.push(item.name)
        })
        this.classList = result
        this.classInfo.classType = classStr.join('、')
      },
      onRightSave () {
        console.log(this.classList)
        this.$router.go(-1)
        // this.handleCell()
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .handelClassType {
    background-color: #ffffff;
    > div {
      padding: .1rem .2rem;
      box-sizing: border-box;
      line-height: initial;
    }
    .cardType {
      flex: 1;
      font-size: .14rem;
      color: #999999;
    }
  }
</style>
