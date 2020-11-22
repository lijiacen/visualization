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
span {
  font-size: 12px;
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

<style>
.emphasis {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}
.increase {
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: transparent transparent red transparent;
  border-style: solid;
  margin: 0 0 3px 5px;
}
.decrease {
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: green transparent transparent transparent;
  border-style: solid;
  margin: 3px 0 0 5px;
}
</style>
