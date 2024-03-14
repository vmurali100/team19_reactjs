import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "./Components/Navbar";

// import Home from "./Components/Home";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
// import PageNotFound from "./Components/PageNotFound";
// import Students from "./Components/Students";
// import StudentsDetails from "./Components/StudentsDetails";
const Home = React.lazy(() => import("./Components/Home"));
const About = React.lazy(() => import("./Components/About"));
const Contact = React.lazy(() => import("./Components/Contact"));
const Students = React.lazy(() => import("./Components/Students"));
const StudentsDetails = React.lazy(() =>
  import("./Components/StudentsDetails")
);

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/students"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Students />
              </Suspense>
            }
          >
            <Route path=":id" element={<StudentsDetails />} />
          </Route>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/students" element={<Students />}>
            <Route path=":id" element={<StudentsDetails />} />
          </Route>
          <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
