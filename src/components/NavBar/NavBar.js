import { useState, useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import UserContext from '../../context/UserContext'
import CartContext from '../../context/CartContext'
import NotificationContext from '../../context/NotificationContext'
import { getCategory } from '../../firebase/firebase'


const NavBar = () => {
  const [category, setCategory] = useState()
  const { user, logout } = useContext(UserContext)
  const { getQuantity } = useContext(CartContext)
  const { setNotification } = useContext(NotificationContext)

  useEffect(() => {
    getCategory().then(category => {
      setCategory(category)
    }).catch((error) => {
      console.log(error)
    })
    return () => {
      setCategory()
    }
  }, [])

  const handleLogout = () => {
    logout()
    setNotification('error', `Hasta luego ${user}`)
  }

return (
  <nav className="NavBar">
    <div>
      <Link className="subrayado" to='/'>
        <h3 className="titulo">Sapphira</h3>
      </Link>
    </div>
    <div className="Categories">
        {category?.map(category => <NavLink key={category.id} to={`/category/${category.id}`} className='Option' activeClassName="NavLink">{category.description}</NavLink>)}     
      </div>
    <div>
      {
        user 
          ? <button  className="btn1 btn-outline-success1" onClick={handleLogout}>Cerrar sesion</button>
          : <Link to='/login'><button className="btn1 btn-outline-success1">Ingresa</button></Link>
      }
    </div>
    <div>
      {
        (user && getQuantity() > 0) &&
        <Link to='/cart'>
          <CartWidget />
        </Link>
      }
    </div>

  </nav>
)
}
export default NavBar;