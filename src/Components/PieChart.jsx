import React from 'react'

import { Chart as ChartJS, ArcElement } from "chart.js"
import { Doughnut } from "react-chartjs-2"


ChartJS.register(
    ArcElement
);

export default function PieChart({Invested,Total,Profit}) {

    const data = {
        datasets: [
            {
                data: [Invested, Profit],
                backgroundColor: [
                    '#efefef',
                    'lightgreen'
                ],
                hoverOffset: 3
            }
        ]
    };
    return (
        <>
        <div className='piechart-box text-center'>
        <div className='piechart text-center'>
                <Doughnut data={data} />
                <div className='legend-box'>
                    <span className='legend-1'></span><small>Invest Amt</small>
                    <span className='legend-2'></span><small>Est return</small>
                </div>
         </div>
            <div className="final-value">
                <div className="d-flex justify-content-between p-2">
                    <small>Invested Amount</small>
                    <h6>₹{Invested.toLocaleString('hi-IN')}</h6>
                </div>
                <div className="d-flex justify-content-between p-2">
                    <small>Total Value</small>
                    <h6>₹{Total.toLocaleString('hi-IN')}</h6>
                </div>


            </div>
        </div>
            
        </>
    )
}
