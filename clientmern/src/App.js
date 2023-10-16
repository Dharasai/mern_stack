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
import Shop from './components/Shop/Shop';
import LayOut from './components/LayOuts/LayOut';
import CartPage from './components/Common/CartPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayOut element={<Home />} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/home' element={<LayOut element={<Home />} />} />
          <Route path='/cart' element={<LayOut element={<CartPage />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
