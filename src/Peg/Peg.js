import React from 'react';
import PropTypes from 'prop-types';

const style = {
  borderRadius: "50%",
  height: "100%",
  width: "100%"
};

const Peg = ({ color }) => (
  <div style={ {
    ...style,
    backgroundColor: color
  }}></div>
);

Peg.propTypes = {
  color: PropTypes.string
};

export default Peg;
