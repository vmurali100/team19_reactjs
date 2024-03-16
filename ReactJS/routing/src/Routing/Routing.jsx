import React from 'react';
import About from '../Component/About';
import Services from '../Component/Services';
import Contact from '../Component/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from '../Component/HomePage';
import NavBar from '../Component/NavBar';
import SideBar from '../Component/SideBar';




const Routing = () => {
  return (
    <div>
      <Router>
      <NavBar />
       <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Router>
    </div>
  )
}

export default Routing;
