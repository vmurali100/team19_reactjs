import './App.css';
import { Message } from './Components/Scenario1';
import { Clicked } from './Components/Scenario10';
import { MessageClass } from './Components/Scenario2';
import { Welcome } from './Components/Scenario3';
import { WelcomeClass } from './Components/Scenario4';
import { FruitsArr } from './Components/Scenario5';
import { Product } from './Components/Scenario6';
import { User } from './Components/Scenario8';
import { ToggleMessage } from './Components/Scenario9';

function App() {
  return (
    <div className="App">
     <Message/>
     <MessageClass/>
     <Welcome/>
     <WelcomeClass/>
    <FruitsArr/>
    <Product/>
    <User/>
    <ToggleMessage/>
    <Clicked/>
    </div>
  );
}

export default App;
