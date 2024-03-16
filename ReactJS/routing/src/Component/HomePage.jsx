import React from 'react';
import './HomePage.css';
import NavBar from './NavBar';
import SideBar from './SideBar';

function HomePage() {
  return (
    <div className="HomePage">
      <header>
        <h1>My Website</h1>
      </header>

      <NavBar />
   <SideBar />
      <div className='mainContent'>
        
      </div>


      <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer> 
    </div>
  );
}

export default HomePage;
