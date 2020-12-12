import { Component } from "react";

class Line extends Component {
  render() {
    return (
      <div className="site-layout-content">
        <div id="map">123123</div>
      </div>
    );
  }
  async componentDidMount() {
    let BMapGL = await window.getBMapGL();
    let MapV = await window.getMapVLib();
    let MapVGL = window.MapVGL;

    let map = new BMapGL.Map("map"); // 创建Map实例
    map.centerAndZoom(new BMapGL.Point(121.491, 31.233), 7); // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

    var citys = [
      "长沙市",
      "株洲市",
      "湘潭市",
      "衡阳市",
      "邵阳市",
      "岳阳市",
      "常德市",
      "张家界市",
      "益阳市",
      "郴州市",
      "永州市",
      "怀化市",
      "娄底市",
    ];

    var randomCount = 100; // 模拟的飞线的数量
    var curve = new MapVGL.BezierCurve();

    var data = [];

    // 构造数据
    while (randomCount--) {
      var startPoint = MapV.utilCityCenter.getCenterByCityName(
        citys[parseInt(Math.random() * citys.length, 10)]
      );
      var endPoint = MapV.utilCityCenter.getCenterByCityName(
        citys[parseInt(Math.random() * citys.length, 10)]
      );

      curve.setOptions({
        start: [startPoint.lng, startPoint.lat],
        end: [endPoint.lng, endPoint.lat],
      });
      var curveModelData = curve.getPoints();

      data.push({
        geometry: {
          type: "LineString",
          coordinates: curveModelData,
        },
        properties: {
          count: Math.random(),
        },
      });
    }

    var view = new MapVGL.View({
      map: map,
    });

    var flylineLayer = new MapVGL.FlyLineLayer({
      style: "chaos",
      step: 0.3,
      color: "rgba(33, 242, 214, 0.3)",
      textureColor: function (data) {
        return data.properties.count > 0.5 ? "#ff0000" : "#56ccdd";
      },
      textureWidth: 20,
      textureLength: 10,
    });
    view.addLayer(flylineLayer);
    flylineLayer.setData(data);
  }
}
export default Line;
