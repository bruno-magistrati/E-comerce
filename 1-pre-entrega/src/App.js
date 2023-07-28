import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar'
import CartWidget from './Components/CartWidget/CartWidget';
import Home from './Components/screens/Home';
import Tienda from './Components/screens/Tienda';
import Error from './Components/screens/error';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/Tienda"} element={<Tienda/>}/>
        <Route path={"/categoria/:id"} element={<ItemListContainer/>} />
        <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
        <Route path={"/CartWidget"} element={<CartWidget/>}/>

        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
