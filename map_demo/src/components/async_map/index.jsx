import { Component } from "react";

class AsyncMap extends Component {
  render() {
    return (
      <div className="site-layout-content">
        <div id="map"></div>
      </div>
    );
  }
  async componentDidMount() {
    let BMapGL = await window.getBMapGL();
    let map = new BMapGL.Map("map"); // 创建Map实例
    map.centerAndZoom(new BMapGL.Point(121.491, 31.233), 11); // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    // map.setHeading(64.5); //设置地图旋转角度
    // map.setTilt(73); //设置地图的倾斜角度
    // map.setMapType(BMAP_EARTH_MAP);
    // let scaleCtrl = new BMapGL.ScaleControl(); // 添加比例尺控件
    // map.addControl(scaleCtrl);
    // let zoomCtrl = new BMapGL.ZoomControl(); // 添加缩放控件
    // map.addControl(zoomCtrl);
  }
}
export default AsyncMap;
