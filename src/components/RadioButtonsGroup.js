import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function RadioButtonsGroup({ onSetGender }) {

  function handleSelectGender(e) {
    onSetGender(e.target.value);
  }

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=""
        name="radio-buttons-group"
        row
      >
        <FormControlLabel value="female" onChange={handleSelectGender} control={<Radio size="medium" />} label="Female" />
        <FormControlLabel value="male" onChange={handleSelectGender} control={<Radio size="medium" />} label="Male" />
        <FormControlLabel value="other" onChange={handleSelectGender} control={<Radio size="medium" />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}