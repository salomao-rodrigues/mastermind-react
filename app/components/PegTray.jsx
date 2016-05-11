import React from 'react';
import { play } from '../actions';

import Peg from './Peg.jsx';

class PegTray extends React.Component {
  onClickEvent(colorIndex) {
    const action = play(colorIndex);
    this.props.onPegClick(action);
  }

  renderSlots(colors) {
    return colors.map((color, index) => {
      return <Peg
        key={index}
        color={color}
        onClick={this.onClickEvent.bind(this, index)}
      />
    }, this);
  }

  render() {
    return (
      <div className="mm-peg-tray">
        {this.renderSlots.call(this, this.props.colors)}
      </div>
    );
  }
}

export default PegTray;
