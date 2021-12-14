import React from 'react'
import LogIn from '../components/LogIn'

const LogInPage = ({setUserProps}) => {

  
  return (
    <div>
      <LogIn setUser={setUserProps} />
    </div>
  )
}

export default LogInPage
