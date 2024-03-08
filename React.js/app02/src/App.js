import logo from './logo.svg';
import './App.css';
import { Person } from './components 2to22/app02';
import { Button } from './components 2to22/app03';
import { Displaymsg } from './components 2to22/app04';
import { Fruits } from './components 2to22/app05';
import { Product } from './components 2to22/app06';
import { User } from './components 2to22/appo8';
import { Togglebutton } from './components 2to22/app09';


function App() {
  return (
    <div className="App">
      <Person/>
      <Button/> 
      {/* <DisplayingMsg/> */}
      <Displaymsg/>
      <Fruits/>
      <Product/>
      <User/>
      <Togglebutton/>

      
      
      
      
      
       
    </div>
  );
}

export default App;
