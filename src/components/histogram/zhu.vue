<!--柱状图加折线图-->
<template>
  <div id="main" style="width: 5.14rem;height:3.16rem;"></div>
</template>

<script>

  export default {
    name: "zhu",
    data(){
      return{
        option:{
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#283b56'
              }
            }
          },
          dataZoom: {
            show: false,
          },
          xAxis: [
            {
              name:"/时间",
              type: 'category',
              boundaryGap: true,
              data:[10,11,12,14,15,16]
            },
            {
              type: 'category',
            }
          ],
          yAxis: [
            {
              type: 'value',
              scale: true,
              name: '/数量',
              boundaryGap: [0.2, 0.2]
            },
            {
              type: 'value',
              scale: true,
              show:false,
              boundaryGap: [0.2, 0.2],
              axisLine:{
                show:false
              },
            }
          ],
          series: [
            {
              name: '预购队列',
              type: 'bar',
              scale: true,
              data:[10,20,30,40,50,60]
            },
            {
              name: '最新成交价',
              type: 'line',
              scale: true,
              data:[20,30,40,50,60,70]
            }
          ]
        }
      }
    },
    mounted() {
      var myChart = echarts.init(document.getElementById('main'));
      myChart.setOption(this.option);
    }
  }
</script>

<style scoped>

</style>
