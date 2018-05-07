import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { hot } from 'react-hot-loader';

import MainMenu from './menus/MainMenu';
import Solo from './pages/Solo';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ MainMenu } />
      <Route path="/solo" component={ Solo } />
      <Route path="/vs-friends" component={ MainMenu } />
      <Route path="/rules" component={ MainMenu } />
    </Switch>
  </Router>
);

export default hot(module)(App);
