import logo from './logo.svg';
import './App.css';
import UserComp from './UserComp';
import UserCompObj from './UserCompObj';
import { UserFormClass } from './UserFormClass';
import UserCRUD from './UserCRUD';

function App() {
  return (
    <div className="App">
      {/* <UserComp/> */}
      {/* <UserCompObj/> */}
      {/* <UserFormClass/> */}
      <UserCRUD/>
    </div>
  );
}

export default App;
