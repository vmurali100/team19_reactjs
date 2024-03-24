import logo from './logo.svg';
import './App.css';
import UsersComp from './UsersComp';
import Students from './Students';
import Navbar from './Components/Navbar';
import Person from './Components/Person';
// import { useEffect } from 'react';
// import { getUsers } from './usersSlice';
// import { useDispatch } from 'react-redux';

function App() {

  return (
    <div className="App">
      {/* <UsersComp/> */}
      {/* <Students/> */}
      <Navbar/>
      <Person/>
    </div>
  );
}

export default App;
