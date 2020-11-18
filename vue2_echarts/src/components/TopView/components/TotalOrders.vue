<template>
  <el-card class="warpper">
    <top-title />
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </el-card>
</template>

<script>
import TopTitleMixin from '../../../mixins/TopTitleMixin';
export default {
  mixins: [TopTitleMixin]
};
</script>

<style scoped>
.warpper {
  flex: 1;
  margin: 10px;
}
</style>
