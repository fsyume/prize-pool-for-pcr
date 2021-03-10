<template>
    <div id="mainbox">
      <el-card>
        概率修改
        <el-select v-model="value" placeholder="请选择">
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
export default {
  name: 'PcrProbability',
  data () {
    return {
      options: [{
        value: '选项1',
        label: '2.5%'
      }, {
        value: '选项2',
        label: '5%'
      }],
      value: ''
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
