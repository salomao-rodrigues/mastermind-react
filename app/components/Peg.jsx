import React from 'react';

class Peg extends React.Component {

  render() {
    return (
      <div className="mm-peg-wrapper">
        <div className="mm-peg" style={{backgroundColor: this.props.color}} onClick={this.props.onClick} />
      </div>
    );
  }
}

Peg.propTypes = { color: React.PropTypes.string };

export default Peg;
