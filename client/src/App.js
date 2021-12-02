import {useState } from 'react'
import ReturnSaversDetail from './components/ReturnSaversDetail';
import ReturnSaversList from './components/ReturnSaversList';
import RegisterForm from './components/Register'
import './App.css';
import ReturnSaversEditForm from './components/ReturnSaversEditForm';

function App() {
  
  const[selectedProductReturnId,setSelectedProductReturnId] = useState() //619d2b43382f586cb987a3da

  // let defaultReturnSavers = {
  //   orderId: "1234",
  //   orderDate: "Nov 29, 2020",
  //   productName: "Pen",
  //   productPrice : 5,
  //   productDescription : "Something to write",
  //   productSize: "s",
  //   productColor : "blue",
  //   productQuantity : 1,
  //   mainReasonToReturn : "mainreason",
  //   secondaryReasonToReturn : "secondreason",
  //   otherReasonToReturn: "other Reason"

  // }
  async function createReturnSavers(newReturnProduct){
    
        fetch('/api/returnSavers', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReturnProduct)
        })
  }

  return (
    <div className="App">
      {/* {
        selectedProductReturnId?
        <div>
          <button onClick={()=> setSelectedProductReturnId(undefined)}>Go Back</button>
          <ReturnSaversDetail productReturnId={selectedProductReturnId} />
        </div>
        :
        <ReturnSaversList setSelectedProductReturnId={setSelectedProductReturnId} />
      } */}

      {
        !selectedProductReturnId && 
        <div>
          <RegisterForm />
          <ReturnSaversList setSelectedProductReturnId={setSelectedProductReturnId} />
          <ReturnSaversEditForm onSave={createReturnSavers}/>
        </div>
      }
      {
        selectedProductReturnId && 
        <div>
          <button onClick={() => setSelectedProductReturnId(undefined)}>Go Back</button>
          <ReturnSaversDetail productReturnId={selectedProductReturnId} />
        </div>
      }
      
    </div>
  );
}

export default App;
