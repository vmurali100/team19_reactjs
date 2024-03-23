import AddUser from "./Components/AddUser";
import {BrowserRouter as Router, Routes,Route  } from "react-router-dom";
import { UsersList } from "./Components/UsersList";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AddUser/>}/>
          <Route path="usersList" element={<UsersList/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
