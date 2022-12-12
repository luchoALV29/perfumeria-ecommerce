import PropTypes from 'prop-types'

const CartWidget = ({cantidadItems}) => {
    return (
        <div className="pr-3">
            <span className="material-icons text-dark align-middle">shopping_cart</span>
            <span className="badge badge-secondary align-top">{cantidadItems}</span>
        </div>
    )
}

CartWidget.proptype = {
    cantidadItems: PropTypes.number.isRequired
}

export default CartWidget