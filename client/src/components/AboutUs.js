
import {Card, Button, Container, Form, Row, Col} from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    const [showStory, setShowStory]=useState()
  return (
    <div className="App">
        <Container fluid style={styles.myContainerPadding}>
          <Form>
            <Row>
              <Col className='card-group'>
                <Card className="mb-3 sm-3" style={{color:"#000"}}>
                    {!showStory &&
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
                            <Button onClick={()=>{setShowStory(!showStory)}}>
                                Click here for our detailed stories
                            </Button>
                        </Card.Body>
                        </>
                    }
                    {showStory &&
                     <>
                     <Card.Img style={{width:"150px", margin:"auto"}}src={'./images/geetha.jpg'}/>
                     <Card.Body>
                         <Card.Title>
                             Geetha
                         </Card.Title>
                         <Card.Text>
                             Geetha was born in xxxxxxx and raised in xxxxx. 
                             She moved to Canada in xxxxxxxxx. 
                             In her youth, she was xxxxxxx.
                             She went to school for xxxxxxxxxxx
                             She is married with one children
                             Her previous work experience is xxxxxxxxxxx
                             She is in the process of pivoting her career into Tech
                             and becoming a Full-Stack Developer currently learning
                             at InceptionU.               
                         </Card.Text>
                         <Button onClick={()=>{setShowStory(!showStory)}}>
                            Click here for our Summary
                         </Button>
                     </Card.Body>
                     </>}
                </Card> 
              </Col>
              <Col>



              <Card className="mb-3" style={{color:"#000"}}>
                    {!showStory &&
                    <>
                        <Card.Img src={'./images/andrea2.jpg'}/>
                        <Card.Body>
                            <Card.Title>
                                Pax
                            </Card.Title>
                            <Card.Text>
                                InceptionU Cohort 7 learner <br/>
                                Future Full Stack Developer
                            </Card.Text>
                            <Button onClick={()=>{setShowStory(!showStory)}}>
                                Click here for our detailed stories
                            </Button>
                        </Card.Body>
                        </>
                    }
                    {showStory &&
                     <>
                     <Card.Img style={{width:"150px", margin:"auto"}}src={'./images/andrea2.jpg'}/>
                     <Card.Body>
                         <Card.Title>
                             Pax
                         </Card.Title>
                         <Card.Text>
                             Pax was born in xxxxxxx and raised in xxxxx. 
                             He moved to Canada in xxxxxxxxx. 
                             In his youth, he was xxxxxxx.
                             He went to school for xxxxxxxxxxx
                             His previous work experience is xxxxxxxxxxx
                             and is currently working at Visions
                             He is in the process of pivoting her career into Tech
                             and becoming a Full-Stack Developer currently learning
                             at InceptionU.                    
                         </Card.Text>
                         <Button onClick={()=>{setShowStory(!showStory)}}>
                             Click here for our Summary
                         </Button>
                     </Card.Body>
                     </>}



                </Card> 
              </Col>
              <Col>
              <Card className="mb-3" style={{color:"#000"}}>
                    {!showStory &&
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
                            <Button onClick={()=>{setShowStory(!showStory)}}>
                                Click here for our detailed stories
                            </Button>
                        </Card.Body>
                        </>
                    }
                    {showStory &&
                     <>
                     <Card.Img style={{width:"150px", margin:"auto"}}src={'./images/andrea2.jpg'}/>
                     <Card.Body>
                         <Card.Title>
                             Andrea
                         </Card.Title>
                         <Card.Text>
                             Andrea was born and raised in Calgary Alberta.  
                             In her youth, she was competitive in the sport of Tumbling where she qualified for 
                             two World Age Group Championships and represented Canada in both Germany and NewZealand.
                             She then started a family and had 3 children.  As a single mom, she went back to school 
                             for Petroleum Engineering Technology at SAIT.<br/>
                             Her father was a Geophysicist in the petroleum industry after moving here from Australia and
                             Andrea's love of geology and engineering was what initially brought her interest to the field.<br/>
                             She has over 15 years of experience in a variety of Oil & Gas specializations
                             such as Waterflood, Reservoir, Exploitation, Production Optimization, Budget,
                             Reserves and Acquisitions & Divestitures where she liked to use a mixture of analytical and creative thinking
                             to tackle challenging projects.<br/>
                             As we know, the industry has been going through some hard times lately.<br/>
                             She is in the process of pivoting her career into Tech
                             and becoming a Full-Stack Developer currently learning
                             at InceptionU.  Her career pivot has been an adventure
                             and she is excited to bring these skills into her future endeavours.                    
                         </Card.Text>
                         <Button onClick={()=>{setShowStory(!showStory)}}>
                             Click here for our Summary
                         </Button>
                     </Card.Body>
                     </>}
                </Card> 
              </Col>
            </Row>
          </Form>
          </Container>    
    </div>
  );
}

export default AboutUs;

     
