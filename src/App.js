import './App.css';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddUser from './components/AddUser';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/adduser' element = {<AddUser/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
