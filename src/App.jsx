import './App.css';
import NavBar from './components/navbar/NavBar.jsx';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer title="Bienvenido" />
    </div>
  );
}

export default App;
