import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './components/App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , 
  document.getElementById('root')
);

serviceWorker.unregister(); 
