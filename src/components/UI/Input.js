import React from 'react';

function Input() {
  return (
    <div>
      <input
        type={props.type}
        value={props.value}
        id={props.id}
        className={props.className}
      />
    </div>
  );
}

export default Input;
