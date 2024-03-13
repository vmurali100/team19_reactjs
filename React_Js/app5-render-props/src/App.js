import logo from './logo.svg';
import './App.css';
import ParentComponent from './Components/ParentComponent';
import SuperUser from './Components/SuperUser';
import ParentCounter from './Components/ParentCounter';
import ClickCounter from './Components/ClickCounter';
import ResuableCounter from './Components/ResuableCounter';
import HoverCounter from './Components/HoverComponents';

function App() {
  return (
    <div className="App">
      {/* <ParentComponent/> */}
      {/* <SuperUser/> */}
      {/* <ParentCounter/> */}
      {/* <ClickCounter/> */}
      {/* <HoverCounter/> */}
      {/* <hr/> */}
      <ResuableCounter render={(count,IncrementCount,DecrementCount,ResetCount)=><ClickCounter count={count} IncrementCount={IncrementCount} DecrementCount={DecrementCount}  ResetCount={ResetCount}/>}/>
      <hr/>
      <ResuableCounter render={(count,IncrementCount,DecrementCount,ResetCount)=><HoverCounter count={count} IncrementCount={IncrementCount} DecrementCount={DecrementCount} ResetCount={ResetCount}/>}/>

      {/* <ResuableCounter render={()=><HoverCounter/>}/> */}

    </div>
  );
}

export default App;
