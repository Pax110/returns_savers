import { Routes, Route, Link } from "react-router-dom"
import './App.css';

import { Button, Container, Form, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import ReturnSaversEditForm from './components/ReturnSaversEditForm'
import {useState } from 'react'
import ReturnSaversDetail from './components/ReturnSaversDetail';
import ReturnSaversList from './components/ReturnSaversList';
import RegisterForm from './components/Register'
import LoginPage from './pages/LoginPage';

function App() {
  
  const[selectedProductReturnId,setSelectedProductReturnId] = useState() //619d2b43382f586cb987a3da
  return (

    <div className="App">
      <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="formEmail">
            <Form.Control type="email" placeholder= "Example@email.com"/>
            <Form.Text className="text-muted"> 
            Please enter your email address
            </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formPassword">
            <Form.Control type="password" placeholder="Password" />
            <Form.Text className="text-muted"> 
            Please enter your password
            </Form.Text>
            </Form.Group>
          </Col>
        </Row>
            <Button variant="secondary" type="submit">Login</Button>
      </Form>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/new">New</Link>
        </nav>
        { <Routes>
          {/* <Route path="/" element={ } */}
          <Route path="/LoginPage" element={ <LoginPage />} />
        </Routes> }       
      

      {
        !selectedProductReturnId && 
        <div>
          <RegisterForm />
          <ReturnSaversList setSelectedProductReturnId={setSelectedProductReturnId} />
          <ReturnSaversEditForm/>
        </div>
      }
      {
        selectedProductReturnId && 
        <div>
          <button onClick={() => setSelectedProductReturnId(undefined)}>Go Back</button>
          <ReturnSaversDetail productReturnId={selectedProductReturnId} />
        </div>
      }
      </Container>
    </div>
  );
}

export default App;
