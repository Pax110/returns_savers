import {Card, Button, Container, Form, Row, Col} from 'react-bootstrap';
import React from 'react';
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

function Help() {
    const [showHelp, setShowHelp]=useState()
  return (
    <div className="App">
        <Container fluid style={styles.myContainerPadding}>
          <Form>
            <Row>
              <Col>
                <Card className="mb-3" style={{color:"#000"}}>
                    {!showHelp &&
                    <>
                        {/* <Card.Img src={'./images/geetha.jpg'}/> */}
                        <Card.Body>
                            <Card.Title>
                                FAQ
                            </Card.Title>
                            <Card.Text>
                                How will I know who to send my product to?
                            </Card.Text>
                            <Button onClick={()=>{setShowHelp(!showHelp)}}>
                                FAQ Answer
                            </Button>
                        </Card.Body>
                        </>
                    }
                    {showHelp &&
                     <>
                     {/* <Card.Img style={{width:"150px", margin:"auto"}}src={'./images/geetha.jpg'}/> */}
                     <Card.Body>
                         <Card.Title>
                            How will I know who to send my product to?
                         </Card.Title>
                         <Card.Text>
                            Once your return has been "Approved" a button will show up 
                            for you to download your shipping label.  Print this off
                            and send.               
                         </Card.Text>
                         <Button onClick={()=>{setShowHelp(!showHelp)}}>
                            Back
                         </Button>
                     </Card.Body>
                     </>}
                </Card> 
              </Col>


              <Col>
              <Card className="mb-3" style={{color:"#000"}}>
                    {!showHelp &&
                    <>
                        {/* <Card.Img src={'./images/andrea2.jpg'}/> */}
                        <Card.Body>
                            <Card.Title>
                                FAQ
                            </Card.Title>
                            <Card.Text>
                                What do I do if my return is Declined?
                            </Card.Text>
                            <Button onClick={()=>{setShowHelp(!showHelp)}}>
                                FAQ Answer
                            </Button>
                        </Card.Body>
                        </>
                    }
                    {showHelp &&
                     <>
                     {/* <Card.Img style={{width:"150px", margin:"auto"}}src={'./images/andrea2.jpg'}/> */}
                     <Card.Body>
                         <Card.Title>
                             What do I do if my return is Declined?
                         </Card.Title>
                         <Card.Text>
                             This means your product is not elibible to return. <br/> 
                             There are other ways to keep this product out of the landfill.
                             You could keep it, give or sell to friends or family, or you may donate
                             it to a charity in your area.                   
                         </Card.Text>
                         <Button onClick={()=>{setShowHelp(!showHelp)}}>
                             Back
                         </Button>
                     </Card.Body>
                     </>}
                </Card> 
              </Col>



              <Col>
              <Card className="mb-3" style={{color:"#000"}}>
                    {!showHelp &&
                    <>
                        {/* <Card.Img src={'./images/andrea2.jpg'}/> */}
                        <Card.Body>
                            <Card.Title>
                                FAQ
                            </Card.Title>
                            <Card.Text>
                                What if I changed my mind and now want to keep the product?
                            </Card.Text>
                            <Button onClick={()=>{setShowHelp(!showHelp)}}>
                                FAQ Answer
                            </Button>
                        </Card.Body>
                        </>
                    }
                    {showHelp &&
                     <>
                     {/* <Card.Img style={{width:"150px", margin:"auto"}}src={'./images/andrea2.jpg'}/> */}
                     <Card.Body>
                         <Card.Title>
                             What if I changed my mind and now want to keep the product?
                         </Card.Title>
                         <Card.Text>
                             That's great that you changed your mind.  
                             Select the product you now wish to keep,
                             go in and edit the Product and 
                             in the section where you listed reason for return, 
                             change your selection to "I am happy with my product"
                                                
                         </Card.Text>
                         <Button onClick={()=>{setShowHelp(!showHelp)}}>
                             Back
                         </Button>
                     </Card.Body>
                     </>}
                </Card> 
              </Col>



              <Col>
              <Card className="mb-3" style={{color:"#000"}}>
                    {!showHelp &&
                    <>
                        {/* <Card.Img src={'./images/andrea2.jpg'}/> */}
                        <Card.Body>
                            <Card.Title>
                                FAQ
                            </Card.Title>
                            <Card.Text>
                                I have a different question not listed here
                            </Card.Text>
                            <Button onClick={()=>{setShowHelp(!showHelp)}}>
                                FAQ Answer
                            </Button>
                        </Card.Body>
                        </>
                    }
                    {showHelp &&
                     <>
                     {/* <Card.Img style={{width:"150px", margin:"auto"}}src={'./images/andrea2.jpg'}/> */}
                     <Card.Body>
                         <Card.Title>
                            I have a different question not listed here
                         </Card.Title>
                         <Card.Text>
                             If our FAQ did not help or you have additional questions 
                             you may send an email to <br/>
                             info@returnsavers.com                   
                         </Card.Text>
                         <Button onClick={()=>{setShowHelp(!showHelp)}}>
                             Back
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

export default Help;

     