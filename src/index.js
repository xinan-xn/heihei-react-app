import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import 'lib-flexible/flexible'
import 'lib-flexible';
import './reset.css'
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);