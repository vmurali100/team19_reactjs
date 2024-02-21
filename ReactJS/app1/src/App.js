import './App.css';
import Employee, { NewEmp } from './Employee';
import Student from './Student';
import NewUser, { User } from './User';



function App() {
  return (
    <div className="App">
         <Student/>
         <Employee/>
         <NewEmp/>
         <User/>
         <NewUser/>



    </div>
  );
}

export default App;
