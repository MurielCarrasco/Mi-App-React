import './App.css';
import './components/navbar/navbar.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/Item/ItemListContainer'; 
import './components/CartWidget/cartWidget.css';
import ItemDetailContainer from './components/Item/ItemDetailContainer';



function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer texto="Estamos creando cards"
      /* greeting="Estamos Mejorando la página, Pronto estará disponible !" */ />
      <ItemDetailContainer />
      </div>
  );
}

export default App;
