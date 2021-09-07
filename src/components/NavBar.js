import './NavBar.css'

const NavBar = () => {
  return (
  <nav className='NavBar'>
  <div className='LeftNav'>
    <div className='NavOptionsLeft'>
     <h1>Sapphira</h1>
     <img src=""></img>
     <button className='Option'>Inicio</button>
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
</nav>
  )
}
  
export default NavBar