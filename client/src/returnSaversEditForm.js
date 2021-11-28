import { useState } from 'react'
import './ReturnSavers.css'

const ReturnSaversEditForm = () => {
    const [orderId, setOrderId] = useState('')
    const [orderDate, setOrderDate] = useState('')
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productSize, setProductSize] = useState('')
    const [productColor, setProductColor] = useState('')
    const [productQuantity, setProductQuantity] = useState('')
    const [returnEligibility, setReturnEligibility] = useState('')

    function onInputUpdate(event, setter) {
        let newValue = event.target.value
        setter(newValue)
    }

    async function postData() {
        let newReturnProduct = {
            orderId, orderDate, productName,productPrice, productDescription, productSize, productColor, productQuantity, returnEligibility
        }
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
                <Input value={orderId} onChange={(event) => onInputUpdate(event, setOrderId) } />
                <label className="field-title">Order Date</label>
                <Input value={orderDate} onChange={(event) => onInputUpdate(event, setOrderDate) } />
                <label className="field-title">Product Name</label>
                <Input value={productName} onChange={(event) => onInputUpdate(event, setProductName) } />
                <label className="field-title">Product Price</label>
                <Input value={productPrice} onChange={(event) => onInputUpdate(event, setProductPrice) } />
                <label className="field-title">Product Description</label>
                <Input value={productDescription} onChange={(event) => onInputUpdate(event, setProductDescription) } />
                <label className="field-title">Product Size</label>
                <Input value={productSize} onChange={(event) => onInputUpdate(event, setProductSize) } />
                <label className="field-title">Product Color</label>
                <Input value={productColor} onChange={(event) => onInputUpdate(event, setProductColor) } />
                <label className="field-title">Product Quantity</label>
                <Input value={productQuantity} onChange={(event) => onInputUpdate(event, setProductQuantity) } />
                <label className="field-title">Return Eligibility</label>
                <Input value={returnEligibility} onChange={(event) => onInputUpdate(event, setReturnEligibility) } />
                <button onClick={postData}>Save New Return</button>
            </div>

    </div>
    )

}

export default ReturnSaversEditForm