import Login from './components/Login';
import Profile from './components/Profile';
import NewUser from './components/NewUser';
import Academics from './components/Academics';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Workflow from './components/Workflow';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/newuser' element={<NewUser/>}></Route>
        <Route path='/workflow' element={<Workflow/>}></Route>
        <Route path='/academics' element={<Academics/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
