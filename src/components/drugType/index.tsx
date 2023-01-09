import React, { useEffect } from 'react';
import './index.css';
import 'echarts/map/js/china'
import echarts from 'echarts'


function DrugType() {
  useEffect(() => {
    let option =  {
      // title: {
      //   text: '药房存货',
      //   textStyle: {
      //     color: '#fff',
      //     fontSize: 18,
      //     fontWeight: 700
      //   },
      //   // textAlign: 'auto',
      //   left: '25%',
      //   padding: 5
      // },
      color: ['#9702fe', '#ff893b', '#37cbff', '#d90051', '#b2e269', '#1366ff'],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        top: 30,
        right: '10%',
        data: ['莲花清瘟', '板蓝根', '散列通', '布洛芬', '999感冒灵', '快克'],
        textStyle: {
          fontSize: 12,
          color: '#ffffff'
        },
        icon: 'circle',
        itemWidth: 10, // 设置宽度

        itemHeight: 10, // 设置高度

        itemGap: 10 // 设置间距
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          center: ['35%', '50%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 10, name: '莲花清瘟' },
            { value: 80, name: '板蓝根' },
            { value: 10, name: '散列通' },
            { value: 10, name: '布洛芬' },
            { value: 70, name: '999感冒灵' },
            { value: 20, name: '快克' }
          ]
        }
      ]
    }
    let element = document.getElementById('drugType')
    let myChartCirCle = echarts.init(element as HTMLDivElement)
    myChartCirCle.setOption(option)
    window.onresize = () => {
      myChartCirCle.resize()
    }
  }, [])
  return (
    <div className="drug">
      <div className="drugCharts">
        <div className="drugChart" id={'drugType'}></div>
      </div>
    </div>
  );
}

export default DrugType;
