import React from 'react';

import Row from './Row.jsx';

class Secret extends React.Component {
  render() {
    const { revealed, slots, colors, length } = this.props;
    return (
      <Row
        className="mm-secret"
        colors={colors}
        length={slots.length}
        slots={revealed && slots || undefined} />
    );
  }
}

export default Secret;
