<template>
  <!-- 顶部导航 -->
  <div class="main">
    <div class="nav1">
      <h2>闲聊反馈区</h2>
    </div>
    <div class="nav2">
      <!--设置router为true，将以index为path进行路由跳转-->
      <el-menu mode="horizontal" :unique-opened="true" background-color="#ffffff" active-text-color="#ffa500"
               :router="true">
        <el-menu-item class="item1" index="/">公主连结Re:Dive</el-menu-item>
        <el-menu-item index="about">关于</el-menu-item>
        <el-menu-item index="login">登录</el-menu-item>
        <el-menu-item index="login">发表评论</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopnavComment'
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

.nav2 {
  width: 475px;
  /*margin-right: 20px;*/
}
</style>
