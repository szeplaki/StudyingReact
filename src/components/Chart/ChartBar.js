import React from "react";
import './ChartBar.css';

export function ChartBar(props) {
    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div> 
                {/* style wants a javascript object as a value, where key is a css property name */}
                
            </div>
            <div className="chart-bar__label">
                    {props.label}
                </div>
        </div>
    )
}