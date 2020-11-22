<template>
  <el-card class="warpper">
    <top-title title="累计销售额" value="￥ 32,039,165">
      <template v-slot:chart>
        <div class="compare-warpper">
          <div class="compare">
            <span>日同比</span>
            <span class="emphasis">7.33%</span>
            <div class="increase"></div>
          </div>
          <div class="compare">
            <span>月同比</span>
            <span class="emphasis">38.33%</span>
            <div class="decrease"></div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <span>昨日销售额</span>
        <span class="emphasis">￥ 132,039,16</span>
      </template>
    </top-title>
  </el-card>
</template>

<script>
import TopTitleMixin from '@mixins/TopTitleMixin';
export default {
  mixins: [TopTitleMixin]
};
</script>

<style scoped lang="scss">
.warpper {
  flex: 1;
  margin: 10px;
  .compare-warpper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .compare {
      display: flex;
      align-items: center;
      margin-top: 3px;
      font-size: 12px;
      color: #666;
    }
  }
}
</style>
