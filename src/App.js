import './App.css';
import './components/navbar/navbar.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/Item/ItemListContainer'; 
import './components/CartWidget/cartWidget.css';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes >
        <Route path='/' element={<ItemListContainer /* greeting="Estamos Mejorando la página, Pronto estará disponible !"  *//>} />
        <Route path='/category/:categoryId' element={<ItemListContainer /> }/>
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
