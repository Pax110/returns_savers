import {useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import PdfGenerate from '../components/pdfGenerate'
import './ReturnSaversDetail.css'
import { Link } from 'react-router-dom'

const ReturnSaversDetail = ({productReturnId, firstname, lastname, address,city,province,postalCode}) => {

    const [returns, setReturns] = useState('')
    const [ user, setUser] = useState()
   
    useEffect(()=>{
      const fetchReturns = async () => {
          let fetchResult = await fetch('/api/returnSavers/'+productReturnId) 
          let fetchedReturns = await fetchResult.json()
          
          setReturns(fetchedReturns)
      }
      fetchReturns()
    },[productReturnId])
  
    
  
    useEffect(()=>{
      const getUser = async () => {
        
          console.log('Login successful in navbar')
          let user1 = await fetch('/auth/loggedInUser')
          let fetchedResult = await user1.json()
          setUser(fetchedResult)      
          
  
        
      }
      getUser()
    },[])

    
    
    
    
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
            <div className="register-field-value">${returns?.productPrice}</div>
            <div className="field-title">SoldBy</div>
            <div className="register-field-value">{returns?.soldBy}</div>
            <div className="field-title">returnEligibility</div>
            <div className="register-field-value">{returns?.returnEligibility}</div>
            
        </div>
      
        <Link type="button" to="edit">Edit</Link>
        
        
        
          {returns?.returnEligibility === 'Approved' && 
          <PdfGenerate address={address} lastname={lastname} firstname={firstname} city={city} province={province} postalCode={postalCode}/>
          
          }
          

          
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        
 
      </div>
    )
  }

  export default ReturnSaversDetail