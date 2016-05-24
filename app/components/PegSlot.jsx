import React from 'react';

class PegSlot extends React.Component {
  render() {
    return (
      <div className="mm-peg-slot">
        {this.props.active && <div className="active-slot" />}
        <div className="mm-peg-slot-outer" />
        <div className="mm-peg-slot-inner" />
      </div>
    );
  }
}

export default PegSlot;
