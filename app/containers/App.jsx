import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Secret from '../components/Secret.jsx';
import Board from '../components/Board.jsx';
import PegTray from '../components/PegTray.jsx';
import * as GameActions from '../actions'

import config from '../config.js';

class App extends React.Component {
  render() {
    const { game } = this.props;
    return (
      <div className="mastermind-game theme-default">
        <Secret slots={game.secret} revealed={game.solved || game.lost} />
        <Board {...game} maxRows={config.maxRows} />
        <br/><br/>
        <PegTray maxColors={config.availableColors} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state.mastermind;
  }
}

function mapDispatchToProps(dispatch) {
  console.log(bindActionCreators(GameActions, dispatch));
  return {
    actions: bindActionCreators(GameActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
