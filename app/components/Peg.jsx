import React from 'react';

import Colors from '../constants/Colors';

class Peg extends React.Component {

  renderActive() {
    if (this.props.active === true) {
      return <div className="active-slot" />;
    }
  }

  render() {
    return (
      <div className="mm-peg-wrapper">
        {this.renderActive()}
        <div className={"mm-peg color " + Colors[this.props.color]} onClick={this.props.onClick} />
      </div>
    );
  }
}

Peg.propTypes = { color: React.PropTypes.number };

export default Peg;
