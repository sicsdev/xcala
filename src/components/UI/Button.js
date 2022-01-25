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
      {props.children}
    </button>
  );
};

export default Button;