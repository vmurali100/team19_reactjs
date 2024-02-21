import './App.css';
import Employee, { NewEmp } from './Employee';
import Rectangle, { NewRectangle } from './Rectangle';
import { Square } from './Square';
import Student from './Student';
import NewTriangle, { Triangle } from './Triangle';
import NewComponent, { User } from './User';



function App() {
  return (
    <div className="App">
         <Student/>
         <Employee/>
         <NewEmp/>
         <User/>
         <NewComponent/>
         <Square/>
         <Rectangle/>
         <NewRectangle/>
         <Triangle/>
         <NewTriangle/>



    </div>
  );
}

export default App;
