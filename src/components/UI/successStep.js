import React from 'react';
import { Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

function SuccessStep(props) {
   if (props.setBack != null) {
      props.setBack(false)
   }

   return (
      <>
         <Grid container maxWidth="sm" spacing={2} style={{ textAlign: "center" }}>
            <Grid item md={12} xs={12}>
               <img src="/assets/images/sucess-gif.gif" alt="success" style={{ mixBlendMode: 'multiply', margin: "0 auto", width: "100%" }}></img>
            </Grid>
            <Grid item md={12} xs={12} >
               <Typography
                  variant='h5'
                  className='dark-green text-center fw-600 '
               >
                  {props.Success_heading}
               </Typography>
            </Grid>
            {props.Success_subheading && (<Grid item md={12} xs={12} >
               <Typography
                  className='font-lg-18 '
               >
                  {props.Success_subheading}
               </Typography>
            </Grid>)}
         </Grid >
         <Grid container maxWidth="sm" spacing={2} mt={2} mb={3}>
            <Grid item md={12} xs={12} >
               <div style={{ margin: '0 auto' }}>
                  <Link to={props.href} className="button-primary text-center">{props.Success_btn}</Link>
               </div>
            </Grid>
         </Grid>
      </>
   );
}

export default SuccessStep;
