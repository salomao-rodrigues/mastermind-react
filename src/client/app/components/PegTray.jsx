import React from 'react';
import { play } from '../actions';

import Peg from './Peg.jsx';

class PegTray extends React.Component {
  renderSlots(maxColors, dispatcher) {
    const slots = [];
    let i;
    
    for (i = 0; i < maxColors; i+= 1) {
      slots.push(<Peg key={i}
        color={i}
        onClick={dispatcher.bind(null, play(i))}
      />);
    }

    return slots;
  }

  render() {
    return (
      <div className="mm-peg-tray">
        {this.renderSlots(this.props.maxColors, this.props.dispatcher)}
      </div>
    );
  }
}

export default PegTray;
