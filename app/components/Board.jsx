import React from 'react';

import Row from './Row.jsx';
import Indicator from './Indicator.jsx';

class Board extends React.Component {
  renderCodeRows(props) {
    const {config, rows, secret, activeRow, activeSlot, results} = props;
    let i, boardRows = [];

    for (i = config.maxRows - 1; i >= 0; i -= 1) {
      const slots = rows[i];

      boardRows.push(
        <div key={i}>
          <Row
            slots={slots}
            length={secret.length}
            activeSlot={i === activeRow && activeSlot}
          />
          <Indicator result={results[i]} length={secret.length} />
        </div>
      );
    }

    return boardRows;
  }

  render() {
    return (
      <div className="mm-board">
        <div className="rows">
          {this.renderCodeRows(this.props)}
        </div>
      </div>
    );
  }
}

export default Board;
