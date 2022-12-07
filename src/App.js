//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import List from './components/List';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const Categorias = [{id: 0, nombre: 'Mujer'}, { id: 1, nombre: 'Hombre' }, { id: 2, nombre: 'Unisex' }, { id: 3, nombre: 'Sets de fragancias' }, { id: 4, nombre: 'Niños' }, { id: 5, nombre: 'Edición Limitada' }];
  const Productos = [
    {
      id: 'FYURGUHS',
      categoriaId: 0,
      marca: 'Carolina Herrera',
      nombre: '212 EDT',
      presentacion: '60 ml',
      precio: 25300
    },
    {
      id: 'UDHRKSHF',
      categoriaId: 0,
      marca: 'Donna Karanbe',
      nombre: 'DELICIOUS EDP',
      presentacion: '30 ml',
      precio: 14280
    },
    {
      id: 'GNDBSKFN',
      categoriaId: 1,
      marca: 'Ralph Lauren',
      nombre: 'POLO BIG PONY BLUE EDT',
      presentacion: '100 ml',
      precio: 23032
    },
    {
      id: 'GYUGFJFG',
      categoriaId: 1,
      marca: 'Versace',
      nombre: 'BLUE JEANS EDT',
      presentacion: '75 ml',
      precio: 18000
    }
  ];

  const CantidadItems = 5;

  return (
    <div className="App">
      <header className="App-header">
        <Navbar><CartWidget cantidadItems={CantidadItems}/></Navbar>
      </header>
      <body className="App-body">
        <List categorias={Categorias}/>
        <ItemListContainer productos={Productos}/>
      </body>
    </div>
  );
}

export default App;
