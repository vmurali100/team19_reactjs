import './App.css';
import { Concat } from './Components/Concat';
import { CopyWithin } from './Components/CopyWithin';
import { Entries } from './Components/Entries';
import { Every } from './Components/Every';



function App() {
  return (
    <div className="App">
     <Concat/>
     <CopyWithin/>
     <Entries/>
     <Every/>
    </div>
  );
}

export default App;
