import logo from './logo.svg';
import './App.css';
import Sample from './Components/Sample';
import SuperParent from './Components/SuperParent';
import FuncParent from './Components/FuncParent';

function App() {
  return (
    <div className="App">
      {/* <Sample/> */}
      {/* <SuperParent/> */}
      <FuncParent/>
    </div>
  );
}

export default App;
