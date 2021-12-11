import {useState, useEffect } from 'react'
import {Link } from 'react-router-dom'
import PdfGenerate from '../components/pdfGenerate'
import './ReturnSaversDetail.css'


const ReturnSaversDetail = ({productReturnId}) => {

    const [returns, setReturns] = useState('') //useState({})
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
            <div className="register-field-value">{returns?.orderDate}</div>
            <div className="field-title">ProductName</div>
            <div className="register-field-value">{returns?.productName}</div>
            <div className="field-title">ProductPrice</div>
            <div className="register-field-value">{returns?.productPrice}</div>
            <div className="field-title">SoldBy</div>
            <div className="register-field-value">{returns?.soldBy}</div>
            <div className="field-title">returnEligibility</div>
            <div className="register-field-value">{returns?.returnEligibility}</div>
            
        </div>
        <Link to="edit">Edit</Link>
        
          {returns?.returnEligibility === 'Approved' && 
          <PdfGenerate />
          }
        
        
 
      </div>
    )
  }

  export default ReturnSaversDetail