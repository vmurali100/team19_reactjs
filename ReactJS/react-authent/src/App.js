import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './Components/Login';
import Context_Auth from './Components/Context_Auth';
import { Home } from './Components/Home'
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Context_Auth>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<ProtectedRoute>
              <Home />
            </ProtectedRoute>} />
          </Routes>
        </Context_Auth>

      </Router>
    </div>
  );
}

export default App;
