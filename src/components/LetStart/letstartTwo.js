import React from 'react';
import Styles from "../../Pages/lets-start/letStart.module.scss"
import Typography from '@mui/material/Typography';
import { Grid, Link } from "@mui/material";
function LetStartTwo(props) {
  props.setSteppercomp("comp2")

  const Handlestep = () => {
    props.setstepper(3);
    props.setSteppercomp("comp3")
    props.setSteppercolor(first => {
      return {
        ...first,
        comp3: true,
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
     ¿Cuánto de tus ahorros estarías dispuesto a invertir para obtener un mejor retorno?
        </Typography>
      </Grid>
      <Grid className={Styles.lets_start_btn} item md={12}>
        <Link component="button" onClick={Handlestep}>Menos del 30%</Link>
      </Grid>
      <Grid className={Styles.lets_start_btn} item md={12}>
        <Link component="button" onClick={Handlestep}>Estoy 30% y 60%</Link>
      </Grid>
      <Grid className={Styles.lets_start_btn} item md={12}>
        <Link component="button" onClick={Handlestep}>MMás del 60%</Link>
      </Grid>
    </Grid >
  );
}

export default LetStartTwo;
