import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar'
import CartWidget from './Components/CartWidget/CartWidget';
import Home from './Components/screens/Home';
import Tienda from './Components/screens/Tienda';
import Error from './Components/screens/error';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Tienda' element={<Tienda/>}/>
        <Route path='/CartWidget' element={<CartWidget/>}/>

        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
