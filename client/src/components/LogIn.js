

import './App.css';
import { Button, Container, Form, Col, Row } from 'react-bootstrap'
import {Container } from 'react-bootstrap'
import './flatly_bootstrap.min.css'



function logIn() {
  
return (
<div className="App">
  <Container fluid>
    { <Form>
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
      </Form> }
  </Container>       
</div>
  );
}

export default logIn;
