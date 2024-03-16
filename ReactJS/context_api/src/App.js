import CreateUser from './Component/CreateUser'
import ReadUser from './Component/ReadUser';
import UserContext from './Component/UserContext'


function App() {
  return (
    <div className="App">
      
      <UserContext.Provider >
      <CreateUser/>
      <ReadUser/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
