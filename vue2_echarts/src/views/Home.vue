<template>
  <div class="home">
    <topo-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
import TopoView from '../components/TopView';
import SalesView from '../components/SalesView';
import BottomView from '../components/BottomView';
import MapView from '../components/MapView';

export default {
  components: {
    TopoView, SalesView, BottomView, MapView
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  /* height: 100%; */
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
