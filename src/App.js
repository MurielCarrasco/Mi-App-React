import './App.css';
import './components/navbar/navbar.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/Item/ItemListContainer'; 
import './components/Cart/cartWidget.css';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import estilos from './components/Item/item.css'; 
import Cart from  './components/Cart/Cart' ;


function App() {
  return (
    <main className={estilos.main}>
      <BrowserRouter>
        <NavBar />
        <Routes >
          <Route path='/' element={<ItemListContainer saludo="Bienvenidos" /* greeting="Estamos Mejorando la página, Pronto estará disponible !"  *//>} />
          <Route path='/category/:categoryId' element={<ItemListContainer /> }/>
          <Route path='/detail/:detalleId' element={<ItemDetailContainer /> }/>
           <Route path="/cart" element={<Cart />} /> 
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
