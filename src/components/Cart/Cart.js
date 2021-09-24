import './Cart.css'
import ItemList from "../ItemList/ItemList"

const Cart = ({ productsAdded, addProdFunction }) => {
    return <div>
        <h1 className="titulocarrito">Carrito</h1>
        <button onClick={() => addProdFunction([])} className="Button btn btn-outline-success">Cancelar compra</button>
        <ItemList products={productsAdded} />

    </div>
}
export default Cart