import React from 'react';
import PropTypes from 'prop-types';

import Peg from '../Peg';

const style = {
  container: {
    backgroundColor: '#d09b88',
    display: 'flex',
    flexDirection: 'column'
  }
};

const Tray = ({ colors, height = 50 }) => {
  const padding = height / 10;
  const pegSize = height - padding * 2;
  
  return (
    <div style={ style.container }>
      { colors.map((row, rowIndex) => (
        <div key={ rowIndex } style={{ display: 'flex', height }}>
          { row.map((color, index) => (
            <div
              style={{ height: pegSize, padding, width: pegSize }}
              key={ index }>
              <Peg color={ color }/>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

Tray.propTypes = {
  colors: PropTypes.array.isRequired,
  height: PropTypes.number
};

export default Tray;
