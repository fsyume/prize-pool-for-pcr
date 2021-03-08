<template>
  <!--公主连结核心抽卡组件-->
  <div>
    <div class="dcbox">
      <div class="msgdc">
        <div class="PDCmainbox">
          <!--核心抽卡组件-->
          <div class="cards">
            <transition name="el-fade-in">
              <div v-show="show" class="transition-box">
                <el-image fit="cover" :src="urls.img1"></el-image>
              </div>
            </transition>
            <transition name="el-fade-in">
              <div v-show="show" class="transition-box">
                <el-image fit="cover" :src="urls.img2"></el-image>
              </div>
            </transition>
            <transition name="el-fade-in">
              <div v-show="show" class="transition-box">
                <el-image fit="cover" :src="urls.img3"></el-image>
              </div>
            </transition>
            <transition name="el-fade-in">
              <div v-show="show" class="transition-box">
                <el-image fit="cover" :src="urls.img4"></el-image>
              </div>
            </transition>
            <transition name="el-fade-in">
              <div v-show="show" class="transition-box">
                <el-image fit="cover" :src="urls.img5"></el-image>
              </div>
            </transition>
            <transition name="el-fade-in">
              <div v-show="show" class="transition-box">
                <el-image fit="cover" :src="urls.img6"></el-image>
              </div>
            </transition>
            <transition name="el-fade-in">
              <div v-show="show" class="transition-box">
                <el-image fit="cover" :src="urls.img7"></el-image>
              </div>
            </transition>
            <transition name="el-fade-in">
              <div v-show="show" class="transition-box">
                <el-image fit="cover" :src="urls.img8"></el-image>
              </div>
            </transition>
            <transition name="el-fade-in">
              <div v-show="show" class="transition-box">
                <el-image fit="cover" :src="urls.img9"></el-image>
              </div>
            </transition>
            <transition name="el-fade-in">
              <div v-show="show" class="transition-box">
                <el-image fit="cover" :src="urls.img10"></el-image>
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
     <el-table :data="tableData"
               style="width: 100%"
               >
       <el-table-column
         fixed
         prop="date"
         label="日期"
       >
       </el-table-column>
       <el-table-column
         prop="frequency"
         label="次数"
       >
       </el-table-column>
       <el-table-column
         prop="gem"
         label="花费宝石"
       >
       </el-table-column>
       <el-table-column
         prop="rmb"
         label="花费金钱（RMB）"
       >
       </el-table-column>
     </el-table>
      <el-table
        :data="tableData2"
        style="width: 100%">
        <el-table-column
          fixed
          prop="onestar"
          label="一星⭐"
        >
        </el-table-column>
        <el-table-column
          prop="twostar"
          label="二星⭐⭐"
        >
        </el-table-column>
        <el-table-column
          prop="threestar"
          label="三星⭐⭐⭐"
        >
        </el-table-column>
        <el-table-column
          prop="ShipmentRate"
          label="出货率"
        >
        </el-table-column>
      </el-table>
    </el-card>
    <!--页脚-->
    <footermain></footermain>
  </div>
</template>

<script>
// 导入页脚组件
import footermain from '../indexComponents/FooterMain'
import { Recruit } from '../../../public/core/lottery'

export default {
  name: 'PcrDrawCard',
  components: { footermain },
  // vue生命周期函数
  created () {
    this.$alert('正在开发的页面，其中记录出货情况的表格的表格数据并不准确，望周知！！！', '警告！！！', {
      confirmButtonText: '确定'
    })
  },
  data () {
    return {
      urls: {
        img1: '',
        img2: '',
        img3: '',
        img4: '',
        img5: '',
        img6: '',
        img7: '',
        img8: '',
        img9: '',
        img10: ''
      },
      show: false,
      tableData: [
        {
          date: new Date().toLocaleString(),
          frequency: 0,
          gem: 0,
          rmb: 0
        }
      ],
      tableData2: [
        {
          onestar: 0,
          twostar: 0,
          threestar: 0,
          ShipmentRate: 0
        }
      ]
    }
  },
  methods: {
    onTenTimes () {
      this.tableData[0].frequency = this.tableData[0].frequency + 10
      this.tableData[0].gem = this.tableData[0].gem + 1500
      this.tableData[0].rmb = this.tableData[0].rmb + 155
      //
      this.tableData2[0].onestar = Recruit.oneRecord()
      this.tableData2[0].twostar = Recruit.twoRecord
      this.tableData2[0].threestar = Recruit.threeRecord
      //
      this.urls.img1 = Recruit.Start()
      this.urls.img2 = Recruit.Start()
      this.urls.img3 = Recruit.Start()
      this.urls.img4 = Recruit.Start()
      this.urls.img5 = Recruit.Start()
      this.urls.img6 = Recruit.Start()
      this.urls.img7 = Recruit.Start()
      this.urls.img8 = Recruit.Start()
      this.urls.img9 = Recruit.Start()
      this.urls.img10 = Recruit.LastStart()
      // 下方两行为测试代码
      // var a = require('../../public/data/pcr.json')
      // this.urls.img1 = a.threestar[0].url
    },
    // 重置按钮
    onClean () {
      this.tableData[0].frequency = 0
      this.tableData[0].gem = 0
      this.tableData[0].rmb = 0
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

  .PDCmainbox {
    width: 890px;
    height: 455px;
    background-image: url("../../assets/img/pcrgachabg.jpg");
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
