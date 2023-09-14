import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {amountChange,rateChange,durationChange} from '../features/dateSlice'

export default function InputElement() {
    const dispatch = useDispatch();
    const monthvalue = useSelector((state)=> state.data.amount);
    const ratevalue = useSelector((state)=> state.data.rate);
    const durationvalue = useSelector((state)=> state.data.duration);
  return (
    <>
        <div className="input-group-box">
                    <div className="form-input-box">
                        <div>Monthly investment</div>
                        <div className="input-form-box-model">
                            <span className="symbol">₹</span><input type="text" value={monthvalue} className="form-input" onChange={(e)=> dispatch(amountChange(e.target.value))}></input>
                        </div>
                    </div>
                    <div className="range-selector">
                    <input type="range" value={monthvalue} min='500' max='100000' onChange={(e)=> dispatch(amountChange(e.target.value))}></input>
                    </div>
                </div>
                <div className="input-group-box">
                    <div className="form-input-box">
                        <div>Expect return rate (p.a)</div>
                        <div className="input-form-box-model">
                            <input type="text" value={ratevalue} className="form-input" maxLength='5' onChange={(e)=> dispatch(rateChange(e.target.value))}></input><span className="symbol">%</span>
                        </div>
                    </div>
                    <div className="range-selector">
                        <input type="range" value={ratevalue} min='1' max='30' step='.1'  onChange={(e)=> dispatch(rateChange(e.target.value))}></input>
                    </div>
                </div>
                
                <div className="input-group-box">
                    <div className="form-input-box">
                        <div>Time period</div>
                        <div className="input-form-box-model">
                           <input type="text" value={durationvalue} className="form-input" onChange={(e)=> dispatch(durationChange(e.target.value))}></input><span className="symbol">Yr</span>
                        </div>
                    </div>
                    <div className="range-selector">
                        <input type="range" value={durationvalue} min='1' max='40' step='1' onChange={(e)=> dispatch(durationChange(e.target.value))}></input>
                    </div>
                </div>
    </>
  )
}