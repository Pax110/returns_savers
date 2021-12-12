
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/sidebar/Navbar'
import './App.css';
//import { Button, Container, Form, Col, Row } from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import './flatly_bootstrap.min.css'
import CreateReturnSaversPage from './pages/CreateReturnSaversPage'
import ReturnSaversDetailPage from './pages/ReturnSaversDetailPage';
import ReturnSaversEditPage from './pages/ReturnSaversEditPage';
import ReturnSaversListPage from './pages/ReturnSaversListPage';
import AboutUsPage from './pages/AboutUsPage';
import RegisterPage from './pages/RegisterPage';
import HelpPage from './pages/HelpPage';
import CaptureBlueBase from './CaptureBlueBase.PNG';
import LogInPage from './pages/LogInPage';
import Header from './components/Layout/Header';
import UserListPage from './pages/UserListPage';

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
  

    <Header />
    <Navbar /> 
    <br/>
    <Routes>
     
      <Route path="/" element={<ReturnSaversListPage /> }/>
      <Route path="/new" element={<CreateReturnSaversPage />}/>
      <Route path="/returnSavers/:id" element={ <ReturnSaversDetailPage />} />
      <Route path="/returnSavers/:id/edit" element={ <ReturnSaversEditPage />} />
      <Route path="/about" element={<AboutUsPage />}/>
      <Route path="/help" element={<HelpPage />}/>
      <Route path="/profile" element={ <UserListPage />} />
      <Route path="/register" element={ <RegisterPage />} />
      <Route path="/login" element={<LogInPage />}/>
    </Routes><br/>
  
  </Container> 
       
</div>
  );
}

export default App;
