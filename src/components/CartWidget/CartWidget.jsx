import PropTypes from 'prop-types'

const CartWidget = ({cantidadItems}) => {
    return (
        <div class="pr-3">
            <span class="material-icons text-dark align-middle">shopping_cart</span>
            <span class="badge badge-secondary align-top">{cantidadItems}</span>
        </div>
    )
}

CartWidget.proptype = {
    cantidadItems: PropTypes.number.isRequired
}

export default CartWidget