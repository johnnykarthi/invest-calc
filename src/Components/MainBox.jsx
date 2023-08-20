
import SubNav from './SubNav'
import InputElement from './InputElement'
import PieChart from './PieChart'

export default function MainBox({monthSetted,rateSetted,durationSetted,month,rate,duration,ArrayValue}) {

    const monthlyChanged = (value) => {
        monthSetted(value);
    }

    const rateChanged = (value) => {
        rateSetted(value);
    }

    const durationChanged = (value) => {
        durationSetted(value);
    }

    return (
        <div className="main-box">
            <SubNav />
            <div className="input-box">
                <div className="row">
                    <div className="col-md-7">
                        <InputElement monthvalue={month} ratevalue={rate} durationvalue={duration} monthlyChanged={monthlyChanged} rateChanged={rateChanged} durationChanged={durationChanged}/>
                    </div>
                    <div className="col-md-5">
                        <PieChart Invested={ArrayValue.investedAmount} Total={ArrayValue.total} Profit={ArrayValue.estReturn}/>
                    </div>
                </div>

            </div>

        </div>
    )
}
