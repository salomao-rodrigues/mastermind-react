import React from 'react';

import BulbTypes from '../constants/BulbTypes';
import Bulb from './Bulb.jsx';

class Indicator extends React.Component {
  /**
   * Returns default Result object
   *
   * @param  {int} length
   *
   * @return {object}
   */
  getDefaultResult(length) {
    return { nCorrect: 0, nExist: 0, nIncorrect: length };
  }

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
    const result = this.props.result
                   || this.getDefaultResult(this.props.length);
    return (
      <div className="mm-indicator">
        {this.getBulbs(result)}
      </div>
    );
  }
}

export default Indicator;
