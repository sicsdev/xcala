import React from 'react';
const styles = theme => ({
  multilineColor:{
      color:'red'
  }
});
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
