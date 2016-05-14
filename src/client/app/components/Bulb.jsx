import React from 'react';

class Bulb extends React.Component {
  render() {
    return (
      <div className="bulb">
        <span className={this.props.type} />
      </div>
    );
  }
}

export default Bulb;
