import logo from "./logo.svg";
import "./App.css";
import ParentComp from "./Components/ParentComp";
import SuperUser from "./Components/SuperUser";
import ParentCounter from "./Components/ParentCounter";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import ReusableCounter from "./Components/ReusableCounter";

function App() {
  return (
    <div className="App">
      {/* <ParentComp/> */}
      {/* <SuperUser/> */}
      {/* <ParentCounter/> */}
      {/* <ClickCounter/> */}
      <ReusableCounter
        render={(count, incrementCount, decrementCount, resetCount) => (
          <ClickCounter
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            resetCount={resetCount}
          />
        )}
      />
      <hr />
      <ReusableCounter
        render={(count, incrementCount, decrementCount, resetCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            resetCount={resetCount}
          />
        )}
      />
      {/* <HoverCounter/> */}
    </div>
  );
}

export default App;
