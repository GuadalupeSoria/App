import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import ItemListContainer from '../ItemList/ItemListContainer'


const NavBar = () => {
  return (
  <nav className='NavBar'>
  <div className='LeftNav'>
    <div className='NavOptionsLeft'>
     <h1>Sapphira</h1>
     <button className='Option' >Inicio</button>
     <button className='Option'>Productos</button>
     <button className='Option'>como se usa?</button>
     <button className='Option'>Contacto</button>
    </div>
  </div>
  <div className='RightNav'>
    <div className='NavOptionsRight'>
      <button className='Option'>Ingresa</button>
    </div>
  </div>
  <CartWidget/>
</nav>
  )
}
<ItemListContainer/>

export default NavBar