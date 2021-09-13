import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import Button from './components/Button/Button.js'
import ItemListContainer from './components/ItemListContainer';
import Counter from './components/ItemCount/ItemCount.js'

function App () {

  const [contadores, setContadores] = useState({
    contador1: 0,
    contador2: 0,
    contador3: 0
  })
  
  const funBoton1 = () => {
    const newContador = {
      ...contadores,
      contador1: contadores.contador1 + 1,
    }
    setContadores(newContador)
  }
  
  const funBoton2 = () => {
    const newContador = {
      ...contadores,
      contador2: contadores.contador2 + 1,
    }
    setContadores(newContador)
  }
  const funBoton3 = () => {
    const newContador = {
      ...contadores,
      contador3: contadores.contador3 + 1,
    }
    setContadores(newContador)
  }


  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />       
        <Button/>
        <ItemListContainer/>
      </header>
      <Counter inicial={1} max={25}/>
      <h1>{contadores.contador1}</h1>
      <h1>{contadores.contador2}</h1>
      <h1>{contadores.contador3}</h1>
      <button onClick={funBoton1}>boton1</button>
      <button onClick={funBoton2}>boton2</button>
      <button onClick={funBoton3}>boton2</button>
    </div>
  );
}

export default App;
