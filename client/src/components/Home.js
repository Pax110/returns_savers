
import {Card, Button, Container, Form, Row, Col} from 'react-bootstrap';
import React from 'react';
//import 'bootstrap/dist/css/flatly_bootstrap.min.css';
import '../flatly_bootstrap.min.css';

import { useState } from 'react';

//would like to add the actual username on ling 17 after the word Welcome

const Home = ({username}) => {
    return (
      <div>      
  <section className='container'>     
  <div class="w3-container w3-content w3-center w3-padding-hor-64" >
      <br/>
      <h2 class="w3-wide">Welcome</h2>
      <br/>
      <br/>
      <h3 class="w3-opacity"><i>Hope you are as excited as us to be using Return Savers</i></h3>
      <br/>
      <br/>
      <h4 class="w3-justify">We are passionate about saving the environment one return at a time.  We are glad to have you on board and contributing to saving the environment</h4>
      <div class="w3-row w3-padding-hor-32">
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    </div>
  </section>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/> <br/> <br/> <br/> <br/>
  
  
  
      </div>
    )
  }
  
export default Home;

     
