// import { Routes, Route, useLinkClickHandler, useParams } from "react-router-dom";
// import { useNavigate } from 'react-router-dom'
// import { Button, Container, Form, Col, Row } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

// const LoginPage = ({email, password}) => {
//     let navigate = useNavigate()
//     const [email, password] = useState({})
//     useEffect(()=>{
//       const fetchLogin = async () => {
//           let fetchResult = await fetch('/api/users/'+email, password) //619d2b43382f586cb987a3da
//           let fetchedLogin = await fetchResult.json()
//           setLogin(fetchedLogin)
//       }
//       fetchLogin()

//     },[email, password])

//     async function loginPage() {
//         await fetch('/api/email' , {
//             method: "POST",
//             headers: {
//                 'content-Type': 'application/json'
//             }
//         })
//         navigate('/Login')
//     }




  



//     return (
//     <div>
//     <Form>
//     <Row>
//       <Col>
//       <Form.Group controlId="formEmail">
//         <Form.Control type="email" placeholder= "Example@email.com"/>
//         <Form.Text className="text-muted"> 
//           Please enter your email address
//           </Form.Text>
//       </Form.Group>
//       </Col>
//       <Col>
//         <Form.Group controlId="formPassword">
//           <Form.Control type="password" placeholder="Password" />
//           <Form.Text className="text-muted"> 
//           Please enter your password
//           </Form.Text>
//         </Form.Group>
//     </Col>
//     </Row>
//     <Button variant="secondary" type="submit">Login</Button>
//   </Form>
//   </div>

    
// )

// }

// export default LoginPage