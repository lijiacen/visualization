<template>
  <div class="warpper">
    <el-card>
      <template v-slot:header>
        <div class="menu-warpper">
          <el-menu mode="horizontal" :default-active="defaultActive" @select="handleSelect">
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="今年"></el-radio-button>
            </el-radio-group>
            <el-date-picker
              style="margin-right:10px;margin-left:10px"
              size="small"
              v-model="dateTimeRange"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </div>
        </div>
      </template>
      <template>
        <div class="chart-warrper">
          <div class="chart">
            <v-chart :options="getOption()" />
          </div>
          <div class="list">
            <div class="list-title">排行榜</div>
            <div class="list-item-wrapper">
              <div class="list-item" v-for="(item,i) in list" :key="i">
                <div :class="+item.no<4 ? ['list-item-no', 'top-no']  :'list-item-no'">{{item.no}}</div>
                <div class="list-item-name">{{item.name}}</div>
                <div class="list-item-money">{{item.money}}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: '1',
      radioSelect: '今日',
      dateTimeRange: '',
      list: [{ no: 1, money: 100, name: '123' }, { no: 2, money: 100, name: '123' }, { no: 3, money: 100, name: '123' }, { no: 4, money: 100, name: '123' }, { no: 5, money: 100, name: '123' }, { no: 6, money: 100, name: '123' }, { no: 7, money: 100, name: '123' }]
    };
  },
  methods: {
    handleSelect() { },
    getOption() {
      return {
        color: '#3398DB',
        title: {
          text: '年度销售总额',
          textStyle: {
            fontSize: 12,
            color: '#666'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          type: 'category',
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#999'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        yAxis: {
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: '#eee'
            }
          }
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320, 932, 901, 934, 1290, 1320],
          type: 'bar',
          barWidth: '60%'
        }],
        grid: {
          top: 30,
          bottom: 30,
          left: 40,
          right: 40
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.warpper {
  margin: 10px;
  .menu-warpper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .menu-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .chart-warrper {
    height: 270px;
    display: flex;
    .chart {
      flex: 0 0 70%;
      height: 100%;
      width: 70%;
    }
    .list {
      flex: 1;
      height: 100%;
      width: 100%;
      overflow: hidden;
      .list-title {
        margin-top: 20px;
        font-size: 12px;
        color: #666;
        font-weight: 500;
      }
      .list-item-wrapper {
        margin-top: 15px;
        .list-item {
          display: flex;
          align-items: center;
          font-size: 12px;
          height: 20px;
          padding: 6px 20px 6px 0;
          .list-item-no {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            color: #333;
            &.top-no {
              background: #000;
              border-radius: 50%;
              color: #fff;
              font-weight: 500;
            }
          }
          .list-item-name {
            margin-left: 10px;
            color: #333;
          }
          .list-item-money {
            flex: 1;
            margin-left: 10px;
            color: #333;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
