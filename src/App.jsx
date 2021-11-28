import './App.css';
import NavBar from './components/navbar/NavBar.jsx';
import Main from './components/main/Main'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
      <NavBar/>
      <Main/>
  </BrowserRouter>
        
  );
}

export default App;
