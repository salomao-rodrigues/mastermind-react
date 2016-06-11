import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, hashHistory } from 'react-router'

import App from './pages/App.jsx';
import configureStore from './store/configureStore';

import './stylesheets/main.scss';

const store = configureStore();

class ProviderWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

render(
  <Router history={hashHistory}>
    <Route path="/" component={ProviderWrapper}>
    </Route>
  </Router>
  , document.getElementById('app')
);
