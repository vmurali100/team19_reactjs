import logo from "./logo.svg";
import "./App.css";
import Welcome from "./Welcome";
//If {} is used , particular component is Imported
import MyComponent from "./Student";
import User, { NewUser } from "./User";
import Sample from "./Sample";
import VMRStudent from "./VMRStudent";
import VMRUser from "./VMRUser";
import { NewComp } from "./NewComp";

function App() {
  return (
    <div className="App">
      {/* <MyComponent />
      <NewUser />
      <Sample /> */}
      {/* <User/> */}
      {/* <VMRStudent/> */}
      {/* <VMRUser/> */}
      <NewComp/>
    </div>
  );
}

export default App;