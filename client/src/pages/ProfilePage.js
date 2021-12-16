import React from 'react'
import Profile from '../components/Profile'

function ProfilePage({username, firstname, lastname, email, address, province, city, postalCode}) {
  
    return (
        <div>
            <Profile username={username} firstname={firstname} lastname={lastname} email={email} address={address} city={city} province={province} postalCode={postalCode}/>
        </div>
    )
}

export default ProfilePage
