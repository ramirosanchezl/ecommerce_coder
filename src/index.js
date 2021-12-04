import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBnGUh6YF2cr9Ych-fXNvji8SxAjJ2mXRE",
    authDomain: "ecommerce-coder-fe0ac.firebaseapp.com",
    projectId: "ecommerce-coder-fe0ac",
    storageBucket: "ecommerce-coder-fe0ac.appspot.com",
    messagingSenderId: "365830193054",
    appId: "1:365830193054:web:6136971e51e13ac83ea08f"
  };

// eslint-disable-next-line
const firebase = initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
