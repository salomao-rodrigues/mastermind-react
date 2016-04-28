import React from 'react';

import PegSlot from './PegSlot.jsx';
import Peg from './Peg.jsx';

class Row extends React.Component {
  constructor(props) {
    super(props);

    this.renderSlots = this.renderSlots.bind(this);
  }

  get style() {
    return {
      width: 200,
      height: 50,
      borderWidth: 2,
      borderColor: "black",
      borderStyle: "solid",
      backgroundColor: "#D09B88",
      borderRadius: 10,
      display: "block"
    };
  }

  renderSlots() {
    return this.props.slots.map(function (elem, index) {
      if (elem === null) {
        return <PegSlot
          key={index} 
          width={this.style.width / this.props.slots.length}
          height={this.style.height}
        />
      }
      return <Peg
        key={index}
        width={this.style.width / this.props.slots.length}
        height={this.style.height}
        color={elem}
      /> 
    }, this);
  }

  render() {
    return (  
      <div style={this.style}>
        {this.renderSlots()}
      </div>
    );
  }
}

Row.defaultProps = {
  slots: [null, null, null, null]
};

export default Row;
