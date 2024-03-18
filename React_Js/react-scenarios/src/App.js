import logo from './logo.svg';
import './App.css';
import { Welcome } from './Components/scenario_01';
import { Gretting } from './Components/scenario_class_02';
import { Message } from './Components/scenario_03';
import { ManagingState } from './Components/scenario_04';
import { Fruits } from './Components/scenario_05';
import { Product } from './Components/scenario_06';
import { User } from './Components/scenario_08';
import { Buttons } from './Components/scenario_10';
import RandomNumber from './Components/scenario_11';
import { ColorPicker } from './Components/scenario_12';
import Week from './Components/scenario_13';
import { PersonInfo } from './Components/scenario_14';
import { DateTime } from './Components/Scenario_15';
import { Counter } from './Components/scenario_16';
import CatDogImageToggle, { UserReviews } from './Components/scenario17';
import { ImageToggling } from './Components/scenario_18';
import { TogglingQuotes } from './Components/scenario_19';
import { DisplayingEmoji } from './Components/scenario_20';
import { ProgressBar } from './Components/scenario_21';
import { Colorchanger } from './Components/scenario_22';
import { Togglingbtn } from './Components/scenario_09';
import TodoList from './Components/scenario_07';
// import { DateTime, DisplayTime } from './Components/Scenario_15';

function App() {
  return (
    <div className="App">
      <Welcome/>
      <Gretting/>
      <Message/>
      <ManagingState/>
      <Fruits/>
      <Product/>
      <User/>
      <Togglingbtn/>
      <Buttons/>
      <RandomNumber/>
      <ColorPicker/>
      <Week/>
      <PersonInfo/>
      {/* <DisplayTime/> */}
      <DateTime/>
      <Counter/>
      <UserReviews/>
      <ImageToggling/>
      <TogglingQuotes/>
      <DisplayingEmoji/>
      <Colorchanger/>
      <TodoList/>
      


    </div>
  );
}

export default App;