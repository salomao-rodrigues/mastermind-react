import React from 'react';
import {render} from 'react-dom';

import Board from './components/Board.jsx';
import Peg from './components/Peg.jsx';
import Row from './components/Row.jsx';
import PegTray from './components/PegTray.jsx';

require('./stylesheets/main.scss');

class App extends React.Component {

  render () {
    return (
      <div className="mastermind-game">
        <Board />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
