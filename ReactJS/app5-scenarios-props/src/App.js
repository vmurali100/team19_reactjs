import './App.css';
import { Message } from './ParentComponents/Scenario1';
import { MessageClass } from './ParentComponents/Scenario2';
import { Welcome } from './ParentComponents/Scenario3';
import { WelcomeClass } from './ParentComponents/Scenario4';


function App() {
  return (
    <div className="App">
    <Message/>
    <MessageClass/>
    <Welcome/>
    <WelcomeClass/>
    </div>
  );
}

export default App;
