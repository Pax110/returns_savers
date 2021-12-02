import { useState } from 'react'
import './ReturnSaversDetail.css'

const ReturnSaversEditForm = () => {
    const [orderId, setOrderId] = useState('')
    const [orderDate, setOrderDate] = useState('')
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productSize, setProductSize] = useState('')
    const [productColor, setProductColor] = useState('')
    const [productQuantity, setProductQuantity] = useState('')
    const [mainReasonToReturn, setMainReasonToReturn] = useState('') 
    const [secondaryReasonToReturn, setSecondaryReasonToReturn] = useState('') 
    const [otherReasonToReturn, setOtherReasonToReturn] = useState('')    
   // const [returnEligibility, setReturnEligibility] = useState('')

    function onInputUpdate(event, setter) {
        let newValue = event.target.value
        setter(newValue)
    }

    async function postData() {
        let newReturnProduct = {
            orderId, orderDate, productName, productPrice, productDescription, productSize, productColor, productQuantity, mainReasonToReturn,
            secondaryReasonToReturn, otherReasonToReturn
        }
        //returnEligibility


        console.log('Saving New Return', newReturnProduct)
        fetch('/api/returnSavers', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReturnProduct)
        })
    }


    return (
         <div>
            <h2>ReturnSavers Return Product Entry</h2>
            <div className="detail-fields">
                <label className="field-title">Order Id</label>
                <input className="register-field-value" value={orderId} onChange={(event) => onInputUpdate(event, setOrderId) } />
                <label className="field-title">Order Date</label>
                <input className="register-field-value" value={orderDate} onChange={(event) => onInputUpdate(event, setOrderDate) } />
                <label className="field-title">Product Name</label>
                <input className="register-field-value" value={productName} onChange={(event) => onInputUpdate(event, setProductName) } />
                <label className="field-title">Product Price</label>
                <input className="register-field-value" value={productPrice} onChange={(event) => onInputUpdate(event, setProductPrice) } />
                <label className="field-title">Product Description</label>
                <input className="register-field-value" value={productDescription} onChange={(event) => onInputUpdate(event, setProductDescription) } />
                <label className="field-title">Product Size</label>
                <input className="register-field-value" value={productSize} onChange={(event) => onInputUpdate(event, setProductSize) } />
                <label className="field-title">Product Color</label>
                <input className="register-field-value" value={productColor} onChange={(event) => onInputUpdate(event, setProductColor) } />
                <label className="field-title">Product Quantity</label>
                <input className="register-field-value" value={productQuantity} onChange={(event) => onInputUpdate(event, setProductQuantity) } />
                 <label className="field-title">Main Reason To Return</label>
                 <select className="register-field-value" onChange={(event)=> onInputUpdate(event, setMainReasonToReturn)} >
                    <option className="register-field-value">Select</option>
                    <option className="register-field-value" value="Bought it by mistake">Bought it by mistake</option>
                    <option className="register-field-value" value="Better price available">Better price available</option>
                    <option className="register-field-value" value="Items arrived too late">Items arrived too late</option>
                    <option className="register-field-value" value="Product used for a week">Product used for a week</option>
                    <option className="register-field-value" value="Product damaged">Product damaged</option>
                 </select>
                 <label className="field-title">Secondary Reason To Return</label>
                 <select className="register-field-value" onChange={(event)=> onInputUpdate(event, setSecondaryReasonToReturn)} >
                    <option className="register-field-value">Select</option>
                    <option className="register-field-value" value="Bought it by mistake">Bought it by mistake</option>
                    <option className="register-field-value" value="Better price available">Better price available</option>
                    <option className="register-field-value" value="Items arrived too late">Items arrived too late</option>
                    <option className="register-field-value" value="Product used for a week">Product used for a week</option>
                    <option className="register-field-value" value="Product damaged">Product damaged</option>
                 </select>
                 <label className="field-title">Other Reason To Return</label>
                 <select className="register-field-value" onChange={(event)=> onInputUpdate(event, setOtherReasonToReturn)} >
                    <option className="register-field-value">Select</option>
                    <option className="register-field-value" value="Bought it by mistake">Bought it by mistake</option>
                    <option className="register-field-value" value="Better price available">Better price available</option>
                    <option className="register-field-value" value="Items arrived too late">Items arrived too late</option>
                    <option className="register-field-value" value="Product used for a week">Product used for a week</option>
                    <option className="register-field-value" value="Product damaged">Product damaged</option>
                 </select>
                {/*<input value={reasonToReturn} onChange={(event) => onInputUpdate(event, setReasonToReturn) } /> */}
                {/* <label className="field-title">Return Eligibility</label>
                <input value={returnEligibility} onChange={(event) => onInputUpdate(event, setReturnEligibility) } /> */}
                <br/>
                <button className="register-field-value" onClick={postData}>Save New Return</button>
            </div>

    </div>
    )

}

export default ReturnSaversEditForm