import React from 'react';
import { ScrollRankingBoard, BorderBox13 } from '@jiaminghi/data-view-react'
import './index.css'


function cityArea() {
  let areaData = {
    data: [
      {
        name: '河南',
        value: 55
      },
      {
        name: '北京',
        value: 90
      },
      {
        name: '上海',
        value: 78
      },
      {
        name: '湖北',
        value: 66
      },
      {
        name: '浙江',
        value: 33
      },
      {
        name: '黑龙江',
        value: 45
      },
      {
        name: '福建',
        value: 29
      },
      {
        name: '辽宁',
        value: 18
      },
      {
        name: '广东',
        value: 28
      },
      {
        name: '青海',
        value: 48
      }
    ],
    unit: '%',
    carousel: 'single'
  }
  return (

    <div className='cityArea'>
      <BorderBox13 className="scrollRankingBoard">
        <span className='title'>地区疫情分布排名</span>
        <ScrollRankingBoard config={areaData} style={{width: '300px', height: '500px', margin: '0 auto'}}/>
      </BorderBox13>
    </div>
  )
}

export default cityArea