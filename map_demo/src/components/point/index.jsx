import { Component } from "react";

class Point extends Component {
  render() {
    return (
      <div className="site-layout-content">
        <div id="map"></div>
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

    var data = [];

    var citys = [
      "北京",
      "天津",
      "上海",
      "重庆",
      "石家庄",
      "太原",
      "呼和浩特",
      "哈尔滨",
      "长春",
      "沈阳",
      "济南",
      "南京",
      "合肥",
      "杭州",
      "南昌",
      "福州",
      "郑州",
      "武汉",
      "长沙",
      "广州",
      "南宁",
      "西安",
      "银川",
      "兰州",
      "西宁",
      "乌鲁木齐",
      "成都",
      "贵阳",
      "昆明",
      "拉萨",
      "海口",
    ];

    var randomCount = 200;

    // 构造数据
    while (randomCount--) {
      var cityCenter = MapV.utilCityCenter.getCenterByCityName(
        citys[parseInt(Math.random() * citys.length, 10)]
      );
      data.push({
        geometry: {
          type: "Point",
          coordinates: [
            cityCenter.lng - 2 + Math.random() * 4,
            cityCenter.lat - 2 + Math.random() * 4,
          ],
        },
        properties: {
          count: Math.random() * 40,
        },
      });
    }
    var view = new MapVGL.View({
      map: map,
    });

    var intensity = new MapVGL.Intensity({
      max: 100,
      min: 0,
      gradient: {
        0: "rgb(25, 66, 102, 0.8)",
        0.3: "rgb(145, 102, 129, 0.8)",
        0.7: "rgb(210, 131, 137, 0.8)",
        1: "rgb(248, 177, 149, 0.8)",
      },
      maxSize: 30,
      minSize: 5,
    });

    var pointLayer = new MapVGL.PointLayer({
      // blend: 'lighter',
      size: function (data) {
        return intensity.getSize(data.properties.count);
      },
      color: function (data) {
        return intensity.getColor(data.properties.count);
      },
    });

    view.addLayer(pointLayer);
    pointLayer.setData(data);
  }
}
export default Point;
