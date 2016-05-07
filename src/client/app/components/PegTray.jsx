import React from 'react';

import Peg from './Peg.jsx';

class PegTray extends React.Component {
  static colors() {
    return {
      yellow: "yellow",
      orange: "orange",
      red: "red",
      purple: "purple",
      blue: "blue",
      green: "green"
    };
  }

  onClickEvent(color) {
    this.props.onPlay(color);
  }

  renderSlots(colors) {
    const keys = Object.keys(colors);

    return keys.map((color, index) => {
      return <Peg
        key={index}
        color={color}
        onClick={this.onClickEvent.bind(this, color)}
      />
    }, this);
  }

  render() {
    return (
      <div className="mm-peg-tray">
        {this.renderSlots.call(this, PegTray.colors())}
      </div>
    );
  }
}

export default PegTray;
