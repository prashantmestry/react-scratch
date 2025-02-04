import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import { Provider } from 'react-redux';
import store from './store/store';
import './main.less';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <div className="mx-2">
      <App />
    </div>
  </Provider>
);
