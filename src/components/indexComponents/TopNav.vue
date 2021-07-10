<template>
  <!-- 顶部导航 -->
  <div class="main">
    <div class="nav1">
      <img src="../../assets/img/pcrlogo.png" alt="logo">
    </div>
    <div class="nav2">
      <!--设置router为true，将以index为path进行路由跳转-->
      <el-menu mode="horizontal" :unique-opened="true" background-color="#ffffff" active-text-color="#ffa500"
               :router="true">
        <!--<el-menu-item index="/">首页</el-menu-item>-->
        <el-menu-item class="item1" index="/">公主连结Re:Dive</el-menu-item>
        <el-menu-item class="item1" index="/arknights" disabled>明日方舟Arknights</el-menu-item>
        <el-menu-item index="about">关于</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav'
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  border-bottom: #ffa500 solid;
}

h2 {
  color: #ffa500;
}

.nav1, .nav2 {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav1 {
  width: 300px;
  margin-left: 30px;
}

.nav1 img {
  width: 120px;
}

.nav2 {
  width: 370px;
  /*margin-right: 20px;*/
}
</style>
