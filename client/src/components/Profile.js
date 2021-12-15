import React from 'react'
import {useState,useEffect} from 'react' 
import './ReturnSaversDetail.css'


function Profile({username,firstname, lastname,email, address,city,province,postalCode}) {
    return (
        <div>
           
            <h3>Profile</h3>
            <div className='detail-fields'>
            <div className='field-title'>Username:</div>
            <div className='register-field-value'>{username}</div>
            <div className='field-title'>First Name :</div>
            <div className='register-field-value'>{firstname}</div>
            <div className='field-title'>Last Name :</div>
            <div className='register-field-value'>{lastname}</div>
            <div className='field-title'> Email :</div>
            <div className='register-field-value'>{email}</div>
            <div className='field-title'>Address :</div>
            <div className='register-field-value'>{address}</div>
            <div className='field-title'>City :</div>
            <div className='register-field-value'>{city}</div>
            <div className='field-title'>Province :</div>
            <div className='register-field-value'>{province}</div>
            <div className='field-title'>Postal Code :</div>
            <div className='register-field-value'>{postalCode}</div>
            </div>
            
            
            
        </div>
    )
}

export default Profile
