<template>
  <!--关于页面-->
  <div class="main">
    <div class="aboutmain">
      <el-card>
        <h2>关于此站点</h2>
        <el-divider></el-divider>
        <span class="abouttxt1">
          本站使用的游戏图像，版权，商标和其他知识产权内容属于内容提供者：
          <el-link href="https://game.bilibili.com/" type="danger"
          >blibili游戏</el-link
          >
          ,
          <el-link href="https://www.cygames.co.jp/" type="danger"
          >Cygames</el-link
          >
          <br/>
          本站为学习和娱乐使用，与
          <el-link href="https://game.bilibili.com/" type="danger"
          >blibili游戏</el-link
          >
          ,
          <el-link href="https://www.cygames.co.jp/" type="danger"
          >Cygames</el-link
          >
          皆无任何关系
          <el-divider></el-divider>
          <div>
            本站由<el-link href="https://cn.vuejs.org/" type="danger"
          >vue.js</el-link
          >，
            <el-link href="https://element.eleme.cn/" type="danger"
            >elementUI</el-link
            >
            搭建，仅供学习和娱乐使用
          </div>
        </span>
      </el-card>
      <el-card>
        <h2>相关链接</h2>
        <el-divider></el-divider>
        <el-link
          href="https://space.bilibili.com/353840826?from=search&seid=14120226757587209833"
          type="danger"
        >公主连结简中版官方账户
        </el-link
        >
        <el-divider direction="vertical"></el-divider>
        <el-link href="https://game.bilibili.com/pcr/" type="danger"
        >简中版官网
        </el-link
        >
        <el-divider></el-divider>
        <el-link href="https://www.cygames.co.jp/" type="danger"
        >株式会社Cygames
        </el-link
        >
        <el-divider></el-divider>
        <el-link href="https://github.com/kzycn/PcrArk-draw-card" type="danger"
        >🏆本站点GitHub地址
        </el-link
        >
        <el-link href="https://www.fsyume.com/" type="danger"
        >🏆浮生yume的博客
        </el-link
        >
      </el-card>
      <el-card>
        <h2>建议反馈渠道</h2>
        <el-divider></el-divider>
        <el-link
          href="mailto:hi@fsyume.com"
          type="danger"
        >📃邮箱：hi@fsyume.com
        </el-link
        >
      </el-card>
    </div>
    <footermain></footermain>
  </div>
</template>

<script>
// 导入页脚组件
import footermain from '../components/indexComponents/FooterMain'

export default {
  name: 'about',
  components: {footermain}
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
