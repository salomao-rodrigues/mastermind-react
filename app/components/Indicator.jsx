import React from 'react';

class Indicator extends React.Component {
  getBulbs(result) {
    let bulbs = [
      ...Array(result.nCorrect).fill(Indicator.Results.CORRECT),
      ...Array(result.nExist).fill(Indicator.Results.EXISTS),
      ...Array(result.nIncorrect).fill(Indicator.Results.INCORRECT)
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
  INCORRECT: 'i-incorrect'
};

Indicator.defaultProps = {
  result: {
    nCorrect: 0,
    nExist: 0,
    nIncorrect: 4
  }
};

export default Indicator;
