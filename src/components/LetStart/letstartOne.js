import React from 'react';
import Styles from "../../Pages/lets-start/letStart.module.scss"
import Typography from '@mui/material/Typography';
import { Grid, Link } from "@mui/material";
function LetStartOne(props) {
  const Handlestep = () => {
    props.setstepper(2)
    props.setSteppercolor(first => {
      return {
        ...first,
        comp1: true,
        comp2: true
      }
    })
  }


  return (

    <Grid container maxWidth="sm">
      <Grid item xs={12} md={12} mt={3} style={{ margin: "20px auto" }}>
        <Typography
          variant="h6"
          style={{ color: '#182849', marginBottom: "25px", fontWeight: "bold" }}
        >
          ¿Cuánto tiempo estás dispuesto a esperar para obtener ganancias?
        </Typography>

      </Grid>

      <Grid className={Styles.lets_start_btn} item md={12} xs={12}>
        <Link component="button" className='card-bordered' onClick={Handlestep}>Menos de 1 año</Link>
      </Grid>
      <Grid className={Styles.lets_start_btn} item md={12} xs={12}>
        <Link component="button" className='card-bordered' onClick={Handlestep}>De 1 a 2 años</Link>
      </Grid>
      <Grid className={Styles.lets_start_btn} item md={12} xs={12}>
        <Link component="button" className='card-bordered' onClick={Handlestep}>Menos de 2 año</Link>
      </Grid>
    </Grid>
  );
}

export default LetStartOne;
