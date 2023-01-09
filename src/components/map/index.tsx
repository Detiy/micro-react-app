import React, { useEffect } from 'react';
import './index.css';
import 'echarts/map/js/china'
import echarts from 'echarts'


function Map() {
  useEffect(() => {
    let option = {
      tooltip: {
        trigger: 'item'
      },
      visualMap: {
        min: 0,
        left: '10%',
        max: 10000,
        text: ['高', '低'], // 文本，默认为数值文本
        splitNumber: 0,
        color: ['#0054bb', '#85ADDE'],
        textStyle: {
          color: '#c3dbff'
        }
      },
      series: [
        {
          name: '全国疫情分布',
          type: 'map',
          mapType: 'china',
          mapLocation: {
            x: 'left'
          },
          // selectedMode: 'multiple',
          itemStyle: {
            normal: { label: { show: true, color: '#fff' }, borderWidth: 0 }
          },
          data: [
            { name: '西藏', value: 700 },
            { name: '青海', value: 1670.44 },
            { name: '宁夏', value: 2102.21 },
            { name: '海南', value: 2522.66 },
            { name: '甘肃', value: 5020.37 },
            { name: '贵州', value: 5701.84 },
            { name: '新疆', value: 6610.05 },
            { name: '云南', value: 22 },
            { name: '重庆', value: 500 },
            { name: '吉林', value: 1000 },
            { name: '山西', value: 5000 },
            { name: '天津', value: 4000 },
            { name: '江西', value: 9000 },
            { name: '广西', value: 689 },
            { name: '陕西', value: 9982 },
            { name: '黑龙江', value: 12582 },
            { name: '内蒙古', value: 14359.88 },
            { name: '安徽', value: 22 },
            { name: '北京', value: 20000 },
            { name: '福建', value: 1223 },
            { name: '上海', value: 19195.69 },
            { name: '湖北', value: 537 },
            { name: '湖南', value: 8872 },
            { name: '四川', value: 21026.68 },
            { name: '辽宁', value: 22226.7 },
            { name: '河北', value: 24515.76 },
            { name: '河南', value: 26931.03 },
            { name: '浙江', value: 32318.85 },
            { name: '山东', value: 45361.85 },
            { name: '江苏', value: 49110.27 },
            { name: '广东', value: 53210.28 },
            { name: '台湾', value: 53210.28 },
            { name: '南海诸岛', value: 53210.28 }
          ]
        }
      ]
    }
    let element = document.getElementById('mainMap')
    let myChart = echarts.init(element as HTMLDivElement)
    myChart.setOption(option)
    window.onresize = () => {
      myChart.resize()
    }
  }, [])
  return (
    <div className="map">
      <div className="mapCharts">
        <div className="circle_allow"></div>
        <div className="mapChart" id={'mainMap'}></div>
      </div>
    </div>
  );
}

export default Map;
