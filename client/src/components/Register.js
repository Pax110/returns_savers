import {useState} from 'react'
import './ReturnSaversDetail.css'


const RegisterForm =() => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [password, setPassword] = useState('')

    function onInputUpdate(event, setter){
        let newValue = event.target.value
        setter(newValue)
    }

    async function postData(){
        let newUser = {firstName, lastName, email, address, city, postalCode, password}
        console.log('Saving user ', newUser)

        await fetch('/user/newUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        })
    }
    return (
        <div>
            <h2>Register Form</h2>
            <div className="detail-fields">
                <label className="field-title">First Name</label>
                <input className="register-field-value" value= {firstName} onChange = { (e) => onInputUpdate(e, setFirstName)}/>

                <label className="field-title">Last Name</label>
                <input className="register-field-value" value= {lastName} onChange = { (e) => onInputUpdate(e, setLastName)}/>

                <label className="field-title">Email</label>
                <input className="register-field-value" value= {email} onChange = { (e) => onInputUpdate(e, setEmail)}/>

                <label className="field-title">Address</label>
                <input className="register-field-value" value= {address} onChange = { (e) => onInputUpdate(e, setAddress)}/>

                <label className="field-title">City</label>
                <input className="register-field-value" value= {city} onChange = { (e) => onInputUpdate(e, setCity)}/>

                <label className="field-title">Postal Code</label>
                <input className="register-field-value" value= {postalCode} onChange = { (e) => onInputUpdate(e, setPostalCode)}/>

                <label className="field-title">Password</label>
                <input className="register-field-value" value= {password} onChange = { (e) => onInputUpdate(e, setPassword)}/>

                <br/>
                <button className="register-field-value" onClick={postData}>Register</button>

            </div>
        </div>
    )
}

export default RegisterForm