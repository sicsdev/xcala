import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import StepOneForm from './complete-register-form/StepOne-Form';
function CompleteRegisterOne({setstepper ,stepper, setSteppercolor}) {
  return (
    <>
      <Grid container maxWidth="sm" spacing={2}>
        <Grid item md={12} className='stepper-grid-registration'>
          <Typography
            variant="h6"
            className='blue_text fw-600 font-lg-24'
          >
            Datos personales
          </Typography>
        </Grid>
      </Grid >
      <Grid container maxWidth="sm" spacing={2}>
        <Grid item md={12}>
          <StepOneForm setstepper={setstepper} stepper={stepper} setSteppercolor={setSteppercolor} />
        </Grid>
      </Grid >
    </>
  );
}

export default CompleteRegisterOne;
