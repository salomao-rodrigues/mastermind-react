import React from 'react';

class Indicator extends React.Component {
  getBulbs(result) {
    let bulbs = [
      ...Array(result.nCorrect).fill(Indicator.Results.CORRECT),
      ...Array(result.nExist).fill(Indicator.Results.EXISTS),
      ...Array(result.none).fill(Indicator.Results.NONE)
    ];

    return bulbs.map((value, index) => {
      return (
        <div key={index} className="bulb">
          <span className={value} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="mm-indicator">
        {this.getBulbs(this.props.result)}
      </div>
    );
  }
}

Indicator.Results = {
  CORRECT: 'i-correct',
  EXISTS: 'i-exists',
  NONE: 'i-none'
};

Indicator.defaultProps = {
  result: {
    nCorrect: 0,
    nExist: 0,
    none: 4
  }
};

export default Indicator;
