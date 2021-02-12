<template>
  <div>
    <div class="dcbox">
      <div class="msgdc">
        <div class="PDCmainbox">
          <!--核心抽卡页面-->
          <div class="cards">
            <transition name="el-fade-in">
              <div v-show="show" class="transition-box">
                <el-image fit="cover" :src="urls.img1"></el-image>
              </div>
            </transition>
            <transition name="el-fade-in">
              <div v-show="show" class="transition-box">
                <el-image fit="cover" :src="urls.img1"></el-image>
              </div>
            </transition>
            <transition name="el-fade-in">
              <div v-show="show" class="transition-box">
                <el-image fit="cover" :src="urls.img1"></el-image>
              </div>
            </transition>
            <transition name="el-fade-in">
              <div v-show="show" class="transition-box">
                <el-image fit="cover" :src="urls.img1"></el-image>
              </div>
            </transition>
            <transition name="el-fade-in">
              <div v-show="show" class="transition-box">
                <el-image fit="cover" :src="urls.img1"></el-image>
              </div>
            </transition>
            <transition name="el-fade-in">
              <div v-show="show" class="transition-box">
                <el-image fit="cover" :src="urls.img1"></el-image>
              </div>
            </transition>
            <transition name="el-fade-in">
              <div v-show="show" class="transition-box">
                <el-image fit="cover" :src="urls.img1"></el-image>
              </div>
            </transition>
            <transition name="el-fade-in">
              <div v-show="show" class="transition-box">
                <el-image fit="cover" :src="urls.img1"></el-image>
              </div>
            </transition>
            <transition name="el-fade-in">
              <div v-show="show" class="transition-box">
                <el-image fit="cover" :src="urls.img1"></el-image>
              </div>
            </transition>
            <transition name="el-fade-in">
              <div v-show="show" class="transition-box">
                <el-image fit="cover" :src="urls.img1"></el-image>
              </div>
            </transition>
          </div>
        </div>
        <div class="msgbutton">
          <div class="buttombox">
            <el-button type="primary" @click="show = false,onClean()">重置</el-button>
            <el-button type="danger" @click="show = true,onTenTimes()">十连模拟</el-button>
          </div>
        </div>
      </div>
    </div>
    <el-card>
      <div class="msgbox">
        次数：{{frequency}}
        宝石：{{gem}}
        消费：{{rmb}}RMB
      </div>
    </el-card>
    <!--页脚-->
    <footermain></footermain>
  </div>
</template>

<script>
// 导入页脚组件
import footermain from '../components/footermain'
import { Recruit } from '../../public/core/lottery'

export default {
  name: 'PcrDrawCard',
  components: { footermain },
  // vue生命周期函数
  created () {
    this.$alert('正在开发的页面', '警告！！！', {
      confirmButtonText: '确定'
    })
  },
  data () {
    return {
      frequency: 0,
      gem: 0,
      rmb: 0,
      urls: {
        img1: ''
      },
      show: false
    }
  },
  methods: {
    onTenTimes () {
      this.frequency++
      this.gem = this.gem + 1500
      this.rmb = this.rmb + 155
      for (var i = 1; i <= 9; i++) {
        Recruit.Start()
      }
      Recruit.LastStart()
      // 下方两行为测试代码
      var a = require('../../public/data/pcr.json')
      this.urls.img1 = a.threestar[0].url
    },
    onClean () {
      this.frequency = 0
      this.gem = 0
      this.rmb = 0
    }
  }
}
</script>

<style scoped>
  .dcbox {
    width: 980px;
    height: 540px;
    margin: 20px auto;
    padding-top: 20px;
    background-color: rgba(255, 255, 255, 0.6);
    border: #ffa500 solid;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .msgbox {
    width: 30%;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .PDCmainbox {
    width: 890px;
    height: 455px;
    background-image: url("../assets/img/pcrgachabg.jpg");
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .msgbutton {
    width: 890px;
    padding-top: 15px;
    display: flex;
    justify-content: flex-end;
  }

  .cards {
    width: 710px;
    height: 340px;
    background-color: rgba(255, 255, 255, 0.5);
    display: grid;
    grid-template-columns: 130px 130px 130px 130px 130px;
    grid-template-rows: 130px 130px;
    grid-gap: 6px;
    justify-items: center;
    align-items: center;
    justify-content: center;
    align-content: center;
  }

  .transition-box {
    margin-bottom: 10px;
    width: 85px;
    height: 85px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    box-sizing: border-box;
  }

  .el-card{
    margin: 0 auto;
    margin-bottom: 20px;
    width: 980px;
    height: 300px;
  }
</style>
