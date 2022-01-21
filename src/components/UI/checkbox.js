import React from 'react';

function Checkbox() {
  return (
    <div>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>

    </div>
  );
}

export default Checkbox;
