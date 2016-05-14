import React from 'react';

import Row from './Row.jsx';
import Indicator from './Indicator.jsx';

class Board extends React.Component {
  renderCodeRows() {
    let i;

    let rows = [];
    for (i = this.props.maxRows - 1; i >= 0; i -= 1) {
      const slots = this.props.rows[i] || Array(this.props.secret.length).fill(null);
      let rowActiveSlot = null;

      if (i === this.props.activeRow) {
        rowActiveSlot = this.props.activeSlot;
      }

      rows.push(
        <div key={i}>
          <Row slots={slots} activeSlot={rowActiveSlot} />
          <Indicator result={this.props.results[i]} />
        </div>
      );
    }

    return rows;
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
