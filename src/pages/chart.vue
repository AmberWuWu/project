<template>
  <div class="chart">
    <my-header></my-header>
    <div class="chart" ref="myCharts"></div>
  </div>
</template>
<script>
import myHeader from '../components/header';
// import chart from "vue-echarts/components/ECharts.vue";
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";
const echarts = require("echarts");
export default {
  name: "Chart",
  data() {
    return {
      option: {
        color: colors,
        title: {
          text: "多条数据",
          color: "#19233C",
          fontSize: "16px",
          x: 'center',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          right: '20%'
        },
        xAxis: [{
          axisLine: {
            lineStyle: {
              color: "#E5E9F2",
              width: 2
            }
          },
          axisLabel: {
            show: true,
            formatter: function(params) {
              let newParamsName = "";
              let paramsNameNumber = params.length;
              let provideNumber = 10; // 一行显示几个字
              let rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                for (let p = 0; p < rowNumber; p++) {
                  let tempStr = "";
                  let start = p * provideNumber;
                  let end = start + provideNumber;
                  if (p == rowNumber - 1) {
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                    tempStr = params.substring(start, end) + "\n";
                  }
                  newParamsName += tempStr;
                }
              } else {
                newParamsName = params;
              }
              return newParamsName;
            }
          },
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [{
            type: 'value',
            name: '蒸发量',
            position: 'right',
            axisLine: {
              lineStyle: {
                color: '#E5E9F2',
                width: 2
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '降水量',
            position: 'right',
            offset: 80,
            axisLine: {
              lineStyle: {
                color: '#E5E9F2',
                width: 2
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            position: 'left',
            axisLine: {
              lineStyle: {
                color: '#E5E9F2',
                width: 2
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          }, {
            type: 'value',
            name: '邮件营销',
            position: 'right',
            axisLine: {
              lineStyle: {
                color: '#E5E9F2',
                width: 2
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [{
            name: '蒸发量',
            type: 'line',
            symbolSize: 2, //拐点大小
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1 //折线宽度
                }
              }
            },
            yAxisIndex: 0,
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
            name: '降水量',
            type: 'line',
            symbolSize: 2, //拐点大小
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1 //折线宽度
                }
              }
            },
            yAxisIndex: 1,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },
          {
            name: '平均温度',
            type: 'line',
            symbolSize: 2, //拐点大小
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1 //折线宽度
                }
              }
            },
            yAxisIndex: 2,
            data: [0.00, 0.02, 0.3, 0.5, 0.3, 0.2, 0.3, 3.4, 23.0, 16.5, 10.00, 6.2]
          }, {
            name: '邮件营销',
            type: 'line',
            symbolSize: 2, //拐点大小
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1 //折线宽度
                }
              }
            },
            yAxisIndex: 3,
            data: [5120, 5132, 5101, 5134, 5090, 5230, 5210, 5220, 5182, 5191, 5234, 5290, ]
          },
        ]
      }

    }
  },
  components: {
    myHeader,
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      let myChart = echarts.init(this.$refs.myCharts);
      myChart.setOption(this.option);
      setTimeout(function() {
        myChart.resize();
        window.addEventListener('resize', function() {
          myChart.resize();
        })
      }, 200);
    },
  },
};

</script>
<style scoped>
.chart {
  width: 100%;
  height: 400px;
}

</style>
