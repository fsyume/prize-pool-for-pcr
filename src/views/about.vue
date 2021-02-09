<template>
  <div class="main">
    <div class="aboutmain">
      <el-card><h1>关于此站点</h1></el-card>
      <el-card></el-card>
      <el-card></el-card>
    </div>
    <footermain></footermain>
  </div>
</template>

<script>
// 导入页脚组件
import footermain from '../components/footer'

export default {
  name: 'about',
  components: { footermain }
}
</script>

<style scoped>
  .aboutmain {
    width: 1000px;
    height: auto;
    margin: 0 auto;
  }

  .el-card {
    margin-top: 20px;
    width: 1000px;
    height: 300px;
    color: #34495e;
  }

  .footermain{
    margin-top: 20px;
  }
</style>
