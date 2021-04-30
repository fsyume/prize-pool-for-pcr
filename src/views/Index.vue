<template>
  <!--主页信息-->
  <div>
    <div class="mainbox">
    <Carousel></Carousel>
    <div class="cardBox">
      <el-card class="card1">
        <el-calendar v-model="value">
        </el-calendar>
      </el-card>
<!--      <el-card class="card2">-->
<!--        <span>活动日历</span>-->
<!--        <el-divider></el-divider>-->
<!--      </el-card>-->
    </div>
    <el-card class="card3"></el-card>
    </div>
    <footermain></footermain>
  </div>
</template>

<script>
import footermain from '../components/indexComponents/FooterMain'
import Carousel from '../components/indexComponents/Carousel'

export default {
  name: 'index',
  components: { Carousel, footermain },
  data () {
    return {
      value: new Date()
    }
  },
  beforeCreate () {
    this.$alert('正在开发的页面，登录功能需要请求后台，本站点后台正在开发，码云搜索：float，作者：浮生Husei，即可下载到配套源码！', '警告！！！', {
      confirmButtonText: '确定'
    })
  }
}
</script>

<style scoped>
  .mainbox{
    width: 1000px;
    margin: 20px auto;
  }

  .cardBox {
    display: flex;
    justify-content: center;
  }

  .card1 {
    width: 1000px;
    height: 670px;
    margin-right: 10px;
  }

  .card2 {
    width: 300px;
    height: 670px;
  }

  .card2 span{
    font-size: 20px;
  }

  .card3 {
    margin-top: 20px;
    width: 1000px;
    height: 300px;
  }

</style>
