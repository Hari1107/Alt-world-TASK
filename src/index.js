import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import App from './App';

const config = {
  red: {
    backgroundColor: 'red',
    duration: 4000,
    next: 'green',
  },
  yellow: {
    backgroundColor: 'yellow',
    duration: 500,
    next: 'red',
  },
  green: {
    backgroundColor: 'green',
    duration: 3000,
    next: 'yellow',
  },
};

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <div className="wrapper">
      <App config={config} />
      <App config={config} layout="horizontal" />
    </div>
  </StrictMode>,
  rootElement
);
