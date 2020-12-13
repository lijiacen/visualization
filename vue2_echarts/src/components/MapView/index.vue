<template>
  <div class="map-warpper">
    <div class="left">
      <b-map></b-map>
    </div>
    <div class="right">
      <div class="water">
        <water></water>
      </div>
      <div class="word">
        <word></word>
      </div>
    </div>
  </div>
</template>

<script>
import bMap from './components/map';
import water from './components/water';
import word from './components/word';
export default {
  components: {
    bMap, water, word
  }
};
</script>

<style lang="scss" scoped>
.map-warpper {
  margin-top: 20px;
  display: flex;
  .left {
    height: 500px;
    flex: 0 0 80%;
    margin: 10px;
  }
  .right {
    margin: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .water {
      margin: 10px;
      height: 50%;
    }
    .word {
      margin: 10px;
      height: 50%;
    }
  }
}
</style>
