import React from 'react';

import PegSlot from './PegSlot.jsx';
import Peg from './Peg.jsx';

class Row extends React.Component {
  constructor(props) {
    super(props);

    this.renderSlots = this.renderSlots.bind(this);
  }

  renderSlots() {
    return this.props.slots.map((colorKey, index) => {
      const pegProps = {
        key: index,
        active: (this.props.activeSlot === index)
      }

      if (colorKey === null) {
        return <PegSlot {...pegProps} />
      }
      return <Peg {...pegProps} color={this.props.colors[colorKey]} /> 
    }, this);
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.renderSlots()}
      </div>
    );
  }
}

Row.defaultProps = {
  slots: [null, null, null, null],
  className: 'mm-row'
};

export default Row;
