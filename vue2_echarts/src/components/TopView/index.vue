<template>
  <div class="top_warpper">
    <total-sales />
    <total-orders />
    <today-users />
    <total-users />
  </div>
</template>

<script>
import TodayUsers from './components/TodayUsers.vue';
import TotalOrders from './components/TotalOrders.vue';
import TotalSales from './components/TotalSales.vue';
import TotalUsers from './components/TotalUsers.vue';

export default {
  components: {
    TotalOrders,
    TotalSales,
    TodayUsers,
    TotalUsers
  }
};
</script>

<style scoped>
.top_warpper {
  display: flex;
}
</style>
