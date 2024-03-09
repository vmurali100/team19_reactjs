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
import { Random } from './components 2to22/app11';
import { Colors } from './components 2to22/app12';
import { Week } from './components 2to22/app13';
import { Information } from './components 2to22/app14';
import { Message } from './components 2to22/app15';
import { Count } from './components 2to22/app16';
import { Review } from './components 2to22/app17';
import { Img } from './components 2to22/app18';
import { Users } from './components 2to22/app19';
import { Emojis } from './components 2to22/app20';
import { Randomcolors } from './components 2to22/app22';


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
      <Random/>
      <Colors/>
      <Week/>
     <Information/>
     <Message/>
     <Count/>
     <Review/>
     <Img/>
     <Users/>
    <Emojis/>
    <Randomcolors/>
      
      
      
      
       
    </div>
  );
}

export default App;
