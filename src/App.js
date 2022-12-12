//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import List from './components/List';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Productos from './productos';

function App() {

  const Categorias = [{id: 0, nombre: 'Mujer'}, { id: 1, nombre: 'Hombre' }, { id: 2, nombre: 'Unisex' }, { id: 3, nombre: 'Sets de fragancias' }, { id: 4, nombre: 'Niños' }, { id: 5, nombre: 'Edición Limitada' }];
  const CantidadItems = 5;

  return (
    <BrowserRouter className="App">
      <header className="App-header">
        <Navbar categorias={Categorias}><CartWidget cantidadItems={CantidadItems}/></Navbar>
      </header>
      {/* <div className="App-body">
        <List categorias={Categorias}/>
        <ItemListContainer productos={Productos}/>
        <ItemDetailContainer producto={Productos[0]}/>
      </div> */}
      <Routes>
        <Route exact path='/' element={<ItemListContainer productos={Productos}/>}></Route>
        <Route exact path='/categoria/0' element={<ItemListContainer idCategoria={0}/>}></Route>
        <Route exact path='/item/FYURGUHS' element={<ItemDetailContainer producto={Productos[0]}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
