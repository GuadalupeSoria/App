import carrito from './carrito.png'
import '../Cart/Cart.css'

const CartWidget = (props) => {
    return (
        <button className="fondocarrito">
        <img 
        src={carrito} alt='carrito'/>
           {props.quantity}
        </button>
    )
}

export default CartWidget 