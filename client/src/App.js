
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/sidebar/Navbar'
import './App.css';
//import { Button, Container, Form, Col, Row } from 'react-bootstrap'
import {Container, Card } from 'react-bootstrap'
import './flatly_bootstrap.min.css'
import CreateReturnSaversPage from './pages/CreateReturnSaversPage'
import ReturnSaversDetailPage from './pages/ReturnSaversDetailPage';
import ReturnSaversEditPage from './pages/ReturnSaversEditPage';
import ReturnSaversListPage from './pages/ReturnSaversListPage';
import AboutUsPage from './pages/AboutUsPage';
import PdfGenerate  from './components/pdfGenerate';
import RegisterPage from './pages/RegisterPage';
import HelpPage from './pages/HelpPage';
import CaptureBlueBase from './CaptureBlueBase.PNG';

function App() {
  
return (
<div
      className="App"
      style={{
        backgroundImage: "url(" + CaptureBlueBase + ")",
        backgroundSize: "contain",
        backgroundPositionY: "70%",
        backgroundPositionX: "center",

        height: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
  
  <Container fluid>
    
    <Navbar />
    <br/>
    {/* <Form>
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
      </Form> */}






    <Routes>
      <Route path="/" element={<ReturnSaversListPage /> }/>
      <Route path="/new" element={<CreateReturnSaversPage />}/>
      <Route path="/returnSavers/:id" element={ <ReturnSaversDetailPage />} />
      <Route path="/returnSavers/:id/edit" element={ <ReturnSaversEditPage />} />
      <Route path="/about" element={<AboutUsPage />}/>
      <Route path="/help" element={<HelpPage />}/>

    <Route path="/register" element={ <RegisterPage />} />
    </Routes><br/>
    
    <PdfGenerate />
  </Container> 
       
</div>
  );
}

export default App;
