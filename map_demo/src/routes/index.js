import React from 'react';
import baidu_map from '../components/baidu_map';

const routes = [
  { path: '/', component: baidu_map, name: '百度地图', exact: true },
  { path: '/async_map', component: React.lazy(() => import('../components/async_map')), name: '异步地图' },
];
export default routes;