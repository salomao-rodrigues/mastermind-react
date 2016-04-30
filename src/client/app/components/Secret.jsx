import React from 'react';

import Row from './Row.jsx';

class Secret extends React.Component {
  getSlots() {
    if (this.props.revealed) {
      return this.props.slots;
    }

    return [null, null, null, null];
  }

  render() {
    return (
      <Row className="mm-secret" slots={this.getSlots.call(this)} />
    );
  }
}

Secret.defaultProps = {
  revealed: false
};

export default Secret;
