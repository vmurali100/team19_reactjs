import logo from './logo.svg';
import './App.css';
import { Person } from './components 2to22/app02';
import { Button } from './components 2to22/app03';
import { Displaymsg } from './components 2to22/app04';
import { Fruits } from './components 2to22/app05';
import { Product } from './components 2to22/app06';
import { Togglebutton } from './components 2to22/app09';
import { User } from './components 2to22/app08';
import TodoList from './components 2to22/app07';
import { Buttons } from './components 2to22/app10';


function App() {
  return (
    <div className="App">
      <Person/>
      <Button/> 
      {/* <DisplayingMsg/> */}
      <Displaymsg/>
      <Fruits/>
      <Product/>
      <TodoList/>
      <User/>
      <Togglebutton/>
      <Buttons/>

      

      
      
      
      
      
       
    </div>
  );
}

export default App;
