import React from 'react';
import { play } from '../actions';

import Peg from './Peg.jsx';

class PegTray extends React.Component {
  renderSlots(maxColors, onClickHandler) {
    const slots = [];
    let i;
    
    for (i = 0; i < maxColors; i+= 1) {
      slots.push(<Peg key={i}
        color={i}
        onClickHandler={onClickHandler}
      />);
    }

    return slots;
  }

  render() {
    const { maxColors, play } = this.props;
    return (
      <div className="mm-peg-tray">
        {this.renderSlots(maxColors, play)}
      </div>
    );
  }
}

export default PegTray;
