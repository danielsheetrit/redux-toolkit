import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// setup redux-toolkit
import { store } from 'rtk/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
