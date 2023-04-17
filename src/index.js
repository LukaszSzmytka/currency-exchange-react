import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import background from "./currency.png";

const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: "Montserrat", sans-serif;
  background-image: url("${background}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
