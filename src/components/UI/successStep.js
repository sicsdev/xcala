import React from 'react';
import { Button, Grid, Typography } from "@mui/material";

function SuccessStep(props) {
   if (props.setBack != null) {
      props.setBack(false)
   }

   return (
      <>
         <Grid container maxWidth="sm" spacing={2} style={{ textAlign: "center" }}>
            <Grid item md={12}>
               <img src="/assets/images/sucess-gif.gif" alt="success" style={{ mixBlendMode: 'multiply', margin: "0 auto" ,width:"100%"}}></img>
            </Grid>
            <Grid item md={12} >
               <Typography
                  variant='h5'
                  className='dark-green text-center fw-600 '
               >
                  {props.Success_heading}
               </Typography>
            </Grid>
            {props.Success_subheading && (<Grid item md={12} >
               <Typography
                  className='font-lg-18 '
               >
                  {props.Success_subheading}
               </Typography>
            </Grid>)}
         </Grid >
         <Grid container maxWidth="sm" spacing={2} mt={5}>
            <Button className="button-primary ">  {props.Success_btn}</Button>
         </Grid>
      </>
   );
}

export default SuccessStep;
