import { useState, useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import UserContext from '../../context/UserContext'



const NavBar = ({ categories, cartProducts }) => {
  const [productQuantity, setProductQuantity] = useState(0)
  const {user, logout} = useContext(UserContext)

  useEffect(() => {
    if(cartProducts.length === 0) {
      setProductQuantity(0)
    } else {
      cartProducts.forEach(prod => {
        setProductQuantity(productQuantity + prod.quantity)
    })
    }
  }, [cartProducts]) 

  return (
    <nav className="NavBar">
      <div>
        <Link className="subrayado" to='/'>
          <h3 className="titulo">Sapphira</h3>
        </Link>
      </div>
      <div className="Categories">
        {categories.map(category => <NavLink key={category.id} to={`/category/${category.id}`} className='Option' activeClassName="NavLink">{category.description}</NavLink>)}     
      </div>
      <div>
        {
          user 
            ? <button  className="btn1 btn-outline-success1" onClick={logout}>Cerrar sesion</button>
            : <Link to='/login'><button className="btn1 btn-outline-success1">Ingresa</button></Link>
        }
      </div>
      <div>
        {
        (user && cartProducts.length > 0) &&
          <Link to='/cart'>
            <CartWidget quantity={productQuantity} />
          </Link>
        }
      </div>

    </nav>
  )
}
export default NavBar;