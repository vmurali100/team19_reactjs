import Count from "./Component/Count";
import MouseoverEvent from "./Component/MouseoverEvent";
import OnclickEvent from "./Component/OnclickEvent";




function App() {
  return (
    <div className="App">
      <Count
        render={(count, incrementHandler, decrementHandler) => (
          <div>
            <OnclickEvent count={count} incrementHandler={incrementHandler} decrementHandler={decrementHandler} />
            <MouseoverEvent count={count} incrementHandler={incrementHandler} decrementHandler={decrementHandler} />
          </div>
        )}
      />


    </div>
  );
}

export default App;
