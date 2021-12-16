import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './RegisterForm.css'

let citiesData = require('./cities.json')

const RegisterForm =() => {
    const navigate= useNavigate()

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

    //Errors
    
    const [errorFirstName, setErrorFirstName] = useState()
    const [errorLastName, setErrorLastName] = useState()
    const [errorEmail, setErrorEmail] = useState()
    const [errorAddress, setErrorAddress] = useState()
    const [errorCity, setErrorCity] = useState()
    const [errorProvince, setErrorProvince] = useState()
    const [errorPostalCode, setErrorPostalCode] = useState()   
    const [errorUsername, setErrorUsername] = useState()
    const [errorPassword, setErrorPassword] = useState()

    function onInputUpdate(event, setter){
        let newValue = event.target.value
        setter(newValue)
    }

    function fieldValidation(){
        
        let vfName, vlName, vEmail, vAddress, vCity, vProvince, vPostalCode,vUsername, vPassword = true
        let valid = true

        //First name
        if (!firstName.trim()){
            setErrorFirstName('FirstName is required')
            vfName = false
        }else{
            setErrorFirstName('')
            vfName = true
        }
        //Lastname
        if (!lastName.trim()){
            setErrorLastName('LastName is required')
            vlName = false
        }else{
            setErrorLastName('')
            vlName= true
        }
        //Email
        if(!email){
            setErrorEmail('Email required') 
            vEmail= false
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)){
            setErrorEmail('Email address is invalid')
            vEmail= false
        }else{
            setErrorEmail('')
            vEmail=true
        }
        
        //Address
        if (!address.trim()){
            setErrorAddress('Address is required')
            vAddress = false          
        }else{
            setErrorAddress('')
            vAddress=true
        }

        //City
        if (!city){
            setErrorCity('City is required')
            vCity = false          
        }else{
            setErrorCity('')
            vCity = true
        }

        //Province
        if (!province){
            setErrorProvince('Province is required')
            vProvince = false          
        }else{
            setErrorProvince('')
            vProvince = true
        }

        //Postalcode
        if (!postalCode.trim()){
            setErrorPostalCode('PostalCode is required')
            vPostalCode = false          
        }else{
            setErrorPostalCode('')
            vPostalCode=true
        }

        //Username
        if (!username.trim()){
            setErrorUsername('Username is required')
            vUsername = false          
        }else{
            setErrorUsername('')
            vUsername=true
        }
        
        //Password
        if(!password){
            setErrorPassword('Password is required')
        } else if(password.length < 6){
            setErrorPassword('Password needs to be 6 characters or more')
        }else{
            setErrorPassword('')
            vPassword=true
        }

        if (vfName  && vlName  && vEmail && vAddress && vCity && vProvince 
                && vPostalCode && vUsername && vPassword)
            valid = true
            else
            valid = false
        
        return valid
    }
    
    async function postData(){
         let valid = fieldValidation()
        if (valid) {
            console.log('in postdata ', valid)
            let newUser = {firstName, lastName, email, address, city, province, postalCode, username, password}
            console.log('Saving user ', newUser)

            await fetch('/auth/newUser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(newUser)
            })
            navigate('/login')
        }
        else{
            navigate('/register')
        }
    }
    return (
        <div>
            <h2>Register Form</h2>
            <div className="register-detail-fields">
                
                    <label className="field-title">First Name</label>
                    <input className="reg-field-value" value= {firstName} onChange = { (e) => onInputUpdate(e, setFirstName)}/>
                    {errorFirstName ? (<span className="reg-field-value" style={{color:'red'}}>{errorFirstName}</span>):(<span></span>)}
                
                
                    <label className="field-title">Last Name</label>
                    <input className="reg-field-value" value= {lastName} onChange = { (e) => onInputUpdate(e, setLastName)}/>
                    {errorLastName ?(<span className="reg-field-value" style={{color:'red'}}>{errorLastName}</span>):(<span></span>)}
                
                
                    <label className="field-title">Email</label>
                    <input className="reg-field-value" value= {email} onChange = { (e) => onInputUpdate(e, setEmail)}/>
                    {errorEmail ? (<span className="reg-field-value" style={{color:'red'}}>{errorEmail}</span>):(<span></span>)}
                
                    <label className="field-title">Address</label>
                    <input className="reg-field-value" value= {address} onChange = { (e) => onInputUpdate(e, setAddress)}/>
                    {errorAddress ? ( <span className="reg-field-value" style={{color:'red'}}>{errorAddress}</span>):(<span></span>)}

                    <label className="field-title">Province</label>
                    <select  className="reg-field-value" value={province} onChange={(e)=>{
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
                    {errorProvince ? ( <span className="reg-field-value" style={{color:'red'}}>{errorProvince}</span>) : (<span></span>)}
                
                    <label className="field-title">City</label>
                    <select className="reg-field-value" value={city} onChange={(e) => {setCity(e.target.value)}} >
                        <option>Select City</option>
                        {
                            cities && cities.map((city) => {
                                return <option value={city}>{city}</option>
                            })
                        }
                    </select>
                    {errorCity ? (<span className="reg-field-value" style={{color:'red'}}>{errorCity}</span>):(<span></span>)}   
                

                    <label className="field-title">Postal Code</label>
                    <input className="reg-field-value" value= {postalCode} onChange = { (e) => onInputUpdate(e, setPostalCode)}/>
                    {errorPostalCode ? (<span className="reg-field-value" style={{color:'red'}}>{errorPostalCode}</span>):(<span></span>)}   

                    <label className="field-title">Username</label>
                    <input className="reg-field-value" value= {username} onChange = { (e) => onInputUpdate(e, setUsername)}/>
                    {errorUsername ? (<span className="reg-field-value" style={{color:'red'}}>{errorUsername}</span>): (<span></span>)}

                    <label className="field-title">Password</label>
                    <input className="reg-field-value" type="password" value= {password} onChange = { (e) => onInputUpdate(e, setPassword)}/>
                    {errorPassword ? ( <span className="reg-field-value" style={{color:'red'}}>{errorPassword}</span>):(<span></span>)}

                    <br/>
                    <button className="reg-field-value" onClick={postData}>Register</button>

            </div>
            
        </div>
    )
 }

export default RegisterForm