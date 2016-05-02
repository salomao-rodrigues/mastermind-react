import React from 'react';

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
        <div className="mm-peg" style={{backgroundColor: this.props.color}} onClick={this.props.onClick} />
      </div>
    );
  }
}

Peg.propTypes = { color: React.PropTypes.string };

export default Peg;
