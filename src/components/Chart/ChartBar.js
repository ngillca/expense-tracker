import React from 'react'
import './ChartBar.css'

export default function ChartBar(props) {

    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="char-bar__fill" style={{ height: '10rem' }}>

                </div>
            </div>
            <div className="chart-bar__label">{ props.label }</div>
        </div>
    )
}
