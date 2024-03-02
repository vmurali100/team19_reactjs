import logo from './logo.svg';
import './App.css';
import { Component } from './Senarios/Senario_1';
import Student from './Senarios/Senario_2';
import User from './Senarios/Senario_3';
import User1 from './Senarios/Senario_5';
import Person from './Senarios/Senario_6';
import Student1 from './Senarios/Senario_8';
import Taggle from './Senarios/Senario_9';
import Student2 from './Senarios/Senario_10';
import { RandomNumber } from './Senarios/Senario_11';
import { WeekDays } from './Senarios/Senario_13';
import { persons } from './Senarios/Senario_14';
import { WelcomeMessage } from './Senarios/Senario_15';
import { Counter } from './Senarios/Senario_16';
import { UserReviews } from './Senarios/Senario_17';
import { DisplayImage } from './Senarios/Senario_18';
import { SimpleQuote } from './Senarios/Senario_19';
import { Emoji } from './Senarios/Senario_20';
import { ChangeColor } from './Senarios/Senario_22'




function App() {
  return (
    <div className="App">
      <Component />
      <Student />
      <User />
      <User1 />
      <Person />
      <Student1 />
      <Taggle />
      <Student2 />
      <RandomNumber />
      <WeekDays />
      <persons />
      <WelcomeMessage />
      <Counter />
      <UserReviews />
      <DisplayImage />
      <SimpleQuote />
      <Emoji />
      <ChangeColor />






    </div>
  );
}

export default App;
