// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Notice the `client` import from `react-dom`
import { Provider } from 'react-redux';
import store from './store';  // Import the store
import Rtk from './Rtk';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create a root using React 18 API
root.render(
  <Provider store={store}>
    <Rtk />
  </Provider>
);
