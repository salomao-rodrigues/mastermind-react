import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Secret from '../components/Secret.jsx';
import Board from '../components/Board.jsx';
import PegTray from '../components/PegTray.jsx';
import Caption from '../components/Caption.jsx';
import SolvedModal from '../components/modals/SolvedModal.jsx';
import LostModal from '../components/modals/LostModal.jsx';

import * as GameActions from '../actions'

class App extends React.Component {
  /**
   * Renders a modal given the game end result
   *
   * @param  {bool} solved
   *
   * @return {React.Component}
   */
  renderModal(solved) {
    return solved ? <SolvedModal />
                  : <LostModal />
  }

  render() {
    const { game, actions } = this.props;
    const revealed = game.solved || game.lost;
    return (
      <div className="mastermind-game theme-default">
        <Secret slots={game.secret} revealed={revealed} />
        <Board {...game} />
        <PegTray maxColors={game.config.availableColors} {...(revealed || actions)} />
        <button onClick={actions.newGame}>New game</button>
        {revealed && this.renderModal(game.solved)}
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
