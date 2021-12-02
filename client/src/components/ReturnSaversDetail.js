import {useState, useEffect } from 'react'
import './ReturnSaversDetail.css'
import ReturnSaversEditForm from './ReturnSaversEditForm'


const ReturnSaversDetail = ({productReturnId}) => {

    const [returns, setReturns] = useState('') //useState({})
    useEffect(()=>{
      const fetchReturns = async () => {
          let fetchResult = await fetch('/api/returnSavers/'+productReturnId) //619d2b43382f586cb987a3da
          let fetchedReturns = await fetchResult.json()
          console.log(fetchedReturns)
          setReturns(fetchedReturns)
      }
      fetchReturns()
    },[productReturnId])

    async function updateReturnSavers(updatedReturnProduct){
      console.log('Posting to returnsavers id', productReturnId, 'with data', updatedReturnProduct)
      fetch('/api/returnSavers/'+productReturnId, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedReturnProduct)
      })
}

    return(
      <div>
        <h2>Return Savers Detail</h2>
        <div className="detail-fields">
            <div className="field-title">OrderId</div>
            <div className="field-value">{returns?.orderId}</div>
            <div className="field-title">OrderDate</div>
            <div className="field-value">{returns?.orderDate}</div>
            <div className="field-title">ProductName</div>
            <div className="field-value">{returns?.productName}</div>
            <div className="field-title">ProductPrice</div>
            <div className="field-value">{returns?.productPrice}</div>
            <div className="field-title">returnEligibility</div>
            <div className="field-value">{returns?.returnEligibility}</div>
        </div>
        <ReturnSaversEditForm existingValues={returns} onSave={updateReturnSavers}/>
      </div>
    )
  }

  export default ReturnSaversDetail