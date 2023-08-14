import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
=======
import ReactDOM from 'react-dom/client';
import './index.css';
>>>>>>> parent of 20b4606b (Divided components into different files)
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

<<<<<<< HEAD
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
=======
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
>>>>>>> parent of 20b4606b (Divided components into different files)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
