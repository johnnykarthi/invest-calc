
import SubNav from './SubNav'
import InputElement from './InputElement'
import PieChart from './PieChart'

export default function MainBox({ArrayValue}) {

    return (
        <div className="main-box">
            <SubNav />
            <div className="input-box">
                <div className="row">
                    <div className="col-md-7">
                        <InputElement />
                    </div>
                    <div className="col-md-5">
                        <PieChart Invested={ArrayValue.investedAmount} Total={ArrayValue.total} Profit={ArrayValue.estReturn}/>
                    </div>
                </div>

            </div>

        </div>
    )
}
