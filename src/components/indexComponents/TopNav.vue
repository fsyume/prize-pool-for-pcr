<template>
<!-- 顶部导航 -->
    <div class="main">
      <div class="nav1">
        <h2>公主连结蛋池模拟</h2>
      </div>
      <div class="nav2">
        <!--设置router为true，将以index为path进行路由跳转-->
        <el-menu mode="horizontal" :unique-opened="true" background-color="#ffffff" active-text-color="#ffa500" :router="true">
          <el-menu-item index="/">首页</el-menu-item>
          <el-submenu index="pcr">
            <template slot="title">公主连结Re:Dive</template>
            <el-menu-item class="item1" index="pcrdrawcard">蛋池模拟</el-menu-item>
            <el-menu-item class="item1" index="pcrrole" disabled>角色列表</el-menu-item>
          </el-submenu>
          <el-submenu index="ark">
            <template slot="title">明日方舟Arknights</template>
            <el-menu-item class="item1" index="arknights" disabled>蛋池模拟</el-menu-item>
            <el-menu-item index="arkrole" disabled>角色列表</el-menu-item>
          </el-submenu>
          <el-menu-item index="about">关于</el-menu-item>
          <el-menu-item><a href="https://www.fshusei.com">作者博客</a></el-menu-item>
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
.main{
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255);
  border-bottom: #ffa500 solid;
}
h2{
  color: #ffa500;
}
.nav1,.nav2{
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav1{
  width: 300px;
  margin-left: 30px;
}
.nav2{
  width: 575px;
  /*margin-right: 20px;*/
}
</style>
