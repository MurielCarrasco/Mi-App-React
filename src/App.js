import './App.css';
import './components/navbar/navbar.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './components/CartWidget/cartWidget.css';



function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer texto="Estamos creando cards"
      /* greeting="Estamos Mejorando la página, Pronto estará disponible !" *//>
      </div>
  );
}

export default App;
