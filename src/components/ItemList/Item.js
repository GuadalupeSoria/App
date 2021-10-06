import { Link } from 'react-router-dom'
import './Item.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const Item = ({ product }) => {
  const { removeProduct } = useContext(CartContext)

  return (
    <div className="CardItemI">
      <div className="ContainerItemI">
        <h2 className="ItemHeaderI">
            {product.name}
        </h2>
      </div>
      <img src={product.img} alt={product.name} className="ItemImgI"/>
      <h6 className="InfoI">
        {`Categoria: ${product.category} `}
      </h6>
      <h6 className="InfoI">
        {`Precio: ${product.price} `}
      </h6>
      { product.quantity &&       
        <h6 className="InfoI">
          {`Cantidad a comprar: ${product.quantity} `}
        </h6>
      }
            { product?.quantity 
          ? <button onClick={() => removeProduct(product.id)} className="ButtonI">Quitar del carrito</button> 
          : <Link to={`/item/${product.id}`} className="ButtonI">Comprar</Link> }
    </div>
    )
}
export default Item