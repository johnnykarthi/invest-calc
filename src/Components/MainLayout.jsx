
import MainBox from './MainBox'
import TableBox from './TableBox'
import Header from './Header'
import {useSelector} from 'react-redux'

export default function MainLayout() {

    const month = useSelector((state)=> state.data.amount);
    const rate = useSelector((state)=> state.data.rate);
    const duration = useSelector((state)=> state.data.duration);
    let ans = [];
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
                    <MainBox  ArrayValue={ans[duration-1]}/>
                </div>
                <div className="col-md-5">
                    <div className="table-box">
                       <TableBox Array={ans} />
                    </div>
                </div>
            </div>
        </div>
    )
}
