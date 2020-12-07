import React from 'react';
import baidu_map from '../components/baidu_map';

const routes = [
  { path: '/', component: baidu_map, name: '百度地图', exact: true },
  { path: '/async_map', component: React.lazy(() => import('../components/async_map')), name: '异步地图' },
  { path: '/layer_map', component: React.lazy(() => import('../components/layer_map')), name: '地图绘图' },
  { path: '/view_animation', component: React.lazy(() => import('../components/view_animation')), name: 'ViewAnimation' },
  { path: '/track_animation', component: React.lazy(() => import('../components/track_animation')), name: 'TrackAnimation' }
];
export default routes;