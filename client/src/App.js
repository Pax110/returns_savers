
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/sidebar/Navbar'
import {useState, useEffect } from 'react'
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
//import Header from './components/Layout/Header';
import UserListPage from './pages/UserListPage';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';


function App() {
  const [ user, setUser] = useState()
  
  useEffect(()=>{
    const getUser = async () => {
      
        console.log('Login successful in navbar')
        let user1 = await fetch('/auth/loggedInUser')
        let fetchedResult = await user1.json()
        setUser(fetchedResult)      
    }
    getUser()
  },[])


return (
<div
      className="App"
      style={{
        backgroundImage: "url(" + CaptureBlueBase + ")",
        backgroundSize: "cover",    //"cover"
        backgroundPositionY: "70%",
        backgroundPositionX: "center",       
        backgroundRepeat: "no-repeat", 
        minHeight: 100,    
      }}
    >
  
  <Container fluid  mh-100 className="p-0">
  
     {/* <Header /> */}
     {
       user && <Navbar className="position-sticky" username={user?.username} setUser={setUser}/> 
     }
    
    
    <Routes>
     
      <Route path="/" element={<LandingPage /> }/> 
      <Route path="/login" element={ <LogInPage setUserProps={setUser}/>} />
      <Route path="/new" element={<CreateReturnSaversPage />}/>
      <Route path="/returnSavers" element={<ReturnSaversListPage /> }/>
      <Route path="/returnSavers/:id" element={ <ReturnSaversDetailPage />} />
      <Route path="/returnSavers/:id/edit" element={ <ReturnSaversEditPage />} />
      <Route path="/about" element={<AboutUsPage />}/>
      <Route path="/help" element={<HelpPage />}/>
      <Route path="/profile" element={ <UserListPage />} />
      <Route path="/register" element={ <RegisterPage />} />
      <Route path="/home" element={ <HomePage />} />
      <Route path="/returnSaversList" element={ <ReturnSaversListPage /> } />
      <Route path="/userProfile" element={ <ProfilePage lastname={user?.lastName}firstname={user?.firstName}username={user?.username} email={user?.email} address={user?.address}setUser={setUser}province={user?.province}city={user?.city}postalCode={user?.postalCode}/> } />
      
    </Routes><br/>
  
  </Container> 
  <Footer />
       
</div>
  );
}

export default App;
