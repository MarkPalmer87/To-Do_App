// src/redux/store.js
// configures and exports the Redux store

import { createStore } from 'redux';
import rootReducer from './reducer';

// Create the Redux store
//const store = createStore(rootReducer);
const store = createStore(
    rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
console.log('Redux store created:', store.getState()); // Debugging: Check initial store state

export default store;
