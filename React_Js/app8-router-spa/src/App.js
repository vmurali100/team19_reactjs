import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import PageNotFound from "./Components/PageNotFound";
import Students from "./Components/Students";
import StudentDetails from "./Components/StudentDetails";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Students" element={<Students />}>
          <Route path=":id" element={<StudentDetails/>} />

          </Route>
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;