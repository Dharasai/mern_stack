import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Login from './components/LoginPage/Login';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
