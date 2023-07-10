import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
  <ItemListContainer producto={"El producto"} precio={"El precio"} agregar={"Añadir al Carrito"}/> 
   </div>
  );
}

export default App;
