<template>
  <!--走马灯-->
    <div>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in imgbox" :key="item.id">
          <img :src="item.url" class="img">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
export default {
  name: 'Carousel',
  // vue生命周期函数
  created () {
    // 读取走马灯图片json
    var res = require('../../../public/data/CarouselImgbox.json')
    this.imgbox = res.imgbox
    console.log(res.imgbox[0].url)
  },
  data () {
    return {
      imgbox: []
    }
  }
}
</script>

<style scoped>
  .img{
    width: 100%;
    height: 100%;
  }

  .el-carousel{
    width: 1000px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
