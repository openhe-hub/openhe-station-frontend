<template>
  <div id="data-container">
    <div class="chart-container" id="chart-container-1" ref="chartRef1">
    </div>
    <div class="chart-container" id="chart-container-2" ref="chartRef2">
    </div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import {onMounted, ref} from "vue";

const chartRef1 = ref();
const chartRef2 = ref();

onMounted(() => {
  init();
})

const init = () => {
  let chart1 = echarts.init(chartRef1.value);
  let chart2 = echarts.init(chartRef2.value);
  const option1 = {
    title:{
      show:true,
      text:'visiting statistics',
      textStyle:{
        fontFamily: 'Times New Roman',
        fontSize:18,
        fontStyle: 'italic',
        fontWeight: 100
      }
    },
    xAxis: {
      name: 'time',
      data: ['2022.10', '2022.11', '2022.12', '2023.01', '2023.02']
    },
    yAxis: {},
    series: [
      {
        data: [10, 22, 28, 23, 19],
        type: 'line',
        smooth: true,
        animationDuration: 1500,
        animationEasing: "cubicInOut",
      }, {
        data: [19, 12, 7, 10, 22],
        type: 'line',
        smooth: true,
        animationDuration: 1500,
        animationEasing: "cubicInOut",
      }
    ]
  };
  const option2 = {
    title:{
      show:true,
      text:'visiting sort',
      textStyle:{
        fontFamily: 'Times New Roman',
        fontSize:18,
        fontStyle: 'italic',
        fontWeight: 100
      }
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 100,
            name: 'visiting'
          },
          {
            value: 200,
            name: 'blog'
          },
          {
            value: 300,
            name: 'resource'
          },
          {
            value: 500,
            name: 'chatting'
          }, {
            value: 300,
            name: 'projects'
          }, {
            value: 400,
            name: 'profile'
          }
        ],
        roseType: 'area',
        animationDuration: 2000,
        animationEasing: "cubicInOut"
      }
    ]
  };
  chart1.setOption(option1);
  chart2.setOption(option2);
}
</script>

<style scoped>
div.chart-container {
  width: 40vw;
  border-left: 10px;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.25);
  border-radius: 5px;
  margin-top: 5px;
}

div#chart-container-1{
  height: 38vh;
}

div#chart-container-2{
  height: 38.2vh;
  margin-top: 1.5vh;
}

</style>