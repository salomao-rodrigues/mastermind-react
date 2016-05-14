import React from 'react';

import PegSlot from './PegSlot.jsx';
import Peg from './Peg.jsx';

class Row extends React.Component {
  renderSlots() {
    return this.props.slots.map((color, index) => {
      const pegProps = {
        key: index,
        active: (this.props.activeSlot === index)
      }

      if (color === null) {
        return <PegSlot {...pegProps} />
      }
      return <Peg {...pegProps} color={color} /> 
    }, this);
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.renderSlots.call(this)}
      </div>
    );
  }
}

Row.defaultProps = {
  slots: [null, null, null, null],
  className: 'mm-row'
};

export default Row;
