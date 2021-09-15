//import { useState,useEffect } from 'react';

//function ItemList () {
   
//    return new Promise ((resolve, reject) => {
//      setTimeout(() => resolve (Productos),2000)
//    })
//  }
//    const App = () => {
//      const [ListProducts,setListProducts] = useState([])
  
//      useEffect(() => {
//         const list = ItemList()
  
//         list.then(list => {
//           setListProducts(list)
//         })
//      }, [])
  
//    return (
//        <ul>
//        { ListProducts.map(product => <li key={product.id}>{product.name}</li>)}
//       </ul>
//    ),
//}

//export default getList
