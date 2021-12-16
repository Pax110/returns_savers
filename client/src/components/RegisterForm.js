import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './ReturnSaversDetail.css'
import * as yup from 'yup'

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
    const [error,setError] = useState()

    function onInputUpdate(event, setter){
        let newValue = event.target.value
        setter(newValue)
    }

    const validErrorStyle={
         align: "center"
    }
    const yupObject = yup.object().shape({
        firstName: yup.string().required('FirstName is required'),
        lastName:yup.string().required(),
        email:yup.string().required(),
        address: yup.string().required(),
        city:yup.string().required(),
        province:yup.string().required(),
        postalCode:yup.string().required(),
        username:yup.string().required(),
        password:yup.string().required(),
    })
   // }).test('allvalues','FirstName,lastName, email, address are required', ()=>{return firstName && lastName&& address&&email})

    

    async function postData(){
        let newUser = {firstName, lastName, email, address, city, province, postalCode, username, password}
        console.log('Saving user ', newUser)
        try{
           await yupObject.validate(newUser)                  
            await fetch('/auth/newUser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(newUser)
            })
            navigate('/login')
            
        }catch(e){
            console.log(e.message)
            if(e){
                console.log('inside error if')
            setError('All are required Fields. Please enter the details')
            }
            //console.log('error in registration')
        }
    }
    return (
        <div>
            <div id="navDemo" className="navbar sticky-top">
                <ul class='landingPage'>
                <ul><a type="button" class="btn btn-info" href='/' >Back</a></ul>
                <ul><a type="button" class="btn btn-info" href='/about' >About Us</a></ul>   
                </ul>
            </div>
            <h2>Sign up!</h2>
            <div className="container" >
                <div className="detail-fields">
                    <label className="field-title">First Name<span style={{color:'#e74c3c'}}> * </span></label>
                    <input className="register-field-value" value= {firstName} onChange = { (e) => onInputUpdate(e, setFirstName)}/>

                    <label className="field-title">Last Name<span style={{color:'#e74c3c'}}> * </span></label>
                    <input className="register-field-value" value= {lastName} onChange = { (e) => onInputUpdate(e, setLastName)}/>

                    <label className="field-title">Email<span style={{color:'#e74c3c'}}> * </span></label>
                    <input className="register-field-value" value= {email} onChange = { (e) => onInputUpdate(e, setEmail)}/>

                    <label className="field-title">Address<span style={{color:'#e74c3c'}}> * </span></label>
                    <input className="register-field-value" value= {address} onChange = { (e) => onInputUpdate(e, setAddress)}/>

                    <label className="field-title">Province<span style={{color:'#e74c3c'}}> * </span></label>
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
                    <label className="field-title">City<span style={{color:'#e74c3c'}}> * </span></label>
                    <select className="register-field-value" value={city} onChange={(e) => {setCity(e.target.value)}} >
                        <option>Select City</option>
                        {
                            cities && cities.map((city) => {
                                return <option value={city}>{city}</option>
                            })
                        }
                    </select>
                    
                    {/* <input className="register-field-value" value= {city} onChange = { (e) => onInputUpdate(e, setCity)}/> */}

                    <label className="field-title">Postal Code<span style={{color:'#e74c3c'}}> * </span></label>
                    <input className="register-field-value" value= {postalCode} onChange = { (e) => onInputUpdate(e, setPostalCode)}/>

                    <label className="field-title">Username<span style={{color:'#e74c3c'}}> * </span></label>
                    <input className="register-field-value" value= {username} onChange = { (e) => onInputUpdate(e, setUsername)}/>

                    <label className="field-title">Password<span style={{color:'#e74c3c'}}> * </span></label>
                    <input className="register-field-value" type="password" value= {password} onChange = { (e) => onInputUpdate(e, setPassword)}/>

                    <br/>
                    <button className="register-field-value" onClick={postData}>Register</button>
                </div>
                <br/>
                <div style={validErrorStyle}>
                    { error && <p  className='alert alert-danger' >{error} </p>}
                </div>
            </div>
        </div>
    )
}

export default RegisterForm