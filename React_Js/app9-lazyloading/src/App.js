import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from './Components/About';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import User from './Components/User';
import UserDetails from './Components/UserDetails';


function App() {
  return (
    <div className="App">
       <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/User" element={<User/>}/>
          <Route path="/UserDetails" element={<UserDetails/>}/>
        </Routes>
      </Router>

     
    </div>
  );
}

export default App;
