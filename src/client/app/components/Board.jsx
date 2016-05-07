import React from 'react';

import Secret from './Secret.jsx';
import Row from './Row.jsx';
import PegTray from './PegTray.jsx';
import Indicator from './Indicator.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSlot: 0,
      activeRow: 0,
      rows: [],
      results: [],
      secret: this.generateSecret(),
      solved: false,
      lost: false
    };

    this.renderRows = this.renderCodeRows.bind(this);
  }

  isSolved(rows) {
    return JSON.stringify(rows[this.state.activeRow]) === JSON.stringify(this.state.secret);
  }

  getResult(secret, attempt) {
    let i;
    let nCorrect = 0;
    let nExist = 0;

    for (i in secret) {
      if (attempt[i] === secret[i]) {
        nCorrect += 1;
      } else if (attempt.indexOf(secret[i]) > -1) {
        nExist += 1;
      }
    }

    let nIncorrect = this.props.secretSize - nCorrect - nExist;

    return { nCorrect, nExist, nIncorrect };
  }

  play(color) {
    const rows = this.state.rows;
    let newActiveSlot = this.state.activeSlot + 1;
    let newActiveRow = this.state.activeRow;
    let results = this.state.results;
    let solved = false;
    let lost = false;

    if (!rows[this.state.activeRow]) {
      rows[this.state.activeRow] = this.getNewRow();
    }

    rows[this.state.activeRow][this.state.activeSlot] = color;

    if (newActiveSlot >= this.props.secretSize) {
      let result = this.getResult.call(this, this.state.secret, rows[this.state.activeRow]);

      results[this.state.activeRow] = result;
      solved = (result.nCorrect === this.props.secretSize);
      //this.isSolved.call(this, rows);
      lost = (!solved && (this.state.activeRow === this.props.maxRows - 1));
      
      newActiveSlot = 0;
      newActiveRow = Math.min(this.state.activeRow + 1, this.props.maxRows - 1);
    }

    this.setState({
      activeSlot: newActiveSlot,
      activeRow: newActiveRow,
      results,
      solved,
      lost
    });
  }

  generateSecret() {
    let i;
    const colors = Object.keys(PegTray.colors());
    const code = [];

    for (i = 0; i < this.props.secretSize; i += 1) {
      const randomIndex = Math.floor(Math.random() * colors.length);
      code.push(colors.splice(randomIndex, 1)[0]);
    }

    return code;
  }

  getNewRow() {
    return [null, null, null, null];
  }

  renderCodeRows() {
    let i;

    let rows = [];
    for (i = this.props.maxRows - 1; i >= 0; i -= 1) {
      const slots = this.state.rows[i] || this.getNewRow();
      let rowActiveSlot = null;

      if (i === this.state.activeRow) {
        rowActiveSlot = this.state.activeSlot;
      }

      rows.push(
        <div key={i}>
          <Row slots={slots} activeSlot={rowActiveSlot} />
          <Indicator result={this.state.results[i]} />
        </div>
      );
    }

    return rows;
  }

  render() {
    return (
      <div className="mm-board">
        <Secret slots={this.state.secret} revealed={this.state.solved || this.state.lost} />
        <div className="rows">
          {this.renderCodeRows()}
        </div>
        <br/> <br/>
        <PegTray onPlay={this.play.bind(this)}/>
      </div>
    );
  }
}

Board.defaultProps = {
  maxRows: 10,
  secretSize: 4
};

export default Board;
