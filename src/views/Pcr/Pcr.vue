<template>
  <!--公主连结页面-->
  <div id="main">
    <TopNav></TopNav>
        <router-view></router-view>
  </div>
</template>

<script>
// 注册组件
import TopNav from '../../components/indexComponents/TopNav'

export default {
  name: 'index',
  components: { TopNav },

  // created 生命周期函数可以用来在一个实例被创建之后执行代码
  created: function () {
    console.log('弹窗弹出')
    this.$notify({
      position: 'top-left',
      title: '欢迎',
      message: '这里是公主连结奖池模拟，目前处于开发阶段'
      // 为0则不能自动关闭弹窗
      // duration: 0
    })
  }
}
</script>

<style scoped>
  #main {
    width: 100%;
    height: auto;
    background-image: url("../../assets/img/indexBg.webp");
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center center;
  }
</style>
