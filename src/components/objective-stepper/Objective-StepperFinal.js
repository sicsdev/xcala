import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import Button from '../UI/Button';
function ObjectiveStepperFinal(props) {

  const finalStep = () => {
    props.setstepper(4)
  }
  return (
    <>
      <Grid container maxWidth="sm" spacing={2} style={{ textAlign:"center" }}>
        <Grid item md={12}>
          <img src="/assets/images/sucess-tick.svg" alt="success" style={{ mixBlendMode: 'multiply', margin: "0 auto" }}></img>
        </Grid>
        <Grid item md={12} >
          <Typography
            variant='h5'
            className='dark-green text-center fw-600 '
          >
            ¡Excelente!
          </Typography>
        </Grid>
      </Grid >
      <Grid container maxWidth="sm" spacing={2}>
        <Typography
          className='text-center '
          style={{ margin: "30px auto" }}
        >
          Ahora que te conocemos mejor podremos recomendarte opciones más apropiadas de acuerdo a lo que te gusta y te motiva.
        </Typography>
        <Button className="button-primary " onClick={finalStep}>Ver tus recomendaciones</Button>
      </Grid>
    </>
  );
}

export default ObjectiveStepperFinal;
