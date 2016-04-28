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

  get style() {
    return {
      width: this.props.width,
      height: this.props.height,
      borderWidth: 2,
      borderColor: "black",
      borderStyle: "solid",
      backgroundColor: "#D09B88",
      borderRadius: 10,
      display: "table-cell",
      verticalAlign: "middle"
    };
  }

  onClickEvent(color) {
    this.props.onPlay(color);
  }

  renderSlots(colors) {
    const keys = Object.keys(colors);

    return keys.map(function(color, index) {
      const size = this.props.width / keys.length;
      return <Peg
        key={index}
        width={size}
        height={size}
        color={color}
        onClick={this.onClickEvent.bind(this, color)}
      />
    }, this);
  }

  render() {
    return (
      <div style={this.style}>
        {this.renderSlots.call(this, PegTray.colors())}
      </div>
    );
  }
}

export default PegTray;
