import PropTypes from 'prop-types'

const ItemListContainer = ({productos}) => {
    return (
        <div className='container-fluid m-3'>
            <div className='row'>
                {
                    productos.map((producto)=>{
                        return(
                            <div className="col-3 card m-3">
                                <div className="card-body">
                                    <h7>{producto.marca}</h7>
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
    productos: PropTypes.array.isRequired
}

export default ItemListContainer