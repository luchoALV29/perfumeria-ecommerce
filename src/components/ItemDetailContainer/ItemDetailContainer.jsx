import userEvent from '@testing-library/user-event';
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Productos from '../../productos';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({}); 
    const {id} = useParams();
    const {addItem} = useContext(CartContext);

    useEffect(()=>{
        setProducto(Productos.find(producto => producto.id == id));
    },[])

    const handlerAddItem = () => {
        addItem({product:producto, quantity:1})
    }

    return (
        <div className='container m-3'>
            <div className="card text-center">
                <div className="card-header">
                    {producto.marca}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                    <h4>${producto.precio}</h4>
                    <a href="#" className="btn btn-primary" onClick={()=>handlerAddItem()}>Comprar</a>
                </div>
                <div className="card-footer text-muted">
                    Stock disponible: {producto.stock}
                </div>
            </div>
        </div>
    )
}
export default ItemDetailContainer