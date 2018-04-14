import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader'

const App = ({ title }) => (
  <div>{title}</div>
);

App.propTypes = {
  title: PropTypes.string.isRequired
};

export default hot(module)(App)
