import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss'
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <HasRouter>
      <App />
    </HasRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
