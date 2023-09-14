import React from 'react'
import { useSelector } from 'react-redux';

export default function TableBox({ Array }) {

  const duration = useSelector((state) => state.data.duration);
  let array = [];
  for (let i = duration; i <= Array.length; i++) {
    if (i % 3 === 0) {
      let temp = Array[i - 1];
      array = [...array, temp];
    }
  }
  
  return (
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Invested Amount</th>
          <th scope="col">Est Return</th>
          <th scope="col">Total value</th>
        </tr>
      </thead>
      <tbody>
        {array.map((item, index) => {
          if (index < 5) {
            return (
              <tr key={index}>
                <th scope="row">{item.year}</th>
                <td>₹{item.investedAmount.toLocaleString('hi-IN')}</td>
                <td>₹{item.estReturn.toLocaleString('hi-IN')}</td>
                <td>₹{item.total.toLocaleString('hi-IN')}</td>
              </tr>
            )
          }
          return '';
        })}
      </tbody>
    </table>
  )
}
