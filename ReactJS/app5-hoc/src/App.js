import logo from './logo.svg';
import './App.css';
import HoverCounter from './Components/HoverCounter';
import ClickCounter from './Components/ClickCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter/>
      <hr/>
      <HoverCounter/>
    </div>
  );
}

export default App;
