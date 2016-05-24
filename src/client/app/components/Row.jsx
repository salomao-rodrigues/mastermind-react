import React from 'react';

import PegSlot from './PegSlot.jsx';
import Peg from './Peg.jsx';

class Row extends React.Component {
  /**
   * Loops through slots and returns an array of Peg/PegSlot
   *
   * @return {React.Component[]} The Pegs PegSlots
   */
  renderSlots(props) {
    const { activeSlot, length } = props;
    const slots = props.slots || Array(length).fill(null);

    return slots.map((color, index) => {
      const pegProps = {
        key: index,
        active: (activeSlot === index)
      }

      return (color === null) ? <PegSlot {...pegProps} />
                              : <Peg {...pegProps} color={color} />;
    });
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.renderSlots(this.props)}
      </div>
    );
  }
}

Row.defaultProps = {
  className: 'mm-row'
};

export default Row;
