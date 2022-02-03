import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
function CompleteRegisterThree({setstepper,setSteppercolor}) {
  const fourthStep = () => {
    setstepper(4)
    setSteppercolor(first => {
      return {
        ...first,
        comp4: true,
      }
    })
  }
  return (
    <>
      <Grid container maxWidth="sm" spacing={2}>
        <Grid item md={12} style={{ margin: "50px auto 0px auto" }}>
          <Typography
            variant="h6"
            className='blue_text fw-600 font-lg-24'
          >
            Valida tu identidad
          </Typography>
          <Typography
            mt={3}
            className='light-grey font-lg-18'
          >
            ¡Excelente, nos queda muy poco! Por favor escanea el siguiente código con tu celular para poder continuar con la validación de tu identidad.
          </Typography>
          <div className="" style={{margin:"20px auto"}}>
            <img src='/assets/images/scanner.png' alt='qr' style={{margin:"0 auto", display:"block"}} onClick={fourthStep}></img>
          </div>
        </Grid>
      </Grid >
    </>
  );
}

export default CompleteRegisterThree;
