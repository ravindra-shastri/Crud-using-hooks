import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UpdateUser from './components/UpdateUser';
import { BrowserRouter, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" exact>
        <App />
      </Route>
      <Route path="/edit" component={UpdateUser}>
        <App />
      </Route>
    </BrowserRouter>
  </React.StrictMode>
);
