import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

export default function Chart(props) {
//console.log('logging data points -> ', props.dataPoints)

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value )
    // pull out elms using spreade operator
   
    const totalMax = Math.max(...dataPointValues);
 
 //   console.log('logging  -> ', props.dataPoints[10].value)
    
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => 
                <ChartBar 
                  key={dataPoint.label} 
                  value={dataPoint.value} 
                  maxValue={totalMax} 
                  label={dataPoint.label}
                />)} 
        </div>
    )
}
