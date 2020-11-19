<template>
  <div>
    <div class="title">{{title}}</div>
    <div class="value">{{value}}</div>
    <slot name="chart"></slot>
    <div class="line"></div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  props: ['title', 'value', 'total']
};
</script>

<style scoped>
.title {
  font-size: 12px;
  color: #999;
}
.value {
  font-size: 25px;
  color: #000;
  margin-top: 5px;
}
.line {
  margin: 10px 0;
  border-top: 1px solid #eee;
}
</style>
