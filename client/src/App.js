
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/sidebar/Navbar'
import './App.css';
import {Container } from 'react-bootstrap'
import './flatly_bootstrap.min.css'
import CreateReturnSaversPage from './pages/CreateReturnSaversPage'
import ReturnSaversDetailPage from './pages/ReturnSaversDetailPage';
import ReturnSaversEditPage from './pages/ReturnSaversEditPage';
import ReturnSaversListPage from './pages/ReturnSaversListPage';
import  RegisterPage from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';
import Header from './components/Layout/Header';

function App() {
  
return (
<div className="App">
  
  <Container fluid>
  

    <Header />
    <Navbar /> 
    <br/>
    <Routes>
     
      <Route path="/" element={<ReturnSaversListPage /> }/>
      <Route path="/new" element={<CreateReturnSaversPage />}/>
      <Route path="/returnSavers/:id" element={ <ReturnSaversDetailPage />} />
      <Route path="/returnSavers/:id/edit" element={ <ReturnSaversEditPage />} />

      <Route path="/register" element={ <RegisterPage />} />
      <Route path="/login" element={<LogInPage />}/>
    </Routes><br/>
  
  </Container> 
       
</div>
  );
}

export default App;
