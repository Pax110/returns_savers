import  {useState} from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
    
    //const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')
    const navigate = useNavigate()
    
    function tryLogin() {
        async function postLogin() {
            const loginInfo = {
                username: username, 
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
                //alert('Hello: '+username)
                setLoginError('')
                navigate('/')
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
    <div className='container' style={{width:"30%"}}>
        <div className="row">
            <div className="col">
                <label className="field-title">Username</label>
            </div>
            <div className="col">
                <input className="field-value" value={username} onChange={(e) => setUsername(e.target.value)}/>
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

        { loginError !== '' && <div className='alert alert-danger'>{loginError}</div> }
    </div>

    // <div className="app flex-row align-items-center">
    //  <Container >
    //      <Row className="justify-content-center">
    //          <Col md="9" lg="7" xl="5">
    //              <Card className="p-2">
    //                  <Card.Body>
    //                      <Card.Header as="h4">Return Savers</Card.Header>
    //                      <Card.Title className="p-2">Log In</Card.Title>
    //                      <Form className="p-4">
    //                          <div className="detail-fields">
    //                              {/* <label className="field-title ">Email</label>
    //                              <InputGroup className="mb-3">
    //                                  <Input className="register-field-value" placeholder="Enter your Email" 
    //                                                                          value={email}
    //                                                                          onChange={(e)=>setEmail(e.target.value)} />
    //                              </InputGroup> */}
    //                              <label className="field-title ">Username</label>
                                 
    //                                  <input className="register-field-value" placeholder="Enter your Username" 
    //                                                                          value={username}
    //                                                                          onChange={(e)=>setUsername(e.target.value)} />
                                 
    //                              <label className="field-title">Password</label>
                                 
    //                                  <input className="register-field-value" placeholder="Enter your password" 
    //                                              type="password" value={password}
    //                                              onChange={(e)=>setPassword(e.target.value)}  />
                                 
    //                          </div>  
    //                          <br/> 
                                           
    //                          <Button className="p-2" variant="primary" type="submit" onClick={tryLogin}>Login</Button>
    //                          { loginError !== '' && <div className='alert alert-danger'>{loginError}</div> }

    //                      </Form>
    //                      <hr/>
    //                      <h5>New to Return Savers?</h5>
    //                      <Button className="p-2" variant="primary" type="submit" onClick={Register}>Create an Account</Button>
    //                  </Card.Body>
    //              </Card>
    //          </Col>
    //      </Row>
    //      </Container>
    //  </div> 
  )
}

export default LogIn
