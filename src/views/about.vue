<template>
  <div class="main">
    <div class="aboutmain">
      <el-card>
        <h2>关于此站点</h2>
        <el-divider></el-divider>
        <span class="abouttxt1">
          本站使用的游戏图像，版权，商标和其他知识产权内容属于内容提供者：
          <el-link type="danger" href="https://game.bilibili.com/">blibili游戏</el-link>
          ,
          <el-link type="danger" href="https://www.cygames.co.jp/">Cygames</el-link>
          <br>
          本站为学习和娱乐使用，与
          <el-link type="danger" href="https://game.bilibili.com/">blibili游戏</el-link>
          ,
          <el-link type="danger" href="https://www.cygames.co.jp/">Cygames</el-link>
          皆无任何关系
          <el-divider></el-divider>
          <div>本站由<el-link type="danger" href="https://cn.vuejs.org/">vue.js</el-link>，
            <el-link type="danger" href="https://element.eleme.cn/">elementUI</el-link>
            搭建，仅供学习和娱乐使用</div>
        </span>
      </el-card>
      <el-card>
        <h2>相关链接</h2>
        <el-divider></el-divider>
      </el-card>
      <el-card>
        <h2>建议反馈渠道</h2>
        <el-divider></el-divider>
      </el-card>
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

  .footermain {
    margin-top: 20px;
  }
</style>
