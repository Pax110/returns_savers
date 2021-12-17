
import {Card, Button, Container, Form, Row, Col} from 'react-bootstrap';
import React from 'react';
//import 'bootstrap/dist/css/flatly_bootstrap.min.css';
import '../flatly_bootstrap.min.css';

import { useState } from 'react';



const styles = {
    myContainerPadding: {
        paddingTop: "5vh",
        paddingBottom: "5vh",
        paddingRight: "5vw",
        paddingLeft: "13vw"
    }
}

function AboutUs() {
    const [showStory1, setShowStory1]=useState()
    const [showStory2, setShowStory2]=useState()
    const [showStory3, setShowStory3]=useState()

  return (
    <div>
    <div id="navDemo" className="navbar sticky-top">
    <ul class='landingPage'>
      <ul><a type="button" class="btn btn-info" href='/' >Back</a></ul>
      <ul><a type="button" class="btn btn-info" href='/login'>Login</a></ul>   
    </ul>
  </div>
        <Container fluid style={styles.myContainerPadding}>
          
            <Row>
              <Col className='card-group'>
                <Card className="mb-3 sm-3" style={{color:"#000"}}>
                    {!showStory1 &&
                    <>
                        <Card.Img src={'./images/geetha.jpg'}/>
                        <Card.Body>
                            <Card.Title>
                                Geetha
                            </Card.Title>
                            <Card.Text>
                                InceptionU Cohort 7 learner <br/>
                                Future Full Stack Developer
                            </Card.Text>
                            <Button onClick={()=>{setShowStory1(!showStory1)}}>
                                Click here for our detailed stories
                            </Button>
                        </Card.Body>
                        </>
                    }
                    {showStory1 &&
                     <>
                     <Card.Img style={{width:"150px", margin:"auto"}}src={'./images/geetha.jpg'}/>
                     <Card.Body>
                         <Card.Title>
                             Geetha
                         </Card.Title>
                         <Card.Text >
                         <p className='text-justify'>
                             Geetha was born and raised in India. She has done engineering in 'Electronics
                             and Instrumentation' and started working as a software developer. After marriage,
                             She moved to Fort McMurray in Canada. She gained customer service experience in 
                             Tim Hortons and Papa Johns. She went back to school at SAIT and studied 'Object 
                             Oriented Software Developer' fast track course. She joined Canadian Natural Resource
                             Ltd. and worked as an 'Information System Analyst' for 3 years. Then she took 3 years for
                             maternity break. Currently she is in the process of pivoting her career into various tech
                             and becoming a Full-Stack Developer currently enrolled at InceptionU.                             
                             </p>              
                         </Card.Text>
                         <Button onClick={()=>{setShowStory1(!showStory1)}}>
                            Click here for our Summary
                         </Button>
                     </Card.Body>
                     </>}
                </Card> 
              </Col>
              <Col>



              <Card className="mb-3" style={{color:"#000"}}>
                    {!showStory2 &&
                    <>
                        <Card.Img src={'./images/pax.jpg'}/>
                        <Card.Body>
                            <Card.Title>
                                Pax
                            </Card.Title>
                            <Card.Text>
                                InceptionU Cohort 7 learner <br/>
                                Future Full Stack Developer
                            </Card.Text>
                            <Button onClick={()=>{setShowStory2(!showStory2)}}>
                                Click here for our detailed stories
                            </Button>
                        </Card.Body>
                        </>
                    }
                    {showStory2 &&
                     <>
                     <Card.Img style={{width:"150px", margin:"auto"}}src={'./images/pax.jpg'}/>
                     <Card.Body>
                         <Card.Title>
                             Pax
                         </Card.Title>
                         <Card.Text >
                             Pax was born and brought up in India. 
                             He moved to Canada in 2014.                         
                             He went to school for Robotics Engineering.
                             His previous work experience is in the Automation Industry.                            
                             He is in the process of pivoting his career into Development
                             and becoming a Full-Stack Developer currently learning
                             at InceptionU.                    
                         </Card.Text>
                         <Button onClick={()=>{setShowStory2(!showStory2)}}>
                             Click here for our Summary
                         </Button>
                     </Card.Body>
                     </>}



                </Card> 
              </Col>
              <Col>
              <Card className="mb-3" style={{color:"#000"}}>
                    {!showStory3 &&
                    <>
                        <Card.Img src={'./images/andrea2.jpg'}/>
                        <Card.Body>
                            <Card.Title>
                                Andrea
                            </Card.Title>
                            <Card.Text>
                                InceptionU Cohort 7 learner <br/>
                                Future Full Stack Developer
                            </Card.Text>
                            <Button onClick={()=>{setShowStory3(!showStory3)}}>
                                Click here for our detailed stories
                            </Button>
                        </Card.Body>
                        </>
                    }
                    {showStory3 &&
                     <>
                     <Card.Img style={{width:"150px", margin:"auto"}}src={'./images/andrea2.jpg'}/>
                     <Card.Body>
                         <Card.Title>
                             Andrea
                         </Card.Title>
                         <Card.Text className="text-justify">
                             Andrea was born and raised in Calgary Alberta.  
                             In her youth, she was competitive in the sport of Tumbling where she qualified for 
                             two World Age Group Championships and represented Canada in both Germany and NewZealand.
                             She then started a family and had 3 children.  As a single mom, she went back to school 
                             for Petroleum Engineering Technology at SAIT.<br/>
                             She has over 15 years of experience in a variety of Oil & Gas specializations
                             such as Waterflood, Reservoir, Exploitation, Production Optimization, Budget,
                             Reserves and Acquisitions & Divestitures where she liked to use a mixture of analytical and 
                             creative thinking to tackle challenging projects.<br/>
                             She is in the process of pivoting her career into Tech
                             and becoming a Full-Stack Developer.  She is currently enrolled
                             at InceptionU.                   
                         </Card.Text>
                         <Button onClick={()=>{setShowStory3(!showStory3)}}>
                             Click here for our Summary
                         </Button>
                     </Card.Body>
                     </>}
                </Card> 
              </Col>
            </Row>
          
          </Container>    
          <br/> <br/> <br/> <br/> <br/><br/>
          <br/>    </div>
  );
}

export default AboutUs;

     
