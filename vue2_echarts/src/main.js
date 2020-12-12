import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './plugins/element';
import Echarts from 'echarts';
import VueECharts from 'vue-echarts';
import VCharts from 'v-charts';

import './style/index.css';
import 'v-charts/lib/style.min.css';

Vue.config.productionTip = false;
Vue.prototype.$echarts = Echarts;
Vue.component('v-chart', VueECharts);

Vue.use(VCharts);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
