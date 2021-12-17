
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
      <h3 class="w3-opacity"><i>We are excited to serve you at Return Savers</i></h3>
      <br/>
      <br/>
      <h4 class="w3-justify">
        We are passionate about saving the environment one return at a time, <br/>
        and are glad to have you on board, contributing to saving the environment. <br/>
        <br/>
        Although we are sad to hear that you need to return your purchase, <br/>
        we are thrilled to be assisting you through the process!<br/>
        <br/>
        Using our site will help reduce carbon emissions from transport trucks <br/>
        and will keep tons of packages from ending up in land fills<br/>
        It may even increase donations to local charities in your area<br/>
        <br/>     
       </h4>
      <div class="w3-row w3-padding-hor-32">
      <br/><br/>
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

     
