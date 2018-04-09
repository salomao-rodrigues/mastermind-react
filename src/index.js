import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = "Mastermind Reborn!!";

ReactDOM.render(
  <App title="Mastermind React Reborn!"/>,
  document.getElementById('app')
);

module.hot.accept();
