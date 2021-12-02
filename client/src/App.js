
import { Routes, Route, Link } from 'react-router-dom'

import './App.css';
import CreateReturnSaversPage from './pages/CreateReturnSaversPage'
import ReturnSaversDetailPage from './pages/ReturnSaversDetailPage';
import ReturnSaversEditPage from './pages/ReturnSaversEditPage';
import ReturnSaversListPage from './pages/ReturnSaversListPage';

function App() {
  
  return (
    <div className="App">
    <nav>
    <ul>
      <li>
        <Link to="/" >Home</Link>
      </li>
      <li>
        <Link to="/new">New</Link>
      </li>
    </ul>
    </nav>
    <Routes>
      <Route path="/" element={<ReturnSaversListPage /> }/>
      <Route path="/new" element={<CreateReturnSaversPage />}/>
      <Route path="/returnSavers/:id" element={ <ReturnSaversDetailPage />} />
      <Route path="/returnSavers/:id/edit" element={ <ReturnSaversEditPage />} />
    </Routes>
          
    </div>
  );
}

export default App;
