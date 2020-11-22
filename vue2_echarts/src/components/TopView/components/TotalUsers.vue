<template>
  <el-card class="warpper">
    <top-title title="累计用户数" value="1,087,503">
      <template v-slot:chart>
        <v-chart :options="getOption()" />
      </template>
      <template v-slot:footer>
        <div class="footer-warpper">
          <span>日同比</span>
          <span class="emphasis">8.73%</span>
          <div class="decrease"></div>
          <span class="span-month">月同比</span>
          <span class="emphasis">35.91%</span>
          <div class="increase"></div>
        </div>
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
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [{
          data: [820],
          type: 'bar',
          stack: '总量',
          barWidth: '10',
          itemStyle: {
            color: '#45c946'
          }
        }, {
          data: [180],
          type: 'bar',
          stack: '总量',
          itemStyle: {
            color: '#eee'
          }
        }, {
          type: 'custom',
          stack: '总量',
          data: [820],
          renderItem: (params, api) => {
            // 计算实际坐标
            const position = api.coord([api.value(0), 0]);
            return {
              type: 'group',
              position: position,
              children: [{
                type: 'path',
                shape: {
                  d: 'M514.525867 67.529387L3.413333 953.53856l1017.173334 2.92864L514.525867 67.529387z',
                  x: -5,
                  y: 5,
                  width: 10,
                  height: 10
                },
                style: {
                  fill: '#45c946'
                }
              },
              {
                type: 'path',
                shape: {
                  d: 'M514.525867 956.474027L3.413333 70.46144l1017.173334-2.932053-506.0608 888.94464z',
                  x: -5,
                  y: -15,
                  width: 10,
                  height: 10
                },
                style: {
                  fill: '#45c946'
                }
              }]
            };
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

<style  lang="scss" scoped>
.warpper {
  flex: 1;
  margin: 10px;
  .footer-warpper {
    display: flex;
    align-items: center;
    .span-month {
      margin-left: 10px;
    }
  }
}
</style>
