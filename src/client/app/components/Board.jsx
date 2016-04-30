import React from 'react';

import Secret from './Secret.jsx';
import Row from './Row.jsx';
import PegTray from './PegTray.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSlot: 0,
      activeRow: 0,
      rows: [],
      secret: this.generateSecret(),
      solved: false,
      lost: false
    };

    this.renderRows = this.renderRows.bind(this);
  }

  getNewRow() {
    return [null, null, null, null];
  }

  play(color) {
    const rows = this.state.rows;
    let newActiveSlot = this.state.activeSlot + 1;
    let newActiveRow = this.state.activeRow;
    let solved = false;
    let lost = false;

    if (!rows[this.state.activeRow]) {
      rows[this.state.activeRow] = this.getNewRow();
    }

    rows[this.state.activeRow][this.state.activeSlot] = color;

    if (newActiveSlot >= this.props.secretSize) {
      solved = JSON.stringify(rows[this.state.activeRow]) === JSON.stringify(this.state.secret);
      if (!solved && (this.state.activeRow === this.props.maxRows - 1)) {
        lost = true;
      }
      newActiveSlot = 0;
      newActiveRow = Math.min(this.state.activeRow + 1, this.props.maxRows - 1);
    }

    this.setState({
      activeSlot: newActiveSlot,
      activeRow: newActiveRow,
      solved,
      lost
    });
  }

  generateSecret() {
    let colors = PegTray.colors();
    return [
      colors.blue,
      colors.green,
      colors.red,
      colors.yellow
    ]
  }

  renderRows() {
    let i;

    let rows = [];
    for (i = this.props.maxRows - 1; i >= 0; i -= 1) {
      const slots = this.state.rows[i] || this.getNewRow(); 
      rows.push(<Row key={i} slots={slots} />);
    }

    return rows;
  }

  render() {
    return (
      <div className="mm-board">
        <Secret slots={this.state.secret} revealed={this.state.solved || this.state.lost} />
        <div className="rows">
          {this.renderRows()}
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
