import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Secret from '../components/Secret.jsx';
import Board from '../components/Board.jsx';
import PegTray from '../components/PegTray.jsx';
import Caption from '../components/Caption.jsx';

import * as GameActions from '../actions'

class App extends React.Component {
  render() {
    const { game, actions } = this.props;
    return (
      <div className="mastermind-game theme-default">
        <Secret slots={game.secret} revealed={game.solved || game.lost} />
        <PegTray maxColors={game.config.availableColors} {...actions} />
        <Board {...game} />
        <Caption />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state.mastermind
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GameActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
