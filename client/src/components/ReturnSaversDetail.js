import {useState, useEffect } from 'react'
import './ReturnSaversDetail.css'

const ReturnSaversDetail = ({productReturnId}) => {

    const [returns, setReturns] = useState({})
    useEffect(()=>{
      const fetchReturns = async () => {
          let fetchResult = await fetch('/api/returnSavers/'+productReturnId) //619d2b43382f586cb987a3da
          let fetchedReturns = await fetchResult.json()
          setReturns(fetchedReturns)
      }
      fetchReturns()
    },[productReturnId])
    return(
      <div>
        <h2>Return Savers Detail</h2>
        <div className="detail-fields">
            <div className="field-title">OrderId</div>
            <div className="field-value">{returns.orderId}</div>
            <div className="field-title">OrderDate</div>
            <div className="field-value">{returns.orderDate}</div>
            <div className="field-title">ProductName</div>
            <div className="field-value">{returns.productName}</div>
            <div className="field-title">ProductPrice</div>
            <div className="field-value">{returns.productPrice}</div>
        </div>
      </div>
    )
  }

  export default ReturnSaversDetail