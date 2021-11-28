import {useState, useEffect } from 'react'

import './ReturnSavers.css'


const ReturnSaversDetail = () => {


    const [returnProduct, setReturnProduct] = useState({ returnProduct: []})
  
    useEffect(() => {
      const fetchReturnSavers = async() => {
        let fetchResult = await fetch('/api/returnSavers/'+returnSaversId)
        let fetchedReturnSavers = await fetchResult.json()
        setReturnProduct(fetchedReturnSavers)
      }
        fetchReturnSavers()
    }, [returnSaversId])
  
    return (
      <div>
        <h2>Return Savers Return Product</h2>
        <div className="detail-fields">
          <div className="field-title">Order Date</div>
          <div className="field-value">{returnProduct.orderDate}</div>
          <div className="field-title">Product Name</div>
          <div className="field-value">{returnProduct.productName}</div>
          <div className="field-title">Product Price</div>
          <div className="field-value">{returnProduct.productPrice}</div>
          <div className="field-title">Product Description</div>
          <div className="field-value">{returnProduct.productDescription}</div>
          <div className="field-title">Product Size</div>
          <div className="field-value">{returnProduct.productSize}</div>
          <div className="field-title">Product Color</div>
          <div className="field-value">{returnProduct.productColor}</div>
          <div className="field-title">Product Quantity</div>
          <div className="field-value">{returnProduct.productQuantity}</div>
          <div className="field-title">Return Eligibility</div>
          <div className="field-value">{returnProduct.returnEligibility}</div>
        </div>
      </div>
    )
  }

  
  export default ReturnSaversDetail;
  