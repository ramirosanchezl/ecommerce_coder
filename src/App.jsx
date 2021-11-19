import './App.css';
import NavBar from './components/navbar/NavBar.jsx';
//import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemDetailContainer/>
      {/*<ItemListContainer title="Bienvenido" />*/}
    </div>
  );
}

export default App;
