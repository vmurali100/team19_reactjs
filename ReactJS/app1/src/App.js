import logo from "./logo.svg";
import "./App.css";
import Welcome from "./Welcome";
//If {} is used , particular component is Imported
import MyComponent from './Student'
import User, { NewUser } from "./User";

function App() {
  return (
    <div className="App">
     <MyComponent/>
     <User/>
     <NewUser/>
    </div>
  );
}

export default App;
