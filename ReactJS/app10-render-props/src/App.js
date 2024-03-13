
import './App.css';
import { ClickCounter } from './Components/ClickCounter';
import { HoverCounter } from './Components/HoverCounter';
import ReusableCounter  from './Components/ReusableCounter';

function App() {
  return (
    <div className="App">
      <ReusableCounter
       render = {(count , incrementCount , decrementCount, resetCount)=>{
       <ClickCounter
        count = {count}
        incrementCount = {incrementCount}
        decrementCount = {decrementCount}
        resetCount = {resetCount} />
       }}/>
        <hr/>

       <ReusableCounter
        render = {(count , incrementCount , decrementCount, resetCount)=>{
         <HoverCounter
         count = {count}
         incrementCount = {incrementCount}
         decrementCount = {decrementCount}
         resetCount = {resetCount} />
        }}/>
    </div>
  );
}

export default App;
