import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import {Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
function Customselect(props) {
  return (
    <div>
      <FormControl fullWidth variant="standard" className='custom-select'>
      <InputLabel id={props.Labelid}>{props.placholder}</InputLabel>
        <Select
          labelId={props.Selectid}
          id={props.id}
          label={props.label}
          onChange= {props.onChange}
        >
          <MenuItem value={10}>{props.menuItems}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Customselect;
