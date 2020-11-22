<template>
  <el-card class="warpper">
    <top-title title="今日交易用户数" value="81,014">
      <template v-slot:chart>
        <div class="user-chart" id="user-chart"></div>
      </template>
      <template v-slot:footer>
        <span>退货率</span>
        <span class="emphasis">5.14%</span>
      </template>
    </top-title>
  </el-card>
</template>

<script>
import TopTitleMixin from '@mixins/TopTitleMixin';
export default {
  mixins: [TopTitleMixin],
  mounted() {
    const chart = this.$echarts.init(document.getElementById('user-chart'));
    chart.setOption({
      color: '#3398DB',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00'],
        show: false
      },
      yAxis: {
        show: false
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320, 932, 901, 934, 1290, 1320],
        type: 'bar',
        barWidth: '60%'
      }],
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.warpper {
  flex: 1;
  margin: 10px;
  .user-chart {
    margin-top: 10px;
    height: 50px;
  }
}
</style>
