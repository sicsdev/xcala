import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
function Checkbox(props) {
  return (
    <div>
      <FormGroup>
        <FormControlLabel control={<Checkbox/>} />
      </FormGroup>

    </div>
  );
}

export default Checkbox;
