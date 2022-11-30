import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import List from './components/List'

function App() {

  const Categorias = ['Mujer', 'Hombre', 'Unisex', 'Sets de fragancias', 'Niños', 'Edición Limitada'];

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <List categorias={Categorias}/>
      </header>
    </div>
  );
}

export default App;
