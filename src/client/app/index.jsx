import React from 'react';
import {render} from 'react-dom';

import Board from './Board.jsx';
import Peg from './Peg.jsx';
import Row from './Row.jsx';
import PegTray from './PegTray.jsx';

class App extends React.Component {

  render () {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
 
