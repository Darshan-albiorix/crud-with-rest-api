import './App.css';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser'; 

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/adduser' element = {<AddUser/>} />
        <Route path='/updateuser/:id' element = {<UpdateUser/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
