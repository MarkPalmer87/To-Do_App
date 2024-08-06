// src/index.js
// this is the entry point for React, which renders the app component into the DOM

import React from 'react';
import ReactDOM from 'react-dom/client'; // Update to import from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';  // Import your Redux store



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
