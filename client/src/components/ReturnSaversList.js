import {useState, useEffect } from 'react'

const ReturnSaversRow = ({ orderId, orderDate, productName, productPrice, onProductReturnSelected }) => (
    <tr onClick={() => onProductReturnSelected()}>
      <td>{orderId}</td>
      <td>{orderDate}</td>
      <td>{productName}</td>
      <td>{productPrice}</td>
    </tr>
  )    
  
  const ReturnSaversList = ({setSelectedProductReturnId}) => {
    const [returnSavers, setReturnSavers] = useState([]) // not sure how to use initially before loading data from db
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
      <table style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>OrderId</th> 
            <th>OrderDate</th>          
            <th>ProductName</th>
            <th>ProductPrice</th>
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
                    productPrice={'$'+returnproduct.productPrice.toFixed(2)} />
            })           
            }
  
        </tbody>
      </table>
      </div>
    )
  }

  export default ReturnSaversList