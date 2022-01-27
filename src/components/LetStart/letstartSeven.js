import React from 'react';
import Container from "@mui/material/Container";
import Styles from "../Pages/lets-start/letStart.module.scss"
import Typography from '@mui/material/Typography';
import { Grid, Link } from "@mui/material";
function LetStartSeven(props) {
  props.setSteppercomp("comp7")

  const Handlestep = () => {
    props.setstepper(8)
    props.setSteppercomp("comp8")

    props.setSteppercolor(first => {
      return {
        ...first,
        comp8: true
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
          Si tu inversión comienza a perder valor ¿Qué harías?
        </Typography>

      </Grid>

      <Grid className={Styles.lets_start_btn} item md={12}>
        <Link component="button" onClick={Handlestep}>Vendería inmediatamente</Link>
      </Grid>
      <Grid className={Styles.lets_start_btn} item md={12}>
        <Link component="button" onClick={Handlestep}>Consultoría a un experto</Link>
      </Grid>
      <Grid className={Styles.lets_start_btn} item md={12}>
        <Link component="button" onClick={Handlestep}>Asumiría las pérdidas en el corto plazo y esperaría obtener ganancias en el largo plazo</Link>
      </Grid>
    </Grid>
  );
}

export default LetStartSeven;