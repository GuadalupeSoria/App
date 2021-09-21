import '../ItemList/Item.css'
import imagen from './B.jpg'
import { useState,useEffect } from 'react';
import Kits from './ItemDetail';

function ItemDetail () {
   
    return new Promise ((resolve, reject) => {
      setTimeout(() => resolve (Kits),2000)
    })
  }

const ItemDetailContainer = () => {
    const [ListProducts,setListProducts] = useState([])

    useEffect(() => {
       const list = ItemDetail()

       list.then(list => {
         setListProducts(list)
       })
    }, [])

    return (
        <div>
        <h1>Kits</h1>
        <ul className="catalogo">
         { ListProducts.map(product => <li key={product.id}>{product.name}<br></br><img 
        src={imagen}></img><br></br>${product.price}</li>)}
        </ul>
        </div>
    )
}


export default ItemDetailContainer 