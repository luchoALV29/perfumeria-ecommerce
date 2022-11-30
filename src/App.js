import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import List from './components/List';
import CartWidget from './components/CartWidget';

function App() {

  const Categorias = ['Mujer', 'Hombre', 'Unisex', 'Sets de fragancias', 'Niños', 'Edición Limitada'];
  const CantidadItems = 6;

  return (
    <div className="App">
      <header className="App-header">
        <Navbar><CartWidget cantidadItems={CantidadItems}/></Navbar>
        <List categorias={Categorias}/>
      </header>
    </div>
  );
}

export default App;
