import React from 'react';
import Styles from "../../Pages/lets-start/letStart.module.scss"
import Typography from '@mui/material/Typography';
import { Grid, Link } from "@mui/material";
function LetStartEight(props) {
  props.setSteppercomp("comp8")

  const Handlestep = () => {
    props.setstepper(9)
    props.setSteppercomp("comp9")
    props.setSteppercolor(first => {
      return {
        ...first,
        comp9: true
      }
    })
  }
  return (

    <Grid container maxWidth="sm" spacing={2}>
      <Grid item md={12} mt={3} style={{ margin: "20px auto" }}>
        <Typography
          variant="h6"
          style={{ color: '#182849', marginBottom: "25px", fontWeight: "bold" }}
        >
          ¿Cuánto tiempo estás dispuesto a esperar para obtener ganancias?
        </Typography>

      </Grid>

      <Grid className={Styles.lets_start_btn} item md={12}>
        <Link component="button"  onClick={Handlestep}>Alerta</Link>
      </Grid>
      <Grid className={Styles.lets_start_btn} item md={12}>
        <Link component="button"  onClick={Handlestep}>Inseguridad</Link>
      </Grid>
      <Grid className={Styles.lets_start_btn} item md={12}>
        <Link component="button"  onClick={Handlestep}>Oportunidad</Link>
      </Grid>
    </Grid>
  );
}

export default LetStartEight;
