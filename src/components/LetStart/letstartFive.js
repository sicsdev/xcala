import React from 'react';
import Styles from "../../Pages/lets-start/letStart.module.scss"
import Typography from '@mui/material/Typography';
import { Grid, Link } from "@mui/material";
function LetStartFive(props) {
  props.setSteppercomp("comp5")

  const Handlestep = () => {
    props.setstepper(6)
    props.setSteppercomp("comp6")

    props.setSteppercolor(first => {
      return {
        ...first,
        comp6: true
      }
    })
  }
  return (

    <Grid container maxWidth="sm" spacing={2}>
      <Grid item md={12} xs={12} mt={3} style={{ margin: "20px auto" }}>
        <Typography
          variant="h6"
          style={{ color: '#182849', marginBottom: "25px", fontWeight: "bold" }}
        >
         ¿Cómo describirías tu grado de conocimiento en inversiones?
        </Typography>

      </Grid>

      <Grid className={Styles.lets_start_btn} item md={12} xs={12}>
        <Link component="button" className='card-bordered' onClick={Handlestep}>Rojo</Link>
      </Grid>
      <Grid className={Styles.lets_start_btn} item md={12} xs={12}>
        <Link component="button" className='card-bordered' onClick={Handlestep}>Medio</Link>
      </Grid>
      <Grid className={Styles.lets_start_btn} item md={12} xs={12}>
        <Link component="button" className='card-bordered' onClick={Handlestep}>Alto</Link>
      </Grid>
    </Grid>
  );
}

export default LetStartFive;
