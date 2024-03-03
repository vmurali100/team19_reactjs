import logo from './logo.svg';
import './App.css';
import UserComp from './UserComp';
import UserCompObj from './UserCompObj';
import { UserFormClass } from './UserFormClass';
import UserCRUD from './UserCRUD';
import UserCRUDClass from './UserCRUDClass';

function App() {
  return (
    <div className="App">
      {/* <UserComp/> */}
      {/* <UserCompObj/> */}
      {/* <UserFormClass/> */}
      {/* <UserCRUD/> */}
      <UserCRUDClass/>
    </div>
  );
}

export default App;
