<template>
    <div id="mainbox">
      <el-card>
        概率修改
        <el-select v-model="value" @change="ProbabilityModification" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-card>
    </div>
</template>

<script>
// 导入核心js文件
import { Recruit } from '../../../public/core/lottery'

export default {
  name: 'PcrProbability',
  data () {
    return {
      options: [{
        value: 2.5,
        label: '2.5%'
      }, {
        value: 5,
        label: '5%'
      }],
      value: ''
    }
  },
  created:{

  },
  methods: {
    ProbabilityModification (value) {
      Recruit.lastoneRecord = value
      console.log(Recruit.lastoneRecord)
    }
  }
}
</script>

<style scoped>
#mainbox{
  width: 980px;
  height: 100px;
  margin: 0 auto;
}
</style>
