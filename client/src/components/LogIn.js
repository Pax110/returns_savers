import React, {useState} from 'react'
import { Button, Container, Form, Col, Row, Card, InputGroup  } from 'react-bootstrap'
import {Input} from 'reactstrap'
import { useNavigate, useParams } from 'react-router'

const LogIn = () => {
    
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')

    function onInputChange(event, setter){
        setter(event.target.value)
    }
    
    function tryLogin() {
        console.log('Entering tryLogin')
        async function userLogin(){
            console.log('Entering userLogin')
            const loginInfo = {
                email : email,
                password : password
            }
            let loginResult = await fetch('/auth/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(loginInfo)
            })
            if (loginResult.ok){
                alert('Hello: ' +email)
                setLoginError('')
                navigate('/')
            }
            else {
                console.log('Login failed')
                setLoginError('Login failed')
            }
        }
        userLogin()
    }
    function Register(){
        navigate('/register')
    }

  return (
    <div className="app flex-row align-items-center">
    <Container >
        <Row className="justify-content-center">
            <Col md="9" lg="7" xl="5">
                <Card className="p-2">
                    <Card.Body>
                        <Card.Header as="h4">Return Savers</Card.Header>
                        <Card.Title className="p-2">Log In</Card.Title>
                        <Form className="p-4">
                            <div className="detail-fields">
                                <label className="field-title ">Email</label>
                                <InputGroup className="mb-3">
                                    <Input className="register-field-value" placeholder="Enter your Email" 
                                                                            value={email}
                                                                            onChange={(event)=>onInputChange(event, setEmail)} />
                                </InputGroup>
                                <label className="field-title">Password</label>
                                <InputGroup className="mb-3">
                                    <Input className="register-field-value" placeholder="Enter your password" 
                                                type="password" value={password}
                                                onChange={(event)=>onInputChange(event, setPassword)}  />
                                </InputGroup>
                            </div>  
                            <br/> 
                                           
                            <Button className="p-2" variant="primary" type="submit" onClick={tryLogin}>Login</Button>
                            { loginError !== '' && <div className='alert alert-danger'>{loginError}</div> }

                        </Form>
                        <hr/>
                        <h5>New to Return Savers?</h5>
                        <Button className="p-2" variant="primary" type="submit" onClick={Register}>Create an Account</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default LogIn
