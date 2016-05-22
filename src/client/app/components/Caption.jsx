import React from 'react';
import BulbTypes from '../constants/BulbTypes';

import Bulb from './Bulb.jsx';

class Caption extends React.Component {
  render() {
    return (
      <div className="mm-caption">
        <div className="caption-line">
          <Bulb type={BulbTypes.CORRECT} />
          <span>Correct</span>
        </div>
        <div className="caption-line">
          <Bulb type={BulbTypes.EXISTS} />
          <span>Color Correct</span>
        </div>
      </div>
    );
  }
}

export default Caption;
