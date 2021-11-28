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
                <input value={orderId} onChange={(event) => onInputUpdate(event, setOrderId) } />
                <label className="field-title">Order Date</label>
                <input value={orderDate} onChange={(event) => onInputUpdate(event, setOrderDate) } />
                <label className="field-title">Product Name</label>
                <input value={productName} onChange={(event) => onInputUpdate(event, setProductName) } />
                <label className="field-title">Product Price</label>
                <input value={productPrice} onChange={(event) => onInputUpdate(event, setProductPrice) } />
                <label className="field-title">Product Description</label>
                <input value={productDescription} onChange={(event) => onInputUpdate(event, setProductDescription) } />
                <label className="field-title">Product Size</label>
                <input value={productSize} onChange={(event) => onInputUpdate(event, setProductSize) } />
                <label className="field-title">Product Color</label>
                <input value={productColor} onChange={(event) => onInputUpdate(event, setProductColor) } />
                <label className="field-title">Product Quantity</label>
                <input value={productQuantity} onChange={(event) => onInputUpdate(event, setProductQuantity) } />
                 <label className="field-title">Main Reason To Return</label>
                 <select  onChange={(event)=> onInputUpdate(event, setMainReasonToReturn)} >
                    <option>Select</option>
                    <option value="Bought it by mistake">Bought it by mistake</option>
                    <option value="Better price available">Better price available</option>
                    <option value="Items arrived too late">Items arrived too late</option>
                    <option value="Product used for a week">Product used for a week</option>
                    <option value="Product damaged">Product damaged</option>
                 </select>
                 <label className="field-title">Secondary Reason To Return</label>
                 <select  onChange={(event)=> onInputUpdate(event, setSecondaryReasonToReturn)} >
                    <option>Select</option>
                    <option value="Bought it by mistake">Bought it by mistake</option>
                    <option value="Better price available">Better price available</option>
                    <option value="Items arrived too late">Items arrived too late</option>
                    <option value="Product used for a week">Product used for a week</option>
                    <option value="Product damaged">Product damaged</option>
                 </select>
                 <label className="field-title">Other Reason To Return</label>
                 <select  onChange={(event)=> onInputUpdate(event, setOtherReasonToReturn)} >
                    <option>Select</option>
                    <option value="Bought it by mistake">Bought it by mistake</option>
                    <option value="Better price available">Better price available</option>
                    <option value="Items arrived too late">Items arrived too late</option>
                    <option value="Product used for a week">Product used for a week</option>
                    <option value="Product damaged">Product damaged</option>
                 </select>
                {/*<input value={reasonToReturn} onChange={(event) => onInputUpdate(event, setReasonToReturn) } /> */}
                {/* <label className="field-title">Return Eligibility</label>
                <input value={returnEligibility} onChange={(event) => onInputUpdate(event, setReturnEligibility) } /> */}
                <br/>
                <button onClick={postData}>Save New Return</button>
            </div>

    </div>
    )

}

export default ReturnSaversEditForm