import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer';
import Counter from './components/ItemCount/ItemCount.js'

function App () {
 
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer/>
      </header>
      <Counter inicial={1} max={25}/>      
    </div>
  );
}

export default App;
