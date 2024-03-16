import Count from "./Component/Count";
// import MouseoverEvent from "./Component/MouseoverEvent";
// import OnclickEvent from "./Component/OnclickEvent";
import HandleEventFun from "./Component/HandleEventFun";
import CountFun from "./Component/CountFun";






function App() {
  return (
    <div className="App">
      {/* <Count
        render={(count, incrementHandler, decrementHandler) => (
          <div>
            <OnclickEvent count={count} incrementHandler={incrementHandler} decrementHandler={decrementHandler} />
            <MouseoverEvent count={count} incrementHandler={incrementHandler} decrementHandler={decrementHandler} />
          </div>
        )}
      /> */}


<CountFun  render={(increment,decrement)=>{
  return(
    <div>
<HandleEventFun  increment={increment} decrement={decrement}/>
    </div>
  )
}}/>

    </div>
  );
}

export default App;
