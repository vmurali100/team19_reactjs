import logo from './logo.svg';
import './App.css';
import { Welcome } from './Components/scenario_01';
import { Gretting } from './Components/scenario_class_02';
import { Message } from './Components/scenario_03';
import { ManagingState } from './Components/scenario_04';

function App() {
  return (
    <div className="App">
      <Welcome/>
      <Gretting/>
      <Message/>
      <ManagingState/>

    </div>
  );
}

export default App;
