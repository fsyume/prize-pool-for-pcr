<template>
<!--  走马灯-->
    <div>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in imgbox" :key="item.id">
          <img :src="item.idView">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      imgbox: [
        { id: 0, idView: 'https://patchwiki.biligame.com/images/pcr/thumb/0/05/8wcq7kp5wsygx1tzwrqasuylm9d772j.jpg/350px-%E7%BB%B4%E6%8A%A4.jpg' },
        { id: 1, idView: 'https://gitee.com/kzycn/picCloud/raw/master/2021/20210125161233.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
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
