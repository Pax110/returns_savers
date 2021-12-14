import React, {useState} from 'react'
import LogIn from '../components/LogIn'

const LogInPage = () => {

  const [isLogin, setIsLogin] = useState(false)

  return (
    <div>
      {/* <LogIn setIsLogin={setIsLogin} /> */}
      <LogIn />
    </div>
  )
}

export default LogInPage
