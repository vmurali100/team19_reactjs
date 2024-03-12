import logo from './logo.svg';
import './App.css';
import { Sample1 } from './components/Sample1';
import { SuperParentComponent } from './components/SuperParent';
import FuncParent from './components/FuncParent';

function App() {
  return (
    <div className="App">
      {/* <Sample1/> */}
      {/* <SuperParentComponent/> */}
      <FuncParent/>
    </div>
  );
}

export default App;
