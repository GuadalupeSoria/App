import './Item.css'
import imagenes from './img/A.png'
import { useState,useEffect } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [ListProducts,setListProducts] = useState([])

    useEffect(() => {
       const list = ItemList()

       list.then(list => {
         setListProducts(list)
       })
    }, [])

    return (
        <div>
        <h1>CATALOGO</h1>
        <ul className="catalogo">
         { ListProducts.map(product => <li key={product.id}>{product.name}<br></br><img 
        src={imagenes}></img><br></br>${product.price}</li>)}
        </ul>
        </div>
    )
}


    
export default ItemListContainer 