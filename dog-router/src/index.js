import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister(); 