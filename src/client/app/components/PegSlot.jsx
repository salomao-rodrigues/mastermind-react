import React from 'react';

class PegSlot extends React.Component {

  renderActive() {
    if (this.props.active === true) {
      return <div className="active-slot" />;
    }
  }

  render() {
    return (
      <div className="mm-peg-slot">
        {this.renderActive()}
        <div className="mm-peg-slot-outer" />
        <div className="mm-peg-slot-inner" />
      </div>
    );
  }
}

export default PegSlot;
