import React from 'react'

export default function InputElement({monthlyChanged,rateChanged,durationChanged,monthvalue,ratevalue,durationvalue}) {


    const monthChange = (e)=>{
        if(e.target.value > 100000)
        {
            monthlyChanged(100000);
        }
        else{
            monthlyChanged(e.target.value)
        }
    }

    const rateChange = (e)=>{
        if(e.target.value > 30)
        {
            rateChanged(30);
        }
        else{
            rateChanged(e.target.value)
        }
    }

    const durationChange = (e)=>{
        if(e.target.value > 40)
        {
            durationChanged(40);
        }
        else{
            durationChanged(e.target.value)
        }
    }

  return (
    <>
        <div className="input-group-box">
                    <div className="form-input-box">
                        <div>Monthly investment</div>
                        <div className="input-form-box-model">
                            <span className="symbol">₹</span><input type="text" value={monthvalue} className="form-input" onChange={monthChange}></input>
                        </div>
                    </div>
                    <div className="range-selector">
                    <input type="range" value={monthvalue} min='500' max='100000' onChange={monthChange}></input>
                    </div>
                </div>
                <div className="input-group-box">
                    <div className="form-input-box">
                        <div>Expect return rate (p.a)</div>
                        <div className="input-form-box-model">
                            <input type="text" value={ratevalue} className="form-input" maxLength='5' onChange={rateChange}></input><span className="symbol">%</span>
                        </div>
                    </div>
                    <div className="range-selector">
                        <input type="range" value={ratevalue} min='1' max='30' step='.1'  onChange={rateChange}></input>
                    </div>
                </div>
                
                <div className="input-group-box">
                    <div className="form-input-box">
                        <div>Time period</div>
                        <div className="input-form-box-model">
                           <input type="text" value={durationvalue} className="form-input" onChange={durationChange}></input><span className="symbol">Yr</span>
                        </div>
                    </div>
                    <div className="range-selector">
                        <input type="range" value={durationvalue} min='1' max='40' step='1' onChange={durationChange}></input>
                    </div>
                </div>
    </>
  )
}