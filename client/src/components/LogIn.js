import  {useState} from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './sidebar/Navbar.css'
const LogIn = ({setUser}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')
    
    
    const navigate = useNavigate()
    
    function tryLogin() {
        async function postLogin() {
            const loginInfo = {
                email: email, 
                password: password
            }
            let loginResult = await fetch('/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            })
            if (loginResult.ok) {
                //alert('Hello: '+email)
                setLoginError('')
                let user = await loginResult.json()
                setUser(user)
                navigate('/home') 

            }
            else {
                setLoginError('Login failed!')
                    
            }
        }
        postLogin()
    }

    function Register(){
        navigate('/register')
    }

    
  return (
    
    <div>
            <div id="navDemo" className="navbar sticky-top">
    <ul class='landingPage'>
      <ul><a type="button" class="btn btn-info" href='/' >Back</a></ul>
      <ul><a type="button" class="btn btn-info" href='/about' >About Us</a></ul>   
    </ul>
  </div>
        <div className='container'>
        <br/>
        <div className="container"style={{width: "30%", align: "center"}}>
        <h2> Login </h2>
        <br/>
        <div className="row">
            <div className="col">
                <label className="field-title">Email Address</label>
                <br/>
            </div>
            <div className="col">
                <input className="field-value" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col">
                <label className="field-title">Password</label>
            <br/>  
            </div>
            <div className="col">
                <input className="field-value"type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
        </div>
        <button className="btn btn-primary mt-4" onClick={tryLogin}>Login</button>
        </div>
       <br/>     
        <hr/>
        <h5>New to Return Savers?</h5>
        <br/>
        <Button className="p-2" variant="primary" type="submit" onClick={Register}>Create an Account</Button>
        <br/>
        
        { loginError !== '' && <div className='alert alert-danger'>{loginError}</div> }
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>
    </div>
    </div>

  )
}

export default LogIn
