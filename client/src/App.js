import {useState, useEffect } from 'react'
import './App.css';
import ReturnSaversDetail from './components/ReturnSavers';
import './ReturnSavers.css'
import ReturnSaversEditForm from './returnSaversEditForm';





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

      { !selectedReturnSaversId && <div>
        <ReturnSaversDetail setSelectedReturnSaversId={setSelectedReturnSaversId} /> 
        <ReturnSaversEditForm/>
        </div> }
      { selectedReturnSaversId && <div>
          <button onClick={() => setSelectedReturnSaversId(undefined)}>Go Back</button>
          <ReturnSaversDetail ReturnSaversId={selectedReturnSaversId}/>
        </div>
        }
      </div>
  )
}



export default App;
