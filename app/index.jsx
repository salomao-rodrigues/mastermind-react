import React from 'react';
import {render} from 'react-dom';

import Secret from './components/Secret.jsx';
import Board from './components/Board.jsx';
import PegTray from './components/PegTray.jsx';

import Mastermind, { game } from './Mastermind.js';
import config from './config.js';

require('./stylesheets/main.scss');

class App extends React.Component {
  render() {
    const state = Mastermind.getState();
    return (
      <div className="mastermind-game theme-default">
        <Secret slots={state.secret} colors={config.colors} revealed={state.solved || state.lost} />
        <Board {...state} colors={config.colors} maxRows={config.maxRows} />
        <br/><br/>
        <PegTray onPegClick={Mastermind.dispatch} colors={config.colors} action="PLAY" />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

Mastermind.subscribe(() =>
  render(<App/>, document.getElementById('app'))
);
