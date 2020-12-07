import { Component } from "react";
import img from "../../img/timg.jpg";

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

    let icon = new BMapGL.Icon(img, new BMapGL.Size(50, 50), {
      // // 指定定位位置。
      // // 当标注显示在地图上时，其所指向的地理位置距离图标左上
      // // 角各偏移10像素和25像素。您可以看到在本例中该位置即是
      // // 图标中央下端的尖角位置。
      // anchor: new BMapGL.Size(10, 25),
      // // 设置图片偏移。
      // // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您
      // // 需要指定大图的偏移位置，此做法与css sprites技术类似。
      // imageOffset: new BMapGL.Size(0, 0 - 25), // 设置图片偏移
    });
    // 创建标注对象并添加到地图
    var marker = new BMapGL.Marker(new BMapGL.Point(121.491, 31.233), {
      icon: icon,
    });
    map.addOverlay(marker);

    var polyline = new BMapGL.Polyline(
      [
        new BMapGL.Point(120.491, 30.233),
        new BMapGL.Point(121.491, 31.233),
        new BMapGL.Point(122.491, 32.233),
      ],
      { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }
    );
    map.addOverlay(polyline);

    var polygon = new BMapGL.Polygon(
      [
        new BMapGL.Point(121.187112, 31.120977),
        new BMapGL.Point(121.385243, 31.313063),
        new BMapGL.Point(121.594226, 31.517988),
        new BMapGL.Point(121.701772, 31.721364),
        new BMapGL.Point(121.91248, 31.927893),
      ],
      { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }
    );
    map.addOverlay(polygon);
    var content = "label";
    var label = new BMapGL.Label(content, {
      // 创建文本标注
      position: new BMapGL.Point(121.491, 31.233), // 设置标注的地理位置
      offset: new BMapGL.Size(10, 20), // 设置标注的偏移量
    });
    map.addOverlay(label); // 将标注添加到地图中
    var opts = {
      width: 250, // 信息窗口宽度
      height: 100, // 信息窗口高度
      title: "Hello", // 信息窗口标题
    };
    var infoWindow = new BMapGL.InfoWindow("World", opts); // 创建信息窗口对象
    map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
  }
}
export default AsyncMap;
