import  {useState} from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ReturnSaversListPage from '../pages/ReturnSaversListPage'
import UserListPage from '../pages/UserListPage'

const LogIn = ({setUser}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')
    const [logout,setLogout] = useState('')
    
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
                navigate('/returnSavers') 

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

    function tryLogout () {
        async function logout(){
            let logout = await fetch('/auth/logout')
            console.log("inside trylogout",logout)
            setUser(null)
        }
        console.log("logging out")
        logout()
    }

  return (
    <div className='container' style={{width:"30%"}}>
        <div className="row">
            <div className="col">
                <label className="field-title">Email Address</label>
            </div>
            <div className="col">
                <input className="field-value" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col">
                <label className="field-title">Password</label>
            </div>
            <div className="col">
                <input className="field-value"type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
        </div>
        <button className="btn btn-primary mt-4" onClick={tryLogin}>Login</button>
        <hr/>
        <h5>New to Return Savers?</h5>
        <Button className="p-2" variant="primary" type="submit" onClick={Register}>Create an Account</Button>
        <Button className="p-2" onClick={tryLogout}>Logout</Button>
        { loginError !== '' && <div className='alert alert-danger'>{loginError}</div> }
    </div>

  )
}

export default LogIn
