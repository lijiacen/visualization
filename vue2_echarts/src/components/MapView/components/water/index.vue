<template>
  <ve-liquidfill :data="chartData" height="100%" :settings="chartSettings"></ve-liquidfill>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      wave: [0.5, 0.3, 0.1],
      seriesMap: {
        上海: {
          color: ['red', 'green', 'yellow'],
          radius: '80%'
        }
      }
    };
    return {
      chartData: {
        columns: ['city', 'percent'],
        rows: [{
          city: '上海',
          percent: 0.6
        }]
      }
    };
  }
};
</script>
