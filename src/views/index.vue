<template>
  <!--主页信息-->
  <div>
    <div class="mainbox">
    <Carousel></Carousel>
    <div class="cardBox">
      <el-card class="card1"></el-card>
      <el-card class="card2"></el-card>
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
  components: { Carousel, footermain }
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
    width: 300px;
    height: 300px;
    margin-right: 10px;
  }

  .card2 {
    width: 690px;
    height: 300px;
  }

  .card3 {
    margin-top: 20px;
    width: 1000px;
    height: 300px;
  }

</style>
