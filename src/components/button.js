import React from 'react';

const Button = ({text, onClick}) => {
  return (
    <button className="simpleButton" onClick={onClick}>{text}</button>
  )
}

export default Button;