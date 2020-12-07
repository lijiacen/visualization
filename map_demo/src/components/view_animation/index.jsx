import { Component } from "react";

class ViewAnimation extends Component {
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
    map.centerAndZoom(new BMapGL.Point(116.414, 39.915), 17); // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    map.setTilt(20); // 设置地图初始倾斜角度
    var keyFrames = [
      {
        center: new BMapGL.Point(1116.414, 39.915), // 定义第一个关键帧帧地图中心点
        zoom: 18, // 定义第一个关键帧地图等级
        tilt: 60, // 定义第一个关键帧地图倾斜角度
        heading: 0, // 定义第一个关键帧地图旋转方向
        percentage: 0, // 定义第一个关键帧处于动画过程的百分比，取值范围0~1
      },
      {
        center: new BMapGL.Point(1116.414, 39.915), // 定义第二个关键帧地图中心点
        zoom: 18, // 定义第二个关键帧地图等级
        tilt: 60, // 定义第二个关键帧地图倾斜角度
        heading: 180, // 定义第二个关键帧地图旋转方向
        percentage: 0.5, // 定义第二个关键帧处于动画过程的百分比，取值范围0~1
      },
      {
        center: new BMapGL.Point(1116.414, 39.915), // 定义第三个关键帧地图中心点
        zoom: 18, // 定义第三个关键帧地图等级
        tilt: 60, // 定义第三个关键帧地图倾斜角度
        heading: 360, // 定义第三个关键帧地图旋转方向
        percentage: 1, // 定义第三个关键帧处于动画过程的百分比，取值范围0~1
      },
    ];
    var opts = {
      duration: 10000, // 设置每次迭代动画持续时间
      delay: 3000, // 设置动画延迟开始时间
      interation: 2, // 设置动画迭代次数
    };
    var animation = new BMapGL.ViewAnimation(keyFrames, opts); // 初始化动画实例
    animation.addEventListener("animationstart", function (e) {
      // 监听动画开始事件
      console.log("start");
    });
    animation.addEventListener("animationiterations", function (e) {
      // 监听动画迭代事件
      console.log("onanimationiterations");
    });
    animation.addEventListener("animationend", function (e) {
      // 监听动画结束事件
      console.log("end");
    });
    animation.addEventListener("animationcancel", function (e) {
      // 监听动画中途被终止事件
      console.log("cancel");
    });
    map.startViewAnimation(animation); // 开始播放动画
  }
}
export default ViewAnimation;
