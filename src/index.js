import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';



ReactDOM.hydrate(
  <>
<BrowserRouter>
  <App/>
</BrowserRouter>
  </>,
  document.getElementById('root')
);


reportWebVitals();
