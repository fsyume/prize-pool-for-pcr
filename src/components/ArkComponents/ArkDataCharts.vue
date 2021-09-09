<template>
  <div>
    <el-form
      label-width="100px"
      size="medium"
    >
      <el-form-item label="您的用户令牌">
        <el-input v-model="userInfo.token" style="width: 300px;margin-right: 25px"></el-input>
        <el-button type="primary" @click="inquiry">查询</el-button>
      </el-form-item>
    </el-form>
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
export default {
  name: "ArkDataCharts",
  data() {
    return {
      userInfo: {
        token: ""
      },
      arkData: {
        _six: 0,
        _five: 0,
        _four: 0,
        _three: 0,
        _isnew: 0
      }
    }
  },
  methods: {
    inquiry() {
      this.$http.post("https://ark.fsyume.com:9966/arkdata", this.userInfo).then((res) => {

          var fineData = res.data.data;
          console.log(res.data);

          this.arkData._six = fineData.six;
          this.arkData._five = fineData.five;
          this.arkData._four = fineData.four;
          this.arkData._three = fineData.three;

          this.myEcharts();
        }
      )
    },
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('main'));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '明日方舟寻坊分析',
          subtext: 'by：浮生yume',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [{
          name: '标准寻访',
          type: 'pie',
          radius: '50%',
          data: [{
            value: this.arkData._six,
            name: '6星'
          },
            {
              value: this.arkData._five,
              name: '5星'
            },
            {
              value: this.arkData._four,
              name: '4星'
            },
            {
              value: this.arkData._three,
              name: '3星'
            }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted() {
    // this.myEcharts();
  }
}
</script>

<style scoped>

</style>
