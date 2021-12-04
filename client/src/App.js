
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/sidebar/Navbar'
import './App.css';

import { Button, Container, Form, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import CreateReturnSaversPage from './pages/CreateReturnSaversPage'
import ReturnSaversDetailPage from './pages/ReturnSaversDetailPage';
import ReturnSaversEditPage from './pages/ReturnSaversEditPage';
import ReturnSaversListPage from './pages/ReturnSaversListPage';

function App() {
  
  return (
    <div className="App">
       <Container fluid>
    {/* <nav>
    <ul>
      <li>
        <Link to="/" >Home</Link>
      </li>
      <li>
        <Link to="/new">New</Link>
      </li>
    </ul>
    </nav> */}
    <Navbar />
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
    <Routes>
      <Route path="/" element={<ReturnSaversListPage /> }/>
      <Route path="/new" element={<CreateReturnSaversPage />}/>
      <Route path="/returnSavers/:id" element={ <ReturnSaversDetailPage />} />
      <Route path="/returnSavers/:id/edit" element={ <ReturnSaversEditPage />} />
    </Routes>
    </Container>      
    </div>
  );
}

export default App;
