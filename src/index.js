import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'lib-flexible/flexible'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.register()