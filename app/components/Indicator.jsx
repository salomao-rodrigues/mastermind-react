import React from 'react';

import BulbTypes from '../constants/BulbTypes';
import Bulb from './Bulb.jsx';

class Indicator extends React.Component {
  getBulbs(result) {
    const bulbs = [
      ...Array(result.nCorrect).fill(BulbTypes.CORRECT),
      ...Array(result.nExist).fill(BulbTypes.EXISTS),
      ...Array(result.nIncorrect).fill(BulbTypes.INCORRECT)
    ];

    return bulbs.map((value, index) => {
      return (
        <Bulb key={index} type={value} />
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

Indicator.defaultProps = {
  result: {
    nCorrect: 0,
    nExist: 0,
    nIncorrect: 4
  }
};

export default Indicator;
