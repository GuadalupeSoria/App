import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemList/ItemListContainer';
import Counter from './components/ItemCount/ItemCount.js'


  const App = () => {

    return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <div>
      <ItemListContainer/>
      </div>
       <Counter inicial={1} max={25}/>      
    </div>
  );
}

export default App;
