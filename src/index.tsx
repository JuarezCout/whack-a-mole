import React from 'react';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux';
import { render } from "react-dom";

const rootElement = document.getElementById("root");

render((
  <Provider store={store}>
    <App />
  </Provider>
), rootElement);
