import React from 'react';

import PegSlot from './PegSlot.jsx';
import Peg from './Peg.jsx';

class Row extends React.Component {
  constructor(props) {
    super(props);

    this.renderSlots = this.renderSlots.bind(this);
  }

  renderSlots() {
    return this.props.slots.map(function (elem, index) {
      const pegPros = {
        key: index,
        active: (this.props.activeSlot === index)
      }

      if (elem === null) {
        return <PegSlot {...pegPros} />
      }
      return <Peg {...pegPros} color={elem} /> 
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
