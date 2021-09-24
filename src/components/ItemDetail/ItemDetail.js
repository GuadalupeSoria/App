import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import UserContext from '../../context/UserContext'
import './ItemDetail.css'


const ItemDetail = ({ product, productsAdded, addProdFunction }) => {
    const [count, setCount] = useState(0)
    const {user} = useContext(UserContext)

    if(!product) {
        return <h3>{`Ese producto ya no existe`}</h3>
    } 
    
    return (
        <div className="CardItemD">
            <div className="ContainerItemD">
                <h2 className="ItemHeaderD">
                    {product.name}
                </h2>
            </div>
            <img src={product.img} alt={product.name} className="ItemImgD"/>
            <p className="InfoD">
            {`Categoria: ${product.category} `}
            </p>
            <p className="InfoD">
            {`Precio: ${product.price} `}
            </p>
            <p className="InfoD">
            {`Stock: ${product.stock} `}
            </p>
            <p className="InfoD">
                {product.description}</p>

            {
            count === 0 && user
                ? <ItemCount product={product} productsAdded={productsAdded} addProdFunction={addProdFunction} setCount={setCount} />
                : user 
                    ? <Link to='/cart'><button className="ButtonD">Ir al carrito</button></Link>
                    : <Link to='/login'><button className="ButtonD">Inicia sesion</button></Link>
            }
        </div>

    )
}
export default ItemDetail