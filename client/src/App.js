import {useState } from 'react'
import ReturnSaversDetail from './components/ReturnSaversDetail';
import ReturnSaversList from './components/ReturnSaversList';
import './App.css';

function App() {
  
  const[selectedProductReturnId,setSelectedProductReturnId] = useState() //619d2b43382f586cb987a3da
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
          <ReturnSaversList setSelectedProductReturnId={setSelectedProductReturnId} />
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
