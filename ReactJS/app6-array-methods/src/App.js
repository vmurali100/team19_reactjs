import './App.css';
import { Concat } from './Components/Concat';
import { CopyWithin } from './Components/CopyWithin';
import { Entries } from './Components/Entries';

function App() {
  return (
    <div className="App">
     <Concat/>
     <CopyWithin/>
     <Entries/>
    </div>
  );
}

export default App;
