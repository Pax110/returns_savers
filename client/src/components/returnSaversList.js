import {useState, useEffect } from 'react'


const ReturnSaversRow = ({ orderId, productName, productPrice }) => (
  <tr onClick={() => onReturnSaverProductSelected()}> 
    <td>{orderId}</td>
    <td>{productName}</td>
    <td>{productPrice}</td>
  </tr>
)   

const ReturnSaversList = ({setSelectedReturnSaversId}) => {
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

  function setSelectedReturnSavers(id) {
      console.log('selectReturnSavers called on id', id)
      setSelectedReturnSaversId(id)
  }

  return (
    <div>
      <h1>Return Savers List</h1>
      <table style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>OrderId</th>           
            <th>ProductName</th>
            <th>ProductPrice</th>
          </tr>
        </thead>
        <tbody>
          <tr>
        {
            returnSavers.map((returnProduct, index) => {
                return  <ReturnSaversRow 
                    key={index} 
                    orderId={returnProduct.orderId}
                    productName={returnProduct.productName} 
                    productPrice={returnProduct.productPrice} 
                />                       
            })
        }
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ReturnSaversRow;
