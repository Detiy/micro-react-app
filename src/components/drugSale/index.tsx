import React, { useEffect } from 'react';
import './index.css';
import 'echarts/map/js/china'
import echarts from 'echarts'


function DrugSale() {
  useEffect(() => {
    let option =  {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [
          {
            offset: 0,
            color: '#ff893b' // 0% 处的颜色
          },
          {
            offset: 1,
            color: '#b2e269' // 100% 处的颜色
          }
        ],
        globalCoord: false
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#07234d']
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#c3dbff', //更改坐标轴文字颜色
              fontSize: 12 //更改坐标轴文字大小
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'category',
          data: ['莲花清瘟', '板蓝根', '散列通', '布洛芬', '999感冒灵', '快克'],
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#c3dbff', //更改坐标轴文字颜色
              fontSize: 12 //更改坐标轴文字大小
            }
          }
        }
      ],
      series: [
        {
          name: '直接访问',
          type: 'bar',
          barWidth: '60%',
          data: [80, 40, 90, 90, 50, 70]
        }
      ]
    }
    let element = document.getElementById('drugSale')
    let myChartColumnar = echarts.init(element as HTMLDivElement)
    myChartColumnar.setOption(option)
    window.onresize = () => {
      myChartColumnar.resize()
    }
  }, [])
  return (
    <div className="drugSale">
      <div className="drugSaleCharts">
        <div className="drugSaleChart" id={'drugSale'}></div>
      </div>
    </div>
  );
}

export default DrugSale;
