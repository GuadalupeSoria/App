import { useState, useContext } from 'react'
import UserContext from '../../context/UserContext'
import NotificationContext from '../../context/NotificationContext'
import { useHistory } from 'react-router-dom'
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useContext(UserContext)
    const { setNotification } = useContext(NotificationContext)
    const history = useHistory()

    const handleLogin = (event) => {
        event.preventDefault()

        const objUser = {
            username,
            password
        }

        login(objUser)
        setNotification('success', `Bienvenido ${objUser.username}`)
        history.push('/')
    }

    return (
        <div className="CardItemL">
          <div className="ingreso1">Ingresa</div>
          <form onSubmit={handleLogin}>
            <div className="ingreso2"> Usuario
              <input className="recuadro1"
                type='text'
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
            </div>
            <div className="ingreso2"> Contraseña
              <input className="recuadro2"
                type='password'
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
            <button className="btn btn-outline-success" type='submit'>Inicia sesion</button>
          </form>
        </div>
      )
}



export default Login