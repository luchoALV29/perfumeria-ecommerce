import PropTypes from 'prop-types'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const {quantity} = useContext(CartContext);

    return (
        <div className="pr-3">
            <span className="material-icons text-dark align-middle">shopping_cart</span>
            <span className="badge badge-secondary align-top">{quantity}</span>
        </div>
    )
}

export default CartWidget