import React from 'react';
import Container from "@mui/material/Container";
import Styles from "../../Pages/lets-start/letStart.module.scss"
import Typography from '@mui/material/Typography';
import { Grid, Link } from "@mui/material";
function LetStartSix(props) {
  props.setSteppercomp("comp6")

  const Handlestep = () => {
    props.setstepper(7)
    props.setSteppercomp("comp7")

    props.setSteppercolor(first => {
      return {
        ...first,
        comp7: true
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
          ¿Qué frase te identifica mejor?
        </Typography>

      </Grid>

      <Grid className={Styles.lets_start_btn} item md={12} >
        <Link component="button" onClick={Handlestep}>Invertiría todo mi dinero en instrumentos con poco riesgo, aunque su rentabilidad sea baja.</Link>
      </Grid>
      <Grid className={Styles.lets_start_btn} item md={12} >
        <Link component="button" onClick={Handlestep}>Invertiría una parte de mi dinero en instrumentos de bajo riesgo y otra, en aquellos que aunque son más riesgosos, tienen mayor rentabilidad.</Link>
      </Grid>
      <Grid className={Styles.lets_start_btn} item md={12} >
        <Link component="button" onClick={Handlestep}>Invertiría todo mi dinero en instrumentos de alto rendimiento para maximizar mi ganancia, aún cuando esto signifique asumir mayores riesgos.</Link>
      </Grid>
    </Grid>
  );
}

export default LetStartSix;
