import './App.css';
import NavBar from './components/navbar/NavBar.jsx';
import Main from './components/main/Main'
import { BrowserRouter } from 'react-router-dom';
import {StoreProvider} from './context/CartContext'

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <NavBar/>
        <Main/>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
