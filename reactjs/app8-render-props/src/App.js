import logo from './logo.svg';
import './App.css';
import ParentComp from "./Components/ParentComp";
import ParentCounter from './Components/ParentConter';

function App() {
  return (
    <div className="App">
      <ParentComp/>
      <ParentCounter/>
    </div>
  );
}

export default App;
