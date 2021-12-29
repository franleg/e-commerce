import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { getFirestoneApp } from './config/getFirestoneApp';

getFirestoneApp()

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

