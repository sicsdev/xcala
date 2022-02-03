import React from 'react';
import { Grid, Typography } from "@mui/material";

function ErrorStep(props) {
   props.setBack(false)
   return (
      <>
         <Grid container maxWidth="sm" spacing={2} style={{ textAlign: "center" }}>
            <Grid item md={12}>
               <img src="/assets/images/error.svg" alt="success" style={{ mixBlendMode: 'multiply', margin: "0 auto" }}></img>
            </Grid>
            <Grid item md={12} >
               <Typography
                  variant='h5'
                  className='dark-warning text-center fw-600 '
               >
                  ¡Oh no! Parece que algo salió mal
               </Typography>
            </Grid>
           <Grid item md={12} >
               <Typography
                  className='font-lg-18 light-grey'
               >
                  Hemos tenido problemas para validar tu información, por favor escribenos un email a ayuda@xcala.com para poder solucionar este inconveniente
               </Typography>
            </Grid>
         </Grid >
         {/* <Grid container maxWidth="sm" spacing={2} mt={5}>
            <Button className="button-primary ">  {props.Success_btn}</Button>
         </Grid> */}
      </>
   );
}

export default ErrorStep;
