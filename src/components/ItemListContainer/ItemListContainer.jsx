import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { useState } from 'react'
import Productos from '../../productos';

const ItemListContainer = ({idCategoria}) => {
    const [productos, setProductos] = useState(Productos);

    function obtenerProductos(){
        setProductos(Productos.filter((producto)=>{
            return producto.categoriaId == idCategoria
        }));
    }

    useEffect(()=>{
        if(idCategoria != null){
            obtenerProductos()
        }
    },[])

    return (
        <div className='container-fluid m-3'>
            <div className='row'>
                {
                    productos.map((producto)=>{
                        return(
                            <div key={producto.id} className="col-3 card m-3">
                                <div className="card-body">
                                    <h6>{producto.marca}</h6>
                                    <h5 className="card-title">{producto.nombre}</h5>
                                    <p className="card-text">{producto.presentacion}</p>
                                    <h4>${producto.precio}</h4>
                                    <a href="#" className="btn btn-primary">Ver detalle</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

ItemListContainer.proptype = {
    idCategoria: PropTypes.number
}

export default ItemListContainer