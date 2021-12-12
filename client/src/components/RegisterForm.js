import {useState} from 'react'
import './ReturnSaversDetail.css'

let citiesData = require('./cities.json')

const RegisterForm =() => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [province, setProvince] = useState()
    const [city, setCity] = useState()
    const [postalCode, setPostalCode] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const [cities, setCities] = useState()

    function onInputUpdate(event, setter){
        let newValue = event.target.value
        setter(newValue)
    }

    async function postData(){
        let newUser = {firstName, lastName, email, address, city, province, postalCode, username, password}
        console.log('Saving user ', newUser)

        await fetch('/auth/newUser', {
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

                <label className="field-title">Province</label>
                <select  className="register-field-value" value={province} onChange={(e)=>{
                    let province = e.target.value
                    setCities(citiesData[province])
                    setProvince(province)
                }}>
                    <option>Select Province</option>
                    {
                        Object.keys(citiesData).map((province)=>{
                            return <option value={province}>{province}</option>
                        })
                    }
                    
                </select>
                <label className="field-title">City</label>
                <select className="register-field-value" value={city} onChange={(e) => {setCity(e.target.value)}} >
                    <option>Select City</option>
                    {
                        cities && cities.map((city) => {
                            return <option value={city}>{city}</option>
                        })
                    }
                </select>
                
                {/* <input className="register-field-value" value= {city} onChange = { (e) => onInputUpdate(e, setCity)}/> */}

                <label className="field-title">Postal Code</label>
                <input className="register-field-value" value= {postalCode} onChange = { (e) => onInputUpdate(e, setPostalCode)}/>

                <label className="field-title">Username</label>
                <input className="register-field-value" value= {username} onChange = { (e) => onInputUpdate(e, setUsername)}/>

                <label className="field-title">Password</label>
                <input className="register-field-value" type="password" value= {password} onChange = { (e) => onInputUpdate(e, setPassword)}/>

                <br/>
                <button className="register-field-value" onClick={postData}>Register</button>

            </div>
        </div>
    )
}

export default RegisterForm