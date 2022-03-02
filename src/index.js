import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// STORE
const store = createStore(reducer);

ReactDOM.render(
  <BrowserRouter >
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
