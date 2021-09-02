<template>
  <div>
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
export default {
  name: "ArkDataCharts",
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('main'));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '明日方舟寻坊分析',
          subtext: '虚构数据',
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
            value: 10,
            name: '6星'
          },
            {
              value: 20,
              name: '5星'
            },
            {
              value: 50,
              name: '4星'
            },
            {
              value: 47,
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
    this.myEcharts();
  }
}
</script>

<style scoped>

</style>
