import React from 'react';

import Row from './Row.jsx';
import Indicator from './Indicator.jsx';

class Board extends React.Component {
  renderCodeRows() {
    const {maxRows, rows, secret, activeRow, activeSlot, results} = this.props;
    let i, boardRows = [];

    for (i = maxRows - 1; i >= 0; i -= 1) {
      const slots = rows[i];

      boardRows.push(
        <div key={i}>
          <Row slots={slots} activeSlot={i === activeRow && activeSlot} />
          <Indicator result={results[i]} />
        </div>
      );
    }

    return boardRows;
  }

  render() {
    return (
      <div className="mm-board">
        <div className="rows">
          {this.renderCodeRows.call(this)}
        </div>
      </div>
    );
  }
}

export default Board;
