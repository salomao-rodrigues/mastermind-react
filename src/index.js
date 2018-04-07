import React from 'react';
import ReactDOM from 'react-dom';

const title = "Mastermind Reborn!!";

const App = () => (
  <div>{title}</div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();
