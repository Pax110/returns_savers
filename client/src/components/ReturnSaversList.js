import {useState, useEffect } from 'react'
import { Table, Container } from 'react-bootstrap'

const ReturnSaversRow = ({ orderId, orderDate, productName, productPrice, soldBy, returnEligibility, onProductReturnSelected }) => (
    <tr onClick={() => onProductReturnSelected()}>
      <td>{orderId}</td>
      <td>{orderDate}</td>
      <td>{productName}</td>
      <td>{productPrice}</td>
      <td>{soldBy}</td>
      <td>{returnEligibility}</td> 
    </tr>
  )    
  
  const ReturnSaversList = ({setSelectedProductReturnId}) => {
    const [returnSavers, setReturnSavers] = useState([]) 
    useEffect(() => {
      async function fetchData() {
        console.log('Fetching return savers data!')
        let fetchResult = await fetch("/api/returnSavers")
        let returnSaversList = await fetchResult.json()
        console.log(returnSaversList)
        setReturnSavers(returnSaversList)
      }  
      fetchData()
    }, [])
    return(
      <div>
      <h2>Return Savers List</h2>
      <Container fluid="sm">
      <Table striped bordered hover size="sm" responsive="sm"> {/* style={{ margin: "auto" }} */}
        <thead>
          <tr>
            <th>OrderId</th> 
            <th>OrderDate</th>          
            <th>ProductName</th>
            <th>ProductPrice</th>
            <th>SoldBy</th>
            <th>ReturnEligibility</th>
          </tr>
        </thead>
        <tbody>

          
          {
  
            returnSavers.map((returnproduct, index) => {
              function selectProductReturn(){
                console.log('selectProductReturn called on ', returnproduct)
                setSelectedProductReturnId(returnproduct._id)
              }
              return <ReturnSaversRow key={index} 
                    onProductReturnSelected={selectProductReturn}
                    orderId={returnproduct.orderId}
                    orderDate ={new Date(returnproduct.orderDate).toLocaleDateString('en-CA', {year : 'numeric', month: 'short', day: 'numeric'})}
                    productName={returnproduct.productName} 
                    productPrice={'$'+returnproduct.productPrice}  //.ToFixed(2) not worked in List
                    soldBy={returnproduct.soldBy}
                    returnEligibility={returnproduct.returnEligibility} />
            })           
            }
  
        </tbody>
      </Table>
      </Container>
      </div>
    )
  }

  //
  export default ReturnSaversList
