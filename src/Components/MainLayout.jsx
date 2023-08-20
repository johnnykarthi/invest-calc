import React, { useState } from 'react'
import MainBox from './MainBox'
import TableBox from './TableBox'
import Header from './Header'

export default function MainLayout() {
    const [month, setMonth] = useState(1000);
    const [rate, setRate] = useState(12);
    const [duration, setDuration] = useState(12);

    let ans = [];


    const monthSetted = (value)=>{
        setMonth(value);
    }

    const rateSetted = (value)=>{
        setRate(value);
    }

    const durationSetted = (value)=>{
        setDuration(value);
    }

    let rateCon = (rate / 12) / 100;

    for (let i = 1; i <= 40; i++) {
        let kk = i * 12;
        let tempInvest = kk*month;
        let temptTotal = Math.round(month * ((Math.pow((1 + rateCon), kk) - 1) / rateCon) * (1 + rateCon));
        let tempReturn = temptTotal - tempInvest;
        let tempValue = {
            year:i,
            investedAmount:tempInvest,
            estReturn:tempReturn,
            total:temptTotal
        }
        ans = [...ans, tempValue];
    }


    return (
        <div className="container">
            <Header/>     
            <div className="row">
                <div className="col-md-7">
                    <MainBox monthSetted={monthSetted} rateSetted={rateSetted} durationSetted={durationSetted} month={month} rate={rate} duration={duration} ArrayValue={ans[duration-1]}/>
                </div>
                <div className="col-md-5">
                    <div className="table-box">
                       <TableBox Array={ans} duration={duration}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
