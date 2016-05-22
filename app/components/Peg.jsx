import React from 'react';

import Colors from '../constants/Colors';

class Peg extends React.Component {
  render() {
    const { color, onClickHandler, active } = this.props;
    return (
      <div className="mm-peg-wrapper">
        {active && <div className="active-slot" />}
        <div
          className={"mm-peg color " + Colors[color]}
          onClick={onClickHandler && (() => onClickHandler(color))}
        />
      </div>
    );
  }
}

Peg.propTypes = { color: React.PropTypes.number };

export default Peg;
