import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from 'redux'
import { Provider } from 'react-redux';
import userReducer from './store/reducer/user-reducer';
const usersStore = configureStore({ userReducer, user: {} })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={usersStore}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
