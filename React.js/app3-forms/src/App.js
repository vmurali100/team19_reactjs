import logo from './logo.svg';
import './App.css';
import { Usercomp } from './Crudapplications/Sample1_ReactForm';
import { Mycomp } from './Crudapplications/Sample2_ReactForm';
import { Myform } from './Crudapplications/sample3_ReactFrom';
import { Myobj } from './Crudapplications/sample4_ObjectForm';
import { MyObjForm } from './Crudapplications/sample5_ObjectForm';


function App() {
  return (
    <div className="App">
    {/* <Usercomp/> */}
    {/* <Mycomp/> */}
    {/* <Myform/> */}
    {/* /* <Myobj/> */}
    <MyObjForm/>
    </div>
  );
}

export default App;
