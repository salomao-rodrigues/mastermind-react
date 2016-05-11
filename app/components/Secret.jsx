import React from 'react';

import Row from './Row.jsx';

class Secret extends React.Component {
  getSlots() {
    if (this.props.revealed) {
      return this.props.slots;
    }
  }

  render() {
    return (
      <Row
        className="mm-secret"
        colors={this.props.colors}
        slots={this.getSlots.call(this)} />
    );
  }
}

Secret.defaultProps = {
  revealed: false
};

export default Secret;
