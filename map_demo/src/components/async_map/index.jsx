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
    map.centerAndZoom(new BMapGL.Point(121.491, 31.233), 11);
  }
}
export default AsyncMap;
