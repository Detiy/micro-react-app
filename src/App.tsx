import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import fecha from 'fecha'
// import 'echarts/map/js/china'
// import echarts from 'echarts'
import Map from './components/map'
import DrugType from './components/drugType'
import DrugSale from './components/drugSale'
import CityArea from './components/cityArea'
// import geoJson from 'echarts/map/json/china.json'

// import userApi from './api/user'
import { BorderBox1, Decoration1, Decoration2, Decoration5, Decoration8, Decoration9, Decoration10} from '@jiaminghi/data-view-react'


function App() {
  // 格式化时间
  let num = fecha.format(new Date(), 'YYYY年MM月DD日 HH:mm:ss')
  const [time, setTime] = useState(num)
  const sunP = useRef(89)
  const cloudP = useRef(10000000000)
  useEffect(() => {
    // let sunNums = 89
    const timer = setInterval(() => {
      let num = fecha.format(new Date(), 'YYYY年MM月DD日 HH:mm:ss')
      setTime(num)
    }, 1000)
    const sunTimer = setInterval(() => {
      if (sunP.current > 99999) {
        sunP.current = 89
        cloudP.current = 10000000000
      }
      sunP.current += Math.floor(Math.random() * 3)
      cloudP.current -= Math.floor(Math.random() * 3)
    }, 1000)
    // 用来清除上一次的useEffect
    return () => {
      clearInterval(sunTimer)
      clearInterval(timer)
    }
  }, [])
  return (
    <div className="App">
      <div className='chart_head'>
        <span className='ch_title'>疫情监测系统</span>
        <div className='ch_dv'>
          <Decoration8 style={{width: '300px', height: '50px'}} />
          <Decoration5 style={{width: '300px', height: '40px'}} />
          <Decoration8 reverse={true} style={{width: '300px', height: '50px'}} />
        </div>
        <span className='ch_time'>{time}</span>
      </div>
      <div className='chart_main'>
        <div className='ch_main_content'>
          <div className='ch_item'><span>阳性</span><span className='c_a'>{sunP.current}<span className='unit'>人</span></span></div>
          <Decoration2 reverse={true} style={{width: '5px', height: '70px'}}/>
          <div className='ch_item'><span>阴性</span><span className='c_b'>{cloudP.current}<span className='unit'>人</span></span></div>
          <Decoration2 reverse={true} style={{width: '5px', height: '70px'}}/>
          <div className='ch_item'><span>康复率</span><span className='c_c'>97<span className='unit'>%</span></span></div>
          <Decoration2 reverse={true} style={{width: '5px', height: '70px'}}/>
          <div className='ch_item'><span>阳性感染率</span><span className='c_d'>58<span className='unit'>%</span></span></div>
          <Decoration2 reverse={true} style={{width: '5px', height: '70px'}}/>
          <div className='ch_item'><span>死亡人数</span><span className='c_e'>108<span className='unit'>人</span></span></div>
        </div>
        <Decoration10 style={{width: '100%', height: '5px'}} />
      </div>
      <BorderBox1 className="DrugTypeBorder">
        <span className='title'>药的存货<span style={{'fontSize': '14px'}}>(抽样100份)</span></span>
        <DrugType />
      </BorderBox1>
      <BorderBox1 className="DrugSaleBorder">
        <span className='title'>售药比例<span style={{'fontSize': '14px'}}>(抽样100份)</span></span>
        <DrugSale />
      </BorderBox1>
      <CityArea />
      <Decoration1 style={{width: '200px', height: '50px'}} />
      <Map />
    </div>
  );
}
export default App;