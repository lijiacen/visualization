<template>
  <ve-bmap height="100%" :settings="chartSettings" :series="chartSeries" :tooltip="chartTooltip"></ve-bmap>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      key: 'Y2u3xAZvnwzPjd3AMnobg9dDuwG4RoYN',
      bmap: {
        center: [120, 30],
        zoom: 14,
        roam: true,
        mapStyle: {
        }
      }
    };
    this.chartTooltip = { show: true };
    return {
      chartSeries: [
        {
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: [
            [120, 30, 1] // 经度，维度，value，...
          ]
        }
      ]
    };
  }
};
</script>
