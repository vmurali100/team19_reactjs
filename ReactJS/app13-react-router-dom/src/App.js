
import './App.css';
import {BrowserRouter as Router , Route , Routes} from "react-router-dom"
import Navbar from './Components/Navbar';
import { Home } from './Components/Home';
import {  About } from './Components/About';
import { Contact } from './Components/Contact';
import { Students } from './Components/Students';
import { StudentsDetails } from './Components/StudentsDetails';
import { PageNotFound } from './Components/PageNotFound';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/about" element = {<About/>} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path = "/students" element = {<Students/>}>
           <Route path=':id' element = {<StudentsDetails/>} />
        </Route>
        <Route path = "*" element = {<PageNotFound/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
