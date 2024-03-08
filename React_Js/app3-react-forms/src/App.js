import logo from './logo.svg';
import './App.css';
import { UserComponent } from './components/UserComponent';
import { UserClassComponent } from './components/UserComponentWithClass1';
import { UserClassComponent2 } from './components/UserComponenetWithClass2';
import { Usercrud01 } from './components/ReactCRUD01';
import { UserCrud02 } from './components/ReactCRUD02';
import { Usercrud04 } from './components/ReactCRUD04';
import { Usercrud03 } from './components/ReactCRUD03';
import { Usercrud05 } from './components/ReactCRUD05';

function App() {
  return (
    <div className="App">
      {/* <UserComponent/> */}
      {/* <UserClassComponent/> */}
      {/* <UserClassComponent2/> */}
      {/* <Usercrud01/> */}
      {/* <UserCrud02/> */}
      {/* <Usercrud03/> */}
      {/* <Usercrud04/> */}
      <Usercrud05/>
    </div>
  );
}

export default App;
