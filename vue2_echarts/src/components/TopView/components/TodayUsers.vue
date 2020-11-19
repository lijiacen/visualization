<template>
  <el-card class="warpper">
    <top-title title="今天用户" value="2000" total="456789">
      <template v-slot:chart>
        <div class="user_chart"></div>
      </template>
      <template v-slot:footer>
        <span>昨日销售额</span>
        <span class="money">45345345</span>
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

<style scoped>
.warpper {
  flex: 1;
  margin: 10px;
}
.user_chart {
  margin-top: 5px;
  height: 80px;
  background: yellow;
}
span {
  font-size: 12px;
}
.money {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}
</style>
