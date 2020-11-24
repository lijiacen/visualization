<template>
  <div class="bottom-warpper">
    <div class="view">
      <el-card>
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-warpper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-num">93,634</div>
                <v-chart :options="getUsersOption()" />
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-num">198,782</div>
                <v-chart :options="getSearchOption()" />
              </div>
            </div>
            <div class="table-warpper">
              <el-table :data="tableData">
                <el-table-column label="排名" prop="rank"></el-table-column>
                <el-table-column label="关键词" prop="keyword"></el-table-column>
                <el-table-column label="搜索量" prop="count"></el-table-column>
                <el-table-column label="搜索用户数" prop="user"></el-table-column>
              </el-table>
              <el-pagination layout="prev,pager,next" background :total="5" :page-size="4"></el-pagination>
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card>
        <template v-slot:header>
          <div class="title-wrapper">
            <div>分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-warpper">
            <v-chart :options="getCategoryOption()" />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioSelect: '品类',
      tableData: [{ id: 1, rank: 1, keyword: '南京', count: 55, user: 44 }, { id: 1, rank: 1, keyword: '南京', count: 55, user: 44 }, { id: 1, rank: 1, keyword: '南京', count: 55, user: 44 }, { id: 1, rank: 1, keyword: '南京', count: 55, user: 44 }]
    };
  },
  methods: {
    getUsersOption() {
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
            color: 'rgba(95,187,255,.5)'
          },
          smooth: true,
          lineStyle: {
            color: 'rgba(95,187,255)'
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
    },
    getSearchOption() {
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
            color: 'rgba(95,187,255,0.5)'
          },
          smooth: true,
          lineStyle: {
            color: 'rgba(95,187,255)'
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
    },
    getCategoryOption() {
      return {
        title: [{
          text: '品类分布',
          textStyle: {
            fontSize: 14,
            color: '#666'
          },
          left: 20,
          right: 20
        }, {
          text: '累计订单量',
          subtext: '320',
          textStyle: {
            fontSize: 14,
            color: '#999'
          },
          subtextStyle: {
            fontSize: 28,
            color: '#333'
          },
          x: '34.5%',
          y: '42.5%',
          textAlign: 'center'
        }],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          left: '70%',
          height: 250,
          top: 'middle',
          data: ['超级牛鲜', '中华面馆', '安庆馄饨'],
          textStyle: {
            color: '#8c8c8c'
          }
        },
        series: [
          {
            name: '品类分布',
            type: 'pie',
            radius: ['45%', '60%'],
            center: ['35%', '50%'],
            labelLine: {
              normal: {
                length: 5,
                length2: 3
              }
            },
            data: [
              { value: 192, name: '超级牛鲜', precent: '30%', itemStyle: { color: '#e7e702' } },
              { value: 92, name: '中华面馆', precent: '30%', itemStyle: { color: '#8d7fec' } },
              { value: 52, name: '安庆馄饨', precent: '30%', itemStyle: { color: '#5085f2' } }
            ],
            itemStyle: {
              borderWidth: 4,
              borderColor: '#fff'
            }
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.bottom-warpper {
  display: flex;
  margin: 10px;
  margin-top: 20px;
  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;
    &:first-child {
      padding: 0 10px 0 0;
    }
    &:last-child {
      padding: 0 0 0 10px;
    }
    .title-wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-weight: 500;
      font-size: 14px;
      padding: 0 0 0 20px;
      .radio-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
      }
    }
    .chart-warpper {
      display: flex;
      flex-direction: column;
      height: 452px;
      .chart-inner {
        display: flex;
        padding: 0 10px;
        margin-top: 20px;
        .chart {
          flex: 1;
          padding: 0 10px;
          .chart-title {
            color: #999;
            font-size: 14px;
          }
          .chart-num {
            color: #333;
            font-size: 22px;
            font-weight: 500;
            letter-spacing: 2px;
          }
          .echarts {
            height: 50px;
          }
        }
      }
      .table-warpper {
        flex: 1;
        margin-top: 20px;
        padding: 0 20px 20px;
        .el-pagination {
          display: flex;
          justify-content: flex-end;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
