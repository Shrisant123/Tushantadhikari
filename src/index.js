import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Aboutpage from './componentsa/Aboutpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const newId=ReactDOM.createRoot(document.getElementById('newId'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
