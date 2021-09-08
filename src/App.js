import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import Button from './components/Button/Button.js'
import ItemListContainer from './components/ItemListContainer';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />       
        <Button/>
        <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;
