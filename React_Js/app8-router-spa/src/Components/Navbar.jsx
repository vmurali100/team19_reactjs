import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          SPA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link active" to={"/"}>
                Home 
                </Link>
              {/* <a className="nav-link active" aria-current="page" href="#">
                Home
              </a> */}
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to={"/About"}>
                About 
                </Link>
              {/* <a className="nav-link" href="#">
                About
              </a> */}
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to={"/Contact"}>
                Contact 
                </Link>
              {/* <a className="nav-link" href="#">
                Contact
              </a> */}
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to={"/Students"}>
                Students 
                </Link>
              {/* <a className="nav-link" href="#">
                Contact 
              </a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
