import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import Productos from '../../productos';

const ItemListContainer = () => {
    const [productos, setProductos] = useState(Productos);

    const {id} = useParams()

    function obtenerProductos(){
        setProductos(Productos.filter((producto)=>{
            return producto.categoriaId == id
        }));
    }

    useEffect(()=>{
        if(id != null){
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
                                    <img className="card-img-top" src={`/images/productos/${producto.imagen}`} alt="Card image cap"/>
                                    <h6>{producto.marca}</h6>
                                    <h5 className="card-title">{producto.nombre}</h5>
                                    <p className="card-text">{producto.presentacion}</p>
                                    <h4>${producto.precio}</h4>
                                    <a href={`/item/${producto.id}`} className="btn btn-primary">Ver detalle</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}



export default ItemListContainer