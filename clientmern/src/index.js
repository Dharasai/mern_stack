import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../src/assets/css/styles-mern_stack.scss";
import reportWebVitals from './reportWebVitals';
import '@splidejs/splide/dist/css/splide.min.css';
// import '@fontsource/gidugu';
import "./i18n";
import { Provider } from 'react-redux';
import store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
