<template>
  <el-card class="warpper">
    <top-title title="累计订单量" value="2,157,420">
      <template v-slot:chart>
        <v-chart :options="getOption()" />
      </template>
      <template v-slot:footer>
        <span>昨日订单量</span>
        <span class="emphasis">2,000,000</span>
      </template>
    </top-title>
  </el-card>
</template>

<script>
import TopTitleMixin from '@mixins/TopTitleMixin';
export default {
  mixins: [TopTitleMixin],
  methods: {
    getOption() {
      return {
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {
            color: 'purple'
          },
          smooth: true,
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: 0
          }
        }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.warpper {
  flex: 1;
  margin: 10px;
}
</style>
