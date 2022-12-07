import PropTypes from 'prop-types'

const ItemDetailContainer = ({producto}) => {
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
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
                <div className="card-footer text-muted">
                    Stock disponible: {producto.stock}
                </div>
            </div>
        </div>
    )
}

ItemDetailContainer.proptype = {
    producto: PropTypes.object.isRequired
}

export default ItemDetailContainer