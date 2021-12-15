import {useState, useEffect } from 'react'

import PdfGenerate from '../components/pdfGenerate'
import './ReturnSaversDetail.css'


const ReturnSaversDetail = ({productReturnId}) => {

    const [returns, setReturns] = useState('')
    useEffect(()=>{
      const fetchReturns = async () => {
          let fetchResult = await fetch('/api/returnSavers/'+productReturnId) 
          let fetchedReturns = await fetchResult.json()
          console.log(fetchedReturns)
          setReturns(fetchedReturns)
      }
      fetchReturns()
    },[productReturnId])

    return(
      <div>
        <h2>Return Savers Detail</h2>
        <div className="detail-fields">
            <div className="field-title">OrderId</div>
            <div className="register-field-value">{returns?.orderId}</div>
            <div className="field-title">OrderDate</div>
            <div className="register-field-value">{new Date(returns?.orderDate).toLocaleDateString('en-CA', {year : 'numeric', month: 'short', day: 'numeric'})}</div>
            <div className="field-title">ProductName</div>
            <div className="register-field-value">{returns?.productName}</div>
            <div className="field-title">ProductPrice</div>
            <div className="register-field-value">{returns?.productPrice}</div>
            <div className="field-title">SoldBy</div>
            <div className="register-field-value">{returns?.soldBy}</div>
            <div className="field-title">returnEligibility</div>
            <div className="register-field-value">{returns?.returnEligibility}</div>
            
        </div>
        <a type="button" class="btn btn-info">Edit</a>

       
        
          {returns?.returnEligibility === 'Approved' && 
          <PdfGenerate />
          }
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        
 
      </div>
    )
  }

  export default ReturnSaversDetail