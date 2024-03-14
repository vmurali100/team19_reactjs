import React from "react";


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
              <li className="nav-link">
                Home
              </li>
            </li>
            <li className="nav-item">
            <li className="nav-link">
                Home
              </li>
            </li>
            <li className="nav-item">
            <li className="nav-link">
                Home
              </li>
            </li>
            <li className="nav-item">
            <li className="nav-link">
                Home
              </li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;