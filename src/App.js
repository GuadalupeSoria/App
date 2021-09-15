import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/Item/ItemListContainer';
import Counter from './components/ItemCount/ItemCount.js'
import { useState,useEffect } from 'react';


const Productos = [
  {id:'01', name:'Gua sha', description:'material:jade', stock:'10',price:1600,},
  {id:'02', name:'Roller', description:'material:jade', stock:'12',price:1750},
  {id:'03', name:'Mushroom', description:'material:jade', stock:'15',price:1400}]

function getList () {
   
  return new Promise ((resolve, reject) => {
    setTimeout(() => resolve (Productos),2000)
  })
}
  const App = () => {
    const [ListProducts,setListProducts] = useState([])

    useEffect(() => {
       const list = getList()

       list.then(list => {
         setListProducts(list)
       })
    }, [])
  
    return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer/>
      </header>
      <ul>
         { ListProducts.map(product => <li key={product.id}>{product.name}</li>)}
        </ul>
      <Counter inicial={1} max={25}/>      
    </div>
  );
}

export default App;
