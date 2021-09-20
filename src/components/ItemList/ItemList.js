import Productos from './Item';

function ItemList () {
   
    return new Promise ((resolve, reject) => {
      setTimeout(() => resolve (Productos),2000)
    })
  }


export default ItemList
