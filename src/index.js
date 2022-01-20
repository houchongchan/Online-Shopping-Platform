import React from 'react';
import './dist/index.css';
import {AppProvider} from './context/context';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cartcontext';
import { UserProvider } from './context/usercontext';
import {Auth0Provider} from '@auth0/auth0-react';


ReactDOM.render(
  <Auth0Provider 
    domain = {process.env.REACT_APP_DOMAIN}
    clientId = {process.env.REACT_APP_CLIENT_ID}
    redirectUri = {window.location.origin}
    cacheLocation = 'localstorage'>
    <UserProvider>
      <AppProvider>
        <FilterProvider>
          <CartProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CartProvider>
        </FilterProvider>
      </AppProvider>
    </UserProvider>
  </Auth0Provider>

  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
