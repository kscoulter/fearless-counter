import React from 'react';
import PropTypes from 'prop-types';

const CountDisplay = ({count}) => (
  <div className='countDisplay'>{count}</div>
)

CountDisplay.propTypes = {
  count: PropTypes.number
}

export default CountDisplay;