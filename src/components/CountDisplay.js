import React from 'react';
import PropTypes from 'prop-types';

const CountDisplay = ({count}) => (
  <div className='countDisplay'>This button was clicked <span className='numberCount'>{count}</span> times</div>
)

CountDisplay.propTypes = {
  count: PropTypes.number
}

export default CountDisplay;