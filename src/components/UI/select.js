import React from 'react';

function Select() {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Age
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Ten</option>
        </NativeSelect>
      </FormControl>

    </div>
  );
}

export default Select;
