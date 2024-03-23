import logo from './logo.svg';
import './App.css';
import UsersComp from './UsersComp';
import Students from './Students';
// import { useEffect } from 'react';
// import { getUsers } from './usersSlice';
// import { useDispatch } from 'react-redux';

function App() {

  return (
    <div className="App">
      {/* <UsersComp/> */}
      <Students/>
    </div>
  );
}

export default App;
