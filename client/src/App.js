import {useState, useEffect } from 'react'
import './App.css';

const ReturnSaversRow = ({ orderId, productName, productPrice }) => (
  <tr>
    <td>{orderId}</td>
    <td>{productName}</td>
    <td>{productPrice}</td>
  </tr>
)    


function App() {
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

  return (
    <div className="App">
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
          <tr>{

            returnSavers.map((returnproduct, index) => (
              <ReturnSaversRow key={index} orderId={returnproduct.orderId}
                                productName={returnproduct.productName} productPrice={returnproduct.productPrice} />
            ))
            }
            
           
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
