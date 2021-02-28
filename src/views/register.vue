<template>
  <div>注册页面</div>
</template>

<script>
export default {
  name: 'register',
  beforeCreate () {
    this.$alert('正在开发的页面，登录功能需要请求后台，本站点后台正在开发，码云搜索：float，作者：浮生Husei，即可下载到配套源码！', '警告！！！', {
      confirmButtonText: '确定'
    })
  }
}
</script>

<style scoped>

</style>
