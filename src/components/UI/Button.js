import React from 'react';

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
      variant="contained"
    >
      {props.label}
    </button>
  );
};

export default Button;