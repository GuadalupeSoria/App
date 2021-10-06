import { useContext } from "react";
import CartContext from '../../context/CartContext'
import carrito from './carrito.png'
import '../Cart/Cart.css'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    return(
        <button className="fondocarrito" >
            <img src={carrito} alt='cart'/>
            {getQuantity()}
        </button>
  
    );
}

export default CartWidget