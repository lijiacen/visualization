<template>
  <el-card class="warpper">
    <top-title title="今天用户" value="2000" total="456789" />
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
</style>
